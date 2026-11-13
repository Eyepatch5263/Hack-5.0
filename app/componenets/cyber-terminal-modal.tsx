"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pricedown } from "@/lib/fonts";

export type TerminalTab = "judges" | "faq" | "team";

interface CyberTerminalModalProps {
  isOpen: boolean;
  initialTab: TerminalTab;
  onClose: () => void;
}

const JUDGES_DATA = [
  {
    id: "JDG-01",
    name: "Dr. Arun Sharma",
    role: "Technical Judge & AI Specialist",
    image: "/placeholder-user.jpg",
    ditherStyle: "MODULATION",
    timestamp: "11-26-82",
    date: "02/21/1982",
    log: "Verified technical score: 98.4%. Consensus protocol approved.",
  },
  {
    id: "JDG-02",
    name: "Priya Nair",
    role: "Senior Security Architect",
    image: "/placeholder-user.jpg",
    ditherStyle: "ATKINSON",
    timestamp: "11-27-82",
    date: "02/22/1982",
    log: "Threat model audited and certified per continuity protocol.",
  },
  {
    id: "JDG-03",
    name: "Vikram Sengupta",
    role: "Principal Systems Engineer",
    image: "/placeholder-user.jpg",
    ditherStyle: "BAYER",
    timestamp: "11-28-82",
    date: "02/23/1982",
    log: "High-concurrency distributed systems benchmark validated.",
  },
  {
    id: "JDG-04",
    name: "Dr. Rohit Verma",
    role: "Blockchain & Cryptography Lead",
    image: "/placeholder-user.jpg",
    ditherStyle: "SIERRA",
    timestamp: "11-29-82",
    date: "02/24/1982",
    log: "Zero-knowledge cryptography verified. Security clearance granted.",
  },
];

const SHOW_JUDGES = false;

const FAQ_DATA = [
  {
    id: "FAQ-01",
    question: "What exactly is Hack 6.0 - vapour wave?",
    answer:
      "Hack 6.0 is an epic 36-hour sprint where brilliant minds converge to solve complex challenges, build breakthrough technologies, and compete for massive prizes and bounties.",
    date: "15/10/2026",
  },
  {
    id: "FAQ-02",
    question: "Who can participate in this event?",
    answer:
      "All students, passionate developers, designers, and innovators are welcome. Whether you are a beginner or a veteran hacker, Hack 6.0 has dedicated tracks.",
    date: "15/10/2026",
  },
  {
    id: "FAQ-03",
    question: "How do I register on the mainframe?",
    answer:
      "Execute registration via the 'Register Now' command on the portal, provide your team credentials, and complete verification.",
    date: "15/10/2026",
  },
  {
    id: "FAQ-04",
    question: "What if I do not have a team allocated?",
    answer:
      "Matchmaking protocols and team formation sessions operate prior to kickoff on Discord to connect you with your crew.",
    date: "15/10/2026",
  },
  {
    id: "FAQ-05",
    question: "What is the team squad size limit?",
    answer:
      "Squads must consist of 2 to 4 members. Solo deployments are restricted to promote collaborative engineering.",
    date: "15/10/2026",
  },
  {
    id: "FAQ-06",
    question: "Is there any registration cost or fee?",
    answer:
      "No cost. Hack 6.0 is 100% free with complete food, swag, and access provided on-site.",
    date: "15/10/2026",
  },
];

