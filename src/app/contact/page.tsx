import { ContactCommandPanel } from "@/components/ui/ContactCommandPanel";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20">
            <HUDSectionWrapper
                className="pb-24 pt-12"
            >
                <div className="flex justify-center flex-col items-center">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-2">
                            ESTABLISH <span className="text-cyan-400">UPLINK</span>
                        </h2>
                        <p className="text-xs font-mono text-cyan-500/50 tracking-widest">
                            SYS_COMMS: #101
                        </p>
                    </div>
                    <ContactCommandPanel />
                </div>
            </HUDSectionWrapper>
        </div>
    );
}
