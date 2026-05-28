'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { placePattern, selectPattern } from '@/store/designSlice'
import { DragHandWithTile } from '@/components/DesignDrag/DragHandWithTile'
import { DesignPattern } from '@/types'
import { findGridCell } from './findGridCell'
import type { DragState, GridDropTarget } from './types'

const renderDragGhost = (drag: DragState) => (
  <motion.div
    key="design-drag-ghost"
    className="pointer-events-none fixed z-[200]"
    style={{ left: drag.x, top: drag.y }}
    initial={{ scale: 0.9, opacity: 0.85, x: '-32%', y: '-12%' }}
    animate={{ scale: 1, opacity: 1, x: '-32%', y: '-12%' }}
    exit={{ scale: 0.92, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
  >
    <DragHandWithTile pattern={drag.pattern} />
  </motion.div>
)

const buildOverlay = (drag: DragState | null) => {
  if (!drag) {
    return null
  }
  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <AnimatePresence>{renderDragGhost(drag)}</AnimatePresence>,
    document.body,
  )
}

export const useDesignDragController = () => {
  const dispatch = useDispatch()
  const [drag, setDrag] = useState<DragState | null>(null)
  const [dropTarget, setDropTarget] = useState<GridDropTarget | null>(null)
  const patternRef = useRef<DesignPattern | null>(null)

  const startDrag = useCallback(
    (pattern: DesignPattern, clientX: number, clientY: number) => {
      patternRef.current = pattern
      dispatch(selectPattern(pattern))
      setDrag({ pattern, x: clientX, y: clientY })
      setDropTarget(null)
    },
    [dispatch],
  )

  useEffect(() => {
    if (!drag) {
      return
    }

    const onMove = (e: PointerEvent) => {
      setDrag((prev) => {
        if (!prev) {
          return null
        }
        return { ...prev, x: e.clientX, y: e.clientY }
      })
      setDropTarget(findGridCell(e.clientX, e.clientY))
    }

    const onEnd = (e: PointerEvent) => {
      const target = findGridCell(e.clientX, e.clientY)
      const pattern = patternRef.current
      if (target && pattern) {
        dispatch(placePattern({ row: target.row, col: target.col, pattern }))
      }
      patternRef.current = null
      dispatch(selectPattern(null))
      setDrag(null)
      setDropTarget(null)
    }

    document.body.style.cursor = 'none'
    document.documentElement.style.cursor = 'none'
    document.body.style.userSelect = 'none'

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onEnd)
    window.addEventListener('pointercancel', onEnd)

    return () => {
      document.body.style.cursor = ''
      document.documentElement.style.cursor = ''
      document.body.style.userSelect = ''
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onEnd)
      window.removeEventListener('pointercancel', onEnd)
    }
  }, [drag, dispatch])

  const overlay = buildOverlay(drag)

  return {
    dropTarget,
    isDragging: drag != null,
    startDrag,
    overlay,
  }
}
