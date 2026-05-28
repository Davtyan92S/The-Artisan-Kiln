export type TileId = 'ocean-wave' | 'forest-fern' | 'terracotta-dot' | 'yellow-star'

export type DesignPattern =
  | 'wave'
  | 'fern'
  | 'dot'
  | 'star'
  | 'diamond'
  | 'herringbone'
  | 'floral'
  | 'bird'
  | 'corner-navy'
  | 'corner-terra'
  | 'starburst'
  | 'vine'

export interface Tile {
  id: TileId
  name: string
  price: number
  color: string
  pattern: string
  image: string
}

export interface CartItem {
  tile: Tile
  quantity: number
}

export type PaymentMethod = 'credit-card' | 'paypal' | 'apple-pay' | 'bank-transfer'

export type GridCell = DesignPattern | null

export interface CheckoutFormData {
  name: string
  email: string
  cardNumber: string
  expiry: string
  cvv: string
  address: string
  city: string
  country: string
  zip: string
}
