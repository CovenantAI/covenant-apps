/**
 * Formats a long address for display
 */
export function truncateAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

/**
 * Format a number as currency
 */
export function formatCurrency(value: number | string, currency: string = 'USD'): string {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format a number as a percentage
 */
export function formatPercent(value: number | string, decimals: number = 2): string {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  
  return `${value.toFixed(decimals)}%`;
}
