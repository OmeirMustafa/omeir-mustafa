"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Building2, ShieldCheck, ArrowRight } from "lucide-react";

const AUDIENCES = [
    {
        title: "Non-Technical B2B SaaS Founders",
        icon: Users,
        pain: "tech blindspots, poor architecture, no AI automation",
        solution: "roadmap + architecture + build + oversight"
    },
    {
        title: "VC/PE Portfolio Companies",
        icon: TrendingUp,
        pain: "product stalls, wasted engineering cycles",
        solution: "technical due diligence + system stabilization"
    },
    {
        title: "Legal, Finance, Consulting Firms",
        icon: Building2,
        pain: "complex workflows, manual operations",
        solution: "secure RAG automation + workflow redesign"
    },
    {
        title: "Fintech Scaleups",
        icon: ShieldCheck,
        pain: "credibility, compliance, UX trust signals",
        solution: "bank-grade interfaces + safe SSR architecture"
    }
];

export function ICPSection() {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Who I Engineer For
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-voltage-purple rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {AUDIENCES.map((audience, idx) => (
                        <motion.div
                            key={audience.title}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-[#0c0c0c] border border-white/5 hover:border-white/10 overflow-hidden transition-all"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <audience.icon size={100} />
                            </div>

                            <div className="relative z-10">
                                <audience.icon className="w-8 h-8 text-neon-cyan mb-6" />
                                <h3 className="text-xl font-bold text-white mb-4">{audience.title}</h3>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="text-red-400 text-xs font-bold uppercase tracking-wider min-w-[60px] mt-1">Pain:</span>
                                        <p className="text-white/60 text-sm leading-relaxed">{audience.pain}</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-400 text-xs font-bold uppercase tracking-wider min-w-[60px] mt-1">Solution:</span>
                                        <p className="text-white/80 text-sm leading-relaxed">{audience.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
