'use client'

import type { ReactNode } from 'react'
import { DesignDragContext, useDesignDragController } from '@/hooks/design-drag'

export const DesignDragProvider = ({ children }: { children: ReactNode }) => {
  const { dropTarget, isDragging, startDrag, overlay } = useDesignDragController()

  return (
    <DesignDragContext.Provider value={{ dropTarget, isDragging, startDrag }}>
      {children}
      {overlay}
    </DesignDragContext.Provider>
  )
}
