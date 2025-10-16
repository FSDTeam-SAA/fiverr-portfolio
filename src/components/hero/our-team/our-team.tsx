import React from "react";
import { TeamCarousel } from "./team-carousel";

const OurTeam = () => {
  return (
    <div className="mt-10">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-blue-600 text-lg opacity-85 mb-8">
          {" "}
          &lt;-- Our Team --&gt;{" "}
        </h1>
        <p className="text-3xl font-semibold flex items-center justify-center gap-2">
          <span>Meet Our</span>
          <span className="text-blue-600 opacity-85">Team Members</span>
        </p>
        <p className="lg:max-w-2xl mx-auto opacity-80">
          Get to know the skilled professionals behind our success. Our team of
          developers, designers, and strategists collaborate to bring your
          vision to life with dedication and a personal touch.
        </p>
      </div>

      <div className="mt-10">
        <TeamCarousel />
      </div>
    </div>
  );
};

export default OurTeam;
