import React from "react";

export const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="w-40 h-10 rounded-lg text-base font-medium bg-neutral-900 text-neutral-50">
        Create
      </button>
      <button className="w-40 h-10 rounded-lg text-base font-medium bg-neutral-50 outline outline-neutral-900 text-neutral-900">
        Explore
      </button>
    </div>
  );
};
