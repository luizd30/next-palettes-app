import { PaletteType } from "@/app/data/palettes";
import { InfiniteMovingCards } from "./ui/inifinity-moving-card";
import { PaletteRow } from "./ui/palette-row";
import { shuffledPalettes } from "@/lib/utils";

export function AnimatedPaletteRows({ palettes }: { palettes: PaletteType[] }) {
  return (
    <div className="h-full top-1/2 left-1/2 -translate-1/2 absolute flex flex-1 flex-col justify-center items-center">
      <InfiniteMovingCards direction="right" speed="slow">
        {shuffledPalettes({ palettes }).map(({ id, palette }) => (
          <PaletteRow key={id} palette={palette} />
        ))}
      </InfiniteMovingCards>
      <InfiniteMovingCards direction="left" speed="slow">
        {shuffledPalettes({ palettes }).map(({ id, palette }) => (
          <PaletteRow key={id} palette={palette} />
        ))}
      </InfiniteMovingCards>
      <InfiniteMovingCards direction="right" speed="slow">
        {shuffledPalettes({ palettes }).map(({ id, palette }) => (
          <PaletteRow key={id} palette={palette} />
        ))}
      </InfiniteMovingCards>
    </div>
  );
}
