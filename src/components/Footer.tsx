"use client"
import { Github, Linkedin, Twitter } from "lucide-react"
import React from 'react'

const Footer = () => {
    return (
        <footer className="snap-start border-t border-gray-700 bg-gradient-to-b from-[#2B0307] to-[#19171B] text-gray-300">
            <div className="py-16 px-12">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="csec.png" width={48} className="rounded-lg shadow-lg"/>
                            <span className="text-2xl font-bold text-white">CSEC</span>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Empowering innovation through code, creativity, and collaboration.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">Schedule</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">Sponsors</a></li>
                            <li><a href="/faq" className="text-gray-400 text-lg hover:text-red-400 transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">Getting Started</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">Code of Conduct</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">Rules</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-red-400 transition-colors">Discord</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Stay Updated</h3>
                        <p className="text-gray-400 mb-4 text-lg leading-relaxed">Subscribe to our newsletter for updates and announcements.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#51080D] text-white rounded-l-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 border border-red-500"
                            />
                            <button className="bg-red-600 hover:bg-red-500 transition-colors px-6 py-3 rounded-r-lg text-white font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-red-900 py-8 px-10 bg-[#19171B]">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-lg">
                        © 2025 HACK 5.0. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
