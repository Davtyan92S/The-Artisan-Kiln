import { DesignPattern } from '@/types'

export interface PaletteTile {
  id: string
  pattern: DesignPattern
  label: string
}

export const paletteTiles: PaletteTile[] = [
  { id: 'p-floral', pattern: 'floral', label: 'Floral' },
  { id: 'p-corner-navy', pattern: 'corner-navy', label: 'Navy Corner' },
  { id: 'p-corner-terra', pattern: 'corner-terra', label: 'Terra Corner' },
  { id: 'p-wave', pattern: 'wave', label: 'Ocean Wave' },
  { id: 'p-fern', pattern: 'fern', label: 'Forest Fern' },
  { id: 'p-dot', pattern: 'dot', label: 'Terracotta Dot' },
  { id: 'p-star', pattern: 'star', label: 'Yellow Star' },
  { id: 'p-diamond', pattern: 'diamond', label: 'Diamond' },
  { id: 'p-herringbone', pattern: 'herringbone', label: 'Herringbone' },
  { id: 'p-bird', pattern: 'bird', label: 'Bird' },
  { id: 'p-starburst', pattern: 'starburst', label: 'Starburst' },
  { id: 'p-vine', pattern: 'vine', label: 'Vine' },
]
