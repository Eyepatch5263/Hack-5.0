"use client";
import { Gift, Medal, Trophy } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const PrizePool = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  interface PrizeItem {
    icon: React.ReactNode;
    title: string;
    amount: string;
    description: string;
    color: string;
    distribution: {
      position: string;
      reward: string;
    }[];
  }

  const prizeData: PrizeItem[] = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Grand Prize",
      amount: "40,000",
      description: "Grand prize for exceptional achievement and innovation",
      color: "from-[#75020F] to-[#51080D]",
      distribution: [
        { position: "1st Place", reward: "40,000" },
        { position: "2nd Place", reward: "" },
        { position: "3rd Place", reward: "" },
      ],
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "AI/ML Track",
      amount: "30,000",
      description: "Outstanding performance and creative solutions in AI/ML",
      color: "from-[#51080D] to-[#2B0307]",
      distribution: [
        { position: "1st Place", reward: "15,000" },
        { position: "2nd Place", reward: "10,000" },
        { position: "3rd Place", reward: "5,000" },
      ],
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Blockchain & DeFi Track",
      amount: "30,000",
      description: "Excellence in execution of Blockchain & DeFi",
      color: "from-[#75020F] to-[#51080D]",
      distribution: [
        { position: "1st Place", reward: "15,000" },
        { position: "2nd Place", reward: "10,000" },
        { position: "3rd Place", reward: "5,000" },
      ],
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Open Innovation",
      amount: "30,000",
      description: "Innovative solutions and creative problem-solving",
      color: "from-[#51080D] to-[#2B0307]",
      distribution: [
        { position: "1st Place", reward: "15,000" },
        { position: "2nd Place", reward: "10,000" },
        { position: "3rd Place", reward: "5,000" },
      ],
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Best All Girls Team",
      amount: "5,000",
      description: "Outstanding performance by an all-girls team",
      color: "from-[#75020F] to-[#51080D]",
      distribution: [
        { position: "1st Place", reward: "5,000" },
        { position: "2nd Place", reward: "" },
        { position: "3rd Place", reward: "" },
      ],
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Best Beginners Hack",
      amount: "5,000",
      description: "Best hack by a beginner team",
      color: "from-[#75020F] to-[#2B0307]",
      distribution: [
        { position: "1st Place", reward: "5,000" },
        { position: "2nd Place", reward: "" },
        { position: "3rd Place", reward: "" },
      ],
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Ethereum",
      amount: "8,500+",
      description: "Innovative solutions and projects built on Ethereum",
      color: "from-[#75020F] to-[#51080D]",
      distribution: [
        { position: "1st Place", reward: "8,500" },
        { position: "2nd Place", reward: "" },
        { position: "3rd Place", reward: "" },
      ],
    },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="snap-start pt-10 pb-10 flex flex-col w-screen min-h-screen bg-[#2B0307]">
      <div ref={sectionRef} className="transition-all duration-1000 ease-out mx-10">
        {/* Title */}
        <h2 className="md:text-5xl text-3xl font-bold text-center mb-4 text-white">
          Prize Pool
        </h2>
        <p className="text-lg text-[#C4A7A7] text-center mb-12 max-w-2xl mx-auto">
          Celebrating excellence with substantial rewards for groundbreaking
          achievements
        </p>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizeData.length > 0 &&
            prizeData.map((prize, index) => (
              <div
                key={index}
                className={`${prize.title === "Grand Prize"
                  ? " md:col-span-3 md:col-start-1 md:col-end-4 flex justify-center"
                  : ""
                  } prize-card transition-all duration-700 ease-out`}
              >
                <div className="relative bg-[#19171B] rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-[#51080D]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10 group-hover:opacity-15 transition-opacity`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prize.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {prize.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
                    <div className="text-3xl font-bold text-[#E63946] mb-4">
                      &#8377; {prize.amount}
                    </div>
                    <p className="text-[#C4A7A7]">{prize.description}</p>
                  </div>

                  {/* Prize Distribution (only show on hover) */}
                  <div
                    className={`p-4 bg-[#2B0307] text-white border-t border-[#51080D] 
                    transition-all duration-300 ease-in-out rounded-b-2xl shadow-md 
                    ${isOpen ? "opacity-100 scale-105" : "opacity-0"} 
                    group-hover:opacity-100 group-hover:scale-105`}
                    // onClick={() => setIsOpen(!isOpen)}
                  >
                    <h4 className="text-lg font-bold text-[#E63946]">Prize Distribution</h4>
                    <ul className="mt-2">
                      {prize.distribution.map((dist, idx) => (
                        <li key={idx} className="text-sm text-[#C4A7A7]">
                          {dist.position}: {dist.reward ? `₹${dist.reward}` : "None"}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`h-2 bg-gradient-to-r ${prize.color}`}></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
