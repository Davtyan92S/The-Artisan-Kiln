import { DesignPattern } from '@/types'

export type PaletteTileButtonProps = {
  pattern: DesignPattern
  selected: boolean
  isDragging: boolean
  onSelect: (pattern: DesignPattern) => void
}
