'use client'

import { useMemo } from 'react'
import { CART_TOTAL_LABELS, type CartTotalLabel } from '../types'

type CartTotalsProps = {
  subtotal: number
  shipping: number
  grandTotal: number
}

const formatAmount = (value: number) => `[ $${value.toFixed(2)} ]`

const getAmountForLabel = (
  label: CartTotalLabel,
  subtotal: number,
  shipping: number,
  grandTotal: number,
) => {
  if (label === 'SUBTOTAL:') {
    return formatAmount(subtotal)
  }
  if (label === 'SHIPPING:') {
    return formatAmount(shipping)
  }
  return formatAmount(grandTotal)
}

export const CartTotals = ({ subtotal, shipping, grandTotal }: CartTotalsProps) => {
  const rows = useMemo(
    () =>
      CART_TOTAL_LABELS.map((label) => ({
        label,
        amount: getAmountForLabel(label, subtotal, shipping, grandTotal),
        isGrandTotal: label === 'GRAND TOTAL:',
      })),
    [subtotal, shipping, grandTotal],
  )

  return (
    <div className="flex flex-col items-end space-y-0.5">
      {rows.map(({ label, amount, isGrandTotal }) => (
        <div key={label} className="flex items-center justify-end gap-1">
          <span className="font-display text-xs font-medium uppercase tracking-wide text-ink">
            {label}
          </span>
          <span
            className={`w-[88px] whitespace-nowrap border-[1.5px] border-ink px-1 text-right font-display text-xs font-medium text-ink md:w-24 md:text-sm ${
              isGrandTotal ? 'bg-tan py-0.5' : 'bg-white'
            }`}
          >
            {amount}
          </span>
        </div>
      ))}
    </div>
  )
}
