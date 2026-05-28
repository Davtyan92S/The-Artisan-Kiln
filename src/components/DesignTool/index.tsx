"use client";

import { DesignPalette } from "@/components/DesignPalette";
import { DesignGrid } from "@/components/DesignGrid";
import { DesignDragProvider } from "@/components/DesignDrag";

export const DesignTool = () => {
  return (
    <DesignDragProvider>
      <div className="h-fit w-full self-start overflow-hidden rounded-[5px] border-[1.5px] border-ink bg-cream-panel">
        <div className="flex">
          <div className="flex min-w-0 flex-[74] flex-col border-r-[1.5px] border-ink">
            <div className="border-b-[1.5px] border-ink bg-cream-panel px-2 py-1 text-center">
              <p className="font-display text-xs font-bold uppercase leading-none tracking-wider text-ink md:text-sm">
                VISUALIZE YOUR ORDER:
              </p>
              <p className="mt-0.5 font-sans text-[9px] font-normal leading-snug text-ink md:text-[10px]">
                Drag and drop tiles here to create patterns.
              </p>
            </div>
            <DesignGrid />
          </div>

          <div className="flex min-w-0 flex-[26] flex-col bg-cream-warm">
            <div className="border-b-[1.5px] border-ink bg-tan px-1 py-0.5 text-center">
              <p className="font-display text-[10px] font-bold uppercase leading-none tracking-wider text-ink md:text-xs">
                DESIGN PALATE
              </p>
            </div>
            <DesignPalette />
          </div>
        </div>
      </div>
    </DesignDragProvider>
  );
};
