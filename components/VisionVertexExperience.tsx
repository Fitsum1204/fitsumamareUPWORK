import React from "react";

import { visionVertexApps } from "@/Data/index";
import { Button } from "@/components/ui/MovingBorders";

const VisionVertexExperience = () => {
  return (
    <div className="w-full mt-16">
      <Button
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        containerClassName="w-full"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 w-full">
          <img
            src="/exp1.svg"
            alt="Vision Vertex"
            className="lg:w-32 md:w-20 w-16"
          />
          <div className="lg:ms-5 text-start">
            <h1 className="text-xl md:text-2xl font-bold">
              Vision Vertex — Junior Full-Stack Developer
            </h1>
            <p className="text-purple mt-2 font-semibold">
              November 2025 – Present
            </p>
            <p className="text-white-100 mt-3 font-semibold">
              I contribute to the development of business applications at Vision
              Vertex, working across frontend and backend development, API
              integration, testing, and application infrastructure.
            </p>
          </div>
        </div>
      </Button>

      <div className="w-full mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
        {visionVertexApps.map((app) => (
          <Button
            key={app.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            containerClassName="w-full md:col-span-1"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-start p-6 md:p-8 gap-3 w-full text-start">
              <h2 className="text-xl md:text-2xl font-bold">{app.title}</h2>
              <p className="text-purple font-semibold">{app.role}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {app.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/20 text-white-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>

      <div
        className="mt-10 rounded-[1.75rem] border border-slate-800 p-6 md:p-8 text-start"
        style={{
          background: "rgb(4,7,29)",
        }}
      >
        <h3 className="text-xl md:text-2xl font-bold">
          🔒 Private Company Project
        </h3>
        <p className="text-white-100 mt-3 font-semibold">
          Source code and detailed screenshots are not publicly available
          because this is a private company project.
        </p>
      </div>
    </div>
  );
};

export default VisionVertexExperience;
