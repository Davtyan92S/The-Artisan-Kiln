'use client'

import { useMemo, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RiVisaLine } from 'react-icons/ri'
import { SiMastercard } from 'react-icons/si'
import { AppleIcon, BankTransferIcon, PaypalIcon } from '@/components/icons'
import { formatCardNumber, formatCvv, formatExpiry } from '@/components/PaymentMethodSelector/formatters'
import { RadioDot } from '@/components/PaymentMethodSelector/RadioDot'
import { selectGrandTotal, selectShipping, selectSubtotal } from '@/store/cartSlice'
import type { CheckoutFormValues } from '@/lib/validations'
import type { PaymentMethod } from '@/types'

type DesktopCheckoutProps = {
  register: UseFormRegister<CheckoutFormValues>
  errors: FieldErrors<CheckoutFormValues>
  paymentMethod: PaymentMethod
  onPaymentChange: (method: PaymentMethod) => void
}

const label = 'shrink-0 font-display text-xs font-medium uppercase tracking-wide text-ink'
const lineInput = (error?: boolean) =>
  `min-w-0 flex-1 border-0 border-b-[1.5px] bg-transparent pb-0.5 font-sans text-xs text-ink outline-none ${
    error ? 'border-terracotta' : 'border-ink'
  }`

const boxInput = (error?: boolean) =>
  `w-full rounded-[10px] border-[1.5px] bg-white px-3 py-1.5 font-sans text-xs text-ink outline-none placeholder:text-ink/35 ${
    error ? 'border-terracotta' : 'border-ink'
  }`

const formatMoney = (n: number) => `[ $${n.toFixed(2)} ]`

const cardBrandBox =
  'flex h-7 w-11 shrink-0 items-center justify-center rounded border-[1.5px] border-[#1a1f71] bg-white'

const BorderedTab = ({ children }: { children: ReactNode }) => (
  <div className="shrink-0 overflow-visible border-[1.5px] border-b-0 border-ink bg-tan px-3 py-1.5">
    {children}
  </div>
)

