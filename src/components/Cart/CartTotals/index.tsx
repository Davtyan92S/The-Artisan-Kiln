'use client'

import { useMemo } from 'react'
import { CART_TOTAL_LABELS, type CartTotalLabel } from '../types'

type CartTotalsProps = {
  subtotal: number
  shipping: number
  grandTotal: number
  part: 'labels' | 'values'
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

const rowClass = 'flex h-7 items-center md:h-8'

const getValueBoxClassName = (isSubtotal: boolean, isGrandTotal: boolean) => {
  const classes = [
    rowClass,
    'w-full',
    'justify-end',
    'px-1',
    'font-display',
    'text-xs',
    'font-medium',
    'text-ink',
    'md:text-sm',
  ]

  if (isSubtotal) {
    classes.push('border-x-[1.5px]', 'border-b-[1.5px]', 'border-ink', 'bg-white')
  } else {
    classes.push('border-[1.5px]', 'border-ink', 'bg-white')
  }

  if (isGrandTotal) {
    classes.push('rounded-b-[5px]', 'bg-tan')
  }

  return classes.join(' ')
}

export const CartTotals = ({ subtotal, shipping, grandTotal, part }: CartTotalsProps) => {
  const rows = useMemo(
    () =>
      CART_TOTAL_LABELS.map((label) => ({
        label,
        amount: getAmountForLabel(label, subtotal, shipping, grandTotal),
        isSubtotal: label === 'SUBTOTAL:',
        isGrandTotal: label === 'GRAND TOTAL:',
      })),
    [subtotal, shipping, grandTotal],
  )

  if (part === 'labels') {
    const labelRows = rows.map(({ label }) => (
      <div key={label} className={`${rowClass} justify-end pr-1`}>
        <span className="font-display text-[10px] font-medium uppercase leading-none tracking-wide text-ink md:text-xs">
          {label}
        </span>
      </div>
    ))

    return <div className="flex flex-col">{labelRows}</div>
  }

  const valueRows = rows.map(({ label, amount, isSubtotal, isGrandTotal }) => (
    <span key={label} className={getValueBoxClassName(isSubtotal, isGrandTotal)}>
      {amount}
    </span>
  ))

  return <div className="flex flex-col">{valueRows}</div>
}
