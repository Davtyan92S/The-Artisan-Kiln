type FieldErrorProps = {
  message?: string
  className: string
}

export const FieldError = ({ message, className }: FieldErrorProps) => {
  if (!message) {
    return null
  }

  return <p className={className}>{message}</p>
}
