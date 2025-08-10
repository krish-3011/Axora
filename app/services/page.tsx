"use client";

import React from "react";
import { WobbleCard } from "../components/wobblecard";

export default function Services() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-8 max-w-7xl mx-auto w-full lg:grid-cols-3 lg:grid-rows-2">
      
      {/* Website Design & Development */}
      <WobbleCard
        containerClassName="bg-blue-800 relative lg:col-span-1 lg:row-span-2 lg:min-h-[300px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Website Design & Development
          </h2>
          <p className="mt-4 text-left text-sm md:text-base text-neutral-200 leading-relaxed">
            We craft fast, responsive, and SEO-optimized websites tailored to your brand. Whether it's a business site or an e-commerce platform — we build with performance and scale in mind.
          </p>
        </div>
        <img
          src="/webdev.png"
          width={500}
          height={500}
          alt="website demo"
          className="absolute -right-4 -bottom-10 object-contain rounded-2xl hidden md:block"
        />
      </WobbleCard>

      {/* SEO & Ranking Strategy */}
      <WobbleCard
        containerClassName="bg-neutral-900 relative lg:col-span-2 lg-rows-span-2 lg:min-h-[300px]"
      >
        <div className="max-w-xl">
          <h2 className="text-left text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            SEO & Ranking Strategy
          </h2>
          <p className="mt-4 text-left text-sm md:text-base text-neutral-200 leading-relaxed max-w-[26rem]">
            We help your site get discovered with strategic SEO — from keyword research and content optimization to technical audits and local search.
          </p>
        </div>
        <img
          src="/seo.png"
          width={400}
          height={400}
          alt="seo visual"
          className="absolute -right-10 -bottom-10 object-contain rounded-2xl hidden md:block"
        />
      </WobbleCard>

      {/* Branding, Strategy & Maintenance */}
      <WobbleCard
        containerClassName="bg-indigo-900 relative lg:col-span-2 lg:min-h-[300px]"
      >
        <div className="max-w-sm">
          <h2 className="text-left text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Branding, Strategy & Maintenance
          </h2>
          <p className="mt-4 text-left text-sm md:text-base text-neutral-200 leading-relaxed max-w-[26rem]">
            Build a memorable brand identity and keep your digital presence strong. From logo design to technical maintenance, Axora ensures your website always performs and reflects your vision.
          </p>
        </div>
        <img
          src="/branding.png"
          width={500}
          height={500}
          alt="branding visual"
          className="absolute -right-10 -bottom-0 object-contain rounded-2xl hidden md:block"
        />
      </WobbleCard>
    </div>
  );
}
