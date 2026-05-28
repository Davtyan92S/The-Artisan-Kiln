'use client'

import { createContext, useContext } from 'react'
import type { DesignDragContextValue } from './types'

export const DesignDragContext = createContext<DesignDragContextValue | null>(null)

export const useDesignDrag = () => {
  const ctx = useContext(DesignDragContext)
  if (!ctx) {
    throw new Error('useDesignDrag must be used within DesignDragProvider')
  }
  return ctx
}
