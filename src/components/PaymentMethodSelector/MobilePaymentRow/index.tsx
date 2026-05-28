'use client'

import { useCallback } from 'react'
import type { PaymentMethod } from '@/types'
import type { PaymentMethodOption } from '../types'

type MobilePaymentRowProps = {
  methods: PaymentMethodOption[]
  value: PaymentMethod
  onChange: (v: PaymentMethod) => void
}

const getButtonClassName = (selected: boolean) => {
  const base =
    'relative flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 p-2 transition-colors'
  if (selected) {
    return `${base} bg-tan`
  }
  return `${base} bg-white`
}

const renderSelectionDot = (selected: boolean) => {
  if (!selected) {
    return null
  }
  return <div className="h-1.5 w-1.5 rounded-full bg-ink" />
}

export const MobilePaymentRow = ({ methods, value, onChange }: MobilePaymentRowProps) => {
  const createSelectHandler = useCallback(
    (id: PaymentMethod) => () => {
      onChange(id)
    },
    [onChange],
  )

  const methodButtons = methods.map((m) => {
    const selected = value === m.id
    return (
      <button
        key={m.id}
        type="button"
        onClick={createSelectHandler(m.id)}
        className={getButtonClassName(selected)}
      >
        <div className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-ink bg-white">
          {renderSelectionDot(selected)}
        </div>
        <span className="mt-1 flex h-7 items-center justify-center">{m.icon}</span>
        <span className="text-center font-display text-[7px] font-medium uppercase leading-tight tracking-wide text-ink">
          {m.label}
        </span>
      </button>
    )
  })

  return (
    <div className="flex w-full divide-x-[2px] divide-ink border-[2px] border-ink bg-white md:hidden">
      {methodButtons}
    </div>
  )
}
