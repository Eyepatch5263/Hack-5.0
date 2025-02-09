"use client"
import { Github, Linkedin, Twitter } from "lucide-react"

import React from 'react'

const Footer = () => {
    return (
        <footer className="snap-start border-t border-gray-600 bg-gradient-to-b from-gray-500 to bg-black">
            <div className="py-16 px-12">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="csec.png" width={48}/>
                            <span className="text-xl font-bold text-gray-200">CSEC</span>
                        </div>
                        <p className="text-gray-400 text-lg">
                            Empowering innovation through code, creativity, and collaboration.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-tango transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-tango transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-tango transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">Schedule</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">Sponsors</a></li>
                            <li><a href="/faq" className="text-gray-400 text-lg hover:text-tango transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-200">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">Getting Started</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">Code of Conduct</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">Rules</a></li>
                            <li><a href="#" className="text-gray-400 text-lg hover:text-tango transition-colors">Discord</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-200">Stay Updated</h3>
                        <p className="text-gray-400 mb-4 text-lg">Subscribe to our newsletter for updates and announcements.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-sepia-black/50 rounded-l-lg px-4 py-2 text-gray-600 w-full focus:outline-none focus:ring-1 focus:ring-tango border border-gray-700"
                            />
                            <button className="bg-amber-700 hover:bg-fire transition-colors px-4 py-2 rounded-r-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 py-8 px-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-lg">
                        © 2025 HACK 5.0. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-tango transition-colors text-lg">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-tango transition-colors text-lg">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-tango transition-colors text-lg">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


