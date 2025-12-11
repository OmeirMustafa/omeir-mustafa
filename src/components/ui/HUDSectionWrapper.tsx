"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOTION } from "@/config/motion";

export function HUDSectionWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={cn("relative py-24 px-6 overflow-hidden bg-slate-950", className)}>
            {/* 1. Environment: Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] pointer-events-none" />

            {/* 2. Diagnostics */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-500/30 tracking-widest hidden md:block">SYS_ID: #884-X</div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan-500/30 tracking-widest hidden md:block">STATUS: ONLINE</div>

            {/* 3. The Master Panel */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={MOTION.spring}
                className="relative container mx-auto max-w-7xl bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-8 md:p-12 shadow-[0_0_40px_rgba(6,182,212,0.1)] group"
            >
                {/* 4. Tech Brackets */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400 z-20" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400 z-20" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400 z-20" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400 z-20" />

                {children}
            </motion.div>
        </section>
    );
}
