"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-utils";
import Link from "next/link";

const navLinks: {
  name: string;
  href: string;
  sectionId: string;
  terminalTab?: "judges" | "faq" | "team";
}[] = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Timeline", href: "#timeline", sectionId: "timeline" },
  { name: "Prizes", href: "#prizes", sectionId: "prizes" },
  { name: "Sponsors", href: "#sponsors", sectionId: "sponsors" },
  { name: "Judges", href: "#cyber-blade", sectionId: "cyber-blade", terminalTab: "judges" },
  { name: "FAQ", href: "#cyber-blade", sectionId: "cyber-blade", terminalTab: "faq" },
  { name: "Organizers", href: "#cyber-blade", sectionId: "cyber-blade", terminalTab: "team" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

const SECTIONS_ORDER = [
  "home",
  "about",
  "timeline",
  "prizes",
  "sponsors",
  "cyber-blade",
  "contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeTerminalTab, setActiveTerminalTab] = useState<string | null>(null);
  const [showHackText, setShowHackText] = useState(false);

  useEffect(() => {
    const handleTerminalTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ isOpen?: boolean; tab?: string }>;
      if (customEvent.detail?.isOpen && customEvent.detail?.tab) {
        setActiveTerminalTab(customEvent.detail.tab);
      } else {
        setActiveTerminalTab(null);
      }
    };

    window.addEventListener("cyber-terminal-tab-change", handleTerminalTabChange);
    return () => {
      window.removeEventListener("cyber-terminal-tab-change", handleTerminalTabChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 15);

      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;

      // 1. Top of page is strictly HOME
      if (scrollY < heroHeight * 0.4) {
        setActiveSection("home");
        setShowHackText(false);
        return;
      }
      setShowHackText(true);

      // 2. Check sections using bounding client rects (top-down in reverse order)
      const sections = [
        "contact",
        "cyber-blade",
        "sponsors",
        "prizes",
        "timeline",
        "about",
      ];

      const triggerLine = window.innerHeight * 0.4;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine && rect.bottom > 80) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection("about");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    terminalTab?: "judges" | "faq" | "team",
    sectionId?: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#home" || sectionId === "home") {
      setActiveSection("home");
      setActiveTerminalTab(null);
      scrollToSection("home");
      return;
    }

    if (terminalTab) {
      setActiveSection("cyber-blade");
      setActiveTerminalTab(terminalTab);
      scrollToSection("cyber-blade");
      window.dispatchEvent(
        new CustomEvent("open-cyber-terminal", { detail: { tab: terminalTab } })
      );
      return;
    }

    if (href.startsWith("#")) {
      const targetId = sectionId || href.substring(1);
      setActiveSection(targetId);
      setActiveTerminalTab(null);
      scrollToSection(targetId);
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0e0419]/90 backdrop-blur-md  py-3 shadow-[0_4px_20px_rgba(255,42,133,0.15)]"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

            <motion.a
              href="https://csec.nith.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-sm border-2 border-white overflow-hidden bg-[#19171b]/90 p-1 flex items-center justify-center transition-transform shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              title="CSEC NITH"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                alt="CSEC Logo"
                fill
                className="object-contain p-0.5"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))",
                }}
              />
            </motion.a>

            <div className="h-7 w-px bg-white/40"></div>

            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-sm border-2 border-white overflow-hidden bg-[#19171b]/90 p-1 flex items-center justify-center transition-transform shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              title="HACK 6.0"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png"
                alt="HACK Logo"
                fill
                className="object-contain p-0.5"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255, 42, 133, 0.6))",
                }}
              />
            </motion.a>

            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center group ml-1"
            >
              <span
                className={cn(
                  "font-pricedown text-2xl sm:text-3xl tracking-tight text-white transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                  showHackText
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
                )}
              >
                HACK 6.0
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isCurrentlyInCyberBlade = activeSection === "cyber-blade";
              const isActive = isCurrentlyInCyberBlade
                ? (link.terminalTab ? (activeTerminalTab ? activeTerminalTab === link.terminalTab : link.terminalTab === "judges") : false)
                : (link.sectionId === activeSection && !link.terminalTab);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.terminalTab, link.sectionId)}
                  className={cn(
                    "px-2 py-1 font-heading text-xla font-bold tracking-tight uppercase whitespace-nowrap transition-all duration-300 relative rounded group inline-block",
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] drop-shadow-[0_0_10px_rgba(255,42,133,0.9)] scale-105"
                      : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff2a85] hover:via-[#ff75c3] hover:to-[#ff9ebb] hover:drop-shadow-[0_0_10px_rgba(255,42,133,0.9)] hover:scale-105"
                  )}
                >
                  <span>{link.name}</span>

                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 pointer-events-none",
                      isActive
                        ? "w-full bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] shadow-[0_0_10px_rgba(255,42,133,0.9)]"
                        : "w-0 group-hover:w-full bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] shadow-[0_0_8px_rgba(255,42,133,0.8)]"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:text-[#ff2a85] hover:bg-[#ff2a85]/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0e0419]/95 backdrop-blur-xl border-b border-[#ff2a85]/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isCurrentlyInCyberBlade = activeSection === "cyber-blade";
                const isActive = isCurrentlyInCyberBlade
                  ? (link.terminalTab ? (activeTerminalTab ? activeTerminalTab === link.terminalTab : link.terminalTab === "judges") : false)
                  : (link.sectionId === activeSection && !link.terminalTab);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.terminalTab, link.sectionId)}
                    className={cn(
                      "px-3 py-1.5 font-heading text-xl tracking-tight uppercase transition-all duration-300 rounded relative group inline-block",
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] drop-shadow-[0_0_10px_rgba(255,42,133,0.8)]"
                        : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff2a85] hover:via-[#ff75c3] hover:to-[#ff9ebb] hover:drop-shadow-[0_0_10px_rgba(255,42,133,0.9)]"
                    )}
                  >
                    <span>{link.name}</span>
                    <span
                      className={cn(
                        "block h-[2px] transition-all duration-300",
                        isActive
                          ? "w-20 bg-gradient-to-r from-[#ff2a85] to-[#00f0ff] shadow-[0_0_8px_rgba(255,42,133,0.8)]"
                          : "w-0 group-hover:w-20 bg-gradient-to-r from-[#ff2a85] to-[#00f0ff]"
                      )}
                    />
                  </a>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
