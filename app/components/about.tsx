"use client";

import React from "react";
import { motion } from "framer-motion";
import CardSwap, { Card } from "./cardswap";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-2 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden my-50" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-2 md:gap-y-16 gap-x-12 items-center z-10 relative">

        {/* Text Section (No changes here) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-anta text-white leading-tight tracking-tight mb-4">
            About Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Empowering Brands <br className="hidden sm:block" />
            Through Smart Web Solutions
          </h3>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            Axora Technologies is not just another digital agency — we're your growth partner. Our mission is to craft lightning-fast, scalable, and SEO-optimized websites that don't just look good, but work brilliantly.
          </p>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed">
            We bring together creative design, robust development, and business insight to deliver solutions that stand out and scale up.
          </p>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-base text-neutral-300">
            {[
              "Custom Web Development",
              "SEO & Performance",
              "Branding Strategy",
              "Maintenance & Support",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- Card Section: The Final Fix --- */}
        {/* The outer div's only job is to provide a responsive container that the card stack can be centered within. */}
        <div className="w-full h-[750px] lg:min-h-[550px] flex justify-center items-center">
            {/* 1. This is our "Frame". It has a defined size and is set to relative, creating a positioning context. */}
            <div className="relative w-[320px] h-[450px] lg:w-full lg:max-w-lg lg:h-[550px]">
                {/* 2. This is the "Content". We force it to the center of the frame. */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
                >
                    <CardSwap
                        cardDistance={40}
                        verticalDistance={60}
                        delay={3000}
                        pauseOnHover={true}
                    >
                        {[{
                            title: "Reliable",
                            content: (<img src="/reliable.png" alt="Reliable" className="w-full h-full object-cover"/>),
                            gradient: "from-[#1F1C2C] to-[#928DAB]",
                        }, {
                            title: "Smooth",
                            content: (<p className="text-base opacity-90 p-6">We prioritize seamless UX and performant interfaces across all platforms.</p>),
                            gradient: "from-[#16222A] to-[#3A6073]",
                        }, {
                            title: "Customizable",
                            content: (<p className="text-base opacity-90 p-6">Every product is tailored to your unique goals and vision — from design to delivery.</p>),
                            gradient: "from-[#1A2980] to-[#26D0CE]",
                        }, {
                            title: "Growth-Driven",
                            content: (<p className="text-base opacity-90 p-6">Everything we build is engineered to help you scale faster and smarter.</p>),
                            gradient: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
                        }].map(({ title, content, gradient }, idx) => (
                            <Card key={idx} className={`text-white bg-gradient-to-br ${gradient} overflow-hidden`}>
                                <div className="flex items-center justify-between px-4 py-3 bg-white/10 border-b border-white/20">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                                    <div className="w-4" />
                                </div>
                                <div className="w-full h-[calc(100%-2.75rem)]">{content}</div>
                            </Card>
                        ))}
                    </CardSwap>
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
}