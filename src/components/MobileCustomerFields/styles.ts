export const labelClass =
  'font-display text-[16px] leading-none font-medium uppercase tracking-[0.12em] text-ink whitespace-nowrap'

export const inputClass = (hasError?: boolean) =>
  `h-6 min-w-0 flex-1 border-0 border-b-[1px] bg-transparent px-1 font-sans text-[13px] text-ink outline-none ${
    hasError ? 'border-terracotta' : 'border-ink'
  }`

export const errorClass =
  'font-display text-[10px] font-bold uppercase tracking-wide text-terracotta'
