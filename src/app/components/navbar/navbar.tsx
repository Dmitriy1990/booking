import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/icons/logo-w.svg";
import { Navlink } from "./navlink";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src={logo} width={134} height={36} alt="travila" />
        </Link>
        <Navlink/>
      </div>
    </div>
  );
};
