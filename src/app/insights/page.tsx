import { InsightsHUDLayout } from "@/components/ui/InsightsHUDLayout";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function InsightsPage() {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-24 px-6 bg-[#0b0b0d]">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-violet/10 border border-neon-violet/20 text-xs font-mono text-neon-violet mb-6">
                            KNOWLEDGE BASE
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-6">Architectural Insights</h1>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Thoughts on AI, Scale, and Next.js Ecosystems.
                        </p>
                    </div>
                    <InsightsHUDLayout />
                </div>
            </section>
            <FinalCTASection />
        </div>
    );
}
