export type IconProps = {
  className?: string
}

export type TilePattern = 'dot' | 'wave'

export type TilePreviewIconProps = {
  className?: string
  pattern?: TilePattern
}

export type PaletteTileSvgProps = {
  pattern: string
  size?: number
  className?: string
}

export type TileSvgProps = {
  pattern: string
  size?: number
  className?: string
}
