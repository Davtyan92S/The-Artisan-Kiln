import { DesignPattern } from '@/types'

export interface PaletteTile {
  id: string
  pattern: DesignPattern
}

export const paletteTiles: PaletteTile[] = [
  { id: 'p-floral', pattern: 'floral' },
  { id: 'p-corner-navy', pattern: 'corner-navy' },
  { id: 'p-corner-terra', pattern: 'corner-terra' },
  { id: 'p-wave', pattern: 'wave' },
  { id: 'p-fern', pattern: 'fern' },
  { id: 'p-dot', pattern: 'dot' },
  { id: 'p-star', pattern: 'star' },
  { id: 'p-diamond', pattern: 'diamond' },
  { id: 'p-herringbone', pattern: 'herringbone' },
  { id: 'p-bird', pattern: 'bird' },
  { id: 'p-starburst', pattern: 'starburst' },
  { id: 'p-vine', pattern: 'vine' },
]
