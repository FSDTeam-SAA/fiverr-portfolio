import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhoneNavbar = () => {
  return (
    <div className="lg:hidden flex items-center space-x-4">
      <Button size="sm" className="text-white text-xs">
        Fiverr
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[350px] bg-white/95 backdrop-blur-lg border-r border-gray-200"
        >
          <div className="flex flex-col h-full pt-8">
            {/* Mobile menu header with logo */}
            <Link href={'/'}>
              <div className="flex items-center justify-center pb-8 border-b border-gray-200">
                <Image
                  src={`https://apporeo.agency/assets/Rectangle20-CN8pI3ef.png`}
                  alt="logo.png"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
              </div>
            </Link>

            {/* Mobile menu links */}
            <div className="flex-1 py-8">
              <ul className="space-y-4">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block font-medium text-gray-600 hover:text-[#0000ffd3] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 text-base"
                      onClick={() =>
                        document.getElementById("close-sheet")?.click()
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu footer */}
            <div className="pt-6 border-t border-gray-200">
              <Button className="w-full text-white">Fiverr Profile</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PhoneNavbar;
