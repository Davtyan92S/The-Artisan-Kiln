'use client'

import { useCallback, useMemo } from 'react'
import { PaletteTileSvg } from '@/components/icons'
import { DesignPattern } from '@/types'
import type { GridCellProps } from '../types'

const buildCellClassName = (isDropTarget: boolean) => {
  const classes = ['aspect-square w-full min-w-0 bg-cream-warm transition-colors']

  if (isDropTarget) {
    classes.push('ring-2 ring-inset ring-navy bg-cream-light')
  }

  return classes.join(' ')
}

const renderCellContent = (cell: DesignPattern | null) => {
  if (!cell) {
    return null
  }

  return <PaletteTileSvg pattern={cell} className="h-full w-full" />
}

export const GridCell = ({ row, col, cell, isDropTarget, onCellClick }: GridCellProps) => {
  const handleClick = useCallback(() => {
    onCellClick(row, col, cell)
  }, [onCellClick, row, col, cell])

  const cellClassName = useMemo(() => buildCellClassName(isDropTarget), [isDropTarget])
  const cellContent = renderCellContent(cell)

  return (
    <div className={cellClassName} data-grid-row={row} data-grid-col={col}>
      <button
        type="button"
        onClick={handleClick}
        className="flex h-full w-full cursor-pointer items-stretch overflow-hidden p-0"
      >
        {cellContent}
      </button>
    </div>
  )
}
