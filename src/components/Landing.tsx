"use client";
import React from "react";
import { ParticlesBackground } from "@/components/ui/ParticleBackground";
import { Code2, Flame, Terminal, Zap } from "lucide-react";
import Link from "next/link";

const Landing = () => {
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apply.devfolio.co/v2/sdk.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
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
                            <Link href="/">
                                <img
                                    src="csec.png"
                                    width={48}
                                    className="rounded-lg shadow-lg"
                                />
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
                            <div className="text-6xl md:text-7xl font-extrabold leading-tight tracking-wider">
                                <span className="text-[#E63946]">HACK 5.0</span>
                                <br />
                                <div className="text-4xl md:text-5xl text-[#C4A7A7]">
                                    Obsidian Saga
                                </div>
                            </div>
                            <div className="mt-6 text-lg md:text-2xl text-gray-300">
                                Embark on an epic journey of innovation and creativity. Join us
                                in forging the future through code, collaboration, and
                                cutting-edge technology.
                            </div>
                            <div className="mt-8 w-full flex justify-center md:justify-start">
                                <div
                                    className="apply-button z-[100]"
                                    data-hackathon-slug="hack-1158"
                                    data-button-theme="dark-inverted"
                                    style={{ height: "44px", width: "312px" }}
                                >
                                    Apply With Devfolio
                                </div>
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
                                <span className="text-3xl md:text-4xl font-extrabold text-[#E63946] mb-2">
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
