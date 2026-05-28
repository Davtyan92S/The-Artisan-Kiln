'use client'

import Image from 'next/image'
import { PaletteTileSvg } from '@/components/icons'
import type { DragHandWithTileProps } from '../types'

/** Drag ghost: PNG hand + pattern tile (replaces SVG hand). */
export const DragHandWithTile = ({ pattern, className }: DragHandWithTileProps) => (
  <div className={`relative h-[6.5rem] w-[6.5rem] ${className ?? ''}`}>
    <Image
      src="/hands.png"
      alt=""
      width={104}
      height={104}
      draggable={false}
      className="pointer-events-none h-full w-full select-none object-contain mix-blend-lighten"
      priority
    />
    <div
      className="absolute left-[18%] top-[6%] h-10 w-10 overflow-hidden rounded-[3px] border-[1.5px] border-ink bg-white shadow-[2px_3px_0_rgba(28,24,13,0.28)]"
      style={{ transform: 'rotate(-12deg)' }}
    >
      <PaletteTileSvg pattern={pattern} className="h-full w-full" />
    </div>
  </div>
)
