"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pricedown } from "@/lib/fonts";

interface Sponsor {
  name: string;
  logo: string;
  website?: string;
}

interface SponsorTier {
  tier: string;
  level: "gold" | "inkind";
  sponsors: Sponsor[];
}

const sponsorTiers: SponsorTier[] = [
  {
    tier: "Gold Sponsors",
    level: "gold",
    sponsors: [
      {
        name: "Devfolio",
        logo: "/sponsors/devfolio.svg",
      },
    ],
  },
  {
    tier: "In-Kind Sponsors",
    level: "inkind",
    sponsors: [
      {
        name: "XYZ",
        logo: "/sponsors/xyz.svg",
      },
      {
        name: "n8n",
        logo: "/sponsors/n8n.svg",
      },
    ],
  },
  {
    tier: "Media Partner",
    level: "inkind",
    sponsors: [
      {
        name: "LNC Community",
        logo: "/sponsors/lnc-community.png",
        website: "https://lnccommunity.in/",
      },
    ],
  },
];

function SciFiCard({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.5 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="w-full perspective-[1200px] group">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full bg-[#030008]/50 backdrop-blur-xl border border-white/10 will-change-transform transition-colors duration-300 hover:bg-[#030008]/70"
      >

        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20 transition-colors duration-300 group-hover:w-6 group-hover:h-6" style={{ borderColor: accent, boxShadow: `-2px -2px 10px ${accent}40` }} />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20 transition-colors duration-300 group-hover:w-6 group-hover:h-6" style={{ borderColor: accent, boxShadow: `2px -2px 10px ${accent}40` }} />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20 transition-colors duration-300 group-hover:w-6 group-hover:h-6" style={{ borderColor: accent, boxShadow: `-2px 2px 10px ${accent}40` }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20 transition-colors duration-300 group-hover:w-6 group-hover:h-6" style={{ borderColor: accent, boxShadow: `2px 2px 10px ${accent}40` }} />

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none z-0"
          style={{ background: `radial-gradient(circle at 50% 50%, ${accent}, transparent 70%)` }}
        />

        <motion.div
          initial={{ top: "0%", opacity: 0 }}
          whileHover={{ top: ["0%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] z-30 pointer-events-none"
          style={{ backgroundColor: accent, boxShadow: `0 0 15px ${accent}, 0 0 5px white` }}
        />

        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function SponsorCard({
  sponsor,
  index,
  tier,
  large = false,
}: {
  sponsor: Sponsor;
  index: number;
  tier: "gold" | "silver" | "bronze" | "inkind";
  large?: boolean;
}) {
  const accents = {
    gold: "#ffd700",
    silver: "#00ffff",   
    bronze: "#a200ff",   
    inkind: ["#a200ff", "#ff00aa", "#00ffff"],
  };

  const accent = tier === "inkind" ? accents.inkind[index % 3] : accents[tier];

  return (
    <SciFiCard accent={accent}>

      <div className={`relative flex items-center justify-center p-6 ${large ? "h-40 md:h-52" : "h-32 md:h-40"}`}>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />

        {sponsor.name === "Devfolio" || sponsor.website ? (
          <a
            href={sponsor.website ?? "https://devfolio.co"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block w-full h-full transition-transform duration-500 group-hover:scale-[1.08]"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            />
          </a>
        ) : (
          <div className="relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-[1.08]">
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            />
          </div>
        )}
      </div>

      <div className="px-4 py-3 border-t border-white/5 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-center">
        <span 
          className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white"
          style={{ textShadow: `0 0 10px ${accent}80` }}
        >
          {sponsor.name}
        </span>
        <div className="flex gap-1">
          <div className="w-4 h-[2px] bg-white/20" />
          <div className="w-1 h-[2px]" style={{ backgroundColor: accent }} />
          <div className="w-1 h-[2px]" style={{ backgroundColor: accent }} />
        </div>
      </div>
    </SciFiCard>
  );
}

function TierLabel({
  children,
  accent,
  index,
}: {
  children: React.ReactNode;
  accent: string;
  index: number;
}) {
  return (
    <div className="mb-8 flex items-center gap-4 relative">
      <div className="h-[1px] flex-1 bg-white/10 relative overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "200%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute top-0 bottom-0 w-1/3" 
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} 
        />
      </div>
      <div
        className="font-mono text-sm font-bold uppercase tracking-[0.25em] bg-black/50 backdrop-blur-md px-4 py-1.5 border-l-2 border-r-2"
        style={{ color: accent, borderColor: accent, textShadow: `0 0 10px ${accent}` }}
      >
        [ {children} ]
      </div>
    </div>
  );
}

export default function SponsorsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="sponsors" className="relative overflow-hidden py-24 md:py-32">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05010a_100%)] pointer-events-none z-0" />

      <motion.div
        ref={ref}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 md:px-6"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <h2
              className={`
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-pricedown
                tracking-tight
                text-white
                ${pricedown.className}
                [-webkit-text-stroke:2px_#000000]
                sm:[-webkit-text-stroke:3px_#000000]
                drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)]
                select-none
                whitespace-nowrap
              `}
            >
              EVENT <span className="text-[#00f0ff]">SPONSORS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="flex-1 h-[2px] bg-white"
          />
        </div>

        {sponsorTiers.map((sponsorTier, tierIndex) => (
          <motion.div key={sponsorTier.tier} variants={item} className="mb-16">
            <TierLabel
              index={tierIndex}
              accent={sponsorTier.level === "gold" ? "#ffd700" : "#ff00aa"}
            >
              {sponsorTier.tier}
            </TierLabel>
            <div
              className={`mx-auto grid grid-cols-1 gap-8 ${
                sponsorTier.level === "gold"
                  ? "max-w-xl"
                  : "max-w-3xl sm:grid-cols-2"
              }`}
            >
              {sponsorTier.sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  index={index}
                  tier={sponsorTier.level}
                />
              ))}
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}