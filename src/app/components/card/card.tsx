import Image from "next/image";
import hero from "@/assets/images/hero.jpg";
import Link from "next/link";
import { MdPerson } from "react-icons/md";

export const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-4xl overflow-hidden transition duration-150 hover:shadow-sm">
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image
          src={hero}
          width={384}
          height={256}
          alt="room"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-bold mb-2">
          <Link
            href={"#"}
            className="hover:text-gray-800 transition-colors duration-150"
          >
            Luxury room
          </Link>
        </h4>
        <h4 className="text-2xl mb-7">
          <span className="font-bold text-black">$78.99 </span>
          <span className="text-gray-400 text-sm">/Night/</span>
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500">
            <MdPerson />
            <span className="text-sm ">2 People</span>
          </div>
          <Link
            href={"#"}
            className="px-4 py-3 border border-gray-200 md:px-6 md:py-2 font-semibold text-black bg-gray-100 rounded-4xl hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-150"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};
