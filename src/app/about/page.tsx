import { Metadata } from "next";
import { HeaderSection } from "../components/headerSection/headerSection";
import aboutImg from "@/assets/images/slider_bg.jpg";
import Image from "next/image";
import { MdOutlineRemoveRedEye, MdOutlineMyLocation } from "react-icons/md";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

export default function Page() {
  return (
    <div>
      <HeaderSection title="About" desc="description page" />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src={aboutImg}
            width={650}
            height={579}
            className=""
            alt="about"
          />
          <div className="">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium porro ratione odio deleniti reprehenderit, delectus
              quae cum et harum iste voluptatibus nesciunt natus. Sunt eius
              excepturi, facere quam aperiam dicta!
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <MdOutlineRemoveRedEye className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision:</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error sequi totam, consequuntur commodi tempora incidunt?
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <MdOutlineMyLocation className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission:</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste tempore quidem molestias est quas facere rem quaerat
                    explicabo atque officiis?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
