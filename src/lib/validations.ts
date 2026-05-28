import { z } from 'zod'

const cardSchema = z.object({
  cardNumber: z.string().transform((v) => v.replace(/\s/g, '')).pipe(z.string().length(16, 'Must be 16 digits')),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Use MM/YY format'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Invalid CVV'),
})

export const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  phone: z.string().optional(),
  projectNotes: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  city: z.string().optional(),
  country: z.string().optional(),
  zip: z.string().optional(),
  paymentMethod: z.enum(['credit-card', 'paypal', 'apple-pay', 'bank-transfer']),
  cardNumber: z.string().optional(),
  expiry: z.string().optional(),
  cvv: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.paymentMethod === 'credit-card') {
    const result = cardSchema.safeParse(data)
    if (!result.success) {
      for (const issue of result.error.issues) {
        ctx.addIssue({ ...issue, path: issue.path })
      }
    }
  }
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>
