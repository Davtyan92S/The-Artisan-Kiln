'use client'

import { useCallback, useMemo, useState, type CSSProperties } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { CartItem } from '@/components/CartItem'
import { addItem, selectGrandTotal, selectShipping, selectSubtotal } from '@/store/cartSlice'
import { TilePreviewIcon } from '@/components/icons'
import type { Tile } from '@/types'
import { AddTileModal } from './AddTileModal'
import { CartTotals } from './CartTotals'

type CartProps = {
  showHeading?: boolean
}

const CART_COLS = '24% 24% 15% 16% 21%'
const CART_MAX_ROWS = 4
const CART_ROW_HEIGHT = '4.5rem'
const CART_HEADER_HEIGHT = '2.75rem'

const thClass =
  'border-r-[1.5px] border-ink p-1 font-display text-[10px] font-bold uppercase leading-tight tracking-wide text-ink md:text-xs'

const getTableScrollClassName = (hasScroll: boolean) => {
  if (hasScroll) {
    return 'design-scroll overflow-x-hidden overflow-y-auto'
  }
  return 'overflow-x-hidden'
}

const getTableScrollStyle = (hasScroll: boolean): CSSProperties | undefined => {
  if (!hasScroll) {
    return undefined
  }
  return {
    maxHeight: `calc(${CART_HEADER_HEIGHT} + ${CART_ROW_HEIGHT} * ${CART_MAX_ROWS})`,
  }
}

export const Cart = ({ showHeading = true }: CartProps) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const subtotal = useSelector(selectSubtotal)
  const shipping = useSelector(selectShipping)
  const grandTotal = useSelector(selectGrandTotal)

  const [addTileOpen, setAddTileOpen] = useState(false)

  const hasScroll = items.length > CART_MAX_ROWS
  const tableScrollClassName = getTableScrollClassName(hasScroll)
  const tableScrollStyle = getTableScrollStyle(hasScroll)

  const handleOpenAddTile = useCallback(() => {
    setAddTileOpen(true)
  }, [])

  const handleCloseAddTile = useCallback(() => {
    setAddTileOpen(false)
  }, [])

  const handleSelectTile = useCallback(
    (tile: Tile) => {
      dispatch(addItem(tile))
    },
    [dispatch],
  )

  const totalsProps = { subtotal, shipping, grandTotal }

  const cartRows = useMemo(
    () =>
      items.map((item, index) => (
        <CartItem key={item.tile.id} item={item} isLast={index === items.length - 1} />
      )),
    [items],
  )

  let heading = null
  if (showHeading) {
    heading = (
      <h2 className="mb-2 font-display text-2xl font-medium uppercase tracking-wider text-ink md:text-3xl">
        SHOPPING CART & DESIGN TOOL
      </h2>
    )
  }

  return (
    <section>
      {heading}

      <div className="grid w-full gap-y-0" style={{ gridTemplateColumns: CART_COLS }}>
        <div className="col-span-5 overflow-hidden rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] border-[1.5px] border-ink">
          <div className={tableScrollClassName} style={tableScrollStyle}>
            <table className="w-full table-fixed border-collapse">
              <colgroup>
                <col className="w-[24%]" />
                <col className="w-[24%]" />
                <col className="w-[15%]" />
                <col className="w-[16%]" />
                <col className="w-[21%]" />
              </colgroup>
              <thead className="sticky top-0 z-10">
                <tr className="border-b-[1.5px] border-ink bg-tan">
                  <th className={`${thClass} bg-tan`}>TILE COLLECTION</th>
                  <th className={`${thClass} bg-tan`}>ITEM</th>
                  <th className={`${thClass} bg-tan`}>
                    QUANTITY <br />
                    <span className="text-[8px] font-bold normal-case md:text-[10px]">(sq. ft.)</span>
                  </th>
                  <th className={`${thClass} bg-tan`}>
                    UNIT PRICE <br />
                    <span className="text-[8px] font-bold normal-case md:text-[10px]">($)</span>
                  </th>
                  <th className="bg-tan p-1 font-display text-[10px] font-bold uppercase leading-tight tracking-wide text-ink md:text-xs">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>{cartRows}</tbody>
            </table>
          </div>
        </div>

        <div className="col-span-2 flex items-end">
          <button
            type="button"
            onClick={handleOpenAddTile}
            className="mb-1.5 flex min-h-[2.75rem] w-full min-w-0 items-center justify-center gap-1.5 rounded-[5px] border-[1.5px] border-ink bg-tan px-2 py-1.5 font-display uppercase tracking-wider text-ink transition-colors hover:bg-tan-hover md:min-h-[3rem] md:px-3"
          >
            <span className="text-lg font-bold leading-none">+</span>
            <div className="h-5 w-5 shrink-0 overflow-hidden border-[1.5px] border-ink bg-white">
              <TilePreviewIcon className="h-full w-full" pattern="dot" />
            </div>
            <span className="text-left text-[10px] font-bold leading-tight md:text-[11px]">
              ADD NEW TILE
              <br />
              TO CART
            </span>
          </button>
        </div>

        <div className="col-span-2">
          <CartTotals {...totalsProps} part="labels" />
        </div>

        <div>
          <CartTotals {...totalsProps} part="values" />
        </div>
      </div>

      <AddTileModal
        open={addTileOpen}
        onClose={handleCloseAddTile}
        onSelect={handleSelectTile}
      />
    </section>
  )
}
