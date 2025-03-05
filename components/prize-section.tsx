"use client"

import { useState, useEffect, useRef } from "react"
import { Trophy, Gift, Lightbulb, Hexagon, Gem, GraduationCap, Wallet } from "lucide-react"
import { LuMedal } from "react-icons/lu";
import { IoMedalOutline } from "react-icons/io5";
import { CiMedal } from "react-icons/ci";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
})
// Optimized Confetti component for mobile performance
const Confetti = () => {
  // Significantly reduced number of confetti pieces for mobile
  const confettiPieces = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 6 + 4 // Smaller pieces
    const left = Math.random() * 100
    const animationDuration = Math.random() * 1 + 0.5 // Faster animation
    const animationDelay = Math.random() * 0.2

    // Reduced color palette
    const colors = ["#E63946", "#c1121f", "#FFD700"]
    const color = colors[Math.floor(Math.random() * colors.length)]

    return (
      <motion.div
        key={i}
        initial={{
          top: "-5%",
          left: `${left}%`,
          opacity: 0,
        }}
        animate={{
          top: "105%",
          left: `${left}%`, // Removed horizontal movement for better performance
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: animationDuration,
          delay: animationDelay,
          ease: "linear", // Simpler easing
        }}
        style={{
          position: "absolute",
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%", // Only using circles for better performance
          zIndex: 10,
        }}
      />
    )
  })

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{confettiPieces}</div>
}

export default function PrizeSection() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [showGrandPrizeConfetti, setShowGrandPrizeConfetti] = useState(false)
  const [hasTriggeredInitialConfetti, setHasTriggeredInitialConfetti] = useState(false)
  const ref = useRef(null)

  // Effect to handle initial confetti animation - with cleanup
  // useEffect(() => {
  //   if (sectionInView && !hasTriggeredInitialConfetti) {
  //     setShowGrandPrizeConfetti(true)
  //     setHasTriggeredInitialConfetti(true)

  //     // Hide confetti after exactly 2 seconds
  //     const timer = setTimeout(() => {
  //       setShowGrandPrizeConfetti(false)
  //     }, 2000)

  //     return () => clearTimeout(timer)
  //   }
  // }, [sectionInView, hasTriggeredInitialConfetti])

  // Handle hover confetti separately with debounce
  const handleHoverStart = () => {
    if (!hasTriggeredInitialConfetti || !showGrandPrizeConfetti) {
      setShowGrandPrizeConfetti(true)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced for better performance
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="prizes" className="py-20 bg-background relative" ref={sectionRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gray-700/20 filter blur-[120px]"></div>
        <div className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full bg-gray-700/20 filter blur-[100px]"></div>
      </div>

      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl  mb-4 ${Hacked_KerX.className}`}>
            Prize <span className="text-primary">Pool</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Celebrating excellence with substantial rewards for groundbreaking achievements
          </p>
        </motion.div>

        {/* Grand Prize with Confetti Effect */}
        <motion.div
          variants={item}
          className="max-w-xs sm:max-w-sm mx-auto mb-12 md:mb-16 relative"
          onHoverStart={() => setShowGrandPrizeConfetti(true)}
          onHoverEnd={() => setShowGrandPrizeConfetti(false)}
          ref={ref}
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg relative z-10 h-full">
            <div className="bg-gray-800/50 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Grand Prize</h3>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">₹40,000</div>
            <p className="text-gray-300">Grand prize for exceptional achievement and innovation</p>
          </div>

          {/* Confetti animation - only render when needed */}
          {showGrandPrizeConfetti && <Confetti />}
        </motion.div>

        {/* Track Prizes - Updated to match grand prize size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: Lightbulb,
              title: "AI/ML Track",
              amount: "₹30,000",
              description: "Outstanding performance and creative solutions in AI/ML",
              distribution: [
                { icon: LuMedal, amount: "₹15,000" },
                { icon: IoMedalOutline, amount: "₹10,000" },
                { icon: CiMedal, amount: "₹5,000" },
              ],
            },
            {
              icon: Hexagon,
              title: "Blockchain & DeFi Track",
              amount: "₹30,000",
              description: "Excellence in execution of Blockchain & DeFi",
              distribution: [
                { icon: LuMedal, amount: "₹15,000" },
                { icon: IoMedalOutline, amount: "₹10,000" },
                { icon: CiMedal, amount: "₹5,000" },
              ],
            },
            {
              icon: Gift,
              title: "Open Innovation",
              amount: "₹30,000",
              description: "Innovative solutions and creative problem-solving",
              distribution: [
                { icon: LuMedal, amount: "₹15,000" },
                { icon: IoMedalOutline, amount: "₹10,000" },
                { icon: CiMedal, amount: "₹5,000" },
              ],
            },
          ].map((prize, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg relative group overflow-hidden h-full">
                <div className="transition-all duration-300 group-hover:opacity-0">
                  <div className="bg-gray-800/50 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <prize.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{prize.title}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">{prize.amount}</div>
                  <p className="text-gray-300">{prize.description}</p>
                </div>

                {/* Prize distribution on hover */}
                <div className="absolute inset-0 bg-background/90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{prize.title}</h3>
                  <div className="space-y-4 w-full">
                    {prize.distribution.map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-primary/20 pb-2">
                        <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        <span className="text-xl font-bold text-primary">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-400">Total: {prize.amount}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: Gem,
              title: "Best All Girls Team",
              amount: "₹5,000",
              description: "Outstanding performance by an all-girls team",
              distribution: "The team should be composed entirely of girls, ensuring full female representation."
            },
            {
              icon: GraduationCap,
              title: "Best Beginners Hack",
              amount: "₹5,000",
              description: "Best hack by a beginner team",
              distribution: "The team should consist entirely of first-year students, ensuring equal experience among members."
            },
          ].map((prize, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg relative group overflow-hidden h-full">
                <div className="transition-all duration-300 group-hover:opacity-0">
                  <div className="bg-gray-800/50 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <prize.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{prize.title}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">{prize.amount}</div>
                  <p className="text-gray-300">{prize.description}</p>
                </div>

                {/* Prize distribution on hover */}
                <div className="absolute inset-0 bg-background/90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{prize.title}</h3>
                  <div className="space-y-4 w-full">
                    <span className="text-lg font-bold text-white">{prize.distribution}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">Total: {prize.amount}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsor Tracks Prizes*/}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl  mb-4 ${Hacked_KerX.className}`}>
            Sponsor <span className="text-primary">Tracks</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {[
            {
              icon: Wallet,
              title: "Ethereum",
              amount: "₹8,500+",
              description: "Innovative solutions and projects built on Ethereum",
            },
          ].map((prize, index) => (
            <motion.div key={index} variants={item} className={`${prize.title == "Ethereum" ? "col-span-3 col-start-2 col-end-3 " : ""} h-full`}>
              <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg h-full`}>
                <div className="bg-gray-800/50 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <prize.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{prize.title}</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">{prize.amount}</div>
                <p className="text-gray-300">{prize.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

