import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from '../actions//currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: payload.amount,
      };

    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };

    default:
      return state;
  }
};

export default reducer;
