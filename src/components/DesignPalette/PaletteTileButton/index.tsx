'use client'

import { useCallback, useMemo, useRef } from 'react'
import { PaletteTileSvg } from '@/components/icons'
import { useDesignDrag } from '@/hooks'
import type { PaletteTileButtonProps } from '../types'

const DRAG_THRESHOLD_PX = 6

const buildTileClassName = (selected: boolean, isDragging: boolean) => {
  const classes = [
    'aspect-square w-full min-w-0 touch-none overflow-hidden rounded-[4px] border-[1.5px] bg-white p-0 transition-all select-none',
    isDragging ? 'cursor-none' : 'cursor-grab active:cursor-grabbing',
  ]

  if (isDragging && selected) {
    classes.push('opacity-40')
  }

  if (selected) {
    classes.push('z-[1] border-sage-button')
  } else {
    classes.push('border-ink hover:border-terracotta')
  }

  return classes.join(' ')
}

export const PaletteTileButton = ({
  pattern,
  selected,
  isDragging,
  onSelect,
}: PaletteTileButtonProps) => {
  const { startDrag } = useDesignDrag()
  const pointerOrigin = useRef<{ x: number; y: number } | null>(null)
  const didDrag = useRef(false)

  const tileClassName = useMemo(
    () => buildTileClassName(selected, isDragging),
    [selected, isDragging],
  )

  const selectTile = useCallback(() => {
    onSelect(pattern)
  }, [onSelect, pattern])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) {
      return
    }
    pointerOrigin.current = { x: e.clientX, y: e.clientY }
    didDrag.current = false
  }, [])

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!pointerOrigin.current || didDrag.current) {
        return
      }
      const dx = e.clientX - pointerOrigin.current.x
      const dy = e.clientY - pointerOrigin.current.y
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) {
        return
      }
      didDrag.current = true
      startDrag(pattern, e.clientX, e.clientY)
      pointerOrigin.current = null
    },
    [pattern, startDrag],
  )

  const onPointerUp = useCallback(() => {
    if (!didDrag.current && pointerOrigin.current) {
      selectTile()
    }
    pointerOrigin.current = null
  }, [selectTile])

  const onPointerCancel = useCallback(() => {
    pointerOrigin.current = null
  }, [])

  return (
    <button
      type="button"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      className={tileClassName}
    >
      <PaletteTileSvg pattern={pattern} className="pointer-events-none h-full w-full" />
    </button>
  )
}
