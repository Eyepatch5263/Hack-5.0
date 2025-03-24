"use client";
import React from "react";
import Link from "next/link";
import { Terminal, Users, Award, ExternalLink } from "lucide-react";
import localFont from "next/font/local";

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});

interface Person {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
}

const campusExpert: Person[] = [
  {
    name: "Mohammed Abid Nafi",
    role: "AI Research Scientist",
    company: "GitHub Campus Expert",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742565773/WhatsApp_Image_2025-03-21_at_18.59.34_55c27b06_s2uftq.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Taufeeq Noamaan",
    role: "Senior Software Architect",
    company: "GitHub Campus Expert",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742565778/WhatsApp_Image_2025-03-21_at_19.00.10_e190819d_wyo7mi.jpg",
    linkedin: "https://linkedin.com",
  },
];

const mentors: Person[] = [
  {
    name: "Sourav Sahoo",
    role: " GSOC contributor and mentor 2018-19",
    company: "Computer Scientist-1 @ Adobe",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227132/IMG_6677_jlwl9b.jpg",
    linkedin: "https://www.weekday.works/people/sourav-sahoo-souravsahoo",
  },
  {
    name: "Avinal",
    role: "GSOC mentor @ Fossology || GSOD Contributor 2020@VLC ",
    company: "SDE II @RED HAT",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227115/WhatsApp_Image_2025-03-17_at_21.04.26_b63612c7_wb2qxh.jpg",
    linkedin: "https://githubcampus.expert/avinal/",
  },
  {
    name: "Udit Gulati",
    role: "GSoC 2019",
    company: "Software Engineer @ Native",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227112/WhatsApp_Image_2025-03-17_at_21.04.27_d3700681_y7zvf9.jpg",
    linkedin: "https://www.linkedin.com/in/uditgulati0/",
  },
  {
    name: "Amit Chambial",
    role: "",
    company: "SDE III @ Netom",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227112/WhatsApp_Image_2025-03-17_at_21.04.28_a4067d69_txzega.jpg",
    linkedin: "http://linkedin.com/in/amit-chambial",
  },
  {
    name: "Nimit Bhardwaj",
    role: "",
    company: "Lead Tech @ D.E Shaw Group",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227115/WhatsApp_Image_2025-03-17_at_21.04.29_ff888811_s3x4iw.jpg",
    linkedin: "https://www.linkedin.com/in/nimit-bhardwaj-b137a3116",
  },
  {
    name: "Vishal Choudhary",
    role: "",
    company: "SDE III @ Dialpad",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227120/WhatsApp_Image_2025-03-17_at_21.04.30_df660d77_uxjhg5.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Amit Yadav",
    role: "",
    company: "Senior Blockchain Engineer @Elys Network",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227116/WhatsApp_Image_2025-03-17_at_21.04.30_f3bbc256_nvtt4d.jpg",
    linkedin: "http://linkedin.com/in/amityadav9",
  },
  {
    name: "Vishal Bhardwaj",
    role: "",
    company: "SDE III @ Dialpad",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742301680/WhatsApp_Image_2025-03-18_at_14.40.09_176e54b2_wx2hgu.jpg",
    linkedin: "http://linkedin.com/in/vishal-bhardwaj-b72702114",
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <div
      className={`group ${person.name === "Mohammed Abid Nafi" ? "col-start-2" : ""} relative bg-dark-light/50 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2`}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1">
              {person.name}
            </h3>
            {/* <p className="text-primary mb-1">{person.role}</p> */}
            <p className="text-gray-300 text-sm mb-4 ">{person.company}</p>
            {/* {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
              >
                <span>View Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ people }: { people: Person[] }) {
  return (
    <div className="">
      <div className="text-center mb-8"></div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default function MentorsAndJudges() {
  return (
    <div className="min-h-screen bg-gradient text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className={`text-3xl md:text-5xl mb-4 ${Hacked_KerX.className}`}>
            Mentor <span className="text-primary">And</span> Judges
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our distinguished panel of mentors and judges who will guide
            and evaluate your innovations during HACK 5.0
          </p>
        </div>

        <Section people={mentors} />
        {/* <Section people={campusExpert} /> */}
      </div>
    </div>
  );
}
