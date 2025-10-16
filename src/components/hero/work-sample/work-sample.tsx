import React from "react";
import ProjectCard from "./project-card";

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

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className="mt-20 text-center">
        <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-slate-800 group border border-blue-500/50 border-b-0">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-500 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="#3B9DF8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>

          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>

          <span className="relative w-full text-left text-blue-500 duration-200 ease-in-out group-hover:text-white">
            View All Projects
          </span>
        </button>
      </div>
    </div>
  );
};

export default WorkSample;
