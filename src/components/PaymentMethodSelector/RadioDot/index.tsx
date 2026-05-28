import type { RadioDotProps } from '../types'

export const RadioDot = ({ selected }: RadioDotProps) => (
  <div
    className={`flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink ${
      selected ? 'bg-[#5c5c5c]' : 'bg-white'
    }`}
  >
    {selected && <div className="h-[7px] w-[7px] rounded-full bg-white" />}
  </div>
)
