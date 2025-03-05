"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
})

export default function TimelineSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerRef = useRef<HTMLDivElement>(null)

  // Use scroll progress through the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Track when timeline is in center of viewport
  })

  const timelineEvents = [
    {
      date: "February 21, 2025",
      title: "Registration Opens",
      description: "Sign up and secure your spot for HACK 5.0",
    },
    {
      date: "March 20, 2025",
      title: "Registration Closes",
      description: "Last day to register for the hackathon",
    },
    {
      date: "March 22, 2025",
      title: "Screening Round",
      description: "Screening round for the Hack-5.0",
    },
    {
      date: "April 4, 2025",
      title: "Hackathon Kickoff",
      description: "Opening ceremony and problem statement release",
    },
    {
      date: "April 4-5, 2025",
      title: "Hacking Period",
      description: "48 hours of coding, building, and innovation",
    },
    {
      date: "April 5, 2025",
      title: "Project Submission",
      description: "Submit your projects for evaluation",
    },
    {
      date: "April 6, 2025",
      title: "Judging & Results",
      description: "Project evaluation and winner announcement",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="timeline" className="py-20 bg-background relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gray-700/20 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gray-700/20 filter blur-[120px]"></div>
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={item} className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-5xl mb-4 ${Hacked_KerX.className}`}>
            Event <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div ref={containerRef} className="relative max-w-3xl mx-auto py-8">
          {/* Main vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 bg-gray-700/50 rounded-full transform md:-translate-x-1/2"></div>

          {/* Animated red line that grows with scroll */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-2 bg-primary origin-top rounded-full z-10 transform md:-translate-x-1/2"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />

          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-12 md:mb-24 last:mb-0">
              {/* Timeline dot - positioned on the same side as the card */}
              {/* <motion.div
                className={`absolute w-10 h-10 rounded-full bg-primary border-4 border-background z-20 flex items-center justify-center text-white font-bold shadow-lg transform -translate-y-1/2 
                  ${
                    index % 2 === 0
                      ? "left-4 md:left-[calc(50%+3rem)] md:translate-x-0"
                      : "left-4 md:left-[calc(50%-3rem)] md:translate-x-0"
                  }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                style={{
                  top: "50%",
                }}
              >
                {index + 1}
              </motion.div> */}

              {/* Event content - stacked on mobile, alternating on desktop */}
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2"></div>
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 shadow-lg"
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-primary">{event.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">{event.date}</p>
                    <p className="text-sm md:text-base text-gray-300">{event.description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

