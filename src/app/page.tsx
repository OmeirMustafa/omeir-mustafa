import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-neon-cyan/30 overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
