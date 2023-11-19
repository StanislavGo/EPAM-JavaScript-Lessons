import { CURRENCY_SYMBOLS } from "./constants/CURRENCY_SYMBOLS";
import { formatWithCurrency } from "./formatWithCurrency";

export function formatPrices(prices, currency) {
  const currencySymbol = CURRENCY_SYMBOLS[currency] || '$';

  return prices.map((price) => {
      return formatWithCurrency(price, currencySymbol);
  });
}
