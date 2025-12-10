"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Terminal } from "@/components/Terminal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { QuantumBackground } from "@/components/ui/QuantumBackground";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 overflow-hidden gap-12">

            <QuantumBackground />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 max-w-7xl">

                {/* Left Column: Copy */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-neon-cyan/80 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                            </span>
                            QUANTUM SYSTEMS: ONLINE
                        </div>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        Digital Product <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-voltage-purple animate-text-shimmer bg-[200%_auto]">
                                Architect
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg text-white/60 max-w-xl leading-relaxed">
                        I architect investor-ready, AI-native digital ecosystems. transforming abstract vision into high-performance, secure, and scalable reality.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <MagneticButton className="bg-white text-black hover:bg-gray-200 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Book Strategy Call <ArrowRight className="w-4 h-4" />
                        </MagneticButton>

                        <MagneticButton className="bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-lg backdrop-blur-sm">
                            View Portfolio <ChevronRight className="w-4 h-4 text-white/50" />
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* Right Column: Terminal */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative w-full min-h-[300px]"
                >
                    {/* Floating Hologram Effect */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-voltage-purple rounded-xl blur opacity-20" />
                        <Terminal />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
