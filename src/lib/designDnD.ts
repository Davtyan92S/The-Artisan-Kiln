import { DesignPattern } from '@/types'

export const DESIGN_TILE_MIME = 'application/x-artisan-tile'

export const setDraggedPattern = (dataTransfer: DataTransfer, pattern: DesignPattern) => {
  dataTransfer.setData(DESIGN_TILE_MIME, pattern)
  dataTransfer.effectAllowed = 'copy'
}

export const getDraggedPattern = (dataTransfer: DataTransfer): DesignPattern | null => {
  const raw = dataTransfer.getData(DESIGN_TILE_MIME)
  if (!raw) {
    return null
  }
  return raw as DesignPattern
}
