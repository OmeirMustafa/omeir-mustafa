"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, FileSearch, Database, Lock, Search, Network } from "lucide-react";

const CAPABILITIES = [
    { icon: FileSearch, label: "Document analysis" },
    { icon: Database, label: "Knowledge retrieval" },
    { icon: Search, label: "Contract review automation" },
    { icon: ShieldCheck, label: "Compliance workflows" }, // Using ShieldCheck as imported below, or could import specific
    { icon: Network, label: "Internal search engines" },
    { icon: Bot, label: "AI decision-support tools" }
];

import { ShieldCheck } from "lucide-react"; // Late import fix

export function AIRAGSection() {
    return (
        <section className="py-24 px-6 bg-[#080808] border-y border-white/5 relative">

            {/* Abstract Background Tech Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[10%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-green)] to-transparent" />
                <div className="absolute bottom-[30%] right-[10%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-deep)] to-transparent" />
            </div>

            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[var(--text-primary)]">
                        Secure AI Systems for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-deep)]">
                            Modern Businesses
                        </span>
                    </h2>
                    <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
                        I build AI systems that operate inside your business securely — using private vector databases, RAG pipelines, orchestrators, and Next.js interfaces.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CAPABILITIES.map((cap) => (
                            <div key={cap.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[var(--hairline)] hover:bg-white/10 hover:border-[var(--accent-green)] transition-all group">
                                <cap.icon className="w-5 h-5 text-[var(--accent-green)]/70 group-hover:text-[var(--accent-green)] transition-colors" />
                                <span className="text-sm text-[var(--text-primary)]/80 group-hover:text-[var(--text-primary)]">{cap.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Visualization (Abstract RAG Diagram) */}
                <div className="relative h-[400px] bg-black/50 rounded-2xl border border-[var(--hairline)] p-8 flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-[0_0_30px_var(--halo)]">
                    {/* Simple Nodes Simulation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-32 h-32 rounded-full border border-[var(--accent-green)]/30 flex items-center justify-center relative z-10 bg-black"
                        >
                            <span className="text-[var(--accent-green)] font-mono text-xs text-center">VECTOR<br />DB</span>
                        </motion.div>

                        {/* Orbiting Particles */}
                        {[0, 60, 120, 180, 240, 300].map((deg) => (
                            <motion.div
                                key={deg}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: -Math.random() * 10 }}
                                style={{ transformOrigin: "150px 0" }} // Offset from center
                                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                            >
                                <div
                                    style={{ transform: `rotate(${deg}deg) translate(140px)` }}
                                    className="w-2 h-2 bg-[var(--accent-deep)] rounded-full shadow-[0_0_10px_var(--accent-green)]"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-4 text-xs font-mono text-white/30">
                        SYSTEM_ARCHITECTURE::RAG_PIPELINE
                    </div>
                </div>

            </div>
        </section>
    );
}
