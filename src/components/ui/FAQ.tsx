"use client";
import React, { useEffect, useRef } from "react";

const FAQ = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const facts = [
        {
            title: "What exactly is Hack 5.0 - Obsidian Saga?",
            description:
                "It is not just a hackathon—it is an epic fusion of creativity, caffeine, and code! Think of it as a 48-hour sprint where brilliant minds come together to solve real problems, build cool stuff, and maybe win some brag-worthy prizes",
        },
        {
            title: "Who can participate?",
            description:
                "Whether you're a coding ninja, a design wizard, or just someone with crazy ideas—everyone is welcome! Students, beginners, pros… if you have got the passion, you have got a spot here.",
        },
        {
            title: " How do I register?",
            description:
                "Just click that big, shiny “Register Now” button on our website, fill in your details, and boom—you are in! Do not wait too long though; spots fill up fast!",
        },
        {
            title: " What if I do not have a team?",
            description:
                "No worries! We have got a team formation session before the hackathon kicks off. So, you will find your crew and maybe your next best friends.",
        },
        {
            title: "Can I participate solo?",
            description:
                "Yes, but we encourage teams (2-4 members). We will help you find teammates if needed!",
        },
        {
            title: "Is there a registration fee?",
            description: "No, Hack 5.0 is completely free! Just register and you are in.",
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
        <div id="faqs" className=" pt-10 pb-10 flex flex-col w-screen min-h-screen bg-gradient-to-b from-[#19171B] to-[#2B0307]">
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
                                <div className="p-6 md:p-8 h-[18rem] md:h-[10rem]">
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

export default FAQ;
