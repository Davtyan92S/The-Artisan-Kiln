import { errorClass, inputClass, labelClass } from './styles'
import type { MobileCustomerFieldsProps } from './types'

export const MobileCustomerFields = ({ register, errors }: MobileCustomerFieldsProps) => {
  return (
    <section className="space-y-2.5 px-1">
      <div className="flex items-center gap-2">
        <span className={labelClass}>CUSTOMER NAME:</span>
        <input aria-label="Customer Name" className={inputClass(!!errors.name)} {...register('name')} />
      </div>
      {errors.name && <p className={errorClass}>{errors.name.message}</p>}

      <div className="flex items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className={labelClass}>PHONE:</span>
          <input aria-label="Phone" className={inputClass()} {...register('phone')} />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className={labelClass}>EMAIL:</span>
          <input aria-label="Email" className={inputClass(!!errors.email)} {...register('email')} />
        </div>
      </div>
      {errors.email && <p className={errorClass}>{errors.email.message}</p>}

      <div>
        <div className="flex items-center gap-2">
          <span className={labelClass}>SHIPPING ADDRESS:</span>
          <input
            aria-label="Shipping Address"
            className={inputClass(!!errors.address)}
            {...register('address')}
          />
        </div>
      </div>
      {errors.address && <p className={errorClass}>{errors.address.message}</p>}

      <div className="mt-[30px] border-b border-ink" aria-hidden />
    </section>
  )
}
