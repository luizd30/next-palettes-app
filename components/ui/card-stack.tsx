"use client";

import { useAutoRotatingIndex } from "@/app/hooks/useAutoRotateIndex";
import { RotatingItem } from "./rotating-item";

type CardType = {
  id: number;
  title: string;
  description: string;
};

const cards: CardType[] = [
  {
    id: 0,
    title: "Endless Color Inspiration",
    description:
      "Explore an infinite world of palettes designed to spark your creativity and bring your ideas to life.",
  },
  {
    id: 1,
    title: "Full Creative Control",
    description:
      "Customize every detail of your palette with powerful tools that put you in charge of your color vision.",
  },
  {
    id: 2,
    title: "Effortless Export & Sharing",
    description:
      "Download, copy, or share your palettes instantly across your favorite platforms and design tools.",
  },
  {
    id: 3,
    title: "Instant Palette Generation",
    description:
      "Create beautiful color combinations in seconds with smart algorithms and intuitive controls.",
  },
  {
    id: 4,
    title: "Colors That Spark Ideas",
    description:
      "Discover unique color palettes that fuel your imagination and elevate your design projects.",
  },
  {
    id: 5,
    title: "Design Smarter, Not Harder",
    description:
      "Save time and boost productivity with a streamlined color workflow made for modern creators.",
  },
  {
    id: 6,
    title: "From Idea to Palette in Seconds",
    description:
      "Turn concepts into curated palettes with just a few clicks—perfect for rapid brainstorming and prototyping.",
  },
];

export const CardStack = () => {
  const { index } = useAutoRotatingIndex(cards.length);

  return (
    <div className="flex flex-col p-8 justify-center items-center">
      <RotatingItem index={index} direction="up">
        {cards.map((card) => (
          <div className="flex flex-col gap-2">
            <p className="font-medium text-base text-neutral-900">
              {card.title}
            </p>
            <p className="text-base text-neutral-700">{card.description}</p>
          </div>
        ))}
      </RotatingItem>
    </div>
  );
};
