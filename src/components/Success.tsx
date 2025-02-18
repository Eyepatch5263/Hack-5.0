"use client"
import React from "react";

const Success = () => {
    return (
        <div className="w-screen px-6 md:px-24 py-24 bg-[#19171B] text-white">
            <div className="text-center mb-12">
                <h2 className="md:text-5xl text-3xl font-bold text-[#E63946]">
                    Success Stories
                </h2>
                <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
                    See what others have to say about us
                </p>
            </div>

            {/* Success Stories Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    {
                        quote:
                            "It was an amazing experience. We had a lot of fun and learned a lot of new things. The mentors were very helpful and the workshops were very informative.",
                        name: "Team Celebral",
                        role: "Innovation, 2020 Hack-4.0",
                    },
                    {
                        quote:
                            "The collaborative environment and technical challenges helped us push our limits and create something truly innovative.",
                        name: "Team theBugBusters",
                        role: "Technology, 2020 Hack-4.0",
                    },
                    {
                        quote:"We had the opportunity to work on a real-world problem and create a solution that could potentially impact millions of lives. It was a great learning experience.",
                        name:"Team PentaForce",
                        role:"Innovation, 2020 Hack-3.0",
                    },
                    {
                        quote:
                            "We were able to work together and create something that could make a significant difference in the lives of the people around us.",
                        name: "Team boring",
                        role: "Innovation, 2020 Hack-3.0",
                    }
                ].map((story, index) => (
                    <div
                        key={index}
                        className="relative bg-[#2B0307]/40 backdrop-blur-md border border-[#75020F]/50 shadow-lg rounded-xl p-8 transition-all duration-300 hover:scale-105"
                    >
                        <blockquote className="text-gray-300 italic mb-6">
                            "{story.quote}"
                        </blockquote>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-[#75020F]/40 mr-4"></div>
                            <div>
                                <div className="font-semibold text-[#E63946]">{story.name}</div>
                                <div className="text-gray-400">{story.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Success;
