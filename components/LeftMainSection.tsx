import React from "react";
import { Logo } from "./ui/logo";
import { CardStack } from "./ui/card-stack";
import { AnimatedPaletteRows } from "./AnimatedPaletteRows";
import { palettes } from "@/app/data/palettes";

export const LeftMainSection = () => {
  return (
    <div className="justify-between relative hidden h-full w-full border border-neutral-200 rounded-3xl col-start-1 col-span-2 overflow-hidden lg:flex lg:flex-col">
      <Logo />
      <AnimatedPaletteRows palettes={palettes} />
      <CardStack />
    </div>
  );
};
