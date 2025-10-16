"use client";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
  animateType: string;
}

const ServiceCard = ({ icon, title, description, animateType }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div data-aos={animateType} data-aos-delay="400" className="rounded-lg">
      <div className="bg-white p-5 rounded-lg text-center border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg transform-gpu">
        <div className="bg-[#eff6ff] w-16 h-16 mx-auto flex items-center justify-center rounded-md">
          <h1 className="text-4xl">{icon}</h1>
        </div>
        <h1 className="mt-5 text-xl font-medium">{title}</h1>
        <p className="mt-2 opacity-70 text-sm">{description}</p>
        <Button className="mt-4">Order Now</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
