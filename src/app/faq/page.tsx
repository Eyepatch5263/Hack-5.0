"use client";
import React, { useEffect, useRef } from "react";

const FAQs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const facts = [
        {
            title: " What exactly is Hack 5.0-Obsidian Saga?",
            description:
                " It’s not just a hackathon—it’s an epic fusion of creativity, caffeine, and code! Think of it as a 48-hour sprint where brilliant minds come together to solve real problems, build cool stuff, and maybe win some brag-worthy prizes.",
        },
        {
            title: " Who can participate?",
            description:
                " Whether you're a coding ninja, a design wizard, or just someone with crazy ideas—everyone’s welcome! Students, beginners, pros… if you’ve got the passion, you’ve got a spot here.",
        },
        {
            title: "How do I register?",
            description:
                "Just click that big, shiny “Register Now” button on our website, fill in your details, and boom—you’re in! Don’t wait too long though; spots fill up fast!",
        },
        {
            title: "What if I don’t have a team?",
            description:
                "No worries! We’ve got a team formation session before the hackathon kicks off. So, you’ll find your crew and maybe your next best friends.",
        },
        {
            title: "Who do I contact if I have more questions?",
            description:
                "Hit us up at [email]. We promise we’re super friendly (and quick to respond)!",
        },
        
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "translate-y-10");
                        entry.target.classList.add("opacity-100", "translate-y-0");

                        const cards = entry.target.querySelectorAll(".faq-card");
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                (card as HTMLElement).style.opacity = "1";
                                (card as HTMLElement).style.transform = "translateY(0)";
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.1 }
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
        <div className="snap-start pt-10 pb-10 flex flex-col w-screen min-h-screen bg-gradient-to-b from-[#19171B] to-[#2B0307]">
            <div ref={sectionRef} className="transition-all duration-1000 ease-out mx-10">
                {/* Title */}
                <h2 className="md:text-5xl text-3xl font-bold text-center mb-4 text-[#E63946]">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-[#C4A7A7] text-center mb-12 max-w-2xl mx-auto">
                    Get all the answers you need about Hack 5.0.
                </p>

                {/* FAQ Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="faq-card transition-all duration-700 ease-out"
                            style={{ opacity: 0, transform: "translateY(20px)" }}
                        >
                            <div className="relative bg-[#19171B] rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-[#51080D]">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#E63946] mb-4">
                                        {fact.title}
                                    </h3>
                                    <p className="text-[#C4A7A7]">{fact.description}</p>
                                </div>
                                <div className="h-2 bg-gradient-to-r from-[#75020F] to-[#51080D]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
