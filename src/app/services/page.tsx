import { ServicesSection } from "@/components/sections/services";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="py-24 px-6 text-center">
                <h1 className="text-5xl font-bold text-white mb-6">Service Protocols</h1>
                <p className="text-white/60 max-w-2xl mx-auto">
                    High-velocity architectural interventions for ambitious founders.
                </p>
            </div>
            <ServicesSection />
            <FinalCTASection />
        </div>
    );
}
