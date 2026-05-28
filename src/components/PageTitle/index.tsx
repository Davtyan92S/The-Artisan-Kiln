import { BuildingIcon, KilnIcon, TileSvg } from '@/components/icons'

export const PageTitle = () => {
  return (
    <section className="relative border-b-[2px] border-ink bg-transparent py-2 md:border-b-0 md:py-3 text-center">

      <div className="flex items-center justify-center gap-5">
        {/* Building icon - desktop only */}
        <div className="hidden md:block">
          <BuildingIcon className="w-[50px] h-[50px]" />
        </div>

        <div className="flex flex-col items-center">
          {/* Title — ONE LINE on mobile */}
          <h1 className="mb-1 font-display font-bold leading-none tracking-wide text-ink text-[30px] md:text-[56px] whitespace-nowrap">
            CERAMIC TILE ORDER FORM
          </h1>

          {/* Subtitle with tiles */}
          <div className="flex items-center justify-center gap-1.5 md:gap-4">
            <div className="flex gap-0.5 md:gap-1">
              <TileSvg pattern="star" size={20} className="border-[1.5px] border-ink" />
              <TileSvg pattern="dot"  size={20} className="border-[1.5px] border-ink" />
              <TileSvg pattern="wave" size={20} className="border-[1.5px] border-ink" />
            </div>
            <span className="font-display text-[18px] md:text-[34px] font-bold uppercase tracking-[0.06em] text-ink whitespace-nowrap">
              THE ARTISAN KILN
            </span>
            <div className="flex gap-0.5 md:gap-1">
              <TileSvg pattern="star" size={20} className="border-[1.5px] border-ink" />
              <TileSvg pattern="dot"  size={20} className="border-[1.5px] border-ink" />
              <TileSvg pattern="star" size={20} className="border-[1.5px] border-ink" />
            </div>
          </div>
        </div>

        {/* Kiln icon - desktop only */}
        <div className="hidden md:block">
          <KilnIcon className="w-[43px] h-[50px]" />
        </div>
      </div>
    </section>
  )
}
