"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useGlitch } from "react-powerglitch"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
})

export default function HeroSection() {
  const glitch = useGlitch({
    timing: {
      duration: 3950,
    },
    shake: false,
  })

  const targetDate = new Date("2025-03-22T23:59:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  // Add Devfolio script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://apply.devfolio.co/v2/sdk.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Countdown timer logic
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    };

    return {
      days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatTime(Math.floor((difference / 1000) % 60)),
    };
  }

  function formatTime(time: number) {
    return time < 10 ? `0${time}` : `${time}`;
  }

  // Set up timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="home" className="relative">
      <div className="h-screen flex flex-col">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
          <div className="absolute inset-0 backdrop-blur-md z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-700/20 filter blur-[80px] animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gray-700/20 filter blur-[100px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Navbar space compensation */}
        <div className="h-20"></div>

        {/* Main content - absolute center of the screen height */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="container mx-auto px-4 z-10 text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="relative">
              {/* Red blur effect below the text */}
              <div className="absolute w-full h-24 md:h-72 bg-primary/10 rounded-full filter blur-[60px] top-[90%] left-0 z-[-1000] opacity-60"></div>

              <h1
                className={`relative z-10 text-7xl sm:text-9xl md:text-9xl font-bold mb-4 md:mb-8 text-white ${Hacked_KerX.className}`}
              >
                <span ref={glitch.ref} className="text-primary inline-block">
                  HACK
                </span>{" "}
                <span className={Hacked_KerX.className}>5.0</span>
              </h1>
            </motion.div>

            <motion.div variants={item} className="flex justify-center mt-12 ">
              {/* Devfolio button */}
              <div
                className="apply-button"
                data-hackathon-slug="hack-1158" 
                data-button-theme="dark-inverted"
                style={{ height: "44px", width: "312px" }}
              >Apply with Devfolio</div>
            </motion.div>
          </motion.div>
        </div>



        {/* Countdown timer - positioned at bottom with proper spacing */}
        <div className="w-full px-4 pb-12 sm:pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          >
            <motion.div variants={item} className="mb-3 text-center text-sm md:text-base lg:text-lg text-gray-300">
              Registration Closes in
            </motion.div>

            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {Object.entries(timeLeft).map(([key, value], index) => (
                <motion.div
                  key={key}
                  variants={item}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-gray-700 shadow-lg flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {value}
                  </div>
                  <div className="text-[10px] md:text-xs lg:text-sm text-gray-300 uppercase tracking-wider">{key}</div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}