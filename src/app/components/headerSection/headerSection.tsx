import Image from "next/image";
import hero from "@/assets/images/hero.jpg";
import { FC } from "react";

type Props = {
  title: string;
  desc: string;
};

export const HeaderSection: FC<Props> = ({ title, desc }) => {
  return (
    <header className="relative h-60 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero}
          className="object-cover object-center w-full h-full"
          fill
          alt="Header"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
        <p className="text-xl text-gray-400">{desc}</p>
      </div>
    </header>
  );
};
