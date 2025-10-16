"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  bgColor: string;
  title: string;
  icon: React.ReactNode;
  details: string;
  animateType?: string;
}

const ChooseUsCard = ({
  bgColor,
  title,
  icon,
  details,
  animateType,
}: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className={`${bgColor} p-5 rounded-md text-center`}>
      <div
        data-aos={animateType}
        data-aos-delay="400"
        className={"bg-white p-4 rounded-lg"}
      >
        <h1 className="text-lg font-semibold">{title}</h1>

        <div className="bg-blue-100 h-14 w-14 rounded-full flex flex-col items-center justify-center mx-auto my-4">
          {icon}
        </div>

        <p className="text-sm text-gray-600">{details}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
