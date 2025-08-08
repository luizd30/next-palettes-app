"use client";

import React from "react";

export const PaletteRow = ({ palette }: { palette: string }) => {
  const colors = palette.split(",");

  return (
    <div className="p-2 rounded-lg border border-neutral-200">
      <div className="flex justify-center justify-items-center rounded overflow-hidden">
        {colors.map((color, idx) => (
          <div
            className="size-11"
            key={idx + color}
            style={{ backgroundColor: `#${color}` }}
          />
        ))}
      </div>
    </div>
  );
};
