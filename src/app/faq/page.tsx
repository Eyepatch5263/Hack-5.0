"use client";
import React from "react";
import {
    Award,
    Users,
    Rocket,
    Zap,
    Code2,
    Terminal,
} from "lucide-react";
import { ParticlesBackground } from "@/components/ui/ParticleBackground";
import Link from "next/link";

const FAQs = () => {
    const facts = [
        {
            title: "What is Hack 5.0?",
            description:
                "Hack 5.0 is a 24-hour hackathon where developers, designers, and innovators collaborate to build innovative solutions to real-world problems.",
        },
        {
            title: "Who can participate?",
            description:
                "Hack 5.0 is open to students, professionals, and tech enthusiasts of all experience levels. Whether you're a beginner or an expert, you're welcome to join!",
        },
        {
            title: "Do I need to have prior experience in hackathons?",
            description:
                "Not at all! Hack 5.0 is designed for everyone, from beginners to seasoned hackers.",
        },
        {
            title: "How can I register for Hack 5.0?",
            description:
                "You can register by visiting our official website and filling out the registration form. Make sure to join before the deadline!",
        },
        {
            title: " Can I participate solo, or do I need a team?",
            description:
                "You can participate solo, but we encourage team collaboration (2-4 members). If you don’t have a team, we will help you find one before the event starts.",
        },
        {
            title: " Is there any registration fee?",
            description:
                "No, Hack 5.0 is completely free to attend. Just register, and you're all set!",
        },
    ];

    const statistics = [
        {
            value: "80%",
            label: "Projects Continued",
            icon: <Code2 className="w-6 h-6" />,
        },
        {
            value: "50+",
            label: "Industry Mentors",
            icon: <Users className="w-6 h-6" />,
        },
        {
            value: "24/7",
            label: "Technical Support",
            icon: <Zap className="w-6 h-6" />,
        },
        {
            value: "100%",
            label: "Learning Guaranteed",
            icon: <Award className="w-6 h-6" />,
        },
    ];
    return (
        <div className="min-h-screen border-gray-600 bg-gradient-to-b from-gray-800 to bg-black text-white">
            <div className="relative container mx-auto px-6 py-8">
                <nav className="flex justify-between items-center mb-16">
                    <div className="flex items-center space-x-2">
                        <Terminal className="w-8 h-8 text-tango" />
                        <span className="text-3xl font-bold">
                            <Link className="cursor-pointer" href="/">CSEC</Link>
                        </span>
                    </div>
                    <div className="flex space-x-8">
                        <button className="hover:text-indian-tan text-lg transition-colors">
                            About
                        </button>
                        <button className="hover:text-indian-tan text-lg transition-colors">
                            Schedule
                        </button>
                        <button className="hover:text-indian-tan text-lg transition-colors">
                            Sponsors
                        </button>
                        <button className="bg-tango text-lg rounded-lg hover:bg-fire transition-colors">
                            Register Now
                        </button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <ParticlesBackground />
            <div className="container mx-auto px-6 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold mb-6">FAQs - Hack 5.0</h1>
                    <p className="text-xl text-gray-300">
                        Discover what makes HACK 5.0 the premier hackathon for innovators
                        and creators.
                    </p>
                </div>

                {/* Facts Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="bg-sepia-black/50 rounded-xl p-8 border border-tango/20 hover:border-tango/40 transition-all hover:transform hover:-translate-y-1"
                        >
                            {/* <div className="mb-6">{}</div> */}
                            <h3 className="text-xl font-semibold mb-4">{fact.title}</h3>
                            <p className="text-gray-400">{fact.description}</p>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                {/* <div className="bg-sepia-black/50 rounded-2xl p-12 border border-tango/20">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        By the Numbers
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {statistics.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tango/10 mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Previous Success Stories */}


                {/* CTA Section */}
                <div className="text-center mt-24">
                    <h2 className="text-3xl font-bold mb-6">Ready to Join the Saga?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Don't miss out on this opportunity to innovate, learn, and create
                        alongside the best minds in tech.
                    </p>
                    <button className="px-8 py-3 bg-amber-700 rounded-lg hover:bg-fire transition-colors inline-flex items-center space-x-2">
                        <Rocket className="w-5 h-5" />
                        <span>Register Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
