"use client";

import React from "react";

import { companies, testimonials } from "@/Data/index";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-10">
      <h1 className="heading text-3xl md:text-5xl text-center font-bold mb-0">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

       {/*  <div className="flex flex-wrap items-center justify-center gap-2 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
            
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;