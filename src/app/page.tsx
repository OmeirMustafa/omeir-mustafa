// Master Upgrade - Verified Clean v2
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Approach } from "@/components/sections/approach";
import { QA } from "@/components/sections/qa";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <Approach />
      <QA />
      <ContactSection />
      <Footer />
    </main>
  );
}
