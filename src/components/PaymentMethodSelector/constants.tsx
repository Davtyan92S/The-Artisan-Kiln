import {
  ApplePayBadge,
  BankTransferIcon,
  CreditCardIcon,
  PaypalIcon,
} from '@/components/icons'
import type { PaymentMethodOption } from './types'

export const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    id: 'credit-card',
    label: 'CREDIT/DEBIT CARD',
    icon: <CreditCardIcon className="h-6 w-6 fill-ink md:h-7 md:w-7" />,
  },
  {
    id: 'paypal',
    label: 'PAYPAL',
    icon: <PaypalIcon className="h-5 w-5 fill-[#003087] md:h-6 md:w-6" />,
  },
  {
    id: 'apple-pay',
    label: 'APPLE PAY',
    icon: (
      <ApplePayBadge
        className="flex items-center gap-0.5"
        iconClassName="h-4 w-4 fill-ink md:h-5 md:w-5"
        labelClassName="font-sans text-sm font-semibold"
      />
    ),
  },
  {
    id: 'bank-transfer',
    label: 'BANK TRANSFER',
    icon: <BankTransferIcon className="h-6 w-6 fill-ink md:h-7 md:w-7" />,
  },
]
