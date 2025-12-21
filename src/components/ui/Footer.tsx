"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0F172A] border-t border-slate-800 text-slate-400 py-16">
            <div className="container-width">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <button
                            onClick={scrollToTop}
                            className="text-lg font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
                        >
                            Omeir Mustafa
                        </button>
                        <p className="text-sm max-w-xs leading-relaxed">
                            Building high-trust digital systems for founders and scaling teams.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm font-medium">
                        <div className="flex flex-col gap-4">
                            <span className="text-white text-xs font-bold uppercase tracking-wider">Navigation</span>
                            <Link href="#projects" className="hover:text-white transition-colors">Work</Link>
                            <Link href="#approach" className="hover:text-white transition-colors">Protocol</Link>
                            <Link href="#qa" className="hover:text-white transition-colors">Q&A</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white text-xs font-bold uppercase tracking-wider">Social</span>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                                <Twitter size={16} /> Twitter / X
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
                    <p>© 2025 Omeir Mustafa. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        System Status: <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Operational
                    </p>
                </div>
            </div>
        </footer>
    );
}
