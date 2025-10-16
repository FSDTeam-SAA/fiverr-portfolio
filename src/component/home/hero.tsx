"use client";

import React from "react";
import HeroText from "./hero-text";
import HeroImg from "./hero-img";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] flex flex-col items-center justify-center mt-8 lg:mt-0">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <HeroText />

        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
