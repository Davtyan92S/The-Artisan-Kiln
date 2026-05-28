import type { GridDropTarget } from './types'

export const findGridCell = (x: number, y: number): GridDropTarget | null => {
  const el = document.elementFromPoint(x, y)?.closest('[data-grid-row]')
  if (!el) {
    return null
  }
  const row = Number(el.getAttribute('data-grid-row'))
  const col = Number(el.getAttribute('data-grid-col'))
  if (Number.isNaN(row) || Number.isNaN(col)) {
    return null
  }
  return { row, col }
}
