import { HeroSection } from "@/components/sections/hero";
import { ProblemFraming } from "@/components/sections/problem-framing";
import { RoleDefinition } from "@/components/sections/role-definition";
import { EngagementModels } from "@/components/sections/engagement-models";
import { SecurityGrid } from "@/components/sections/security-grid";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden min-h-screen">
      <HeroSection />
      <ProblemFraming />
      <RoleDefinition />
      <EngagementModels />
      <SecurityGrid />
      <ContactSection />
    </div>
  );
}


