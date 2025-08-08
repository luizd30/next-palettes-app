import { rotatingWords } from "@/app/data/rotatingWord";
import { useAutoRotatingIndex } from "@/app/hooks/useAutoRotateIndex";
import React from "react";
import { RotatingItem } from "./ui/rotating-item";
import { Check } from "lucide-react";

export const WordListMobile = () => {
  const { index } = useAutoRotatingIndex(rotatingWords.length);
  return (
    <div className="sm:hidden flex justify-center">
      <RotatingItem index={index} direction="up">
        {rotatingWords.map(({ word }) => (
          <div key={word} className="flex items-center gap-1">
            <Check width={20} strokeWidth={1.5} color="oklch(55.6% 0 0)" />
            <p className="text-neutral-500">{word}</p>
          </div>
        ))}
      </RotatingItem>
    </div>
  );
};
