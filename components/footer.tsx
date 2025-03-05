"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Instagram, Twitter, Linkedin } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { scrollToSection } from "@/lib/scroll-utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.substring(1) // Remove the # from the href
    scrollToSection(sectionId)
  }

  return (
    <footer className="bg-background border-t border-gray-700 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* CSEC Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="https://csec.nith.ac.in/" target="_blank">
                <div className="relative w-12 h-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                    alt="CSEC Logo"
                    fill
                    className="object-contain rounded-lg shadow-lg"
                  />
                </div>
              </Link>
              <span className="text-2xl font-bold text-white">CSEC</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empowering innovation through code, creativity, and collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.com/invite/GUSdHK8x"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
                rel="noreferrer"
              >
                <FaDiscord className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/hacknith?igsh=N3VtczNwa3pjNjNo"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
                rel="noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/csec_nith?t=Ubyv6_7SLUkdaxtBS8MUew&s=09"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
                rel="noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/nith-csec/"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Kept as is */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="text-gray-400 text-lg hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="text-gray-400 text-lg hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> About
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  onClick={(e) => handleLinkClick(e, "#timeline")}
                  className="text-gray-400 text-lg hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> Timeline
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  onClick={(e) => handleLinkClick(e, "#prizes")}
                  className="text-gray-400 text-lg hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> Prizes
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={(e) => handleLinkClick(e, "#sponsors")}
                  className="text-gray-400 text-lg hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Resources - Updated with new links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://dot-puma-97f.notion.site/Hack-5-0-Venue-19f095b2daf9809e86e5f0a3fcb7d3df"
                  target="_blank"
                  className="text-gray-400 text-lg cursor-pointer hover:text-primary transition-colors"
                  rel="noreferrer"
                >
                  Venue Guide
                </a>
              </li>
              <li>
                <a
                  href="https://dot-puma-97f.notion.site/Hack-5-0-Hacker-s-Guide-19f095b2daf980058a2de1c0691aef59?pvs=74"
                  target="_blank"
                  className="text-gray-400 text-lg cursor-pointer hover:text-primary transition-colors"
                  rel="noreferrer"
                >
                  Hacker's Guide
                </a>
              </li>
              <li>
                <a href="/coc" className="text-gray-400 text-lg hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/GUSdHK8x"
                  target="_blank"
                  className="text-gray-400 text-lg hover:text-primary transition-colors"
                  rel="noreferrer"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="text-gray-400 text-lg hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section - Replacing Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-lg leading-relaxed">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 text-white rounded-lg sm:rounded-r-none px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary border border-primary/50 sm:rounded-r-none h-auto mb-2 sm:mb-0"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg sm:rounded-l-none h-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-gray-400 text-sm">
          <p>Designed with ❤️ by the HACK 5.0 Team | Powered by innovation and creativity</p>
        </div>
      </div>
    </footer>
  )
}

