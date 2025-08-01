// src/app/Landing.tsx
"use client";

import Orb from "../components/orb";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Already imported in App.tsx, but good practice to import if used directly
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Same here

interface LandingProps {
  setShowFurtherContent: (show: boolean) => void;
}

const Landing: React.FC<LandingProps> = ({ setShowFurtherContent }) => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null); // Ref for the div containing the Orb

  useEffect(() => {
    if (!heroSectionRef.current || !orbContainerRef.current) return;

    // Ensure ScrollTrigger is registered (though usually done once at root)
    if (!ScrollTrigger.is
// This line may cause an error.
// 'is' is not defined.
// The code should be:
// if (!gsap.isRegistered('scrollTrigger')) {
//   gsap.registerPlugin(ScrollTrigger);
// }
// if (!ScrollTrigger.isRegistered('ScrollTrigger')) {
//   gsap.registerPlugin(ScrollTrigger);
// }
// Or just remove the if statement and ensure it's registered once at the root.
// For example:
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); // This should be at the top level of your app
// The current setup in app/page.tsx ensures this.
    ) {
      // gsap.registerPlugin(ScrollTrigger); // Should ideally be registered once at root
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top", // When the top of the hero section hits the top of the viewport
        end: "bottom top", // When the bottom of the hero section hits the top of the viewport
        scrub: true, // Smoothly link animation to scroll position
        pin: true, // Pin the hero section while the animation plays
        pinSpacing: false, // Ensures next content starts immediately after this section
        onLeave: () => setShowFurtherContent(true), // Show further content when this section scrolls out
        onEnterBack: () => setShowFurtherContent(false), // Hide it when scrolling back up
        // markers: true, // Uncomment for visual debugging of scrolltrigger
      },
    });

    // Animation for the Orb container:
    // This timeline animates the Orb within the pinned heroSectionRef's scroll range.
    tl.to(orbContainerRef.current, {
        scale: 2.5, // Zoom in significantly
        opacity: 0, // Start fading out
        yPercent: -100, // Move up out of view
        ease: "power1.inOut",
        // Position parameters allow sequencing animations within the timeline:
        // "<" means start this animation at the same time as the previous one.
        // ">" means start this animation after the previous one.
        // Here, we want scale and opacity to happen over the full scroll duration.
      }, 0); // Start at the beginning of the timeline

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill(); // Kill the timeline and its associated scrolltrigger
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Or kill all if needed globally
    };
  }, [setShowFurtherContent]); // Dependency array ensures effect runs if setShowFurtherContent changes (unlikely)

  return (
    // The main container for the "AXORA" section
    // h-screen ensures it takes full viewport height, creating scrollable space
    <div ref={heroSectionRef} className="flex h-screen w-full items-center justify-center bg-black overflow-hidden relative">

      {/* Container for "AX" */}
      <div className="flex flex-col items-end text-center flex-none w-[20%] pr-[1vw]">
        <span className="font-anta text-5xl md:text-7xl lg:text-9xl text-neutral-200 tracking-wider leading-none">
          A
        </span>
        <span className="font-anta text-5xl md:text-7xl lg:text-9xl text-neutral-200 tracking-wider leading-none">
          X
        </span>
      </div>

      {/* The Orb component container - this is what gets animated */}
      <div ref={orbContainerRef} className="flex-shrink-0 w-[40vh] h-[40vh] max-w-[40%] max-h-[40%]">
        <Orb
          hoverIntensity={0}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Container for "RA" */}
      <div className="flex flex-col items-start text-center flex-none w-[20%] pl-[1vw]">
        <span className="font-anta text-5xl md:text-7xl lg:text-9xl text-neutral-200 tracking-wider leading-none">
          R
        </span>
        <span className="font-anta text-5xl md:text-7xl lg:text-9xl text-neutral-200 tracking-wider leading-none">
          A
        </span>
      </div>
    </div>
  );
};

export default Landing;