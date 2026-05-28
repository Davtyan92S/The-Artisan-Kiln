'use client'

import { useCallback, useRef } from 'react'
import { PaletteTileSvg } from '@/components/icons'
import { useDesignDrag } from '@/hooks'
import type { PaletteTileButtonProps } from '../types'

const DRAG_THRESHOLD_PX = 6

export const PaletteTileButton = ({
  pattern,
  label,
  selected,
  isDragging,
  onSelect,
}: PaletteTileButtonProps) => {
  const { startDrag } = useDesignDrag()
  const pointerOrigin = useRef<{ x: number; y: number } | null>(null)
  const didDrag = useRef(false)

  const selectTile = useCallback(() => {
    onSelect(pattern)
  }, [onSelect, pattern])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        selectTile()
      }
    },
    [selectTile],
  )

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

  const tileClassName = [
    'aspect-square w-full min-w-0 touch-none overflow-hidden rounded-[4px] border-[1.5px] bg-white p-0 transition-all select-none',
    isDragging ? 'cursor-none' : 'cursor-grab active:cursor-grabbing',
    isDragging && selected ? 'opacity-40' : '',
    selected ? 'z-[1] border-sage-button' : 'border-ink hover:border-terracotta',
  ].join(' ')

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      className={tileClassName}
      aria-label={`${label}. Drag onto the grid or tap to select.`}
      aria-pressed={selected}
    >
      <PaletteTileSvg pattern={pattern} className="pointer-events-none h-full w-full" />
    </div>
  )
}
