"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrainCircuit, Hammer, Eye } from "lucide-react";

const SKILLS = [
    {
        category: "Architect (Strategy Layer)",
        icon: BrainCircuit,
        items: [
            "Digital transformation planning",
            "Roadmap definition & prioritization",
            "Commercial model understanding (CAC/LTV)",
            "Competitive analysis",
            "Risk mapping & mitigation"
        ]
    },
    {
        category: "Builder (Technical Layer)",
        icon: Hammer,
        items: [
            "Next.js architecture (App Router, SSR, RSC)",
            "AI automation & RAG workflows",
            "Secure data flows & middleware",
            "Component design systems",
            "Systems integration (CRM/ERP/API)"
        ]
    },
    {
        category: "Visionary (Design Layer)",
        icon: Eye,
        items: [
            "Dark-mode enterprise UX",
            "Trust-based interface architecture",
            "Micro-interactions & design physics",
            "High-fidelity prototyping",
            "Typography systems"
        ]
    }
];

export function AboutSection() {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Header / Narrative */}
                <div className="max-w-4xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        A website should think — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            not just look nice.
                        </span>
                    </h2>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-3xl">
                        <p>
                            I bridge the gap between strategy and execution. Most businesses either hire a strategist who cannot build, or a developer who does not understand commercial intent. I do both.
                        </p>
                        <p>
                            My role is to:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" /> Translate business requirements into scalable architectures</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" /> Reduce technical risk</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" /> Design investor-ready interfaces</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" /> Build component systems</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" /> Implement secure AI/RAG automation</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" /> Eliminate inefficiencies inside digital workflows</li>
                        </ul>
                    </div>
                </div>

                {/* Skill Taxonomy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SKILLS.map((skill, idx) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all"
                        >
                            <div className="mb-6 flex items-center gap-3 text-neon-cyan group-hover:text-white transition-colors">
                                <skill.icon size={24} />
                                <h3 className="font-bold text-lg text-white tracking-wide">{skill.category}</h3>
                            </div>

                            <ul className="space-y-4">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                                        <span className="mt-1.5 w-1 h-1 bg-white/20 rounded-full group-hover:bg-neon-cyan/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
