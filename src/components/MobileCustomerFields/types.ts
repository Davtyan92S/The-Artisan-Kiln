import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { CheckoutFormValues } from '@/lib/validations'

export type MobileCustomerFieldsProps = {
  register: UseFormRegister<CheckoutFormValues>
  errors: FieldErrors<CheckoutFormValues>
}
