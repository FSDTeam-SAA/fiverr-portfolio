import Image from "next/image";
import React from "react";

const ServeClients = () => {
  return (
    <div className="container pb-24">
      <div className="lg:max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">
            We serve over 250+ foreign clients
          </h1>
          <p className="opacity-85 mt-4 lg:max-w-sm ">
            Connect LemonWares with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Image
            src={`https://apporeo.agency/assets/img1-DV8AdcQs.png`}
            alt="company.png"
            width={1000}
            height={1000}
            className="w-[200px] h-[100px]0"
          />

          <Image
            src={`https://apporeo.agency/assets/img1-DV8AdcQs.png`}
            alt="company.png"
            width={1000}
            height={1000}
            className="w-[200px] h-[100px]"
          />

          <Image
            src={`https://apporeo.agency/assets/img1-DV8AdcQs.png`}
            alt="company.png"
            width={1000}
            height={1000}
            className="w-[200px]  h-[100px]"
          />

          <Image
            src={`https://apporeo.agency/assets/img1-DV8AdcQs.png`}
            alt="company.png"
            width={1000}
            height={1000}
            className="w-[200px]  h-[100px]"
          />

          <Image
            src={`https://apporeo.agency/assets/img1-DV8AdcQs.png`}
            alt="company.png"
            width={1000}
            height={1000}
            className="w-[200px] h-[100px]"
          />

          <Image
            src={`https://apporeo.agency/assets/img1-DV8AdcQs.png`}
            alt="company.png"
            width={1000}
            height={1000}
            className="w-[200px] h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServeClients;
