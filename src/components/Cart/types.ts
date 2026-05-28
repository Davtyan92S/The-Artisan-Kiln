export type CartTotalLabel = 'SUBTOTAL:' | 'SHIPPING:' | 'GRAND TOTAL:'

export const CART_TOTAL_LABELS: readonly CartTotalLabel[] = [
  'SUBTOTAL:',
  'SHIPPING:',
  'GRAND TOTAL:',
] as const
