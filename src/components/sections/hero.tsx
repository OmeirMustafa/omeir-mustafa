"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { VARIANTS } from "@/config/motion";
import { InteractiveGlass } from "@/components/ui/InteractiveGlass";

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden"
        >
            {/* 0. GLOBAL ENVIRONMENT */}
            <ParticleCanvas />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={VARIANTS.container}
                className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-center"
            >
                {/* Concentric Circles Background (The "Circle Element") */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.6] md:scale-100 transition-transform duration-500">
                    {/* Outer Ring */}
                    <div className="w-[600px] h-[600px] border border-emerald-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
                    {/* Middle Ring */}
                    <div className="absolute w-[450px] h-[450px] border border-dashed border-emerald-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                    {/* Inner Ring */}
                    <div className="absolute w-[300px] h-[300px] border border-emerald-500/10 rounded-full opacity-50" />
                    {/* Pulse Ring */}
                    <div className="absolute w-[500px] h-[500px] border-2 border-emerald-500/5 rounded-full animate-pulse" />
                </div>

                {/* Centered Content Wrapped in InteractiveGlass */}
                <InteractiveGlass className="flex flex-col items-center gap-6 md:gap-8 py-16 md:py-24 px-8 md:px-12 max-w-5xl mx-auto text-center" glowOpacity={0.25}>

                    {/* Blinking Dot (Centered Top) */}
                    <motion.div variants={VARIANTS.item} className="mb-4">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] animate-ping" />
                    </motion.div>

                    {/* Version Text */}
                    <motion.div variants={VARIANTS.item} className="text-xs font-mono text-emerald-400 tracking-[0.2em] uppercase bg-black/50 px-4 py-2 rounded-full border border-emerald-500/20">
                        OMEIR OS v4 :: LIVING GLASS
                    </motion.div>

                    {/* H1 Title */}
                    <motion.h1 variants={VARIANTS.item} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
                        DIGITAL PRODUCT <br />
                        <span className="text-emerald-500 text-glow">
                            ARCHITECT
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p variants={VARIANTS.item} className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light">
                        Designing premium websites, intelligent systems, and modern digital experiences built for clarity, performance, and trust.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={VARIANTS.item} className="flex flex-col sm:flex-row items-center gap-6 mt-10 w-full sm:w-auto">
                        <Link href="#contact" className="w-full sm:w-auto group relative px-8 py-4 bg-emerald-600/20 border border-emerald-500/50 text-emerald-400 font-bold font-mono text-xs tracking-widest uppercase hover:bg-emerald-500 hover:text-black transition-all duration-300 rounded flex justify-center overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                INITIATE PROTOCOL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link href="#portfolio" className="w-full sm:w-auto group relative px-8 py-4 bg-transparent border border-zinc-800 text-zinc-500 font-mono text-xs tracking-widest uppercase hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 flex justify-center rounded">
                            <span className="relative z-10">ACCESS ARCHIVES</span>
                        </Link>
                    </motion.div>
                </InteractiveGlass>
            </motion.div>
        </section>
    );
}
