"use client";
import React from "react";
import { Home, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#a9e9f6] py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
        {/* Logo and email */}
        <div className="space-y-4">
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

          <p className="opacity-85">
            AI development services with 100% client satisfaction.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Send Email"
              className="px-3 py-2 rounded-l border border-[#1891b2] outline-none w-full"
            />
            <button className="bg-[#1891b2] text-white px-4 rounded-r">
              Send
            </button>
          </div>
          <div className="flex space-x-4 text-xl mt-2">
            <Home className="text-[#1891b2]" />
            <Linkedin className="text-[#1891b2]" />
          </div>
        </div>

        {/* Committed To */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Committed To</h3>
          <p className="opacity-85 mb-3">
            Ordet is a protégé of the Chicago tommusryve educate and collaborate
            with le ifference enternmentally ant soccally. Let’s ca Mare.
          </p>
          <button className="text-blue-600 hover:underline">
            Go to profile &rsaquo;
          </button>
        </div>

        {/* Quick Links */}
        <div className="lg:flex flex-col items-center">
          <div className="space-y-2 ">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-1 ">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Home &rsaquo;
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Portfolio &rsaquo;
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Services &rsaquo;
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Teams &rsaquo;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="space-y-1 ">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Fiverr Profile &rsaquo;
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Contact Us &rsaquo;
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Client Reviews &rsaquo;
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Our Goals &rsaquo;
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-sky-800 mt-8">
        © 2025 Team A. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
