export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
  payload: {},
});

export const changeCurrencyAmount = (amount = 0) => ({
  type: CHANGE_CURRENCY_AMOUNT,
  payload: { amount: parseFloat(amount) },
});

export const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  payload: { currency },
});

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  payload: { currency },
});