export const DesktopCheckout = ({
  register,
  errors,
  paymentMethod,
  onPaymentChange,
}: DesktopCheckoutProps) => {
  const subtotal = useSelector(selectSubtotal)
  const shipping = useSelector(selectShipping)
  const grandTotal = useSelector(selectGrandTotal)

  const totals = useMemo(
    () => [
      { label: 'SUBTOTAL:', value: subtotal },
      { label: 'SHIPPING:', value: shipping },
      { label: 'GRAND TOTAL:', value: grandTotal, highlight: true },
    ],
    [subtotal, shipping, grandTotal],
  )

  const isCard = paymentMethod === 'credit-card'
  const isPaypal = paymentMethod === 'paypal'
  const isApple = paymentMethod === 'apple-pay'
  const isBank = paymentMethod === 'bank-transfer'

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-2.5">
      <section className="min-w-0 max-w-full">
        <div className="flex min-w-0 shrink-0 items-end overflow-x-hidden overflow-y-visible">
          <BorderedTab>
            <h2 className="font-display text-sm font-medium uppercase leading-tight tracking-wider text-ink">
              ORDER SUMMARY
            </h2>
          </BorderedTab>
          <div className="min-w-0 flex-1 border-b-[1.5px] border-ink" />
        </div>

        <div className="min-w-0 max-w-full space-y-2 pt-2">
          <div className="flex items-baseline gap-2">
            <span className={label}>CUSTOMER NAME:</span>
            <input className={lineInput(!!errors.name)} {...register('name')} />
          </div>

          <div className="flex items-baseline gap-4">
            <div className="flex min-w-0 flex-[0.34] items-baseline gap-2">
              <span className={label}>PHONE:</span>
              <input className={lineInput()} {...register('phone')} />
            </div>
            <div className="flex min-w-0 flex-1 items-baseline gap-2">
              <span className={label}>EMAIL:</span>
              <input className={lineInput(!!errors.email)} {...register('email')} />
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className={label}>SHIPPING ADDRESS:</span>
            <input className={lineInput(!!errors.address)} {...register('address')} />
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className={label}>PROJECT NOTES:</span>
              <input className={lineInput()} {...register('projectNotes')} />
            </div>
            <div className="mt-4 border-b-[1.5px] border-ink" aria-hidden />
          </div>

          <div className="flex min-w-0 max-w-full flex-col items-end gap-1.5 py-1">
            {totals.map(({ label: lbl, value, highlight }) =>
              highlight ? (
                <div
                  key={lbl}
                  className="flex max-w-full flex-wrap items-center justify-end gap-2 border-[1.5px] border-ink bg-tan px-2 py-0.5"
                >
                  <span className="font-display text-xs font-medium uppercase text-ink">{lbl}</span>
                  <span className="font-display text-sm font-medium text-ink">
                    {formatMoney(value)}
                  </span>
                </div>
              ) : (
                <div key={lbl} className="flex max-w-full items-center justify-end gap-2">
                  <span className="font-display text-xs font-medium uppercase text-ink">{lbl}</span>
                  <span className="text-right font-display text-sm font-medium text-ink">
                    {formatMoney(value)}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="min-w-0 max-w-full">
        <div className="inline-block border-[1.5px] border-ink bg-tan px-3 py-1">
          <span className="font-display text-xs font-medium uppercase tracking-wide text-ink">
            SELECT PAYMENT METHOD:
          </span>
        </div>

        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => onPaymentChange('credit-card')}
              className="flex items-center gap-2.5"
            >
              <RadioDot selected={isCard} />
              <span className="font-display text-xs font-medium uppercase text-ink">CREDIT/DEBIT CARD</span>
            </button>
            <button
              type="button"
              onClick={() => onPaymentChange('paypal')}
              className="flex items-center gap-2.5"
            >
              <RadioDot selected={isPaypal} />
              <PaypalIcon className="h-[17px] w-[17px] fill-[#003087]" />
              <span className="font-sans text-sm font-medium text-[#003087]">PayPal</span>
            </button>
          </div>

          {isCard && (
            <div className="rounded-[10px] border-[1.5px] border-ink bg-tan p-2.5">
              <div className="mb-2 flex items-center gap-3">
                <RadioDot selected />
                <span className={cardBrandBox}>
                  <RiVisaLine className="h-4 w-8 text-[#1a1f71]" aria-label="Visa" />
                </span>
                <span className={cardBrandBox}>
                  <SiMastercard className="h-4 w-8 text-[#eb001b]" aria-label="Mastercard" />
                </span>
              </div>

              <span className="mb-1.5 block font-display text-xs font-medium text-ink">CARD NUMBER</span>
              <input
                {...register('cardNumber', { onChange: formatCardNumber })}
                placeholder="1234 4556 7723 8990"
                className={`${boxInput(!!errors.cardNumber)} mb-2`}
              />

              <div className="flex gap-3">
                <input
                  {...register('expiry', { onChange: formatExpiry })}
                  placeholder="EXPIRATION /"
                  className={boxInput(!!errors.expiry)}
                />
                <input
                  {...register('cvv', { onChange: formatCvv })}
                  placeholder="CVV"
                  className={boxInput(!!errors.cvv)}
                />
              </div>
            </div>
          )}

          <div className="flex min-w-0 gap-2">
            <button
              type="button"
              onClick={() => onPaymentChange('apple-pay')}
              className={`relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[10px] border-[1.5px] border-ink py-2.5 ${
                isApple ? 'bg-cream-warm' : 'bg-white'
              }`}
            >
              <div className="absolute left-3 top-3">
                <RadioDot selected={isApple} />
              </div>
              <div className="mt-2 flex items-center gap-1">
                <AppleIcon className="h-5 w-5 fill-ink" />
                <span className="font-sans text-sm font-semibold">Pay</span>
              </div>
              <span className="font-display text-[10px] font-medium uppercase text-ink">APPLE PAY</span>
            </button>
            <button
              type="button"
              onClick={() => onPaymentChange('bank-transfer')}
              className={`relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[10px] border-[1.5px] border-ink py-2.5 ${
                isBank ? 'bg-cream-warm' : 'bg-white'
              }`}
            >
              <div className="absolute left-3 top-3">
                <RadioDot selected={isBank} />
              </div>
              <BankTransferIcon className="mt-2 h-7 w-7 fill-sage-dark" />
              <span className="font-display text-[10px] font-medium uppercase text-ink">BANK TRANSFER</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
