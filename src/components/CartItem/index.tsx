'use client'

import { useCallback } from 'react'
import { updateQuantity } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'
import { MinusIcon, PlusIcon, TileSvg } from '@/components/icons'
import type { CartItemProps } from './types'

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch()

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateQuantity({
          tileId: item.tile.id,
          quantity: +e.target.value || 0,
        }),
      )
    },
    [dispatch, item.tile.id],
  )

  const handleIncrement = useCallback(() => {
    dispatch(
      updateQuantity({
        tileId: item.tile.id,
        quantity: item.quantity + 1,
      }),
    )
  }, [dispatch, item.tile.id, item.quantity])

  const handleDecrement = useCallback(() => {
    if (item.quantity > 0) {
      dispatch(
        updateQuantity({
          tileId: item.tile.id,
          quantity: item.quantity - 1,
        }),
      )
    }
  }, [dispatch, item.tile.id, item.quantity])

  const priceLabel = `[ $${item.tile.price.toFixed(2)} ]`

  return (
    <tr className="border-b-[1.5px] border-ink bg-white md:bg-white">
      <td className="border-r-[1.5px] border-ink p-1.5 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-1 flex items-center justify-center overflow-hidden border-[1.5px] border-ink bg-white">
            <div className="md:hidden">
              <TileSvg pattern={item.tile.pattern} size={28} />
            </div>
            <div className="hidden md:block">
              <TileSvg pattern={item.tile.pattern} size={32} />
            </div>
          </div>
          <span className="font-display text-[8px] font-bold uppercase leading-none tracking-wide text-ink md:text-[10px]">
            {item.tile.name}
          </span>
        </div>
      </td>

      <td className="border-r-[1.5px] border-ink p-1.5 text-center">
        <div className="flex justify-center">
          <div className="md:hidden">
            <TileSvg pattern={item.tile.pattern} size={32} />
          </div>
          <div className="hidden md:block">
            <TileSvg pattern={item.tile.pattern} size={44} />
          </div>
        </div>
      </td>

      <td className="border-r-[1.5px] border-ink p-1.5 text-center">
        <div className="inline-flex items-center justify-center font-display text-sm font-bold text-ink md:text-base">
          <span className="mr-0.5">[</span>
          <input
            type="number"
            min={0}
            value={item.quantity || ''}
            onChange={handleQuantityChange}
            className="w-10 bg-transparent text-center font-display text-sm text-ink outline-none md:w-12 md:text-base"
            style={{ MozAppearance: 'textfield' }}
          />
          <span className="ml-0.5">]</span>
        </div>
      </td>

      <td className="border-r-[1.5px] border-ink p-1.5 text-center font-display text-sm font-bold whitespace-nowrap text-ink md:text-base">
        {priceLabel}
      </td>

      <td className="p-1.5">
        <div className="flex items-start justify-center gap-2 md:gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <button
              type="button"
              onClick={handleIncrement}
              className="cursor-pointer"
              aria-label="Add quantity"
            >
              <div className="relative flex h-6 w-6 items-center justify-center border-[1.5px] border-ink bg-sage-button md:h-7 md:w-7">
                <PlusIcon className="h-[10px] w-[10px] text-white md:h-[11px] md:w-[11px]" />
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 font-display text-[9px] font-bold leading-none text-white md:text-[10px]">
                  ›
                </span>
              </div>
            </button>
            <span className="font-display text-[7px] font-bold uppercase tracking-wide text-ink md:text-[8px]">
              ADD
            </span>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <button
              type="button"
              onClick={handleDecrement}
              className="cursor-pointer"
              aria-label="Decrease quantity"
            >
              <div className="relative flex h-6 w-6 items-center justify-center border-[1.5px] border-ink bg-terracotta md:h-7 md:w-7">
                <MinusIcon className="h-[10px] w-[10px] text-white md:h-[11px] md:w-[11px]" />
                <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 font-display text-[9px] font-bold leading-none text-white md:text-[10px]">
                  ‹
                </span>
              </div>
            </button>
            <span className="font-display text-[7px] font-bold uppercase tracking-wide text-ink md:text-[8px]">
              LESS
            </span>
          </div>
        </div>
      </td>
    </tr>
  )
}
