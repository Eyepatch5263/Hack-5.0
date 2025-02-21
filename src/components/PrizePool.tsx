"use client";
import { Gift, Medal, Trophy } from "lucide-react";
import React, { useEffect, useRef } from "react";

const PrizePool = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  interface PrizeItem {
    icon: React.ReactNode;
    title: string;
    amount: string;
    description: string;
    color: string;
  }

  const prizeData: PrizeItem[] = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Grand Prize",
      amount: "40,000",
      description: "Grand prize for exceptional achievement and innovation",
      color: "from-[#75020F] to-[#51080D]",
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "AI/ML Track",
      amount: "30,000",
      description: "Outstanding performance and creative solutions in AI/ML",
      color: "from-[#51080D] to-[#2B0307]",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Blockchain & DeFi Track",
      amount: "30,000",
      description: "Excellence in execution of Blockchain & DeFi",
      color: "from-[#75020F] to-[#51080D]",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Open Innovation",
      amount: "30,000",
      description: "Innovative solutions and creative problem-solving",
      color: "from-[#51080D] to-[#2B0307]",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Best All Girls Team",
      amount: "5,000",
      description: "Outstanding performance by an all-girls team",
      color: "from-[#75020F] to-[#51080D]",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Best Beginners Hack",
      amount: "5,000",
      description: "Best hack by a beginner team",
      color: "from-[#75020F] to-[#2B0307]",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Ethereum",
      amount: "8,500+",
      description: "Innovative solutions and projects built on Ethereum",
      color: "from-[#75020F] to-[#51080D]",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");

            const cards = entry.target.querySelectorAll(".prize-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
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
      <div
        ref={sectionRef}
        className="transition-all duration-1000 ease-out mx-10"
      >
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
          {prizeData.map((prize, index) => (
            <div
              key={index}
              className={`${
                prize.title === "Grand Prize"
                  ? " md:col-span-3 md:col-start-1 md:col-end-4 flex justify-center"
                  : ""
              } prize-card transition-all duration-700 ease-out`}
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <div className="relative bg-[#19171B] rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-[#51080D]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10 group-hover:opacity-15 transition-opacity`}
                ></div>
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prize.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {prize.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {prize.title}
                  </h3>
                  <div className="text-3xl font-bold text-[#E63946] mb-4">
                    &#8377; {prize.amount}
                  </div>
                  <p className="text-[#C4A7A7]">{prize.description}</p>
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
