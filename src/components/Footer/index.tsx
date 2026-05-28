import { HandTileIcon, PaletteHandIcon } from '@/components/icons'

export const Footer = () => {
  return (
    <footer className="relative shrink-0 bg-transparent pt-1 pb-2 hidden md:block">
      {/* Desktop: Hand holding a tile SVG */}
      <div className="absolute left-10 bottom-1">
        <HandTileIcon className="w-[100px] h-[100px]" />
      </div>

      {/* Desktop footer content */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="flex justify-center gap-2 font-display text-base font-bold uppercase tracking-wider text-ink">
          <a href="#" className="hover:text-terracotta">TERMS OF SERVICE</a>
          <span className="text-ink">|</span>
          <a href="#" className="hover:text-terracotta">PRIVACY POLICY</a>
          <span className="text-ink">|</span>
          <a href="#" className="hover:text-terracotta">SHIPPING INFO</a>
          <span className="text-ink">|</span>
          <a href="#" className="hover:text-terracotta">CONTACT US</a>
        </div>
        <div className="font-sans text-xs uppercase tracking-wide text-ink font-bold">
          © 2026 THE ARTISAN KILN. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Desktop: Hand holding a palette SVG */}
      <div className="absolute right-10 bottom-1">
        <PaletteHandIcon className="w-[100px] h-[100px]" />
      </div>
    </footer>
  )
}
