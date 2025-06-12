import { LogoIcon } from "@/assets";
import Link from "next/link";
import React from "react";

export const Navbar =
  () => {
    return (
      <div className="fixed top-0 z-20 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>
      </div>
    );
  };
