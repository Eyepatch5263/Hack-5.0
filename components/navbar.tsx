"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { scrollToSection } from "@/lib/scroll-utils"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font", // Optional: for CSS variables
})

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showHackText, setShowHackText] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)

      // Show HACK 5.0 text only when scrolled away from hero section
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setShowHackText(window.scrollY > heroHeight * 0.5)
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.substring(1) // Remove the # from the href
    scrollToSection(sectionId)
    setIsOpen(false) // Close mobile menu if open
  }

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <AnimatePresence mode="wait">
            {!showHackText ? (
              <motion.div
                key="logos"
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* CSEC Logo - Link to external site */}
                <motion.a
                  href="https://csec.nith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[48px] h-[48px] mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                    alt="CSEC Logo"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
                    }}
                  />
                </motion.a>

                {/* Separator */}
                <div className="h-7 w-px bg-gray-500 mx-3"></div>

                {/* HACK Logo - Link to home section */}
                <motion.a
                  href="#home"
                  onClick={(e) => handleNavLinkClick(e, "#home")}
                  className="relative w-[48px] h-[48px] mr-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png"
                    alt="HACK Logo"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 5px rgba(117, 2, 15, 0.5))",
                    }}
                  />
                </motion.a>
              </motion.div>
            ) : (
              <motion.div
                key="hacktext"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`${Hacked_KerX.className} whitespace-nowrap`}
              >
                <a
                  href="#home"
                  onClick={(e) => handleNavLinkClick(e, "#home")}
                  className="text-2xl md:text-5xl font-bold text-primary drop-shadow-glow ml-1"
                >
                  HACK<span className="text-white"> 5.0</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li key={link.name} custom={i} variants={linkVariants}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={cn(
                    "text-lg font-medium text-foreground hover:text-primary transition-colors relative",
                    activeSection === link.href.substring(1) && "text-primary",
                  )}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            variants={linkVariants}
            custom={navLinks.length}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://hack-1158.devfolio.co/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-glow-sm text-base px-6 py-2.5 h-auto">
                Apply Now
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className={cn(
                        "text-lg font-medium text-foreground hover:text-primary transition-colors block py-3",
                        activeSection === link.href.substring(1) && "text-primary",
                      )}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <a href="https://hack-1158.devfolio.co/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full mt-2 shadow-glow-sm text-base py-2.5">
                      Apply Now
                    </Button>
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

