"use client";

import React from "react";
import { motion } from "framer-motion";
import { VectorDB } from "@/components/ui/VectorDB";
import { HoloRevealSection } from "@/components/ui/HoloRevealSection";

const FEATURES = [
    "Document Analysis",
    "Knowledge Retrieval",
    "Contract Review Automation",
    "Internal Search Engines",
    "Compliance Workflows",
    "AI Decision-Support Tools"
];

export function SecureAISystems() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Context */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,77,255,0.15),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Copy */}
                <HoloRevealSection>
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-violet/10 border border-neon-violet/20 text-xs font-mono text-neon-violet">
                            SECURE INTELLIGENCE
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            Secure AI Systems for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-white">
                                Modern Businesses
                            </span>
                        </h2>

                        <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                            I build AI systems that operate inside your business securely — using private vector databases, RAG pipelines, orchestrators, and Next.js interfaces. No data leaks. Full control.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {FEATURES.map((feature, i) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:border-neon-violet/50 hover:text-neon-violet transition-colors cursor-default"
                                >
                                    {feature}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </HoloRevealSection>

                {/* Right: Vector Visualization */}
                <HoloRevealSection>
                    <div className="relative w-full aspect-square">
                        <VectorDB />
                    </div>
                </HoloRevealSection>
            </div>
        </section>
    );
}
