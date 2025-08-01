'use client';

import React, { useEffect, useRef, useState } from 'react';
import Orb from './components/orb';
import { motion, useInView } from 'framer-motion';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/resizenav";
import Services from './services/page';


export default function Landing() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [startShiftUp, setStartShiftUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => setStartShiftUp(true), 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const yShift = isMobile ? -160 : -100;
  const contentYShift = isMobile ? -40 : 0;

  return (
    <>
      {/* NAVBAR */}
      <div className="relative w-full">
        <Navbar className="fixed top-0 left-0 w-full z-[99] backdrop-blur-md bg-black/70 border-b border-white/10">
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="secondary">Login</NavbarButton>
              <NavbarButton variant="primary">Book a call</NavbarButton>
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton variant="primary" className="w-full">
                  Login
                </NavbarButton>
                <NavbarButton variant="primary" className="w-full">
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* ORB */}
        <motion.div
          initial={{ scale: 1, y: 0 }}
          animate={startShiftUp ? { scale: 0.6, y: yShift } : { scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        >
          <Orb
            hoverIntensity={0}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </motion.div>

        {/* AXORA TEXT */}
        <motion.div
          initial={{ scale: 2, y: 0 }}
          animate={startShiftUp ? { scale: 0.7, y: yShift } : { scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center pointer-events-none space-y-4"
        >
          <h1 className="text-[9vw] font-bold tracking-[0.4em] font-anta leading-none">
            A X O R A
          </h1>
          <h2 className="text-[3vw] font-light tracking-[0.5em] bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient">
            T E C H N O L O G I E S
          </h2>
        </motion.div>

        {/* CONTENT REVEAL */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            startShiftUp
              ? { opacity: 1, y: contentYShift }
              : { opacity: 0, y: 50 }
          }
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="absolute bottom-15 w-full flex flex-col items-center justify-center text-white text-center px-4 z-20"
        >
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            We Build Websites That Build Your Business.
          </h3>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mb-6">
            Axora Technologies helps startups and growing businesses with powerful websites, SEO, and digital strategy — built for performance and scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
              Get a Free Quote
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition duration-300">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>
      
      <motion.h3
        className="font-anta text-center text-5xl p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h3>

      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Services />
      </motion.div>
    </>
  );
}
