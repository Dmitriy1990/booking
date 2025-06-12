import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/app/constants/routes";
import logo from "@/assets/icons/logo-w.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10 md:py-16">
        <div className="grid gap-7 md:grid-cols-3">
          <div className="">
            <Link href={routes.home} className="mb-10 block">
              <Image src={logo} width={134} height={36} alt="travila" />
            </Link>
            <p className="text-gray-900">
              Dive into local recommendations for a truly authentic experience.
            </p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-black">Links</h4>
                <ul className="list-item space-y-5 text-gray-500">
                  <li>
                    <Link
                      href={routes.home}
                      className="transition-colors hover:text-gray-800"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={routes.about}
                      className="transition-colors hover:text-gray-800"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={routes.rooms}
                      className="transition-colors hover:text-gray-800"
                    >
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={routes.contacts}
                      className="transition-colors hover:text-gray-800"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-black">Legal</h4>
                <ul className="list-item space-y-5 text-gray-500">
                  <li>
                    <Link
                      href={"#"}
                      className="transition-colors hover:text-gray-800"
                    >
                      Legal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="transition-colors hover:text-gray-800"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="transition-colors hover:text-gray-800"
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"#"}
                      className="transition-colors hover:text-gray-800"
                    >
                      Cookies Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <h4></h4>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl border-t border-gray-500 px-4 py-8 text-left text-base text-gray-500">
        &copy; Copyring 2025 Travila. All rights reserved.
      </div>
    </footer>
  );
};
