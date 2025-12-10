"use client";

import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export function HUDFooter() {
    return (
        <footer className="border-t border-cyan-500/20 bg-black/70 backdrop-blur-lg py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <h4 className="text-xl font-bold font-mono text-white tracking-tight relative group cursor-default">
                        OMEIR<span className="text-cyan-400">.MUSTAFA</span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-slate-400 text-sm max-w-md">
                        Digital Product Architect specializing in AI-native infrastructure & dark UX systems.
                    </p>

                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="mt-4 p-2 rounded bg-black/40 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all text-slate-400"
                    >
                        <Linkedin size={20} />
                    </Link>
                </div>

                <div className="hidden md:block text-[10px] text-cyan-900/50 font-mono uppercase tracking-widest">
                    SYSTEM STATUS: STABLE
                </div>
            </div>
        </footer>
    );
}
