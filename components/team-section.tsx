"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});

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
    title: "Group 1",
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
    ],
  },
  {
    title: "Group 2",
    members: [
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
    ],
  },
];

const TeamRow = ({ members }: { members: TeamMember[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerView = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + membersPerView >= members.length
        ? 0
        : prevIndex + membersPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - membersPerView < 0
        ? Math.max(0, members.length - membersPerView)
        : prevIndex - membersPerView
    );
  };

  const visibleMembers = members.slice(
    currentIndex,
    currentIndex + membersPerView
  );

  return (
    <div className="relative">
      {/* Show navigation buttons only if more than 5 members */}
      {members.length > membersPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Members Grid */}
      <div className="grid grid-cols-5 gap-6 justify-center">
        {visibleMembers.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group"
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
          </motion.div>
        ))}
      </div>

      {/* Pagination Dots */}
      {members.length > membersPerView && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from(
            { length: Math.ceil(members.length / membersPerView) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * membersPerView)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / membersPerView) === i
                    ? "bg-primary"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            )
          )}
        </div>
      )}
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
      <div id="team-section" className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl mb-4 ${Hacked_KerX.className}`}>
            Lead <span className="text-primary">Organizers</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Meet the passionate individuals who made HACK 5.0 possible
          </p>
        </motion.div>

        <div className="space-y-24">
          {teamData.map((group, index) => (
            <TeamRow key={index} members={group.members} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
