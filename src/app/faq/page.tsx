"use client";
import React, { useEffect, useRef } from "react";

const FAQs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const facts = [
        {
            title: "What is Hack 5.0?",
            description:
                "Hack 5.0 is a 24-hour hackathon where developers, designers, and innovators collaborate to build innovative solutions to real-world problems.",
        },
        {
            title: "Who can participate?",
            description:
                "Hack 5.0 is open to students, professionals, and tech enthusiasts of all experience levels. Whether you're a beginner or an expert, you're welcome to join!",
        },
        {
            title: "Do I need prior hackathon experience?",
            description:
                "Not at all! Hack 5.0 is designed for everyone, from beginners to seasoned hackers.",
        },
        {
            title: "How can I register?",
            description:
                "You can register by visiting our official website and filling out the registration form. Make sure to join before the deadline!",
        },
        {
            title: "Can I participate solo?",
            description:
                "Yes, but we encourage teams (2-4 members). We’ll help you find teammates if needed!",
        },
        {
            title: "Is there a registration fee?",
            description: "No, Hack 5.0 is completely free! Just register and you’re in.",
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
        <div className="snap-start pt-10 pb-10 flex flex-col w-screen min-h-screen bg-[#2B0307]">
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
