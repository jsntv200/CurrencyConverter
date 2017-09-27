import { call, put, select, takeEvery } from 'redux-saga/effects';

import {
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* ({ currency }) {
  try {
    if (currency === undefined) {
      currency = yield select(({ currencies }) => currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency);
    const payload = yield response.json();

    console.log(payload);

    if (payload.error) {
      yield put({ type: CONVERSION_ERROR, payload });
    } else {
      yield put({ type: CONVERSION_RESULT, payload });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, payload: { error: error.message } });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
