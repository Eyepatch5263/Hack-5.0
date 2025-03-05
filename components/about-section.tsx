"use client"

import { Users, Trophy, Clock, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
})

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-gray-700/20 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-gray-700/20 filter blur-[120px]"></div>
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl  mb-4 ${Hacked_KerX.className}`}>
            About <span className="text-primary">HACK 5.0</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div variants={item} className="px-5 md:px-0">
            <p className="text-lg mb-6 leading-relaxed text-justify md:text-left">
              HACK 5.0 is the fifth edition of our flagship hackathon, bringing together the brightest minds in
              technology to solve real-world problems through innovation and collaboration.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-justify md:text-left">
              Over 48 hours, participants will form teams, ideate, build, and present their solutions to a panel of
              industry experts. With mentorship, workshops, and networking opportunities, HACK 5.0 is more than just a
              competition—it's a platform for growth and learning.
            </p>
            <p className="text-lg leading-relaxed text-justify md:text-left">
              Whether you're a seasoned developer or just starting your coding journey, HACK 5.0 welcomes all passionate
              individuals ready to make an impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
            {[
              { icon: Users, title: "500+", text: "Participants" },
              { icon: Trophy, title: "₹ 1,50,000", text: "Prize Pool" },
              { icon: Clock, title: "48", text: "Hours" },
              { icon: Layers, title: "3", text: "Tracks" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center shadow-lg"
              >
                <div className="bg-gray-800/50 p-3 md:p-4 rounded-full mb-3 md:mb-4">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{stat.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

