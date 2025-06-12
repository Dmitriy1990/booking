"use client";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";

export const Navlink = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="hover:bg-grey-200 inline-flex items-center justify-center rounded-md p-2 text-sm text-gray-400 md:hidden"
      >
        {open ? <MdClose className="size-8" /> : <MdMenu className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="bg-grey-100 mt-4 flex flex-col rounded-sm p-4 text-sm font-semibold uppercase md:mt-0 md:flex-row md:items-center md:space-x-10 md:border-0 md:bg-white md:p-0"></ul>
      </div>
    </>
  );
};
