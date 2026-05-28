'use client'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { UserIcon } from '@/components/icons'

const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

export const Header = () => {
  const count = useSelector(selectCartCount)

  const countBadge = useMemo(() => String(count), [count])

  return (
    <header className="border-b-[2px] border-ink bg-cream px-4 py-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-sage" />
            <div className="w-2.5 h-2.5 rounded-full bg-mustard" />
            <div className="w-2.5 h-2.5 rounded-full bg-terracotta" />
          </div>
          <nav className="flex gap-3 font-display text-sm tracking-wide text-ink">
            <a href="#" className="font-bold hover:text-terracotta">SHOP</a>
            <a href="#" className="font-bold hover:text-terracotta">COLLECTIONS</a>
            <a href="#" className="font-bold hover:text-terracotta">ABOUT US</a>
          </nav>
        </div>

        <div className="hidden md:block w-1/4" />
        <nav className="hidden md:flex justify-center gap-6 font-display text-base tracking-wide text-ink">
          <a href="#" className="font-bold hover:text-terracotta">HOME</a>
          <a href="#" className="font-bold hover:text-terracotta">SHOP</a>
          <a href="#" className="font-bold hover:text-terracotta">COLLECTIONS</a>
          <a href="#" className="font-bold hover:text-terracotta">ABOUT US</a>
          <a href="#" className="font-bold hover:text-terracotta">FAQ</a>
          <a href="#" className="font-bold hover:text-terracotta">GALLERY</a>
          <a href="#" className="font-bold hover:text-terracotta">BLOG</a>
        </nav>

        <div className="flex items-center gap-3 md:w-1/4 md:justify-end">
          <div className="relative cursor-pointer">
            <HiOutlineShoppingCart className="size-5 text-ink" strokeWidth={2} />
            <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full border-[2px] border-ink bg-tan text-[8px] font-bold text-ink">
              {countBadge}
            </span>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-ink" />
            <button className="flex cursor-pointer items-center gap-1 rounded-full border-[2px] border-ink bg-navy px-3 py-0.5 text-white">
              <span className="font-sans text-xs font-semibold">Log In</span>
            </button>
          </div>
          <div className="hidden md:flex cursor-pointer items-center gap-2 rounded-full border-[2px] border-ink bg-ink px-3 py-0.5 text-white">
            <div className="flex size-4 items-center justify-center rounded-full bg-white text-ink">
              <UserIcon className="w-3 h-3" />
            </div>
            <span className="font-sans text-xs font-semibold">A. Smith</span>
          </div>
        </div>
      </div>
    </header>
  )
}
