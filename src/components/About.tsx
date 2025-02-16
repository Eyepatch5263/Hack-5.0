"use client";
import React from "react";

const About = () => {
    return (
        <div className="h-screen w-screen snap-start flex flex-col md:flex-row justify-between items-center bg-[#19171B] px-6 md:px-20">
            {/* Left Content */}
            <div className="flex flex-col space-y-8 w-full md:w-1/2 text-white">
                <h1 className="text-4xl md:text-5xl font-bold text-[#E63946]">
                    ABOUT HACK 5.0
                </h1>
                <p className="md:text-2xl text-lg text-gray-300 leading-relaxed">
                    Welcome to <span className="text-[#E63946] font-semibold">Hack 5.0 - Obsidian Saga</span>, where
                    ancient wisdom meets cutting-edge technology. This is not just a hackathon—it’s a battle of creativity, a journey to forge the future.
                    <br /><br />
                    Join us as we bring together the brightest minds to solve real-world problems, push the boundaries of innovation, and create solutions that can change the world.
                    Whether you're a seasoned hacker or a newcomer, there’s a place for you in this epic saga.
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
