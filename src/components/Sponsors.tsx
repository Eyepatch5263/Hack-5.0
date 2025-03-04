"use client";
import { Award, Diamond, Medal } from "lucide-react";
import React from "react";

const Sponsors = () => {
  const Sponsor = [
    {
      name: "Devfolio",
      partner: "Bronze Sponsor",
      image: "Devfolio_Logo-White@2x.png",
      alt: "DEVFOLIO LOGO",
    },
    {
      name: "ETHIndia",
      sponsor: "Bronze Sponsor",
      image: "ethindia-light.png",
      alt: "ETHINDIA LOGO",
    },
  ];
  return (
    <div
      id="sponsors"
      className=" px-10 md:px-16 bg-gradient-to-br from-[#19171B] via-[#2B0307] to-[#51080D] py-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-bold text-3xl md:text-5xl text-white">
          Our Sponsors
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mt-4">
          Meet the innovative companies empowering the next generation of
          developers and supporting our mission to forge the future.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        {
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6`}>
            {Sponsor.map((item, index) => (
              <div
                key={index}
                className={`${item.name === "Devfolio" ? "md:col-start-2" : ""} rounded-xl flex items-center justify-center border border-[#222222] hover:border-[#75020F] transition-colors shadow-md`}
              >
                <div className="w-full p-16 flex items-center justify-center h-20 md:h-24 bg-gradient-to-br from-[#b83c44] to-[#2c0004] rounded-lg">
                  <img src={item.image} alt={item.alt} />
                  <p className="hidden text-lg text-gray-300">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        }
      </div>

      {/* Sponsorship CTA */}
    </div>
  );
};

export default Sponsors;
