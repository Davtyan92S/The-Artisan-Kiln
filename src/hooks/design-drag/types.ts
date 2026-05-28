import { DesignPattern } from '@/types'

export type GridDropTarget = { row: number; col: number }

export type DragState = {
  pattern: DesignPattern
  x: number
  y: number
}

export type DesignDragContextValue = {
  dropTarget: GridDropTarget | null
  isDragging: boolean
  startDrag: (pattern: DesignPattern, clientX: number, clientY: number) => void
}
