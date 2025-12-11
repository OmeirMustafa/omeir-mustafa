"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { useState } from "react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";
import Link from "next/link";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 px-6 relative bg-[#050505] overflow-hidden border-t border-[var(--accent-green)]/10 flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent-green)]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,138,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,138,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            </div>

            <div className="container mx-auto max-w-2xl relative z-10 text-center">

                {/* HUD PANEL */}
                <HUDSectionWrapper>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-xl mx-auto text-center space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                            Ready to <br />
                            <span className="text-[var(--accent-green)] drop-shadow-[0_0_15px_var(--halo)]">
                                Initialize?
                            </span>
                        </h2>

                        <p className="text-[var(--text-muted)] text-lg">
                            Open a secure channel. Let's discuss your architecture.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[var(--accent-green)] text-[var(--accent-green)] font-bold font-mono text-sm tracking-widest uppercase rounded hover:bg-[var(--accent-green)] hover:text-black transition-all duration-300 shadow-[0_0_20px_var(--halo)] hover:shadow-[0_0_40px_var(--halo)] transform hover:scale-105"
                        >
                            <span className="relative z-10">OPEN COMMS CHANNEL</span>
                            <div className="absolute inset-0 bg-[var(--accent-green)]/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </button>
                    </motion.div>
                </HUDSectionWrapper>

            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
