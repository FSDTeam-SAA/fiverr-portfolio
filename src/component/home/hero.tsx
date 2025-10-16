"use client";

import { Heart, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import SkillButton from "./skill-button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] flex flex-col items-center justify-center mt-8 lg:mt-0">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div>
          <div className="text-5xl font-bold space-y-2">
            <h1>Professional</h1>

            <div className="bg-gradient-to-r from-[#33b7e4] via-[#1978bf] to-[#1978bf] bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "Mobile App Developer",
                    "AI Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </div>

            <h1>on Fiverr</h1>
          </div>

          <p className="my-4 opacity-85 lg:max-w-lg">
            Empowering your ideas with custom AI solutions, cutting-edge apps,
            and stunning websites — all with a 100% satisfaction guarantee.
          </p>

          <div className="py-4 px-4 bg-white rounded-md flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl">250+</h1>
              <p className="text-sm opacity-60">Reviews</p>
            </div>

            <div>
              <h1 className="font-bold text-xl flex items-center gap-1">
                5 <Star fill="black" className="h-4 w-4" />
              </h1>
              <p className="text-sm opacity-60">Ratings</p>
            </div>

            <div>
              <h1 className="font-bold text-xl flex items-center gap-1">
                2{" "}
                <span className="flex items-center">
                  <Heart fill="black" className="h-2 w-2" />
                  <Heart fill="black" className="h-2 w-2" />
                </span>
              </h1>
              <p className="text-sm opacity-60">Ratings</p>
            </div>

            <div>
              <button className="flex items-center gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-[#20aada] via-[#20aada] to-[#1978bf] text-white hover:from-[#1978bf] hover:via-[#20aada] hover:to-[#20aada] transition-all duration-300">
                View Profile <MoveRight />
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <SkillButton skill="Mobile App development" />
            <SkillButton skill="Mobile App design" />
            <SkillButton skill="Flutter developer" />
            <SkillButton skill="Mobile App design" />
            <SkillButton skill="Flutter developer" />
          </div>
        </div>

        <div className="h-[600px] w-[600px] overflow-hidden relative">
          <Image
            src={`https://apporeo.agency/assets/Gazi%20vai-Uu6qjG0T.png`}
            alt="hero.png"
            width={1000}
            height={1000}
            className="w-[600px] h-[900px] absolute z-20"
          />

          <div className="h-[480px] w-[480px] border-[30px] border-[#e0f3ff] rounded-full absolute bottom-0 right-[10%]"></div>

          <div className="p-5 bg-gradient-to-r from-[#20aada] via-[#20aada] to-[#1978bf] w-[450px] rounded-lg text-center text-white absolute bottom-0 z-30 right-[12%]">
            <h1 className="font-bold text-xl">Gazi Alauddin</h1>
            <p>CEO at App Oreo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
