'use client'

import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { CartItem } from '@/components/CartItem'
import { addItem, selectGrandTotal, selectShipping, selectSubtotal } from '@/store/cartSlice'
import { tiles } from '@/data/tiles'
import { CartHandIllustration, TilePreviewIcon } from '@/components/icons'
import { CartTotals } from './CartTotals'

export const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const subtotal = useSelector(selectSubtotal)
  const shipping = useSelector(selectShipping)
  const grandTotal = useSelector(selectGrandTotal)

  const handleAddRandomTile = useCallback(() => {
    const randomTile = tiles[Math.floor(Math.random() * tiles.length)]
    dispatch(addItem(randomTile))
  }, [dispatch])

  return (
    <section>
      <h2 className="mb-2 hidden font-display text-lg font-bold uppercase tracking-wider text-ink md:block md:text-xl">
        SHOPPING CART & DESIGN TOOL
      </h2>

      <div className="w-full">
        <table className="w-full border-collapse border-[2px] border-ink">
          <thead>
            <tr className="border-b-[2px] border-ink bg-tan">
              <th className="border-r-[1.5px] border-ink p-1 font-display text-[10px] font-bold text-ink md:text-xs">
                TILE COLLECTION
              </th>
              <th className="border-r-[1.5px] border-ink p-1 font-display text-[10px] font-bold text-ink md:text-xs">
                ITEM
              </th>
              <th className="border-r-[1.5px] border-ink p-1 font-display text-[10px] font-bold leading-tight text-ink md:text-xs">
                QUANTITY <br />
                <span className="text-[8px] font-bold normal-case md:text-[10px]">(sq. ft.)</span>
              </th>
              <th className="border-r-[1.5px] border-ink p-1 font-display text-[10px] font-bold leading-tight text-ink md:text-xs">
                UNIT PRICE <br />
                <span className="text-[8px] font-bold md:text-[10px]">($)</span>
              </th>
              <th className="p-1 font-display text-[10px] font-bold text-ink md:text-xs">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItem key={item.tile.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 flex items-end justify-between gap-2">
        <div className="flex items-end gap-1.5">
          <div className="relative h-12 w-10 flex-shrink-0 md:h-14 md:w-12">
            <CartHandIllustration className="h-full w-full" />
          </div>
          <button
            type="button"
            onClick={handleAddRandomTile}
            className="mb-0.5 flex items-center gap-1.5 border-[2px] border-ink bg-tan px-2 py-1 font-display uppercase tracking-wider text-ink transition-colors hover:bg-tan-hover md:px-3 md:py-1.5"
          >
            <span className="text-lg font-bold leading-none">+</span>
            <div className="h-5 w-5 flex-shrink-0 overflow-hidden border-[1.5px] border-ink">
              <TilePreviewIcon className="h-full w-full" pattern="dot" />
            </div>
            <span className="text-left text-[10px] font-bold leading-tight md:text-[11px]">
              ADD NEW TILE
              <br />
              TO CART
            </span>
          </button>
        </div>

        <CartTotals subtotal={subtotal} shipping={shipping} grandTotal={grandTotal} />
      </div>
    </section>
  )
}
