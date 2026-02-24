import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CombosSection } from "@/components/sections/CombosSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CombosSection />
        <AboutSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}