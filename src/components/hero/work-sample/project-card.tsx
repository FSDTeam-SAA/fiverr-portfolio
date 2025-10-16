"use client";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg transform-gpu overflow-hidden">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={`https://i.ibb.co/XZmVZKjv/Nutra-AI-App003.jpg`}
          alt="project.png"
          width={1000}
          height={1000}
          className="rounded-t-lg transition-all duration-300 ease-out hover:scale-105"
        />
      </div>

      <div className="p-4 border border-gray-300 border-t-0 rounded-b-lg">
        <div data-aos="fade-right" data-aos-delay="400">
          <p className="opacity-70">
            Track meals easily—just snap a photo for instant nutrition insights.
          </p>

          <h1 className="text-xl font-medium mt-2 mb-4">
            Nutra AI - Calorie Counter
          </h1>

          <p className="text-blue-500 font-medium">View Project Details</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
