'use client'

import { useCallback, useMemo } from 'react'
import { updateQuantity } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'
import { PaletteTileSvg, PlusIcon, TrashIcon } from '@/components/icons'
import type { CartItemProps } from './types'

export const CartItem = ({ item, isLast = false }: CartItemProps) => {
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
    dispatch(
      updateQuantity({
        tileId: item.tile.id,
        quantity: item.quantity - 1,
      }),
    )
  }, [dispatch, item.tile.id, item.quantity])

  const priceLabel = `[ $${item.tile.price.toFixed(2)} ]`
  const pattern = item.tile.pattern

  const rowClassName = useMemo(() => {
    const classes = ['h-[4.5rem]', 'bg-white', 'md:bg-white']
    if (!isLast) {
      classes.push('border-b-[1.5px]', 'border-ink')
    }
    return classes.join(' ')
  }, [isLast])

  return (
    <tr className={rowClassName}>
      <td className="border-r-[1.5px] border-ink p-1.5 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-1 flex items-center justify-center overflow-hidden border-[1.5px] border-ink bg-white">
            <div className="h-7 w-7 md:hidden">
              <PaletteTileSvg pattern={pattern} className="h-full w-full" />
            </div>
            <div className="hidden h-8 w-8 md:block">
              <PaletteTileSvg pattern={pattern} className="h-full w-full" />
            </div>
          </div>
          <span className="font-display text-[8px] font-bold uppercase leading-none tracking-wide text-ink md:text-[10px]">
            {item.tile.name}
          </span>
        </div>
      </td>

      <td className="border-r-[1.5px] border-ink p-1.5 text-center">
        <div className="flex justify-center">
          <div className="h-8 w-8 md:hidden">
            <PaletteTileSvg pattern={pattern} className="h-full w-full" />
          </div>
          <div className="hidden h-11 w-11 md:block">
            <PaletteTileSvg pattern={pattern} className="h-full w-full" />
          </div>
        </div>
      </td>

      <td className="border-r-[1.5px] border-ink p-1 text-center">
        <div className="inline-flex items-center justify-center whitespace-nowrap font-display text-sm font-medium text-ink md:text-base">
          <span>[</span>
          <input
            type="number"
            min={0}
            value={item.quantity || ''}
            onChange={handleQuantityChange}
            className="w-8 min-w-0 bg-transparent px-0.5 text-center font-display text-sm font-medium text-ink outline-none md:w-9 md:text-base [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
          <span>]</span>
        </div>
      </td>

      <td className="border-r-[1.5px] border-ink p-1.5 text-center font-display text-sm font-medium whitespace-nowrap text-ink md:text-base">
        {priceLabel}
      </td>

      <td className="p-1.5">
        <div className="flex items-start justify-center gap-2 md:gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <button type="button" onClick={handleIncrement} className="cursor-pointer">
              <div className="flex h-6 w-6 items-center justify-center border-[1.5px] border-ink bg-sage-button md:h-7 md:w-7">
                <PlusIcon className="h-[11px] w-[11px] text-white md:h-3 md:w-3" />
              </div>
            </button>
            <span className="font-display text-[7px] font-bold uppercase tracking-wide text-ink md:text-[8px]">
              ADD
            </span>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <button type="button" onClick={handleDecrement} className="cursor-pointer">
              <div className="flex h-6 w-6 items-center justify-center border-[1.5px] border-ink bg-terracotta md:h-7 md:w-7">
                <TrashIcon className="h-[11px] w-[11px] text-white md:h-3 md:w-3" />
              </div>
            </button>
            <span className="font-display text-[7px] font-bold uppercase tracking-wide text-ink md:text-[8px]">
              REMOVE
            </span>
          </div>
        </div>
      </td>
    </tr>
  )
}
