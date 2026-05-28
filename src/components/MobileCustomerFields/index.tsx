import { FieldError } from '@/components/FieldError'
import { errorClass, inputClass, labelClass } from './styles'
import type { MobileCustomerFieldsProps } from './types'

export const MobileCustomerFields = ({ register, errors }: MobileCustomerFieldsProps) => {
  return (
    <section className="space-y-2.5 px-1">
      <div className="flex items-center gap-2">
        <span className={labelClass}>CUSTOMER NAME:</span>
        <input className={inputClass(!!errors.name)} {...register('name')} />
      </div>
      <FieldError message={errors.name?.message} className={errorClass} />

      <div className="flex items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className={labelClass}>PHONE:</span>
          <input className={inputClass()} {...register('phone')} />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className={labelClass}>EMAIL:</span>
          <input className={inputClass(!!errors.email)} {...register('email')} />
        </div>
      </div>
      <FieldError message={errors.email?.message} className={errorClass} />

      <div>
        <div className="flex items-center gap-2">
          <span className={labelClass}>SHIPPING ADDRESS:</span>
          <input className={inputClass(!!errors.address)} {...register('address')} />
        </div>
      </div>
      <FieldError message={errors.address?.message} className={errorClass} />

      <div className="mt-[30px] border-b border-ink" />
    </section>
  )
}
