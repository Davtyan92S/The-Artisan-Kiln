'use client'

import { useCallback, useMemo } from 'react'
import { PaletteTileSvg } from '@/components/icons'
import type { GridCellProps } from '../types'

export const GridCell = ({ row, col, cell, isDropTarget, onCellClick }: GridCellProps) => {
  const handleClick = useCallback(() => {
    onCellClick(row, col, cell)
  }, [onCellClick, row, col, cell])

  const cellClassName = useMemo(
    () =>
      [
        'aspect-square w-full min-w-0 bg-cream-warm transition-colors',
        isDropTarget ? 'ring-2 ring-inset ring-navy bg-cream-light' : '',
      ].join(' '),
    [isDropTarget],
  )

  const ariaLabel = useMemo(
    () =>
      cell
        ? `Remove ${cell} tile from row ${row + 1}, column ${col + 1}`
        : `Place tile at row ${row + 1}, column ${col + 1}`,
    [cell, row, col],
  )

  return (
    <div
      role="gridcell"
      data-grid-row={row}
      data-grid-col={col}
      className={cellClassName}
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex h-full w-full cursor-pointer items-stretch overflow-hidden p-0"
        aria-label={ariaLabel}
      >
        {cell && <PaletteTileSvg pattern={cell} className="h-full w-full" />}
      </button>
    </div>
  )
}
