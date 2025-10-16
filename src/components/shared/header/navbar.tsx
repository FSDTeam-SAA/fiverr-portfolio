"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhoneNavbar from "./phone-navbar";
import { navLinks } from "@/utils/navLinks";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto h-16 lg:h-24 ">
        <div className="flex items-center justify-between h-full">
          {/* logo */}
          <Link href={"/"}>
            <div className="flex-shrink-0">
              <Image
                src={`https://apporeo.agency/assets/Rectangle20-CN8pI3ef.png`}
                alt="logo.png"
                width={1000}
                height={1000}
                className="h-12 w-12 lg:h-24 lg:w-24 object-contain"
                priority
              />
            </div>
          </Link>

          {/* links for desktop */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="font-medium text-gray-800 transition-colors duration-200 rounded-md text-md opacity-85 hover:text-[#0000ffd3]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Button className="text-white">Fiverr Profile</Button>
          </div>

          <PhoneNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
