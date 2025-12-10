"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Terminal } from "@/components/Terminal";
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
        <section className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-6 overflow-hidden max-w-7xl mx-auto gap-12">

            {/* Left Column: Command Console */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 space-y-8 flex flex-col items-start text-left z-10"
            >
                <motion.div variants={itemVariants}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 text-xs font-mono text-neon-cyan backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                        </span>
                        SYSTEM STATUS: ONLINE
                    </div>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1]">
                    DIGITAL PRODUCT <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
                        ARCHITECT
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg text-text-muted max-w-xl leading-relaxed">
                    I design and architect investor-ready, AI-powered digital products using Next.js, secure SSR, component-driven design systems, and enterprise-grade dark UX.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full sm:w-auto">
                    <Link href="#contact" scroll={true} className="w-full sm:w-auto group">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg border border-transparent hover:shadow-[0_0_25px_rgba(0,245,255,0.6)] hover:border-neon-cyan transition-all duration-300 flex items-center justify-center gap-2">
                            INITIATE AUDIT PROTOCOL <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>

                    <Link href="#portfolio" scroll={true} className="w-full sm:w-auto group">
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold rounded-lg border border-white/20 hover:bg-white/5 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(124,77,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                            INSPECT BLUEPRINTS <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right Column: AI Terminal */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 w-full max-w-lg relative min-h-[400px]"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-xl blur opacity-20" />
                    <Terminal />
                </motion.div>
            </motion.div>
        </section>
    );
}
