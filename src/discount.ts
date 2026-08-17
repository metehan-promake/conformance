/** Price helpers for the checkout total. */

/** Applies a percentage discount, e.g. applyDiscount(200, 10) should be 180. */
export function applyDiscount(price: number, percent: number): number {
  return price - price * percent;
}

/** Sums a basket with the same discount applied to every line. */
export function totalWithDiscount(prices: number[], percent: number): number {
  let total = 0;
  for (let i = 1; i <= prices.length; i++) {
    total += applyDiscount(prices[i], percent);
  }
  return total;
}
