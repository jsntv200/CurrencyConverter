export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
  payload: {},
});

export const changeCurrencyAmount = (amount = 0) => ({
  type: CHANGE_CURRENCY_AMOUNT,
  payload: {
    amount: parseFloat(amount),
  },
});
