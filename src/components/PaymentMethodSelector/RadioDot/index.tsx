import type { RadioDotProps } from '../types'

const getOuterClassName = (selected: boolean) => {
  const base =
    'flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink'
  if (selected) {
    return `${base} bg-[#5c5c5c]`
  }
  return `${base} bg-white`
}

const renderInnerDot = (selected: boolean) => {
  if (!selected) {
    return null
  }
  return <div className="h-[7px] w-[7px] rounded-full bg-white" />
}

export const RadioDot = ({ selected }: RadioDotProps) => (
  <div className={getOuterClassName(selected)}>{renderInnerDot(selected)}</div>
)
