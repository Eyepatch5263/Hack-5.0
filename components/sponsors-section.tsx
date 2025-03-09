"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});
export default function SponsorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sponsorTiers = [
    {
      tier: "Gold Sponsor",
      sponsors: [
        {
          name: "Devfolio",
          logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Devfolio_Logo-White%402x-ZaNDeRtKGecstXyvSLZkQ3boQYnwqb.png",
        },
      ],
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        {
          name: "ETHIndia",
          logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ethindia-light-YeS3YkDSlazR7JfV8TEd4DdgNJjS7O.png",
        },
        {
          name: "GitHub",
          logo: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741427703/GitHub_Logo_White_jxcin2.png",
        },
      ],
    },
    {
      tier: "Bronze Sponsor",
      sponsors: [
        {
          name: "InterviewBuddy",
          logo: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741430548/colored-logo_1_hanfeh.png",
        },
      ],
    },
    {
      tier: "In-Kind Sponsor",
      sponsors: [
        {
          name: "Appwrite",
          logo: "https://res.cloudinary.com/dmiq1mtz7/image/upload/f_auto,q_auto/v1/CSEC/sajmu7cc4h2olyrwb14b",
        },
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-background relative">
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
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            HACK 5.0 is made possible by the generous support of our sponsors
          </p>
        </motion.div>

        {sponsorTiers.map((tier, index) => (
          <motion.div key={index} variants={item} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-8 text-center">{tier.tier}</h3>
            <div
              className={`grid gap-6 md:gap-8 justify-items-center  ${
                tier.sponsors.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
              }`}
            >
              {tier.sponsors.map((sponsor, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700 flex items-center justify-center w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group  "
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-1/2 h-16 md:h-20  ">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div variants={item} className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
            Join our growing list of sponsors and connect with top talent and
            innovative projects
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Become a Sponsor
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
