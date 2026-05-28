'use client'

import { useCallback } from 'react'
import { useForm, Controller, type ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentMethodSelector } from '@/components/PaymentMethodSelector'
import { Cart } from '@/components/Cart'
import { checkoutSchema, CheckoutFormValues } from '@/lib/validations'
import { DocumentIcon } from '@/components/icons'
import { MobileCustomerFields } from '@/components/MobileCustomerFields'
import { DesktopCheckout } from './DesktopCheckout'

type CheckoutFormProps = {
  showOrderSummaryHeader?: boolean
}

export const CheckoutForm = ({ showOrderSummaryHeader = true }: CheckoutFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectNotes: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      address: '',
      city: '',
      country: '',
      zip: '',
      paymentMethod: 'credit-card',
    },
  })

  const onSubmit = useCallback(() => {
    alert('🎉 Order placed successfully!')
  }, [])

  const renderMobilePayment = useCallback(
    ({ field }: { field: ControllerRenderProps<CheckoutFormValues, 'paymentMethod'> }) => (
      <PaymentMethodSelector value={field.value} onChange={field.onChange} />
    ),
    [],
  )

  const renderDesktopPayment = useCallback(
    ({ field }: { field: ControllerRenderProps<CheckoutFormValues, 'paymentMethod'> }) => (
      <DesktopCheckout
        register={register}
        errors={errors}
        paymentMethod={field.value}
        onPaymentChange={field.onChange}
        showOrderSummaryHeader={showOrderSummaryHeader}
      />
    ),
    [register, errors, showOrderSummaryHeader],
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full min-w-0 max-w-full md:h-full md:overflow-hidden"
    >
      <div className="flex flex-col gap-5 md:hidden">
        <MobileCustomerFields register={register} errors={errors} />
        <Cart />
        <Controller control={control} name="paymentMethod" render={renderMobilePayment} />
        <section>
          <div className="flex items-center gap-2">
            <DocumentIcon className="h-5 w-5 shrink-0" />
            <span className="shrink-0 font-display text-lg font-medium uppercase tracking-wide text-ink">
              PROJECT NAME / NOTES:
            </span>
            <input
              className="h-6 min-w-0 flex-1 border-0 border-b border-ink bg-transparent px-1 font-sans text-[13px] text-ink outline-none"
              {...register('projectNotes')}
            />
          </div>
          <div className="mt-[30px] border-b border-ink" />
        </section>
      </div>

      <div className="design-scroll hidden h-full min-h-0 min-w-0 max-w-full overflow-y-auto pr-1 md:block">
        <Controller control={control} name="paymentMethod" render={renderDesktopPayment} />
        <button
          type="submit"
          className="mt-[15px] w-full shrink-0 rounded-[10px] border-[1.5px] border-ink bg-[#3e4671] py-2.5 font-display text-base font-bold uppercase tracking-wider text-white hover:bg-navy-dark"
        >
          PLACE SECURE ORDER
        </button>
      </div>
    </form>
  )
}
