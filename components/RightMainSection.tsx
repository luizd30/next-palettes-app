"use client";

import React from "react";
import { DotBackground } from "./ui/dot-background";
import { Badge } from "./Badge";
import { Headline } from "./Headline";
import { HeroActions } from "./HeroActions";
import { WordListMobile } from "./WordListMobile";
import { WordListDesktop } from "./WordListDesktop";
import { AuthPrompt } from "./AuthPrompt";
import { MobileHeader } from "./MobileHeader";
import { FooterMain } from "./FooterMain";

export const RightMainSection = () => {
  return (
    <div className="p-4 w-full h-full border border-neutral-200 rounded-3xl bg-neutral-100 lg:col-start-3 col-span-3">
      <DotBackground>
        <div className="flex flex-col z-10 h-full w-full">
          <MobileHeader />

          <div className="flex flex-col flex-1 justify-between items-center gap-10 p-6">
            <div className="flex flex-1 justify-center items-center flex-col gap-10">
              <Badge />
              <div className="flex flex-col gap-8">
                <Headline />

                <WordListMobile />

                <WordListDesktop />

                <HeroActions />
              </div>
              <AuthPrompt />
            </div>
            <FooterMain/>
          </div>
        </div>
      </DotBackground>
    </div>
  );
};
{
  /* <div className="flex flex-col z-10 h-full w-full">
          <MobileHeader />
          <div className="flex-1 flex flex-col justify-center items-center gap-10 p-4 sm:p-6">
            <Badge />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <Headline />

                <WordListMobile />

                <WordListDesktop />

                <HeroActions />
              </div>
              <AuthPrompt />
            </div>

          </div>
            <FooterMain />
        </div> */
}
