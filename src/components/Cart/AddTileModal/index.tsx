'use client'

import { useCallback, useEffect } from 'react'
import { PaletteTileSvg } from '@/components/icons'
import { paletteTiles } from '@/data/paletteTiles'
import { getTileByPattern } from '@/data/cartCatalog'
import type { DesignPattern, Tile } from '@/types'

type AddTileModalProps = {
  open: boolean
  onClose: () => void
  onSelect: (tile: Tile) => void
}

type TilePickButtonProps = {
  pattern: DesignPattern
  onPick: (pattern: DesignPattern) => void
}

const TilePickButton = ({ pattern, onPick }: TilePickButtonProps) => {
  const handleClick = useCallback(() => {
    onPick(pattern)
  }, [onPick, pattern])

  return (
    <button
      type="button"
      onClick={handleClick}
      className="aspect-square w-full overflow-hidden rounded-[4px] border-[1.5px] border-ink bg-white transition-colors hover:border-terracotta"
    >
      <PaletteTileSvg pattern={pattern} className="h-full w-full" />
    </button>
  )
}

export const AddTileModal = ({ open, onClose, onSelect }: AddTileModalProps) => {
  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handlePick = useCallback(
    (pattern: DesignPattern) => {
      onSelect(getTileByPattern(pattern))
      onClose()
    },
    [onClose, onSelect],
  )

  const handleBackdropClick = useCallback(() => {
    onClose()
  }, [onClose])

  const handlePanelClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  if (!open) {
    return null
  }

  const tileButtons = paletteTiles.map(({ id, pattern }) => (
    <TilePickButton key={id} pattern={pattern} onPick={handlePick} />
  ))

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/35 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="w-full max-w-[13.5rem] overflow-hidden rounded-[5px] border-[1.5px] border-ink bg-cream-warm shadow-[3px_4px_0_rgba(28,24,13,0.2)]"
        onClick={handlePanelClick}
      >
        <div className="border-b-[1.5px] border-ink bg-tan px-3 py-2 text-center">
          <p className="font-display text-xs font-bold uppercase tracking-wide text-ink">
            Choose a tile
          </p>
        </div>
        <div className="design-scroll max-h-[min(24rem,70vh)] overflow-y-auto p-1">
          <div className="grid grid-cols-2 gap-1">{tileButtons}</div>
        </div>
      </div>
    </div>
  )
}
