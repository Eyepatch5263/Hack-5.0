"use client";
import React from "react";

const About = () => {
    return (
        <div id="about" className="h-screen w-screen snap-start flex flex-col md:flex-row justify-between items-center bg-[#19171B] px-6 md:px-20">
            {/* Left Content */}
            <div className="flex flex-col space-y-8 w-full md:w-1/2 text-white">
                <h1 className="text-4xl md:text-5xl font-bold text-[#E63946]">
                    ABOUT HACK 5.0
                </h1>
                <p className="md:text-2xl text-lg text-gray-300 leading-relaxed">
                    Welcome to <span className="text-[#E63946] font-semibold">Hack 5.0 - Obsidian Saga</span>, where
                    Welcome to Hack 5.0 - Obsidian Saga, where ancient resilience meets the pulse of modern tech. This isn't just a hackathon—it's a realm where bold ideas, sharp minds, and cutting-edge code come together to build what's next.
                    Step into the arena with fellow innovators to tackle real-world challenges and push the limits of what technology can do.
                </p>
                
                <p className="md:text-2xl mt-2 text-lg text-gray-300 leading-relaxed">
                    Whether you are a seasoned coder or taking your first shot at the game, this is your chance to create, disrupt, and leave your mark.
                    No frills, no fluff - just raw creativity, endless possibilities, and the thrill of building something that matters.
                    The obsidian is set. The frontier is yours. Let's make it unforgettable.
                </p>
                <button className="flex font-bold justify-center items-center bg-[#E63946] px-6 py-3 text-xl rounded-xl w-[12rem] shadow-md hover:bg-[#75020F] hover:shadow-lg transition-all duration-300">
                    Join Now
                </button>
            </div>

            {/* Right Image */}
            <div className="mx-0 md:mx-20 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img src="/hacks2.svg" className="opacity-90 w-[80%] md:w-[600px]" alt="Hackathon Illustration" />
            </div>
        </div>
    );
};

export default About;
