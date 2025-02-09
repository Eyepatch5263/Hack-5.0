"use client"
import { Gift, Medal, Trophy } from 'lucide-react';
import React, { useEffect, useRef } from 'react'

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
            color: "from-yellow-400 to-yellow-600"
        },
        {
            icon: <Medal className="w-8 h-8" />,
            title: "AI/ML Track",
            amount: "30,000",
            description: "Outstanding performance and creative solutions in AI/ML",
            color: "from-gray-400 to-gray-600"
        },
        {
            icon: <Gift className="w-8 h-8" />,
            title: "Blockchain & Defi Track",
            amount: "30,000",
            description: "Excellence in execution of Blockchain & Defi",
            color: "from-green-600 to-green-800"
        },
        {
            icon: <Gift className="w-8 h-8" />,
            title: "Open Innovation",
            amount: "30,000",
            description: "Innovative solutions and creative problem-solving ",
            color: "from-red-600 to-red-800"
        },
        {
            icon: <Gift className="w-8 h-8" />,
            title: "Best All Girls Team",
            amount: "5,000",
            description: "Outstanding performance by an all-girls team",
            color: "from-amber-600 to-amber-800"
        },
        {
            icon: <Gift className="w-8 h-8" />,
            title: "Best Beginners Hack",
            amount: "5,000",
            description: "Best hack by a beginner team",
            color: "from-amber-600 to-amber-800"
        },
    ];
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        const cards = entry.target.querySelectorAll('.prize-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                (card as HTMLElement).style.opacity = '1';
                                (card as HTMLElement).style.transform = 'translateY(0)';
                            }, index * 200);
                        });
                    }
                });
            },
            {
                threshold: 0.1
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
        <div className='snap-start pt-10 pb-10 flex flex-col w-screen min-h-screen bg-gradient-to-tl from-amber-900 to-gray-800/90'>
            <div ref={sectionRef} className="transition-all duration-1000 ease-out mx-10">
                <h2 className="md:text-5xl text-3xl font-bold text-center mb-4 text-white">Prize Pool</h2>
                <p className="text-lg text-gray-200 text-center mb-12 max-w-2xl mx-auto">
                    Celebrating excellence with substantial rewards for groundbreaking achievements
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {prizeData.map((prize, index) => (
                        <div
                            key={index}
                            className="prize-card transition-all duration-700 ease-out"
                            style={{ opacity: 0, transform: 'translateY(20px)' }}
                        >
                            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10 group-hover:opacity-15 transition-opacity`}></div>
                                <div className="p-8">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prize.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {prize.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{prize.title}</h3>
                                    <div className="text-3xl font-bold text-indigo-600 mb-4">&#8377; {prize.amount}</div>
                                    <p className="text-gray-600">{prize.description}</p>
                                </div>
                                <div className={`h-2 bg-gradient-to-r ${prize.color}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PrizePool
