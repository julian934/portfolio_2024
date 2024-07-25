"use client";

import React from "react";
import Image from "next/image";
import { companies, skillsets } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skillsets = () => {
  return (
    <section id="skillsets" className="py-20">
      <h1 className="heading">
        What I can do
        <span className="text-purple"> for you</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={skillsets}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company?.img}
                  alt={company?.name}
                  className="md:w-10 w-5"
                  height={30}
                  width={30}
                  quality={100}
                />
              
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillsets;