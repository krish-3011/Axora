"use client";

import React from "react";
import { WobbleCard } from "../components/wobblecard";

export default function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 max-w-7xl mx-auto w-full">

      {/* Website Design & Development */}
      <WobbleCard
        containerClassName="col-span-1 row-span-2  lg:col-span-1 row-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Website Design & Development
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            We craft fast, responsive, and SEO-optimized websites tailored to
            your brand. Whether it's a business site or an e-commerce platform —
            we build with performance and scale in mind.
          </p>
        </div>
        <img
          src="/webdev.png"
          width={500}
          height={500}
          alt="website demo"
          className="absolute -right-4 lg:-right-[0%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* SEO & Strategy */}
      <WobbleCard containerClassName="col-span-2 min-h-[300px] bg-neutral-900">
        <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          SEO & Ranking Strategy
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          We help your site get discovered with strategic SEO — from keyword
          research and content optimization to technical audits and local search.
        </p>
                <img
          src="/seo.png"
          width={400}
          height={400}
          alt="branding visual"
          className="absolute -right-10 md:-right-[0%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Branding & Maintenance */}
      <WobbleCard containerClassName="col-span-2 lg:col-span-2 bg-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Branding, Strategy & Maintenance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Build a memorable brand identity and keep your digital presence
            strong. From logo design to technical maintenance, Axora ensures
            your website always performs and reflects your vision.
          </p>
        </div>
        <img
          src="/branding.png"
          width={500}
          height={500}
          alt="branding visual"
          className="absolute -right-10 md:-right-[0%] lg:-right-[0%] -bottom-0 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
