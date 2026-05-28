'use client'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectGrandTotal, selectShipping, selectSubtotal } from '@/store/cartSlice'
import { inputClass, labelClass } from './styles'
import type { CartSummaryProps } from './types'

const formatTotal = (value: number) => `[ $${value.toFixed(2)} ]`

export const CartSummary = ({ register, errors }: CartSummaryProps) => {
  const subtotal = useSelector(selectSubtotal)
  const shipping = useSelector(selectShipping)
  const grandTotal = useSelector(selectGrandTotal)

  const totals = useMemo(
    () => [
      { label: 'SUBTOTAL:', value: subtotal },
      { label: 'SHIPPING:', value: shipping },
      { label: 'GRAND TOTAL:', value: grandTotal, highlighted: true },
    ],
    [subtotal, shipping, grandTotal],
  )

  return (
    <section className="relative">
      <div className="absolute left-0 top-0 z-10 -translate-y-px border-[2px] border-b-0 border-ink bg-tan px-4 py-1.5">
        <h2 className="font-display text-base font-bold uppercase leading-none tracking-wider text-ink">
          ORDER SUMMARY
        </h2>
      </div>

      <div className="border-[2px] border-ink bg-tan pt-10">
        <div className="space-y-3 px-4 pb-3 pt-2">
          <div className="flex items-baseline gap-2">
            <label className={labelClass}>CUSTOMER NAME:</label>
            <input className={inputClass(!!errors.name)} {...register('name')} />
          </div>
          {errors.name && (
            <p className="font-display text-[10px] font-bold uppercase text-terracotta">
              {errors.name.message}
            </p>
          )}

          <div className="flex items-baseline gap-4">
            <div className="flex min-w-0 flex-[0.38] items-baseline gap-2">
              <label className={labelClass}>PHONE:</label>
              <input className={inputClass()} {...register('phone')} />
            </div>
            <div className="flex min-w-0 flex-1 items-baseline gap-2">
              <label className={labelClass}>EMAIL:</label>
              <input className={inputClass(!!errors.email)} {...register('email')} />
            </div>
          </div>
          {errors.email && (
            <p className="font-display text-[10px] font-bold uppercase text-terracotta">
              {errors.email.message}
            </p>
          )}

          <div className="flex items-baseline gap-2">
            <label className={labelClass}>SHIPPING ADDRESS:</label>
            <input className={inputClass(!!errors.address)} {...register('address')} />
          </div>
          {errors.address && (
            <p className="font-display text-[10px] font-bold uppercase text-terracotta">
              {errors.address.message}
            </p>
          )}

          <div className="flex items-baseline gap-2">
            <label className={labelClass}>PROJECT NOTES:</label>
            <input className={inputClass()} {...register('projectNotes')} />
          </div>
        </div>

        <div className="mx-4 border-t-[2px] border-ink" />

        <div className="flex flex-col items-end gap-1.5 px-4 py-3">
          {totals.map(({ label, value, highlighted }) => (
            <div key={label} className="flex items-center justify-end gap-3">
              <span className="font-display text-xs font-bold uppercase text-ink">{label}</span>
              <span
                className={`min-w-[8.5rem] whitespace-nowrap text-right font-display text-sm font-bold text-ink ${
                  highlighted
                    ? 'border-[2px] border-ink bg-[#e5d5b8] px-3 py-1'
                    : 'px-1'
                }`}
              >
                {formatTotal(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
