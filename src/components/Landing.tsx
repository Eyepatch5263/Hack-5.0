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
                            <Terminal className="w-8 h-8 text-[#E63946]" />
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
                                            section.scrollIntoView({ behavior: "smooth", inline: "start" });
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
                                <span className="text-4xl md:text-5xl text-[#C4A7A7]">Obsidian Saga</span>
                            </h1>
                            <p className="mt-6 text-lg md:text-2xl text-gray-300">
                                Embark on an epic journey of innovation and creativity. Join us in forging the
                                future through code, collaboration, and cutting-edge technology.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-6 mt-8">
                                <button className="px-8 py-3 bg-[#262323] border border-[#E63946] rounded-lg hover:bg-[#E63946] hover:text-white transition-colors flex items-center space-x-2">
                                    <Flame className="w-5 h-5" />
                                    <Link href="https://hack-1158.devfolio.co/">JRegister</Link>
                                </button>
                                <button
                                    className="px-8 py-3 border border-[#E63946] bg-[#75020F] rounded-lg hover:bg-[#51080D] transition-colors flex items-center space-x-2"
                                >
                                    <Code2 className="w-5 h-5" />
                                    <span>Learn More</span>
                                </button>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 mt-12 md:mt-0">
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
                        {[
                            { label: "Prize Pool", value: "$1,707" },
                            { label: "Hours", value: "48" },
                            { label: "Tracks", value: "6" },
                            { label: "Participants", value: "500+" },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-4xl font-extrabold text-[#E63946] mb-2">
                                    {stat.value}
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
