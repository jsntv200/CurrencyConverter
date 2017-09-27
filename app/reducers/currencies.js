import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null,
};

const setConversions = (conversions, currency) => {
  const conversionsCurrency = conversions[currency] || {
    isFetching: true,
    date: '',
    rates: {},
  };

  return {
    ...conversions,
    [currency]: conversionsCurrency,
  };
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

    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: payload.currency,
        conversions: setConversions(state.conversions, payload.currency),
      };

    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: payload.currency,
        conversions: setConversions(state.conversions, payload.currency),
      };

    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state.conversions, state.baseCurrency),
      };

    case CONVERSION_RESULT:
      const { base, rates, date } = payload;
      return {
        ...state,
        baseCurrency: payload.base,
        conversions: {
          ...state.conversions,
          [base]: {
            isFetching: false,
            date,
            rates,
          },
        },
      };

    case CONVERSION_ERROR:
      const { error } = payload;
      return {
        ...state,
        error,
      };

    default:
      return state;
  }
};

export default reducer;
