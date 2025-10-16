import React from "react";

const WorkSample = () => {
  return (
    <div className="container">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-blue-600 text-lg opacity-85 mb-8">
          {" "}
          &lt;-- Our Work Sample --&gt;{" "}
        </h1>
        <p className="text-3xl font-semibold flex items-center justify-center gap-2">
          <span>Visit</span>
          <span className="text-blue-600 opacity-85">Our Projects</span>
        </p>
        <p className="lg:max-w-2xl mx-auto opacity-80">
          Explore a diverse portfolio of completed works that showcase our
          creativity, technical expertise, and commitment to client
          satisfaction. Each project reflects our passion for quality and
          innovation.
        </p>
      </div>
    </div>
  );
};

export default WorkSample;
