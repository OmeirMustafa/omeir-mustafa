"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Rocket } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden bg-black">
            {/* Background Context */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Core Architecture
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        I operate at the intersection of technical engineering and product strategy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="quantum-glass neon-border rounded-xl p-8 relative group"
                    >
                        <div className="mb-6 w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20 group-hover:bg-neon-cyan/20 transition-colors">
                            <Code2 className="text-neon-cyan w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Architect</h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Designing scalable, secure, and high-performance system architectures. Specializing in Next.js ecosystems, server-less infrastructure, and event-driven patterns.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="quantum-glass neon-border rounded-xl p-8 relative group"
                    >
                        <div className="mb-6 w-14 h-14 rounded-xl bg-voltage-purple/10 flex items-center justify-center border border-voltage-purple/20 group-hover:bg-voltage-purple/20 transition-colors">
                            <Rocket className="text-voltage-purple w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Builder</h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Rapid prototyping and MVP development. I transform abstract requirements into functional, deployed software in record time using modern CI/CD pipelines.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="quantum-glass neon-border rounded-xl p-8 relative group"
                    >
                        <div className="mb-6 w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                            <PenTool className="text-blue-500 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Visionary</h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Bridging the gap between rigid code and fluid business goals. I focus on ROI, user retention, and ensuring long-term product viability in competitive markets.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
