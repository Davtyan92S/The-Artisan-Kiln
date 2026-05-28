import type { ReactNode } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { PaymentMethod } from '@/types'
import { CheckoutFormValues } from '@/lib/validations'

export type PaymentMethodSelectorProps = {
  value: PaymentMethod
  onChange: (v: PaymentMethod) => void
  register: UseFormRegister<CheckoutFormValues>
  errors: FieldErrors<CheckoutFormValues>
}

export type PaymentMethodOption = {
  id: PaymentMethod
  label: string
  icon: ReactNode
}

export type RadioDotProps = {
  selected: boolean
}
