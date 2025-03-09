import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import PrizeSection from "@/components/prize-section";
import SponsorsSection from "@/components/sponsors-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <TeamSection />
      <PrizeSection />
      <SponsorsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
