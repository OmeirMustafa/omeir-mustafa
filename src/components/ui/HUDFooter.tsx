"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function HUDFooter() {
    return (
        <footer className="border-t border-white/5 bg-hud-black/90 backdrop-blur-xl py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col items-center md:items-start gap-4">
                    <h4 className="text-xl font-bold font-mono text-white tracking-tight">
                        OMEIR<span className="text-neon-cyan">.MUSTAFA</span>
                    </h4>
                    <p className="text-white/40 text-sm max-w-xs text-center md:text-left">
                        Architecting the next generation of digital ecosystems using AI, Next.js, and secure cloud infrastructure.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all text-white/60">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all text-white/60">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="mailto:kaziomeirmustafa@gmail.com" className="p-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all text-white/60">
                        <Mail size={20} />
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2 text-[10px] text-white/20 font-mono uppercase tracking-widest">
                    <span>System Status: Stable</span>
                    <span>© {new Date().getFullYear()} All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}
