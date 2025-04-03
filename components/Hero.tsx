import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-10 relative">
      <div className="pb-20 pt-10">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.2] absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        
        <div className="flex w-full max-w-screen-lg mx-auto z-10 flex-col md:flex-row items-center md:items-start">
          
          {/* Left side: Text content (100% on mobile, 66% on desktop) */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start justify-center space-y-4 px-4 md:px-0">
            <TextGenerateEffect
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center md:text-left"
              words="Hello! I'm a Software Engineering Student"
            />
            <p className="text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl md:tracking-wider mb-4">
              Passionate about technology and innovation, I&apos;m Mouad Rguibi, a software and Devops engineer student
              from Morocco. Ready to bring ideas to life through code.
            </p>
            <a href="/Rguibi.pdf" download>
              <MagicButton title="Download My Resume" position="center" />
            </a>
          </div>

          {/* Right side: Photo (Full width on mobile, 33% on desktop) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
            <img 
              src="/port.jpg" 
              alt="Mouad Rguibi" 
              className="w-42 h-42 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
