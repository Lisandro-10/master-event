import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CombosSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
