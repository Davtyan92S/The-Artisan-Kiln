'use client'

import { useSelector } from 'react-redux'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { UserIcon } from '@/components/icons'
import { RootState } from '@/store/store'

const NAV_LINKS = [
  'HOME',
  'SHOP',
  'COLLECTIONS',
  'ABOUT US',
  'FAQ',
  'GALLERY',
  'BLOG',
] as const

const MOBILE_NAV_LINKS = ['SHOP', 'COLLECTIONS', 'ABOUT US'] as const

const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

const WindowDots = () => (
  <div className="flex shrink-0 items-center gap-1">
    <div className="size-2.5 rounded-full bg-[#d4644a]" />
    <div className="size-2.5 rounded-full bg-mustard" />
    <div className="size-2.5 rounded-full bg-sage" />
  </div>
)

const CartButton = ({ count }: { count: number }) => (
  <div className="relative shrink-0 cursor-pointer">
    <HiOutlineShoppingCart className="size-5 text-ink md:size-[22px]" strokeWidth={2} />
    <span className="absolute -right-1.5 -top-1.5 flex size-4 min-w-4 items-center justify-center rounded-full bg-mustard px-0.5 font-sans text-[9px] font-medium leading-none text-ink">
      {count}
    </span>
  </div>
)

export const Header = () => {
  const count = useSelector(selectCartCount)

  return (
    <header className="w-full shrink-0 border-b-[2px] border-ink bg-cream md:-mx-4 md:w-[calc(100%+2rem)]">
      <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1.5 px-4 py-2 md:grid-cols-[auto_1fr_auto] md:gap-4 md:px-14 md:py-2 lg:px-20">
        <WindowDots />

        <nav className="flex min-w-0 items-center justify-center font-sans text-[10px] font-medium uppercase tracking-wide text-ink sm:text-[11px] md:text-base">
          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            {MOBILE_NAV_LINKS.map((label) => (
              <a key={label} href="#" className="whitespace-nowrap hover:text-terracotta">
                {label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((label) => (
              <a key={label} href="#" className="whitespace-nowrap hover:text-terracotta">
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2 md:gap-3">
          <CartButton count={count} />

          <span className="flex size-6 items-center justify-center rounded-full bg-navy text-white md:size-7">
            <UserIcon className="size-3.5 md:size-4" />
          </span>

          <button
            type="button"
            className="hidden cursor-pointer rounded-full bg-navy px-3 py-0.5 font-sans text-[11px] font-medium text-white md:inline-block md:px-3.5 md:text-xs"
          >
            A. Smith
          </button>
        </div>
      </div>
    </header>
  )
}
