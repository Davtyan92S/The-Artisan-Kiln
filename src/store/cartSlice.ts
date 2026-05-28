import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, TileId, Tile } from '@/types'
import { tiles } from '@/data/tiles'

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: tiles.map((tile) => ({
    tile,
    quantity:
      tile.id === 'ocean-wave'
        ? 12
        : tile.id === 'forest-fern'
          ? 8
          : tile.id === 'terracotta-dot'
            ? 10
            : 6,
  })),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity(state, action: PayloadAction<{ tileId: TileId; quantity: number }>) {
      const item = state.items.find((i) => i.tile.id === action.payload.tileId)
      if (item) {
        item.quantity = Math.max(0, action.payload.quantity)
      }
    },
    removeItem(state, action: PayloadAction<TileId>) {
      state.items = state.items.filter((i) => i.tile.id !== action.payload)
    },
    addItem(state, action: PayloadAction<Tile>) {
      const existing = state.items.find((i) => i.tile.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ tile: action.payload, quantity: 1 })
      }
    },
  },
})

export const { updateQuantity, removeItem, addItem } = cartSlice.actions

export const selectSubtotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, item) => sum + item.tile.price * item.quantity, 0)

export const selectShipping = (state: { cart: CartState }) => {
  const subtotal = selectSubtotal(state)
  return subtotal > 500 ? 0 : 25
}

export const selectGrandTotal = (state: { cart: CartState }) => {
  return selectSubtotal(state) + selectShipping(state)
}

export default cartSlice.reducer
