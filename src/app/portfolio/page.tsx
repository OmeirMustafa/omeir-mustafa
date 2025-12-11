import { PortfolioGridHUD } from "@/components/ui/PortfolioGridHUD";
import { FinalCTASection } from "@/components/sections/final-cta";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-20">
            <HUDSectionWrapper className="py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
                        BLUEPRINT <span className="text-cyan-400">ARCHIVES</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-light">
                        Access restricted to authorized personnel only.
                    </p>
                </div>
                <PortfolioGridHUD />
            </HUDSectionWrapper>
            <FinalCTASection />
        </div>
    );
}
