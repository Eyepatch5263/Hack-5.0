import React from 'react';
import { Pyramid } from 'lucide-react';
import { ParticlesBackground } from '@/components/ParticleBackground';
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-900 via-red-900 to-red-950">
      {/* Wavy Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ff5500" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,186.7C672,181,768,107,864,101.3C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Pyramid size={64} className="text-amber-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-transparent bg-clip-text">
            Ancient Wonders
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Discover the mysteries of Egypt where ancient history meets modern exploration. Journey through time in an immersive experience.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;