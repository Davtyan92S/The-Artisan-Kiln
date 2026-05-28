"use client";

import { DesignPalette } from "@/components/DesignPalette";
import { DesignGrid } from "@/components/DesignGrid";
import { DesignDragProvider } from "@/components/DesignDrag";

export const DesignTool = () => {
  return (
    <DesignDragProvider>
      <div className="h-fit w-full self-start overflow-hidden border-[2px] border-ink bg-cream-panel">
        <div className="flex">
          {/* Left: header + grid */}
          <div className="flex min-w-0 flex-[74] flex-col border-r-[2px] border-ink">
            <div className="border-b-[2px] border-ink bg-cream-panel px-2 py-1.5 text-center">
              <p className="font-display text-sm font-bold uppercase leading-none tracking-wider text-ink md:text-base">
                VISUALIZE YOUR ORDER:
              </p>
              <p className="mt-1 font-sans text-[10px] font-normal leading-snug text-ink md:text-xs">
                Drag and drop tiles here to create patterns.
              </p>
            </div>
            <div className="p-1">
              <DesignGrid />
            </div>
          </div>

          {/* Right: short header + palette (no stretch below tiles) */}
          <div className="flex min-w-0 flex-[26] flex-col bg-cream-warm">
            <div className="flex min-h-[2.35rem] items-center justify-center border-b-[2px] border-ink bg-tan px-2 py-1 md:min-h-[2.6rem]">
              <p className="text-center font-display text-sm font-bold uppercase leading-none tracking-wider text-ink md:text-base">
                DESIGN PALETTE
              </p>
            </div>
            <DesignPalette />
          </div>
        </div>
      </div>
    </DesignDragProvider>
  );
};
