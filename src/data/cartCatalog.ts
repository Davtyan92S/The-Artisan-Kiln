import type { DesignPattern, Tile, TileId } from '@/types'

type CatalogEntry = {
  id: TileId
  name: string
  price: number
  color: string
  pattern: DesignPattern
}

const CATALOG: CatalogEntry[] = [
  { id: 'floral', name: 'Floral Bloom', price: 27, color: '#8a5040', pattern: 'floral' },
  { id: 'corner-navy', name: 'Navy Corner', price: 26, color: '#404868', pattern: 'corner-navy' },
  { id: 'corner-terra', name: 'Terra Corner', price: 26, color: '#b07050', pattern: 'corner-terra' },
  { id: 'ocean-wave', name: 'Ocean Wave', price: 28, color: '#404868', pattern: 'wave' },
  { id: 'forest-fern', name: 'Forest Fern', price: 30, color: '#588078', pattern: 'fern' },
  { id: 'terracotta-dot', name: 'Terracotta Dot', price: 26, color: '#b07050', pattern: 'dot' },
  { id: 'yellow-star', name: 'Yellow Star', price: 29, color: '#d0a040', pattern: 'star' },
  { id: 'diamond', name: 'Blue Diamond', price: 28, color: '#404868', pattern: 'diamond' },
  { id: 'herringbone', name: 'Herringbone', price: 27, color: '#406058', pattern: 'herringbone' },
  { id: 'bird', name: 'Garden Bird', price: 31, color: '#588078', pattern: 'bird' },
  { id: 'starburst', name: 'Starburst', price: 29, color: '#d0a040', pattern: 'starburst' },
  { id: 'vine', name: 'Green Vine', price: 28, color: '#406058', pattern: 'vine' },
]

const byPattern = new Map(CATALOG.map((entry) => [entry.pattern, entry]))

export const getTileByPattern = (pattern: DesignPattern): Tile => {
  const entry = byPattern.get(pattern)
  if (!entry) {
    throw new Error(`Unknown pattern: ${pattern}`)
  }
  return {
    ...entry,
    image: `/tiles/${entry.id}.png`,
  }
}
