import { ContactCommandPanel } from "@/components/ui/ContactCommandPanel";
import { HoloPanel } from "@/components/ui/HoloPanel";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center">
            {/* Note: Background handled by global layout now */}

            <div className="w-full max-w-4xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-cyan-400/30 rounded-full backdrop-blur-md mb-6">
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                            COMMUNICATION LINK
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                        ESTABLISH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                            UPLINK
                        </span>
                    </h1>
                </div>

                <HoloPanel className="p-8 md:p-12">
                    <ContactCommandPanel />
                </HoloPanel>
            </div>
        </div>
    );
}
