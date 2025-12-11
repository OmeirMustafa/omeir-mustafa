"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

const CASE_STUDIES = [
    {
        id: "infra-upgrade",
        project: "Digital Infrastructure Upgrade",
        clientType: "SaaS / Fintech / Consulting",
        problems: [
            "Outdated architecture",
            "Low credibility UX",
            "Manual workflows",
            "No AI automation"
        ],
        solutions: [
            "New Next.js architecture",
            "Dark-mode enterprise design",
            "Data layer & analytics",
            "RAG automation"
        ],
        outcome: [
            "Reduced risk",
            "Faster workflows",
            "Investor confidence",
            "Better conversion"
        ]
    }
];

export function CaseStudiesSection() {
    return (
        <ReactorCoreHUD
            title="OPERATIONS LOG"
            tagline="CASE STUDIES"
            systemId="SYS_LOG: #505"
            className="py-24"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
                <div>
                    <p className="text-white/60 max-w-lg">
                        Evidence of successfully executed digital transformations.
                    </p>
                </div>
                <button className="text-sm font-mono text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-2 transition-colors">
                    VIEW FULL DATABASE <ArrowUpRight size={14} />
                </button>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {CASE_STUDIES.map((study) => (
                    <motion.div
                        key={study.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative rounded-2xl overflow-hidden glass-panel border-white/5 bg-[#0c0c0c]/50 hover:border-cyan-500/30 transition-all p-8 md:p-12 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-[120px] leading-none font-bold text-white">01</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">

                            {/* Left: Info */}
                            <div>
                                <div className="text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">{study.clientType}</div>
                                <h3 className="text-3xl font-bold text-white mb-8">{study.project}</h3>

                                <div className="space-y-6">
                                    <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-lg">
                                        <span className="text-xs font-bold text-red-400 uppercase tracking-wide block mb-3">Problems Detected</span>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
                                            {study.problems.map(p => <li key={p}>{p}</li>)}
                                        </ul>
                                    </div>

                                    <div className="bg-green-500/5 border border-green-500/10 p-5 rounded-lg">
                                        <span className="text-xs font-bold text-green-400 uppercase tracking-wide block mb-3">Protocol Executed</span>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
                                            {study.solutions.map(s => <li key={s}>{s}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Outcome */}
                            <div className="flex flex-col justify-center">
                                <div className="bg-[#0a0a0a]/80 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                                    <h4 className="text-xl font-bold text-white mb-6 font-mono">outcomes_report.json</h4>
                                    <div className="space-y-4">
                                        {study.outcome.map((out, idx) => (
                                            <div key={out} className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xs font-mono border border-neon-cyan/30">
                                                    {idx + 1}
                                                </div>
                                                <span className="text-white/90 text-lg">{out}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </ReactorCoreHUD>
    );
}
