import { InsightsHUDLayout } from "@/components/ui/InsightsHUDLayout";
import { FinalCTASection } from "@/components/sections/final-cta";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";


export default function InsightsPage() {
    return (
        <div className="min-h-screen pt-20">
            <HUDSectionWrapper
                className="py-12"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
                        ARCHITECTURAL <span className="text-cyan-400">INSIGHTS</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-light">
                        Thoughts on AI, Scale, and Next.js Ecosystems.
                    </p>
                </div>
                <InsightsHUDLayout />
            </HUDSectionWrapper>
            <FinalCTASection />
        </div>
    );
}
