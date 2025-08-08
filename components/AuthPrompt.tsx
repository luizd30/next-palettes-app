import Link from "next/link";
import React from "react";

export const AuthPrompt = () => {
  return (
    <div>
      <p className="text-sm text-center">
        Want to save your palettes?{" "}
        <Link href="#" className="text-sky-500 underline underline-offset-1">
          Create an account
        </Link>{" "}
        or{" "}
        <Link href="#" className="text-sky-500 underline underline-offset-1">
          Sign in
        </Link>
      </p>
    </div>
  );
};
