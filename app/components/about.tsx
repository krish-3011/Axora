// src/app/FurtherContent.tsx
// No "use client" needed if this component doesn't use client-side hooks or browser APIs.
// If it does, add "use client" at the top.
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Welcome to the Next Section!</h1>
   2   <p className="mt-4 text-xl text-center max-w-2xl">
        This is where all your amazing content goes after the initial "AXORA" experience.
        You can put anything here: more sections, images, forms, etc.
      </p>
      {/* Example content to make it scrollable */}
      <div className="mt-16 text-3xl text-gray-400">Scroll down to see more...</div>
      <div className="h-96 w-full bg-blue-700 flex items-center justify-center mt-8">Section 1</div>
      <div className="h-96 w-full bg-green-700 flex items-center justify-center mt-8">Section 2</div>
      <div className="h-96 w-full bg-red-700 flex items-center justify-center mt-8">Section 3</div>
    </div>
  );
};

export default About;