'use client'

import { useCallback } from 'react'
import type { PaymentMethod } from '@/types'
import type { PaymentMethodOption } from '../types'

type MobilePaymentRowProps = {
  methods: PaymentMethodOption[]
  value: PaymentMethod
  onChange: (v: PaymentMethod) => void
}

export const MobilePaymentRow = ({ methods, value, onChange }: MobilePaymentRowProps) => {
  const createSelectHandler = useCallback(
    (id: PaymentMethod) => () => {
      onChange(id)
    },
    [onChange],
  )

  return (
    <div className="flex w-full divide-x-[2px] divide-ink border-[2px] border-ink bg-white md:hidden">
      {methods.map((m) => {
        const selected = value === m.id
        return (
          <button
            key={m.id}
            type="button"
            onClick={createSelectHandler(m.id)}
            className={`relative flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 p-2 transition-colors ${
              selected ? 'bg-tan' : 'bg-white'
            }`}
          >
            <div className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-ink bg-white">
              {selected && <div className="h-1.5 w-1.5 rounded-full bg-ink" />}
            </div>
            <span className="mt-1 flex h-7 items-center justify-center">{m.icon}</span>
            <span className="text-center font-display text-[7px] font-medium uppercase leading-tight tracking-wide text-ink">
              {m.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
