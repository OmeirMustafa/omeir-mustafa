"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { QuantumCard } from "./QuantumCard";

export function CaseTeaserHUD() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto"
        >
            <QuantumCard className="p-8 md:p-12 bg-gradient-to-br from-[#0a0a0a] to-[#111]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <div className="text-neon-cyan text-xs font-mono uppercase tracking-widest mb-2">Feature Case Study</div>
                        <h3 className="text-3xl font-bold text-white">Digital Infrastructure Upgrade</h3>
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60">
                        Fintech / SaaS
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-b border-white/5 py-6">
                    <div>
                        <div className="text-white/40 text-xs uppercase mb-1">Problem</div>
                        <div className="text-sm text-white">Outdated architecture & manual workflows</div>
                    </div>
                    <div>
                        <div className="text-white/40 text-xs uppercase mb-1">Solution</div>
                        <div className="text-sm text-white">Next.js + RAG + Enterprise Dark UX</div>
                    </div>
                    <div>
                        <div className="text-white/40 text-xs uppercase mb-1">Outcome</div>
                        <div className="text-sm text-white text-neon-cyan">Improved velocity & investor readiness</div>
                    </div>
                </div>

                <button className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors group text-sm font-bold uppercase tracking-wide">
                    View Full Case Study <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </QuantumCard>
        </motion.div>
    );
}
