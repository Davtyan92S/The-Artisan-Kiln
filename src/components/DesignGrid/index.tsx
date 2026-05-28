"use client";

import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  GRID_COLS,
  GRID_ROWS,
  placePattern,
  removeTileFromGrid,
} from "@/store/designSlice";
import { DesignPattern } from "@/types";
import { useDesignDrag } from "@/hooks";
import { GridCell } from "./GridCell";

export const DesignGrid = () => {
  const dispatch = useDispatch();
  const { grid, selectedPattern } = useSelector(
    (state: RootState) => state.design,
  );
  const { dropTarget } = useDesignDrag();

  const cells = useMemo(
    () =>
      Array.from({ length: GRID_ROWS }, (_, row) =>
        Array.from({ length: GRID_COLS }, (_, col) => grid[row]?.[col] ?? null),
      ),
    [grid],
  );

  const gridStyle = useMemo(
    () => ({ gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))` }),
    [],
  );

  const handleCellClick = useCallback(
    (row: number, col: number, cell: DesignPattern | null) => {
      if (cell) {
        dispatch(removeTileFromGrid({ row, col }));
        return;
      }
      if (selectedPattern) {
        dispatch(placePattern({ row, col, pattern: selectedPattern }));
      }
    },
    [dispatch, selectedPattern],
  );

  const isDropTargetAt = useCallback(
    (row: number, col: number) =>
      dropTarget?.row === row && dropTarget?.col === col,
    [dropTarget],
  );

  return (
    <div className="relative w-full overflow-auto  design-scroll">
      <div
        className="grid w-full gap-px bg-ink"
        style={gridStyle}
        role="grid"
        aria-label="Tile pattern grid"
      >
        {cells.map((row, rIdx) =>
          row.map((cell, cIdx) => (
            <GridCell
              key={`${rIdx}-${cIdx}`}
              row={rIdx}
              col={cIdx}
              cell={cell}
              isDropTarget={isDropTargetAt(rIdx, cIdx)}
              onCellClick={handleCellClick}
            />
          )),
        )}
      </div>
    </div>
  );
};
