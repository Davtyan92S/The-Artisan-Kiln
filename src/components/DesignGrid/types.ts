import { DesignPattern } from '@/types'

export type GridCellProps = {
  row: number
  col: number
  cell: DesignPattern | null
  isDropTarget: boolean
  onCellClick: (row: number, col: number, cell: DesignPattern | null) => void
}
