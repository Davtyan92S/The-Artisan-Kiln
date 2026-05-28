import type { ChangeEvent } from 'react'

export const formatCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
  const raw = e.target.value.replace(/\D/g, '').slice(0, 16)
  e.target.value = raw.replace(/(.{4})/g, '$1 ').trim()
}

export const formatExpiry = (e: ChangeEvent<HTMLInputElement>) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4)
  if (v.length > 2) {
    v = `${v.slice(0, 2)}/${v.slice(2)}`
  }
  e.target.value = v
}

export const formatCvv = (e: ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4)
}
