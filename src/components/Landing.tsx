"use client";
import React from "react";
import { ParticlesBackground } from "@/components/ui/ParticleBackground";
import { Code2, Flame, Terminal, Zap } from "lucide-react";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative min-h-screen snap-start overflow-hidden bg-[#19171B]">
      <ParticlesBackground />
      <div className="min-h-screen text-white overflow-hidden relative">
        {/* Glowing Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-72 h-72 bg-[#75020F]/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-24 right-16 w-96 h-96 bg-[#51080D]/20 rounded-full blur-[150px]"></div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-6 py-12">
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
            <Link  href="/">
            <img src="csec.png" width={48} className="rounded-lg shadow-lg" />
            </Link>
              <span className="text-3xl font-bold">CSEC</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Schedule", "Sponsors", "FAQs"].map((item, index) => (
                <button
                  id={item}
                  key={index}
                  className="hover:text-[#E63946] text-lg transition-colors"
                  onClick={() => {
                    const section = document.getElementById(item.toLowerCase());
                    console.log(section);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        inline: "start",
                      });
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-16">
            {/* Hero Text */}
            <div className="max-w-2xl text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-wider">
                <span className="text-[#E63946]">HACK 5.0</span>
                <br />
                <span className="text-4xl md:text-5xl text-[#C4A7A7]">
                  Obsidian Saga
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-gray-300">
                Embark on an epic journey of innovation and creativity. Join us
                in forging the future through code, collaboration, and
                cutting-edge technology.
              </p>
              <div className="flex flex-col justify-center gap-8 md:flex-row md:justify-start md:space-x-6 mt-8">
              <button className="px-8 py-3 bg-[#3770FF] border border-[#3770FF] rounded-lg hover:bg-[#3990FF] hover:text-white hover:scale-105 transition-all duration-200 ease-in-out flex justify-center items-center space-x-2">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 115.46 123.46"
                    fill="white"
                  >
                    <path
                      d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
    12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
    13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
    2.18.08 3.34z"
                    ></path>
                    <path
                      d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
    104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
    55.41 0 0 1 50.58 55.34z"
                    ></path>
                  </svg>
                  <Link href="https://hack-1158.devfolio.co/">
                    Apply with Devfolio
                  </Link>
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden md:block relative w-72 h-72 md:w-96 md:h-96 mt-12 md:mt-0">
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute inset-0 bg-[#E63946]/30 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-10 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-48 md:w-64 h-48 md:h-64 text-[#E63946] drop-shadow-glow" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 text-center">
            {[
              { label: "Prize Pool", value: "1,50,000" },
              { label: "Hours", value: "48" },
              { label: "Tracks", value: "3" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#E63946] mb-2">
                  {stat.label === "Prize Pool" ? `₹ ${stat.value}` : stat.value}
                </span>
                <span className="text-gray-400 text-lg">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
