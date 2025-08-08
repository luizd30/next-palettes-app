import { rotatingWords } from "@/app/data/rotatingWord";
import { Check } from "lucide-react";
import React from "react";

export const WordListDesktop = () => {
  return (
    <div className="hidden sm:flex gap-6">
      {rotatingWords.map(({ id, word }) => (
        <div key={id} className="flex justify-center items-center gap-1">
          <Check width={20} strokeWidth={1.5} color="oklch(55.6% 0 0)" />
          <p className="text-neutral-500">{word}</p>
        </div>
      ))}
    </div>
  );
};
