"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 bg-[#030504]">

            {/* Background Grid - Extremely subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Left: Decisive Copy */}
                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded bg-emerald-900/10 border border-emerald-900/20">
                            <ShieldCheck size={14} className="text-emerald-500" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/80">
                                TECHNICAL RISK MITIGATION
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                            I prevent expensive <br />
                            <span className="text-emerald-500">technical mistakes</span> <br />
                            before they happen.
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
                            Digital Product Architect for Founders & VC. <br />
                            I audit, structured, and build high-performance web systems that survive due diligence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-200 text-black font-bold tracking-tight text-sm rounded-sm transition-colors min-w-[220px]">
                                Request Architecture Review
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Abstract Logic Visualization (Code/Data) */}
                <div className="md:col-span-4 hidden md:block opacity-80">
                    <div className="border border-white/5 bg-white/[0.02] rounded-lg p-6 font-mono text-xs text-emerald-500/50 leading-loose">
                        <div>// SYSTEM_AUDIT_LOG</div>
                        <div className="text-slate-500">Analyzing Next.js Architecture...</div>
                        <div className="pl-4 border-l border-emerald-900/30 my-2">
                            <div>→ SSR Strategy: <span className="text-emerald-400">OPTIMIZED</span></div>
                            <div>→ Database Schema: <span className="text-emerald-400">NORMALIZED</span></div>
                            <div>→ Security Headers: <span className="text-emerald-400">A+ RATING</span></div>
                        </div>
                        <div className="text-slate-500 animate-pulse">Waiting for input...</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
