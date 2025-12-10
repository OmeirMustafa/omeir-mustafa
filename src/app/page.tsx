"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ICPSection } from "@/components/sections/icp";
import { AIRAGSection } from "@/components/sections/ai-rag";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ThoughtLeadershipSection } from "@/components/sections/thought-leadership";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-foreground font-sans selection:bg-neon-cyan/30 selection:text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ICPSection />
      <AIRAGSection />
      <CaseStudiesSection />
      <ThoughtLeadershipSection />
      <ContactSection />
    </main>
  );
}
