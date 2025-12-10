"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { QuantumCard } from "./QuantumCard";

const STEPS = [
    { title: "AUDIT", desc: "Codebase & UX Analysis" },
    { title: "SPRINT", desc: "MVP Architecture" },
    { title: "BUILD", desc: "Production Development" },
    { title: "PARTNER", desc: "Long-term Scale" },
];

export function ProcessTimelineHUD() {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-12">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {STEPS.map((step, i) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <QuantumCard className="text-center p-6 h-full flex flex-col items-center justify-center bg-[#0a0a0a] border-white/10">
                            <div className="w-8 h-8 rounded-full bg-neon-cyan/10 text-neon-cyan flex items-center justify-center font-mono font-bold text-xs mb-3 border border-neon-cyan/20">
                                0{i + 1}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                            <p className="text-xs text-white/50">{step.desc}</p>
                        </QuantumCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
