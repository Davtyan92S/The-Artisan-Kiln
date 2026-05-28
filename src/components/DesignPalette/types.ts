import { DesignPattern } from '@/types'

export type PaletteTileButtonProps = {
  pattern: DesignPattern
  label: string
  selected: boolean
  isDragging: boolean
  onSelect: (pattern: DesignPattern) => void
}
