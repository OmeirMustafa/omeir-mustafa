import { InsightsHUDLayout } from "@/components/ui/InsightsHUDLayout";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function InsightsPage() {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-cyan-400/30 rounded-full backdrop-blur-md mb-6">
                            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                                KNOWLEDGE BASE
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-6 font-mono tracking-tight">ARCHITECTURAL INSIGHTS</h1>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light">
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
