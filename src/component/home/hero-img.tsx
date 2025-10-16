"use client";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroImg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="h-[600px] w-[600px] overflow-hidden relative">
      <Image
        src={`https://apporeo.agency/assets/Gazi%20vai-Uu6qjG0T.png`}
        alt="hero.png"
        width={1000}
        height={1000}
        className="w-[600px] h-[900px] absolute z-20"
        data-aos="fade-up"
        data-aos-delay="400"
      />

      <div
        data-aos="zoom-in"
        data-aos-delay="0"
        className="h-[480px] w-[480px] border-[30px] border-[#e0f3ff] rounded-full absolute bottom-0 right-[10%]"
      ></div>

      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="p-5 bg-gradient-to-r from-[#20aada] via-[#20aada] to-[#1978bf] w-[450px] rounded-lg text-center text-white absolute bottom-0 z-30 right-[12%]"
      >
        <h1 className="font-bold text-xl">Gazi Alauddin</h1>
        <p>CEO at App Oreo</p>
      </div>
    </div>
  );
};

export default HeroImg;
