"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { useState } from "react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative">
            <ReactorCoreHUD
                title="ESTABLISH UPLINK"
                tagline="COMMUNICATION LINK"
                systemId="SYS_COMMS: #101"
                className="py-24"
            >
                <div className="max-w-2xl mx-auto text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                            NEED A PLATFORM BUILT WITH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 shadow-cyan-500/50 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                                ENGINEERING PRECISION?
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
                </div>
            </ReactorCoreHUD>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
