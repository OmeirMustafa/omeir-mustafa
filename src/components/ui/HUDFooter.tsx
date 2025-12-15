"use client";

import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { InteractiveGlass } from "@/components/ui/InteractiveGlass";

export function HUDFooter() {
    return (
        <footer className="relative z-10 border-t border-emerald-500/10 bg-[#020202] py-6 md:py-8 px-6 overflow-hidden h-auto">

            {/* Radial Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

            {/* Grid & Scanlines (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

            <InteractiveGlass className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 p-6 md:p-8" glowOpacity={0.1}>

                {/* Left Side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="text-xl font-bold font-mono text-white tracking-tight relative group cursor-default mb-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] rounded px-2" style={{ textShadow: "0 0 12px rgba(16,185,129,0.4)" }}>
                        OMEIR<span className="text-emerald-500">.MUSTAFA</span>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-zinc-500 text-sm max-w-lg font-light leading-relaxed">
                        Digital Product & Web Architect. Designing premium brands, intelligent websites, and modern digital systems.
                    </p>
                    <div className="mt-4 text-[10px] font-mono text-emerald-500/40 tracking-widest uppercase">
                        SYSTEM STATUS: ONLINE
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <Link
                        href="https://www.linkedin.com/in/omeir-mustafa-uddin/"
                        target="_blank"
                        className="p-3 rounded-lg bg-black/40 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-emerald-400 hover:shadow-[0_0_18px_rgba(16,185,129,0.2)] transition-all text-zinc-500 group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Linkedin size={20} className="relative z-10 group-hover:drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                    </Link>
                </div>
            </InteractiveGlass>

            {/* Copyright / Version */}
            <div className="relative z-10 mt-12 text-center border-t border-emerald-500/10 pt-8">
                <p className="text-xs text-zinc-600 font-mono opacity-60">
                    © 2025 OMEIR MUSTAFA // OMEIR OS v4 :: LIVING GLASS
                </p>
            </div>
        </footer>
    );
}
