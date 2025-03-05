"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
})
const faqs = [
  {
    question: "What exactly is Hack 5.0 - Obsidian Saga?",
    answer:
      "It is not just a hackathon—it is an epic fusion of creativity, caffeine, and code! Think of it as a 48-hour sprint where brilliant minds come together to solve real problems, build cool stuff, and maybe win some brag-worthy prizes",
  },
  {
    question: "Who can participate?",
    answer:
      "Whether you're a coding ninja, a design wizard, or just someone with crazy ideas—everyone is welcome! Students, beginners, pros... if you have got the passion, you have got a spot here.",
  },
  {
    question: "How do I register?",
    answer:
      'Just click that big, shiny "Register Now" button on our website, fill in your details, and boom—you are in! Do not wait too long though; spots fill up fast!',
  },
  {
    question: "What if I do not have a team?",
    answer:
      "No worries! We have got a team formation session before the hackathon kicks off. So, you will find your crew and maybe your next best friends.",
  },
  {
    question: "Can I participate solo?",
    answer: "No, teams must have a minimum of 2 members (maximum 4). We will help you find teammates if needed!",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, Hack 5.0 is completely free! Just register and you are in. There are no registration fees or hidden charges.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="faq" className="py-20 bg-background relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gray-700/20 filter blur-[120px]"></div>
        <div className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full bg-gray-700/20 filter blur-[100px]"></div>
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl  mb-4 ${Hacked_KerX.className}`}>
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">Got questions? We've got answers!</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={item} className="mb-4">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
                <button
                  className="w-full p-4 md:p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base md:text-lg font-medium pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-primary flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 md:p-6 pt-0 text-sm md:text-base text-gray-300 border-t border-primary/10">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

