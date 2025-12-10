"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { QuantumCard } from "./QuantumCard";
import Link from "next/link";

export function CaseTeaserHUD() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto"
        >
            <QuantumCard className="p-8 md:p-12 bg-slate-900/50 backdrop-blur-md border-cyan-500/20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">Feature Case Study</div>
                        <h3 className="text-3xl font-bold text-slate-200">Digital Infrastructure Upgrade</h3>
                    </div>
                    <div className="px-3 py-1 bg-cyan-950/30 border border-cyan-500/30 rounded text-xs text-cyan-300">
                        Fintech / SaaS
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-b border-cyan-500/10 py-6">
                    <div>
                        <div className="text-slate-500 text-xs uppercase mb-1">Problem</div>
                        <div className="text-sm text-slate-300">Outdated architecture & manual workflows</div>
                    </div>
                    <div>
                        <div className="text-slate-500 text-xs uppercase mb-1">Solution</div>
                        <div className="text-sm text-slate-300">Next.js + RAG + Enterprise Dark UX</div>
                    </div>
                    <div>
                        <div className="text-slate-500 text-xs uppercase mb-1">Outcome</div>
                        <div className="text-sm text-cyan-400">Improved velocity & investor readiness</div>
                    </div>
                </div>

                <Link
                    href="https://revopscircuitry.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors group text-sm font-bold uppercase tracking-wide"
                >
                    View Full Case Study <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </QuantumCard>
        </motion.div>
    );
}
