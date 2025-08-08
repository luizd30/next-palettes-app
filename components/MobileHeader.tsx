import React from "react";
import { Logo } from "./ui/logo";

export const MobileHeader = () => {
  return (
    <div className="lg:hidden">
      <Logo />
    </div>
  );
};
