import { Code, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FooterMain = () => {
  return (
    <div className="flex sm:justify-between justify-end items-center w-full">
      <PaletteExample />
      <button className="p-2 outline outline-neutral-200 rounded place-self-end">
        <Code size={24} strokeWidth={1.5} color="#171717" />
      </button>
    </div>
  );
};

const paletteExample = {
  id: 0,
  name: "Retro Sunset",
  colors: "FFB866,FF8C42,D96C6C,7B6CA4,4E598C",
  likes: 248,
  author: "LuizDornelas",
};

const PaletteExample = () => {
  const colors = paletteExample.colors.split(",");
  return (
    <div className="hidden gap-2 justify-center items-center sm:flex">
      <div className="flex rounded-md overflow-hidden">
        {colors.map((color, idx) => (
          <div
            key={color + idx}
            style={{ backgroundColor: `#${color}` }}
            className="size-10"
          />
        ))}
      </div>

      <span className="h-10 w-[1px] block bg-neutral-200"></span>

      <div className="flex flex-col text-sm">
        <div className="flex gap-1">
          <p className="text-neutral-400">{paletteExample.name}</p>
          <p>-</p>
          <Link href="#">
            <p className="underline underline-offset-1 text-sky-500">
              @{paletteExample.author}
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-1 text-neutral-500">
          <Star size={16} strokeWidth={1.5} />
          <p>{paletteExample.likes}</p>
        </div>
      </div>
    </div>
  );
};
