"use client";
import React from "react";

const Timeline = () => {
  return (
    <div className="snap-start pt-12 px-12 pb-12 text-white bg-[#2B0307]">
      {/* Title */}
      <h3 className="md:text-5xl text-3xl font-bold text-center mb-4 text-white">
        Timeline
      </h3>
      <p className="text-lg text-[#C4A7A7] text-center mb-12 max-w-2xl mx-auto">
      A Saga Through Time: Every Hack That Led Us Here
      </p>

      {/* Timeline Structure */}
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#75020F]"></div>

        {/* Timeline Events */}
        <div className="space-y-12">
          {[
            { year: "2020", title: "The Spark Ignites", description: "Our journey began with a bang! Over 100+ fearless innovators joined forces, turning ideas into reality" },
            { year: "2021", title: "Going Global", description: "20+ countries, one massive community. Hack 5.0 went global, connecting innovators across the world and expanding the Obsidian Saga beyond borders. Our reach grew, and so did the excitement." },
            { year: "2022", title: "The Surge", description: "We took things up a notch with 500+ participants and 5 exciting new tracks. The challenge grew bigger, the competition fiercer, and the hacks even more groundbreaking. It was a year of rapid expansion, and the Obsidian Saga was ready to make its mark on the tech world." },
            { year: "2023", title: "Industry Unleashed", description: "50+ industry partnerships? You bet! Hack 5.0 went from a coding competition to a powerhouse of collaboration, bringing together the brightest minds and top companies. With real-world opportunities and epic partnerships, the Obsidian Saga became a serious force in the tech world" },
            { year: "2024", title: "Innovation powerhouse", description: "Largest student-run hackathon? Absolutely. Hack 5.0 has officially become the go-to spot for fresh ideas and tech game-changers. More challenges, more talent, and a whole lot of innovation. The Obsidian Saga just keeps getting bigger—are you ready to be part of it?" },
          ].map((item, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? "md:ml-auto md:pl-32" : "md:mr-auto md:pr-32"} md:w-1/2`}>
              {/* Event Card */}
              <div className="bg-[#19171B] border border-[#51080D] text-[#C4A7A7] p-6 rounded-xl shadow-lg">
                {/* Timeline Node */}
                <div className="absolute left-1/2 md:left-auto transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#75020F] rounded-full border-2 border-[#51080D] shadow-md shadow-[#75020F]"></div>

                {/* Event Content */}
                <span className="text-[#E63946] font-bold">{item.year}</span>
                <h4 className="text-xl font-semibold mt-2 text-white">{item.title}</h4>
                <p className="text-[#C4A7A7] mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
