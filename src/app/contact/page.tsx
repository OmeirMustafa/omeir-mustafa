import { ContactCommandPanel } from "@/components/ui/ContactCommandPanel";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center bg-[#050505] relative overflow-hidden">
            {/* Background Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="w-full max-w-4xl px-6 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                        ESTABLISH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">
                            UPLINK
                        </span>
                    </h1>
                </div>
                <ContactCommandPanel />
            </div>
        </div>
    );
}
