"use client"

import { useState, useEffect } from "react"
import { motion, type Variants } from "framer-motion"
import { useGlitch } from "react-powerglitch"
import { pricedown, signatur } from "../../lib/fonts"

export default function HeroSection() {
  const glitch = useGlitch({
    timing: {
      duration: 3950,
    },
    shake: false,
    glitchTimeSpan: {
      start: 0.15,
      end: 0.75,
    },
    slice: {
      count: 7,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.14,
      hueRotate: false,
    },
  })

  const targetDate = new Date("2027-01-11T00:00:00").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  function calculateTimeLeft() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      }
    }

    return {
      days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatTime(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatTime(Math.floor((difference / 1000) % 60)),
    }
  }

  function formatTime(time: number) {
    return time < 10 ? `0${time}` : `${time}`
  }

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="sticky top-0 select-none overflow-hidden bg-[#0e0419] min-h-screen h-screen z-0">
      <div className="absolute inset-0 w-full h-full min-h-screen z-0">
        <picture className="w-full h-full min-h-screen">
          <source media="(min-width: 768px)" srcSet="/hero/hack6.0%20banner.svg" />
          <img
            src="/hero/CSEC.svg"
            alt="Hack 6.0 Banner"
            className="w-full h-full min-h-screen object-cover object-center"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0e0419]/40 to-[#0e0419] z-10 pointer-events-none" />

      <div className="min-h-screen h-screen flex flex-col justify-start sm:justify-center items-center relative z-20 px-4 pt-[24vh] pb-8 sm:pt-16 sm:pb-6">
        <motion.div
          className="container max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.div variants={item} className="relative">
            <h1
              className={`
                relative
                z-10
                font-pricedown
                text-6xl
                sm:text-8xl
                md:text-[9rem]
                lg:text-[11rem]
                tracking-tight
                text-white
                ${pricedown.className}
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                select-none
              `}
            >

              <span className="relative inline-block">
                <span
                  ref={glitch.ref}
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    text-[#00f0ff]
                    opacity-80
                    pointer-events-none
                    mix-blend-screen
                    [-webkit-text-stroke:2px_#000000]
                    sm:[-webkit-text-stroke:3px_#000000]
                    md:[-webkit-text-stroke:4px_#000000]
                    drop-shadow-[4px_4px_0px_#000000]
                  "
                >
                  HACK 6.0
                </span>

                <span
                  className="
                    relative
                    z-10
                    inline-block
                    text-white
                    [-webkit-text-stroke:2px_#000000]
                    sm:[-webkit-text-stroke:3px_#000000]
                    md:[-webkit-text-stroke:4px_#000000]
                    drop-shadow-[6px_6px_0px_rgba(0,0,0,0.9)]
                  "
                >
                  HACK 6.0
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="relative z-20 flex justify-center w-full px-4">
            <div
              className="apply-button"
              data-hackathon-slug="hack-1736"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            />
          </motion.div>

          <motion.div variants={item} className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto mt-1 sm:mt-3 relative z-20">
            <div
              className="
                mb-2.5
                text-center
                text-sm
                sm:text-base
                md:text-lg
                text-white
                font-pricedown
                uppercase
                tracking-wider
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
                flex
                items-center
                justify-center
                gap-2
                select-none
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a85] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a85]" />
              </span>
              Registration Closes in
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
              {Object.entries(timeLeft).map(([key, value], index) => {
                return (
                  <div
                    key={key}
                    className="
                      relative
                      group
                      overflow-hidden
                      bg-[#0a0314]/90
                      backdrop-blur-xl
                      p-2
                      sm:p-3
                      md:p-3.5
                      rounded-xl
                      border
                      border-white/15
                      hover:border-[#ff2a85]/60
                      shadow-[0_4px_15px_rgba(0,0,0,0.8),_2px_2px_0px_#00f0ff]
                      hover:shadow-[0_8px_20px_rgba(255,42,133,0.35),_3px_3px_0px_#ff2a85]
                      hover:-translate-y-0.5
                      active:translate-y-0.5
                      transition-all
                      duration-300
                      flex
                      flex-col
                      items-center
                      justify-center
                      select-none
                    "
                  >

                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent group-hover:via-[#ff2a85]/80 transition-colors duration-300" />

                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                    <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f0ff]" />
                    </span>

                    <div
                      className="
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl
                        font-pricedown
                        font-normal
                        tracking-tight
                        mb-0.5
                        text-white
                        drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                      "
                    >
                      {value}
                    </div>

                    <div
                      className="
                        text-[10px]
                        sm:text-xs
                        md:text-sm
                        text-gray-300
                        group-hover:text-white
                        font-pricedown
                        uppercase
                        tracking-widest
                        drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                        transition-colors
                        duration-200
                      "
                    >
                      {key}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
