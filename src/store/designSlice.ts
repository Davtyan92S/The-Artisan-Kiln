import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DesignPattern, GridCell } from '@/types'

export const GRID_SIZE = 6
export const GRID_ROWS = GRID_SIZE
export const GRID_COLS = GRID_SIZE

interface DesignState {
  grid: GridCell[][]
  selectedPattern: DesignPattern | null
}

const createEmptyGrid = (): GridCell[][] =>
  Array.from({ length: GRID_ROWS }, (_, row) =>
    Array.from({ length: GRID_COLS }, (_, col) => {
      if (row !== 0) {
        return null
      }
      if (col === 0) {
        return 'corner-terra'
      }
      if (col === 1) {
        return 'corner-navy'
      }
      if (col === 2) {
        return 'corner-terra'
      }
      if (col === 3) {
        return 'corner-navy'
      }
      return null
    })
  )

const initialState: DesignState = {
  grid: createEmptyGrid(),
  selectedPattern: null,
}

const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers: {
    selectPattern(state, action: PayloadAction<DesignPattern | null>) {
      state.selectedPattern = action.payload
    },
    placePattern(
      state,
      action: PayloadAction<{ row: number; col: number; pattern: DesignPattern }>
    ) {
      const { row, col, pattern } = action.payload
      if (row >= 0 && row < GRID_ROWS && col >= 0 && col < GRID_COLS) {
        state.grid[row][col] = pattern
      }
    },
    removeTileFromGrid(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload
      if (row >= 0 && row < GRID_ROWS && col >= 0 && col < GRID_COLS) {
        state.grid[row][col] = null
      }
    },
    resetGrid(state) {
      state.grid = createEmptyGrid()
      state.selectedPattern = null
    },
  },
})

export const { selectPattern, placePattern, removeTileFromGrid, resetGrid } = designSlice.actions
export default designSlice.reducer
