import React from "react";
import Image from "next/image";
import hero from "@/assets/images/slider_bg01.jpg";
import Link from "next/link";
import { routes } from "@/app/constants/routes";

export const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="hero"
          fill
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-3 text-7xl leading-tight font-extrabold capitalize">
          Book your room
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Get special offer just for you today.
        </p>
        <div className="flex gap-5">
          <Link
            href={routes.rooms}
            className="bg-orange-400 px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-orange-500 hover:shadow-lg md:px-10"
          >
            Book now
          </Link>
          <Link
            href={routes.contacts}
            className="border border-orange-500 bg-transparent px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-orange-500 hover:shadow-lg md:px-10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
