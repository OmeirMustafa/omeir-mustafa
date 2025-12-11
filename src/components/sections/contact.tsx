"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { useState } from "react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 px-6 relative bg-[#050505] overflow-hidden border-t border-cyan-500/10 flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            </div>

            <div className="container mx-auto max-w-2xl relative z-10 text-center">

                {/* HUD PANEL */}
                <HUDSectionWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                            NEED A PLATFORM <br />
                            BUILT WITH <br />
                            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                ENGINEERING
                            </span>
                            <br />
                            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                PRECISION?
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-cyan-100/70 mb-10 font-light max-w-lg mx-auto leading-relaxed">
                            I build AI-native, enterprise-grade digital systems for consultants, operators & technical founders.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold font-mono text-sm tracking-widest uppercase rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Code size={18} /> INITIATE YOUR SYSTEM AUDIT <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                </HUDSectionWrapper>

            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
