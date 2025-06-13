"use client";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";
import { routes } from "@/app/constants/routes";

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
        <ul className="bg-grey-100 mt-4 flex flex-col rounded-sm p-4 text-sm font-semibold uppercase md:mt-0 md:flex-row md:items-center md:space-x-10 md:border-0 md:bg-white md:p-0">
          <li>
            <Link
              href={routes.home}
              className="block rounded-sm px-3 py-2 text-gray-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={routes.about}
              className="block rounded-sm px-3 py-2 text-gray-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={routes.rooms}
              className="block rounded-sm px-3 py-2 text-gray-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href={routes.contacts}
              className="block rounded-sm px-3 py-2 text-gray-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              href={routes.myReservation}
              className="block rounded-sm px-3 py-2 text-gray-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              My Reservation
            </Link>
          </li>
          <li>
            <Link
              href={routes.admin.dashboard}
              className="block rounded-sm px-3 py-2 text-gray-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={routes.admin.room}
              className="block rounded-sm px-3 py-2 text-gray-800  md:p-0 hover:bg-transparent hover:text-yellow-500 transition-all"
            >
              Manage Room
            </Link>
          </li>
          <li className="pt-2 md:pt-0">
            <Link
              href={routes.signin}
              className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
