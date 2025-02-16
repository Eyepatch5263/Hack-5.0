"use client";
import { Award, Diamond, Medal } from "lucide-react";
import React from "react";

const Sponsors = () => {
  return (
    <div className="snap-start px-10 md:px-16 bg-gradient-to-br from-[#19171B] via-[#2B0307] to-[#51080D] py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-bold text-3xl md:text-5xl text-white">Our Sponsors</h2>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mt-4">
          Meet the innovative companies empowering the next generation of developers and supporting our mission to forge the future.
        </p>
      </div>

      {/* Sponsors Section */}
      {[
        { title: "Platinum Partners", color: "text-[#E63946]", icon: <Diamond className="w-6 h-6 text-[#75020F]" />, sponsors: 2, grid: "grid-cols-1 md:grid-cols-2" },
        { title: "Gold Sponsors", color: "text-yellow-500", icon: <Award className="w-6 h-6 text-yellow-500" />, sponsors: 3, grid: "grid-cols-1 md:grid-cols-3" },
        { title: "Silver Sponsors", color: "text-gray-400", icon: <Medal className="w-6 h-6 text-gray-400" />, sponsors: 4, grid: "grid-cols-2 md:grid-cols-4" },
      ].map((tier, index) => (
        <div key={index} className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            {tier.icon}
            <h3 className={`text-2xl font-semibold ${tier.color}`}>{tier.title}</h3>
          </div>
          <div className={`grid ${tier.grid} gap-6`}>
            {[...Array(tier.sponsors)].map((_, i) => (
              <div
                key={i}
                className="bg-[#19171B] rounded-xl p-8 flex items-center justify-center border border-[#51080D] hover:border-[#75020F] transition-colors shadow-md"
              >
                <div className="w-full h-20 md:h-24 bg-gradient-to-r from-[#51080D] to-[#2B0307] rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Sponsorship CTA */}
      
    </div>
  );
};

export default Sponsors;
