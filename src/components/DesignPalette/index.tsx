'use client'

import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { selectPattern } from '@/store/designSlice'
import { paletteTiles } from '@/data/paletteTiles'
import { useDesignDrag } from '@/hooks'
import { DesignPattern } from '@/types'
import { PaletteTileButton } from './PaletteTileButton'

export const DesignPalette = () => {
  const dispatch = useDispatch()
  const selectedPattern = useSelector((state: RootState) => state.design.selectedPattern)
  const { isDragging } = useDesignDrag()

  const handleSelect = useCallback(
    (pattern: DesignPattern) => {
      dispatch(selectPattern(selectedPattern === pattern ? null : pattern))
    },
    [dispatch, selectedPattern],
  )

  return (
    <div className="w-full overflow-y-auto design-scroll">
      <div className="grid w-full grid-cols-2 gap-1 p-1">
        {paletteTiles.map((tile) => (
          <PaletteTileButton
            key={tile.id}
            pattern={tile.pattern}
            label={tile.label}
            selected={selectedPattern === tile.pattern}
            isDragging={isDragging}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  )
}
