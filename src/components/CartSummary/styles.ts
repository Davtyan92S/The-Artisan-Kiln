export const labelClass =
  'shrink-0 font-display text-xs font-bold uppercase tracking-wide text-ink'

export const inputClass = (hasError?: boolean) =>
  `min-w-0 flex-1 border-0 border-b-[2px] bg-transparent px-0 pb-0.5 font-sans text-xs text-ink outline-none placeholder:text-ink/30 ${
    hasError ? 'border-terracotta' : 'border-ink'
  }`
