"use client";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-screen  flex flex-col md:flex-row justify-between items-center bg-[#19171B] px-6 md:px-20"
    >
      {/* Left Content */}
      <div className="flex flex-col space-y-8 w-full md:w-1/2 text-white">
        <h1 className="text-4xl md:text-5xl font-bold pt-4 text-[#E63946]">
          ABOUT HACK 5.0
        </h1>
        <p className="md:text-2xl text-lg text-gray-300 leading-relaxed">
          Welcome to{" "}
          <span className="text-[#E63946] font-semibold">
            Hack 5.0 - Obsidian Saga
          </span>
          , where ancient resilience meets the pulse of modern tech. This isn't
          just a hackathon—it's a realm where bold ideas, sharp minds, and
          cutting-edge code come together to build what's next. Step into the
          arena with fellow innovators to tackle real-world challenges and push
          the limits of what technology can do.
        </p>

        <p className="md:text-2xl mt-2 text-lg text-gray-300 leading-relaxed">
          Whether you are a seasoned coder or taking your first shot at the
          game, this is your chance to create, disrupt, and leave your mark. No
          frills, no fluff - just raw creativity, endless possibilities, and the
          thrill of building something that matters. The obsidian is set. The
          frontier is yours. Let's make it unforgettable.
        </p>
      </div>

      {/* Right Image */}
      <div className="hidden md:block relative w-72 h-72 md:w-96 md:h-96 mt-12 md:mt-0">
        <div className="absolute inset-0 animate-hack">
          <div className="absolute inset-0 bg-[#E63946]/30 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute inset-10 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Zap className="w-48 md:w-64 h-48 md:h-64 text-[#E63946] drop-shadow-glow" /> */}
            <img src="hack.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