const ORGANIZERS_DATA = [
  {
    title: "Organisers",
    code: "DIR_EXEC",
    members: [
      { name: "Lavish", role: "Student Co-ordinator", image: "https://res.cloudinary.com/dtrv7xbm5/image/upload/v1768491424/lavish_peoxgv.jpg" },
      { name: "Hridanshu", role: "Lead Organiser", image: "https://res.cloudinary.com/dfgnzhgko/image/upload/v1771672514/WhatsApp_Image_2026-02-21_at_4.44.29_PM_fo8odm.jpg" },
      { name: "Aryan", role: "Lead Organiser", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051509/PFP_orcdec.jpg" },
      { name: "Sameer Varshney", role: "Media Lead", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051518/IMG_20240919_214713_277_Original_t9f7dp.jpg" },
      { name: "Sujal", role: "Web Dev Lead", image: "https://res.cloudinary.com/dkpnbush2/image/upload/v1771082595/WhatsApp_Image_2026-02-14_at_8.52.00_PM_gpv3h8.jpg" },
      { name: "Anilove", role: "External affair Lead", image: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088682/IMG20241110215944_qx4ejt.jpg" },
    ],
  },
  {
    title: "Technical & Management",
    code: "DIR_TECH",
    members: [
      { name: "Khushvinder", role: "Secretary", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051540/IMG-20250606-WA0026_wdhj8i.jpg" },
      { name: "Neerad Sood", role: "Secretary", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051986/20260124_141323_y7mnq7.jpg" },
      { name: "Bhola Prasad Sah", role: "Secretary", image: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg" },
      { name: "Sourav Choudhary", role: "Secretary", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051556/IMG-20260120-WA0006_allwpg.jpg" },
    ],
    
  },
  {
    title: "Operations & Logistics",
    code: "DIR_OPS",
    members: [
      { name: "Jatin", role: "Executive", image: "https://res.cloudinary.com/dkpnbush2/image/upload/v1771081952/WhatsApp_Image_2026-02-14_at_5.03.05_PM_zmsnhm.jpg" },
      { name: "Chetna Singh", role: "Executive", image: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg" },
      { name: "Sumit Kumar", role: "Executive", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051564/BeautyPlus_20251111031426182_save_yis9r7.jpg" },
      { name: "Utkarsh Shukla", role: "Executive", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052951/image_utkarsh_dh2ard.png" },
      { name: "Raman Bansal", role: "Executive", image: "https://res.cloudinary.com/dkpnbush2/image/upload/v1771082448/DSC_3638.JPG_s7l02t.jpg" },
      { name: "Abhishika", role: "Executive", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051535/IMG_20251223_153641_284_ivwq8b.jpg" },
      { name: "Mohammad Asad", role: "Executive", image: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770053013/1768897004233_ihwvo4.jpg" },
    ],
  },
];

export default function CyberTerminalModal({
  isOpen,
  initialTab,
  onClose,
}: CyberTerminalModalProps) {
  const [activeTab, setActiveTab] = useState<TerminalTab>(initialTab);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: TerminalTab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cyber-terminal-tab-change", {
          detail: { tab, isOpen: true },
        })
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.removeEventListener("keydown", handleKeyDown);
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className={
          isMaximized
            ? "fixed inset-0 z-40 flex items-center justify-center pt-20 sm:pt-24 pb-4 px-3 sm:px-6 bg-black/85 backdrop-blur-md"
            : "absolute inset-0 z-30 flex items-center justify-center p-2 sm:p-4 md:p-6 pointer-events-none"
        }
      >
        {isMaximized && (
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto relative z-10 w-full flex flex-col overflow-hidden bg-[#07010f] border-2 border-[#ff2a85] text-[#ff75c3] font-mono select-none transition-all duration-300 shadow-[0_0_50px_rgba(255,42,133,0.35),_inset_0_0_80px_rgba(168,85,247,0.15)] ${
            isMaximized
              ? "max-w-6xl h-full max-h-[calc(100vh-6.5rem)]"
              : "max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[490px] sm:h-[530px] md:h-[570px] md:ml-14 lg:ml-20"
          }`}
        >
          <div className="relative z-20 px-3 sm:px-5 pt-2.5 pb-2 border-b-2 border-[#ff2a85]/70 bg-[#120224] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-widest text-[#a855f7] font-bold">
              <span className="text-[#ff2a85] animate-pulse">
                ACCESS LEVEL: OMEGA / INTERNAL USE ONLY
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="px-2 py-0.5 bg-black/60 border border-[#a855f7] text-[#c084fc] hover:bg-[#a855f7] hover:text-black transition-colors text-[10px] uppercase font-bold"
                  title="Toggle Screen Size"
                >
                  {isMaximized ? "RESTORE" : "MAXIMIZE"}
                </button>
                <button
                  onClick={onClose}
                  className="px-2 py-0.5 bg-black/60 border border-[#ff2a85] text-[#ff2a85] hover:bg-[#ff2a85] hover:text-black transition-colors text-[10px] font-bold"
                  title="Close Terminal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5 pt-1 overflow-x-auto">
              <button
                onClick={() => handleTabChange("judges")}
                className={`px-3 py-1 text-[11px] sm:text-xs border uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "judges"
                    ? "bg-[#ff2a85] text-black border-[#ff2a85] shadow-[0_0_12px_rgba(255,42,133,0.6)]"
                    : "bg-black/60 border-[#a855f7]/50 text-[#c084fc] hover:bg-[#a855f7]/20"
                }`}
              >
                <span>[■]</span>
                <span>EVALUATORS / JUDGES</span>
              </button>

              <button
                onClick={() => handleTabChange("faq")}
                className={`px-3 py-1 text-[11px] sm:text-xs border uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "faq"
                    ? "bg-[#ff2a85] text-black border-[#ff2a85] shadow-[0_0_12px_rgba(255,42,133,0.6)]"
                    : "bg-black/60 border-[#a855f7]/50 text-[#c084fc] hover:bg-[#a855f7]/20"
                }`}
              >
                <span>[■]</span>
                <span>FAQ / KNOWLEDGE BASE</span>
              </button>

              <button
                onClick={() => handleTabChange("team")}
                className={`px-3 py-1 text-[11px] sm:text-xs border uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "team"
                    ? "bg-[#ff2a85] text-black border-[#ff2a85] shadow-[0_0_12px_rgba(255,42,133,0.6)]"
                    : "bg-black/60 border-[#a855f7]/50 text-[#c084fc] hover:bg-[#a855f7]/20"
                }`}
              >
                <span>[■]</span>
                <span>ORGANIZERS ROSTER</span>
              </button>

              <a
                href="/team"
                className="px-3 py-1 text-[11px] sm:text-xs border uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 bg-black/60 border-[#a855f7]/50 text-[#c084fc] hover:bg-[#a855f7]/20"
              >
                <span>[■]</span>
                <span>TEAM</span>
              </a>
            </div>
          </div>

          <div className="relative z-20 flex-1 px-3 sm:px-5 pt-2.5 pb-2 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between border-b border-[#ff2a85]/50 pb-2 text-xs sm:text-sm text-[#a855f7] font-bold tracking-wider shrink-0">
              <div className="flex items-center gap-2 text-[#ff2a85]">
                <span>[⬚]</span>
                <span>
                  {activeTab === "judges"
                    ? "EVALUATION PANEL ROSTER"
                    : activeTab === "faq"
                    ? "FREQUENTLY ACCESSED PROTOCOLS"
                    : "ORGANIZING SQUAD DIRECTORY"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#a855f7]">
                <span>
                  {activeTab === "judges"
                    ? "4 ACTIVE JUDGES"
                    : activeTab === "faq"
                    ? "6 LOG ENTRIES"
                    : "21 OPERATORS"}
                </span>
                <span>[?]</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pt-3 pr-1 space-y-4">
              {activeTab === "judges" && (
                SHOW_JUDGES ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      {JUDGES_DATA.map((judge, idx) => (
                        <div
                          key={idx}
                          className="border-2 border-[#ff2a85]/70 bg-[#0e021c]/90 hover:bg-[#18032e] p-4 sm:p-5 flex flex-col gap-3.5 transition-all hover:border-[#ff2a85] hover:shadow-[0_0_25px_rgba(255,42,133,0.4)]"
                        >
                          <div className="flex items-center gap-4 sm:gap-5">
                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 border-2 border-[#ff2a85] bg-black shrink-0 overflow-hidden shadow-[0_0_15px_rgba(255,42,133,0.3)]">
                              <Image
                                src={judge.image}
                                alt={judge.name}
                                fill
                                className="object-cover grayscale contrast-125 hover:scale-105 transition-transform"
                              />
                              <div className="absolute inset-0 bg-[#ff2a85]/20 mix-blend-color pointer-events-none" />
                            </div>
                            <div className="truncate space-y-1">
                              <p className={`text-2xl sm:text-3xl font-pricedown tracking-wide text-white truncate ${pricedown.className}`}>
                                {judge.name}
                              </p>
                              <p className="text-sm sm:text-base text-[#a855f7] font-bold truncate">
                                {judge.role}
                              </p>
                              <span className="inline-block text-xs font-bold text-[#00f0ff] uppercase tracking-wider bg-[#00f0ff]/10 border border-[#00f0ff]/40 px-2 py-0.5">
                                [{judge.ditherStyle}]
                              </span>
                            </div>
                          </div>

                          <div className="border border-[#ff2a85]/30 bg-black/60 p-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                            <p className="text-[#a855f7] font-bold text-xs">[{judge.timestamp} DOSSIER LOG]:</p>
                            <p className="text-[#f472b6] mt-1">&quot;{judge.log}&quot;</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-48 items-center justify-center border-2 border-[#a855f7]/70 bg-[#0e021c]/90 p-6 text-center text-xl font-bold text-[#ff75c3]">
                    Looking for judges
                  </div>
                )
              )}

              {activeTab === "faq" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {FAQ_DATA.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#a855f7]/70 bg-[#0e021c]/90 hover:bg-[#18032e] p-5 flex flex-col justify-between gap-3 transition-all hover:border-[#ff2a85] hover:shadow-[0_0_20px_rgba(255,42,133,0.35)]"
                      >
                        <div>
                          <span className="text-xs text-[#a855f7] font-bold block mb-1">
                            [{faq.id} - {faq.date}]
                          </span>
                          <p className="text-base sm:text-lg font-bold text-white leading-snug">
                            Q: {faq.question}
                          </p>
                        </div>

                        <div className="border border-white/10 bg-black/60 p-3.5 text-sm sm:text-base text-[#ff75c3] leading-relaxed">
                          &gt; {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div className="space-y-6">
                  {ORGANIZERS_DATA.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-3.5">
                      <div className="text-sm sm:text-base text-[#a855f7] border-b border-white/10 pb-1.5 flex justify-between items-center font-bold">
                        <span className="text-[#ff2a85] text-base sm:text-lg">&gt; {group.title.toUpperCase()}</span>
                        <span className="text-xs">[{group.members.length} OPERATORS]</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.members.map((member, mIdx) => (
                          <div
                            key={mIdx}
                            className="border-2 border-[#ff2a85]/50 bg-[#0e021c]/90 hover:bg-[#18032e] p-3.5 flex items-center gap-3.5 transition-all hover:border-[#ff2a85] hover:shadow-[0_0_15px_rgba(255,42,133,0.35)]"
                          >
                            <div className="relative w-16 h-16 sm:w-18 sm:h-18 border-2 border-white/30 overflow-hidden shrink-0 shadow">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all"
                              />
                            </div>
                            <div className="truncate space-y-0.5">
                              <p className={`text-base sm:text-lg font-pricedown tracking-wide text-white truncate ${pricedown.className}`}>
                                {member.name}
                              </p>
                              <p className="text-xs sm:text-sm text-[#a855f7] truncate font-bold">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative z-20 px-3 sm:px-4 py-1.5 border-t-2 border-[#ff2a85]/70 bg-[#120224] flex items-center justify-between text-[10px] text-[#a855f7]">
            <span>SYS: 93 95355 - STATUS: 200 OK</span>
            <span>ENCRYPTION: OBSIDIAN_AES - FREQ: 44.1kHz</span>
            <span className="text-[#ff2a85] font-bold">NODE: CSEC_NITH</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}