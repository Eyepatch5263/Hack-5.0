"use client"
import { Award, Diamond, Medal } from 'lucide-react'
import React from 'react'

const Sponsors = () => {
    return (
        <div className="snap-center px-16 bg-gradient-to-br from-gray-600 via-slate-900 to bg-amber-900">
            <div className="text-center mb-16">
                <h2 className="font-bold pt-16 mb-4 text-3xl text-white md:text-5xl">Our Sponsors</h2>
                <p className=" text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                    Meet the innovative companies empowering the next generation of developers and supporting our mission to forge the future.
                </p>
            </div>

            {/* Platinum Sponsors */}
            <div className="mb-16">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <Diamond className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl text text-gray-400 font-semibold">Platinum Partners</h3>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {[1, 2].map((sponsor) => (
                        <div key={sponsor} className="bg-sepia-black/50 rounded-xl p-12 flex items-center justify-center border border-tango/20 hover:border-tango/40 transition-colors">
                            <div className="w-full h-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-16">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <Award className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-2xl text-gray-400 font-semibold">Gold Sponsors</h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((sponsor) => (
                        <div key={sponsor} className="bg-sepia-black/50 rounded-xl p-8 flex items-center justify-center border border-indian-tan/20 hover:border-indian-tan/40 transition-colors">
                            <div className="w-full h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Silver Sponsors */}
            <div>
                <div className="flex items-center justify-center gap-2 mb-8">
                    <Medal className="w-6 h-6 text-gray-400" />
                    <h3 className="text-2xl text-gray-400 font-semibold">Silver Sponsors</h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((sponsor) => (
                        <div key={sponsor} className="bg-sepia-black/50 rounded-xl p-6 flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors">
                            <div className="w-full h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sponsorship CTA */}
            <div className="mt-24 text-center">
                <h3 className="text-2xl text-gray-400 font-bold mb-4">Become a Sponsor</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    Join us in shaping the future of technology. Partner with HACK 5.0 and connect with the brightest minds in tech.
                </p>
                <button className="px-8 py-3 mb-10 bg-amber-800 rounded-lg hover:bg-fire transition-colors inline-flex items-center space-x-2">
                    <Diamond className="w-5 h-5 text-gray-200" />
                    <span className='text-gray-300'>View Sponsorship Deck</span>
                </button>
            </div>
        </div>
    )
}

export default Sponsors
