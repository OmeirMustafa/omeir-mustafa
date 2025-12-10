import { PortfolioGridHUD } from "@/components/ui/PortfolioGridHUD";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-24 px-6 bg-[#0b0b0d]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 text-xs font-mono text-neon-cyan mb-6">
                            DEPLOYED SYSTEMS
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-6">Mission Logs</h1>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Selected architectural deployments and system upgrades.
                        </p>
                    </div>
                    <PortfolioGridHUD />
                </div>
            </section>
            <FinalCTASection />
        </div>
    );
}
