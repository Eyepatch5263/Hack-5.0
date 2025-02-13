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
                            "HACK 5.0 was the perfect launchpad for our startup. The mentorship and resources we received were invaluable.",
                        name: "Sarah Chen",
                        role: "Winner, AI/ML Track 2024",
                    },
                    {
                        quote:
                            "The collaborative environment and technical challenges helped us push our limits and create something truly innovative.",
                        name: "Alex Rivera",
                        role: "Winner, Web3 Track 2024",
                    },
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
