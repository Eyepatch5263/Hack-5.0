"use client";
import React from "react";
import {
    Terminal,
    Shield,
    AlertCircle,
    Heart,
    Users,
    MessageSquare,
    Scale,
    Gavel,
    Phone,
} from "lucide-react";
import { motion } from "framer-motion"
import { useGlitch } from "react-powerglitch"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
    src: "../../public/fonts/Hacked-KerX.ttf",
    variable: "--custom-font",
})

function Page() {
    const glitch = useGlitch({
        timing: {
            duration: 3950,
        },
        shake: false,
    })

    const sections = [
        {
            icon: <Shield className="w-8 h-8 text-tango" />,
            title: "Purpose",
            content:
                "Our code of conduct ensures a safe, inclusive, and productive environment for all participants. We are committed to providing a harassment-free experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion, or technology choices.",
        },
        {
            icon: <Heart className="w-8 h-8 text-tango" />,
            title: "Expected Behavior",
            content:
                "Be respectful and inclusive of all participants. Exercise consideration and empathy in your speech and actions. Collaborate with others and be mindful of your surroundings and fellow participants.",
            bullets: [
                "Use welcoming and inclusive language",
                "Show respect for different viewpoints and experiences",
                "Accept constructive criticism gracefully",
                "Focus on what's best for the community",
                "Show empathy towards other community members",
            ],
        },
        {
            icon: <AlertCircle className="w-8 h-8 text-tango" />,
            title: "Unacceptable Behavior",
            content:
                "The following behaviors are considered harassment and are unacceptable within our community:",
            bullets: [
                "Violence, threats of violence, or violent language",
                "Discriminatory jokes and language",
                "Posting or displaying sexually explicit or violent material",
                "Personal insults or unwelcome sexual attention",
                "Trolling, insulting/derogatory comments",
                "Public or private harassment",
                "Publishing others' private information without permission",
                "Other conduct which could reasonably be considered inappropriate",
            ],
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-tango" />,
            title: "Fair Play and Integrity",
            content:
                "Honesty and integrity should be upheld in all hackathon-related activities. Plagiarism, cheating, or misrepresentation of work will not be tolerated. Collaboration is encouraged, but intellectual property rights must be respected.",
            bullets: [
                "Do not submit projects that are not your own",
                "Do not copy code or designs from other participants",
                "Do not misrepresent your work or the work of others",
                "Do not engage in any form of academic dishonesty",
            ],
        },
        {
            icon: <Users className="w-8 h-8 text-tango" />,
            title: "Respect for Personal and Digital Privacy",
            content:
                "Participants must respect each other’s privacy, both physically and digitally. Unauthorized access to another person's data, accounts, or devices is not permitted.",
        },
        {
            icon: <Gavel className="w-8 h-8 text-tango" />,
            title: "Reporting Violations",
            content:
                "If any participant experiences or witnesses a violation of this Code of Conduct, they should report it immediately to HACK 5.0 staff. The safety and well-being of all attendees are our top priorities.",
        },
        {
            icon: <Terminal className="w-8 h-8 text-tango" />,
            title: "Consequences of Violations",
            content:
                "The HACK 5.0 organizers reserve the right to take appropriate actions against individuals who violate the Code of Conduct. Consequences may include warnings, disqualification, removal from the event, or further legal action if necessary.",
        },
        {
            icon: <Users className="w-8 h-8 text-tango" />,
            title: "Compliance and Participation ",
            content:
                "All attendees, including participants, mentors, sponsors, and organizers, must abide by these guidelines at all event venues, workshops, and affiliated social gatherings.",
        },
        {
            icon: <Scale className="w-8 h-8 text-tango" />,
            title: "Scope",
            content:
                "This Code of Conduct applies to all event spaces, including hackathon venues, workshops, social events, online forums, and social media communications. The Code of Conduct also applies to unacceptable behavior occurring outside the scope of community activities when such behavior has the potential to adversely affect the safety and well-being of community members.",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground text-white">
            {/* Header */}
            <nav className="container mx-auto px-6 flex items-center justify-between gap-x-4 fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md py-3 shadow-lg">
                <div className="flex items-center gap-x-4">
                    {/* CSEC Logo */}
                    <motion.a
                        href="https://csec.nith.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                            alt="CSEC Logo"
                            className="w-full h-full object-contain drop-shadow-md"
                        />
                    </motion.a>

                    {/* Separator */}
                    <div className="h-7 w-px bg-gray-500"></div>

                    {/* HACK Logo */}
                    <motion.a
                        href="/"
                        className="w-12 h-12 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png"
                            alt="HACK Logo"
                            className="w-full h-full object-contain drop-shadow-md"
                        />
                    </motion.a>
                </div>

                {/* HACK 5.0 Text */}
                <div className="flex items-center">
                    <span className={`relative z-10 font-bold text-3xl md:text-5xl lg:text-6xl text-white ${Hacked_KerX.className}`}>
                        <span ref={glitch.ref} className="text-primary inline-block">
                            HACK
                        </span>{" "}
                        <span className={Hacked_KerX.className}>5.0</span>
                    </span>
                </div>
            </nav>


            {/* Main Content */}
            <div className="container mx-auto px-6 py-32">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold mb-6">
                        Code of <span className="text-gradient">Conduct</span>
                    </h1>
                    <p className="text-xl text-gray-300 w-full text-balance mb-2">
                        We, as members of the Computer Science and Engineers' Community
                        (CSEC) at NIT Hamirpur, pledge to create an inclusive, respectful,
                        and secure environment for all participants of HACK 5.0. We are
                        committed to ensuring that involvement in our community is free from
                        harassment and is based on mutual dignity and respect.
                    </p>
                    <p className="text-xl text-gray-300 w-full text-balance">
                        This commitment applies to everyone, regardless of age, expertise,
                        educational background, nationality, race, ethnicity, religion,
                        political beliefs, disabilities (visible or invisible), gender
                        identity, gender expression, or sexual orientation. To maintain a
                        smooth experience and uphold the values of HACK 5.0, all
                        participants are expected to adhere to the following guidelines:
                    </p>
                </div>

                {/* Content Sections */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-red-900/50 rounded-xl p-8 border border-tango/20 hover:border-tango/40 transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="mt-1">{section.icon}</div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4">
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4">{section.content}</p>
                                    {section.bullets && (
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            {section.bullets.map((bullet, idx) => (
                                                <li key={idx} className="ml-4">
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="max-w-4xl mx-auto mt-16 bg-red-900/50 rounded-xl p-8 border border-tango/20">
                    <div className="flex items-start gap-6">
                        <Users className="w-8 h-8 text-tango mt-1" />
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                            <p className="text-gray-300 mb-6">
                                If you have any questions about our Code of Conduct or need to
                                report an incident, please don't hesitate to reach out to our
                                team.
                            </p>
                            <div className="flex gap-6">
                                <p className=" py-3 bg-tango rounded-lg hover:bg-tango-dark transition-colors inline-flex items-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    <a className="cursor-pointer" href="tel:+9162675 31322">
                                        Tanishq Verma | +91 62675 31322{" "}
                                    </a>
                                    <a className="cursor-pointer" href="tel:+9170233 26128">
                                        Prince Jaiswal | +91 70233 26128
                                    </a>
                                    <a className="cursor-pointer" href="tel:+9197675 92787">
                                        Harshal Sakhare | +91 97675 92787
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;