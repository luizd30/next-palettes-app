import { PaletteType } from "@/app/data/palettes";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffledPalettes({ palettes }: { palettes: PaletteType[] }) {
  return [...palettes].sort(() => Math.random() - 0.5);
}
