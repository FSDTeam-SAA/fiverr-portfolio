import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Globe, MapPin, Star } from "lucide-react";

export const TestimonialsText = () => {
  return (
    <div className="lg:max-w-2xl">

      <div className="lg:relative lg:w-[300px]">
        {/* Large Quote Mark */}
        <div className="mb-4 opacity-60">
          <svg
            width="140"
            height="120"
            viewBox="0 0 140 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#7DD3FC]"
          >
            <path
              d="M0 120V71.4286C0 50.8571 5.83333 33.5714 17.5 19.5714C29.1667 5.57143 44.1667 0 62.5 0V17.1429C52.0833 17.1429 43.75 20.7143 37.5 27.8571C31.25 35 28.125 44.2857 28.125 55.7143H62.5V120H0ZM77.5 120V71.4286C77.5 50.8571 83.3333 33.5714 95 19.5714C106.667 5.57143 121.667 0 140 0V17.1429C129.583 17.1429 121.25 20.7143 115 27.8571C108.75 35 105.625 44.2857 105.625 55.7143H140V120H77.5Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6 leading-tight lg:absolute lg:top-10 lg:right-0">
          <span className="text-black">What Our</span>
          <br />
          <span className="text-[#2563EB]">Client Says</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-gray-700 text-lg mb-6 lg:mt-14">
        We are a group of professionals who are passionate about what we do.
      </p>

      {/* Location and Language */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-700" />
          <span className="text-gray-700 font-medium">Bangladesh</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-gray-700" />
          <span className="text-gray-700 font-medium">English, Bengali</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 fill-[#FCD34D] text-[#FCD34D]" />
        <span className="text-gray-900 font-semibold">4.9/5</span>
        <span className="text-gray-700">| 250+ Clients</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-base mb-8">
        Trusted Worldwide | Get in touch with our professionals team and become
        happy like our clients.
      </p>

      {/* Avatar Row */}
      <div className="flex items-center gap-3 mb-8">
        {/* 5★ Badge */}
        <div className="w-14 h-14 rounded-full bg-[#1F2937] flex items-center justify-center">
          <span className="text-white text-sm font-semibold">5★</span>
        </div>

        {/* Profile Avatars */}
        <Avatar className="w-14 h-14 border-2 border-white">
          <AvatarImage src="/professional-person-1.png" />
          <AvatarFallback>P1</AvatarFallback>
        </Avatar>

        <Avatar className="w-14 h-14 border-2 border-white">
          <AvatarImage src="/professional-person-2.png" />
          <AvatarFallback>P2</AvatarFallback>
        </Avatar>

        <Avatar className="w-14 h-14 border-2 border-white">
          <AvatarImage src="/professional-person-3.png" />
          <AvatarFallback>P3</AvatarFallback>
        </Avatar>

        <Avatar className="w-14 h-14 border-2 border-white">
          <AvatarImage src="/professional-person-4.png" />
          <AvatarFallback>P4</AvatarFallback>
        </Avatar>

        {/* More+ Button */}
        <div className="w-14 h-14 rounded-full bg-[#1F2937] flex items-center justify-center">
          <span className="text-white text-xs font-semibold">More+</span>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-8">
        <button className="text-[#2563EB] font-semibold flex items-center gap-2 hover:underline">
          Read More Reviews
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="text-[#2563EB] font-semibold flex items-center gap-2 hover:underline">
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
