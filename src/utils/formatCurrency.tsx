/**
 * Formats a given amount as currency.
 * 
 * @param amount - The amount to be formatted.
 * @returns The formatted currency string.
 */
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
