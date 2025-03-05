"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Mail, MapPin, Phone, Send, User, AtSign, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import emailjs from "@emailjs/browser"
import localFont from "next/font/local"

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
})

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    if (form.current) {
      emailjs
        .sendForm("service_td08y99", "template_l4lxqnr", form.current, { publicKey: "3CF_8jifTQV-loMu_" })
        .then(
          (result) => {
            console.log(result.text)
            setSubmitSuccess(true)
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            })
          },
          (error) => {
            console.log(error.text)
            setSubmitError(true)
          },
        )
        .finally(() => {
          setIsSubmitting(false)
        })
    }
  }

  return (
    <section id="contact" className="py-20 bg-background/80 backdrop-blur-sm relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 filter blur-[120px]"></div>
        <div className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full bg-primary/10 filter blur-[100px]"></div>
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
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Have questions about HACK 5.0? We're here to help! Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form - Fixed floating labels */}
          <motion.div
            variants={item}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-md border border-gray-700 shadow-lg rounded-xl overflow-hidden"
          >
            <div className="bg-gray-800/50 p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                Send us a Message
              </h3>
              <p className="text-gray-300 mt-2">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-12 bg-gray-900 px-2 transition-all duration-300 z-10 ${
                      focusedField === "name" || formData.name ? "-top-2.5 text-xs text-primary" : "top-3 text-gray-400"
                    }`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 z-10" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      className="w-full bg-gray-900/50 text-white rounded-lg pl-12 pr-4 py-3 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-12 bg-gray-900 px-2 transition-all duration-300 z-10 ${
                      focusedField === "email" || formData.email
                        ? "-top-2.5 text-xs text-primary"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 z-10" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className="w-full bg-gray-900/50 text-white rounded-lg pl-12 pr-4 py-3 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 bg-gray-900 px-2 transition-all duration-300 z-10 ${
                    focusedField === "subject" || formData.subject
                      ? "-top-2.5 text-xs text-primary"
                      : "top-3 text-gray-400"
                  }`}
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                  className="w-full bg-gray-900/50 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all appearance-none"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="registration">Registration</option>
                  <option value="technical">Technical Support</option>
                </select>
                <div className="absolute right-4 top-3.5 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-12 bg-gray-900 px-2 transition-all duration-300 z-10 ${
                    focusedField === "message" || formData.message
                      ? "-top-2.5 text-xs text-primary"
                      : "top-3 text-gray-400"
                  }`}
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 z-10" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    rows={4}
                    className="w-full bg-gray-900/50 text-white rounded-lg pl-12 pr-4 py-3 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    required
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white transition-all px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-70 shadow-[0_4px_14px_rgba(230,57,70,0.4)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-200 text-center flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Your message has been sent successfully!
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-center flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Cards - Improved with better colors */}
          <div className="space-y-6">
            {[
              {
                Icon: Mail,
                title: "Email Us",
                text: "Questions? Drop us a line",
                link: "mailto:hack.csec.nith25@gmail.com",
                linkText: "hack.csec.nith25@gmail.com",
                gradient: "from-gray-900/80 to-gray-800/40",
              },
              {
                Icon: MapPin,
                title: "Location",
                text: "Join us at the venue",
                link: "https://www.google.co.in/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7091849,76.5245713,17z/data=!4m10!1m2!2m1!1sNIT+Hamirpur!3m6!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!15sCgxOSVQgSGFtaXJwdXKSAQNpdXTgAQA!16zL20vMGNybnJ4?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
                linkText: "NIT Hamirpur",
                gradient: "from-gray-800/40 to-gray-900/80",
              },
              {
                Icon: Phone,
                title: "Call Us",
                text: "Mon-Fri, 9am-5pm",
                links: [
                  { link: "tel:+916267531322", linkText: "+91 6267 531 322" },
                  { link: "tel:+917023326128", linkText: "+91 70233 26128" },
                  { link: "tel:+919767592787", linkText: "+91 97675 92787" },
                ],
                gradient: "from-gray-900/80 to-gray-800/40",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`bg-gradient-to-br ${contact.gradient} backdrop-blur-md border border-gray-700 shadow-lg rounded-xl p-6 md:p-8 text-center transition-all`}
              >
                <div className="bg-gray-800/50 p-3 md:p-4 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <contact.Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{contact.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">{contact.text}</p>

                {contact.link ? (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-all inline-block border-b border-dashed border-gray-500 hover:border-primary pb-1"
                  >
                    {contact.linkText}
                  </a>
                ) : contact.links ? (
                  <div className="flex flex-col space-y-2">
                    {contact.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.link}
                        className="text-gray-300 hover:text-primary transition-all inline-block border-b border-dashed border-gray-500 hover:border-primary pb-1 mx-auto"
                      >
                        {link.linkText}
                      </a>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

