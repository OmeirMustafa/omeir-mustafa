"use client";

import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export function HUDFooter() {
    return (
        <footer className="bg-[#030504] border-t border-white/5 py-16 px-6 relative z-10 text-xs">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

                <div className="md:col-span-2">
                    <h4 className="text-sm font-bold text-white tracking-tight mb-4">
                        OMEIR MUSTAFA
                    </h4>
                    <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
                        Digital Product Architect. <br />
                        Building high-performance systems for founders who understand the cost of technical debt.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/in/omeir-mustafa-uddin/" className="text-slate-400 hover:text-white transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="mailto:contact@omeir.com" className="text-slate-400 hover:text-white transition-colors">
                            Email
                        </Link>
                    </div>
                </div>

                <div>
                    <h5 className="font-mono text-emerald-500/60 uppercase tracking-widest mb-4">SITEMAP</h5>
                    <ul className="space-y-2 text-slate-400">
                        <li><Link href="#approach" className="hover:text-emerald-400 transition-colors">Approach</Link></li>
                        <li><Link href="#engagement" className="hover:text-emerald-400 transition-colors">Engagement</Link></li>
                        <li><Link href="#security" className="hover:text-emerald-400 transition-colors">Security Audit</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-mono text-emerald-500/60 uppercase tracking-widest mb-4">LEGAL</h5>
                    <ul className="space-y-2 text-slate-400">
                        <li>© 2025 Omeir Mustafa</li>
                        <li>Dhaka, Bangladesh</li>
                        <li className="pt-2 text-[10px] text-slate-600 font-mono">
                            BUILD: v4.0.1-EXEC
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

