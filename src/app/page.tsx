import React from 'react';
import { ParticlesBackground } from '@/components/ParticleBackground';
import { Code2, Flame, Terminal, Zap } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-900 via-red-800 to-red-900">
      <ParticlesBackground />
      <div className="min-h-screen bg-gradient text-white overflow-hidden">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-tango/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-fire/10 rounded-full blur-3xl"></div>
          </div>

          {/* Main Content */}
          <div className="relative container mx-auto px-6 py-16">
            {/* Header */}
            <nav className="flex justify-between items-center mb-16">
              <div className="flex items-center space-x-2">
                <Terminal className="w-8 h-8 text-tango" />
                <span className="text-xl font-bold">CSEC</span>
              </div>
              <div className="flex space-x-8">
                <button className="hover:text-indian-tan transition-colors">
                  About
                </button>
                <button className="hover:text-indian-tan transition-colors">
                  Schedule
                </button>
                <button className="hover:text-indian-tan transition-colors">
                  Sponsors
                </button>
                <button className="px-6 py-2 bg-tango rounded-lg hover:bg-fire transition-colors">
                  Register Now
                </button>
              </div>
            </nav>

            {/* Hero Content */}
            <div className="flex items-center justify-between mt-24">
              <div className="max-w-2xl">
                <h1 className="text-7xl font-bold mb-6">
                  <span className="text-gradient">HACK 5.0</span>
                  <br />
                  <span className="text-5xl">Obsidian Saga</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Embark on an epic journey of innovation and creativity. Join us
                  in forging the future through code, collaboration, and
                  cutting-edge technology.
                </p>
                <div className="flex space-x-6">
                  <button className="px-8 py-3 bg-tango rounded-lg hover:bg-fire transition-colors flex items-center space-x-2">
                    <Flame className="w-5 h-5" />
                    <span>Join the Saga</span>
                  </button>
                  <button className="px-8 py-3 border border-indian-tan rounded-lg hover:bg-indian-tan/10 transition-colors flex items-center space-x-2">
                    <Code2 className="w-5 h-5" />
                    <span>Learn More</span>
                  </button>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 floating">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-tango to-fire rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute inset-10 bg-sepia-black rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="w-32 h-32 text-tango glowing" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-8 mt-24">
              {[
                { label: "Prize Pool", value: "$10,000+" },
                { label: "Hours", value: "48" },
                { label: "Tracks", value: "5" },
                { label: "Participants", value: "500+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;