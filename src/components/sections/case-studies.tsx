"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
        <section className="py-24 px-6 bg-[#0a0a0a] relative">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-deep)] rounded-full" />
                        <h2 className="text-3xl md:text-5xl font-bold mt-6 text-[var(--text-primary)]">Mission Archives</h2>
                    </div>
                    <div className="text-[var(--accent-green)] font-mono text-sm tracking-widest hidden md:block">
                        // SECURE_AWARDS.LOG
                    </div>
                </div>

                <div className="space-y-32">
                    {CASE_STUDIES.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="grid lg:grid-cols-2 gap-16 relative">
                                {/* Decor Number */}
                                <div className="absolute -top-12 -left-12 text-[12rem] font-bold text-[var(--accent-green)]/5 select-none leading-none z-0">
                                    0{idx + 1}
                                </div>

                                {/* Left: Info */}
                                <div className="space-y-8 relative z-10">
                                    <div className="space-y-2">
                                        <div className="inline-block px-3 py-1 rounded-full border border-[var(--accent-green)]/30 bg-[var(--accent-green)]/5 text-[var(--accent-green)] text-xs font-mono mb-4">
                                            {study.clientType}
                                        </div>
                                        <h3 className="text-4xl font-bold text-[var(--text-primary)]">{study.project}</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[var(--hairline)]">
                                        <div>
                                            <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Challenge</h4>
                                            <ul className="space-y-2">
                                                {study.problems.map((p, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-primary)]/80">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Solution</h4>
                                            <ul className="space-y-2">
                                                {study.solutions.map((s, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-primary)]/80">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Result Card */}
                                <div className="relative">
                                    <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-[var(--hairline)] p-8 rounded-xl hover:border-[var(--accent-green)]/50 transition-colors duration-500">
                                        <h4 className="text-[var(--accent-green)] font-mono text-sm tracking-widest mb-6 border-b border-[var(--accent-green)]/20 pb-4">
                                            // MISSION OUTCOME
                                        </h4>
                                        <div className="grid gap-4">
                                            {study.outcome.map((out, i) => (
                                                <div key={i} className="flex items-center justify-between group">
                                                    <span className="text-[var(--text-primary)]/90 text-lg group-hover:text-white transition-colors">{out}</span>
                                                    <ArrowUpRight className="w-5 h-5 text-[var(--accent-green)] opacity-50 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-[var(--accent-green)]/10 blur-[80px] -z-10 rounded-full opacity-50" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
