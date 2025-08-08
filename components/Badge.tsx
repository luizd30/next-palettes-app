import { Sprout } from "lucide-react";
import React from "react";

export const Badge = () => {
  return (
    <div className="flex justify-center items-center gap-2 px-8 py-2 border border-sky-500 rounded-lg w-fit h-8 bg-neutral-50">
      <Sprout size={16} strokeWidth={1.5} color="oklch(68.5% 0.169 237.323)" />
      <p className="text-sm text-sky-500">Creativity</p>
    </div>
  );
};
