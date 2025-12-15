"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MasterPanel } from "@/components/ui/MasterPanel";
import SmartContactModal from "@/components/ui/SmartContactModal";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="pt-12 md:pt-24 pb-24 md:pb-32 px-6 relative overflow-hidden bg-transparent mb-0">
            <div className="container mx-auto max-w-4xl pt-12 border-t border-[var(--hairline)]">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <SpotlightCard className="p-8 md:p-12 text-center" style={{ animationDelay: '2.5s' }}>
                        <div className="mb-8">
                            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase border border-emerald-900/50 px-3 py-1 rounded bg-black/50">
                                COMMS_CHANNEL // STANDBY
                            </span>
                        </div>

                        <div className="max-w-xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                                READY TO <br />
                                <span className="text-emerald-400 text-glow">
                                    INITIALIZE?
                                </span>
                            </h2>

                            <p className="text-zinc-400 text-lg font-light">
                                Architecting the future requires precise communication. <br />
                                Open a secure channel securely.
                            </p>

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsModalOpen(true);
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
                                    }
                                }}
                                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-emerald-500 text-black font-bold font-mono text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 rounded-sm"
                            >
                                <span className="relative z-10">OPEN UPLINK</span>
                            </button>
                        </div>
                    </SpotlightCard>
                </motion.div>

            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
