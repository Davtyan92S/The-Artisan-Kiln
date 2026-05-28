'use client'

import { PAYMENT_METHODS } from './constants'
import { MobilePaymentRow } from './MobilePaymentRow'
import type { PaymentMethodSelectorProps } from './types'

/** Mobile only — 4 payment boxes in a row, без формы карты (как в макете) */
export const PaymentMethodSelector = ({
  value,
  onChange,
}: Pick<PaymentMethodSelectorProps, 'value' | 'onChange'>) => {
  return (
    <section className="w-full md:hidden">
      <div className="mb-2 inline-block border-[2px] border-ink bg-tan px-2.5 py-1">
        <span className="font-display text-xs font-medium uppercase tracking-wide text-ink">
          SELECT PAYMENT METHOD:
        </span>
      </div>
      <MobilePaymentRow methods={PAYMENT_METHODS} value={value} onChange={onChange} />
    </section>
  )
}
