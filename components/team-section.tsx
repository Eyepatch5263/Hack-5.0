"use client";
import React, { useEffect } from "react";
import { Users } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

import localFont from "next/font/local";
const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
}

const teamData: TeamGroup[] = [
  {
    title: "",
    members: [
      {
        name: "Prince Jaiswal",
        role: "Student Coordinator",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945441/IMG_20230720_192947_flr5wg.jpg",
      },
      {
        name: "Ankush Thakur",
        role: "Lead Organizer",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080439/IMG_20240720_122823_ikkncj.jpg",
      },
      {
        name: "Harshal Sakhare",
        role: "Lead Organizer",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079965/Harshal_1_ljrjiy.jpg",
      },
      {
        name: "Aditya Kumar",
        role: "Treasurer",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080338/IMG_0237_beywm0.jpg",
      },
      {
        name: "Arnav Gupta",
        role: "Treasurer",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080697/e6a54564-6a33-48e1-ac19-e847758fd349_hqfhh8.jpg",
      },
      {
        name: "Antriksh Katna",
        role: "Marketing Head & External Affairs",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741529798/-ktgck2_dhyxpv.jpg",
      },
      {
        name: "Tanamy Sharma",
        role: "Marketing Head & External Affairs",
        image:
          "https://res.cloudinary.com/dnif0edly/image/upload/v1728535568/IMG-20240307-WA0033_mfojpp.jpg",
      },
      {
        name: "Tanishq Chauhan",
        role: "Internal Affairs",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945307/IMG_20231001_124926_evwtzl.jpg",
      },
      {
        name: "Tanishq Verma",
        role: "Internal Affairs",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945246/IMG_20240414_053937_668_nbxfaq.jpg",
      },
    ],
  },
  {
    title: "",
    members: [
      {
        name: "Avinash Sharma",
        role: "Web Lead",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1739191084/AVIN_exe_uu0yqx_k2wamg.webp",
      },
      {
        name: "Kirti Sharma",
        role: "Web Lead",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080065/IMG-20241110-WA0018_1_anaulw.jpg",
      },
      {
        name: "Shryansh",
        role: "Web Lead",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738136152/csec_shry_kwh5tn.jpg",
      },
      {
        name: "Arshita Kangoo",
        role: "Public Relations",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945377/IMG_20240920_223145_tc4rbp.jpg",
      },
      {
        name: "Krishna Narzary",
        role: "Media & Promotions",
        image:
          "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728579687/krishna_zp05q6.jpg",
      },
      {
        name: "Akash Kanwar",
        role: "Discipline Head",
        image:
          "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739960542/akash_bqdy3d.jpg",
      },
      {
        name: "Himanshu Gupta",
        role: "Technical Lead",
        image:
          "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739194635/WhatsApp_Image_2025-02-10_at_18.19.54_eddb4d72_dah6jq.jpg",
      },
      {
        name: "Lakshay Kantiwal",
        role: "Discipline Head",
        image:
          "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741533922/DSC_0568_diq1x9.jpg",
      },
      {
        name: "Kirti Sharma",
        role: "Web Lead",
        image:
          "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080065/IMG-20241110-WA0018_1_anaulw.jpg",
      },
    ],
  },
];

const InfiniteScrollingRow = ({ members }: { members: TeamMember[] }) => {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedMembers = [...members, ...members];

  React.useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: "-50%",
        transition: {
          repeat: Infinity,
          duration: 30,
          ease: "linear",
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex w-full">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={controls}
        >
          {duplicatedMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex-none w-64 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-dark-light/30"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl mb-4 ${Hacked_KerX.className}`}>
            Lead <span className="text-primary">Organizers</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Meet the passionate individuals who made HACK 5.0 possible
          </p>
        </motion.div>

        <div className="space-y-12">
          {teamData.map((group, index) => (
            <InfiniteScrollingRow key={index} members={group.members} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
