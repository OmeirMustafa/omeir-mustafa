"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { Database, Cpu, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { CapabilityMatrixModal } from "@/components/ui/CapabilityMatrixModal";
import Link from "next/link";
import { InteractiveGlass } from "@/components/ui/InteractiveGlass";

const MotionGlass = motion(InteractiveGlass);

const MODULES = [
    {
        title: "ARCHITECT",
        icon: <Database className="w-8 h-8 text-emerald-400" />,
        desc: "Strategic System Design. Blueprinting scalable digital ecosystems and data pipelines for enterprise growth.",
        details: ["System Design", "Database Schema", "Security Ops"]
    },
    {
        title: "BUILDER",
        icon: <Cpu className="w-8 h-8 text-emerald-400" />,
        desc: "High-Velocity Engineering. Next.js 16.0.8, React Server Components, and Type-Safe production code.",
        details: ["Next.js 16.0.8", "TypeScript", "RAG Pipelines"]
    },
    {
        title: "VISIONARY",
        icon: <Eye className="w-8 h-8 text-emerald-400" />,
        desc: "User Experience & Motion. Interactive data visualization, fluid interfaces, and reactor-grade aesthetics.",
        details: ["Framer Motion 12", "UI Systems", "Data Viz"]
    }
];

const TIERS = [
    {
        title: "TIER 1",
        name: "Brand & Strategy Blueprint",
        price: "Starting at USD 3,500+",
        desc: "A deep-dive into your brand, audience, and strategic direction.",
        features: [
            "Brand positioning",
            "Visual identity direction",
            "Website architecture plan",
            "Competitive mapping",
            "Strategic execution roadmap"
        ]
    },
    {
        title: "TIER 2",
        name: "Premium Web Architecture Build",
        price: "Starting at USD 7,500+",
        desc: "A fully custom, high-performance website engineered for trust and conversion.",
        features: [
            "Custom Next.js interface",
            "High-fidelity dark-mode design",
            "Modern motion system",
            "SEO engineering",
            "Responsive layouts",
            "Scalable site architecture"
        ]
    },
    {
        title: "TIER 3",
        name: "Intelligent Systems Integration",
        price: "Starting at USD 9,500+",
        desc: "Enhance your website with automation, structure, and intelligent systems.",
        features: [
            "Smart content systems",
            "Automated flows",
            "Operational UX improvements",
            "Component architecture",
            "Foundations for future AI adoption"
        ]
    }
];

export function ServicesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="services" className="py-12 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-24">

                {/* PART 1: OPERATING MODULES */}
                <MasterPanel title="CORE_MODULES // V.4.0">
                    <div className="text-center mb-8 md:mb-16 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
                            OPERATING <span className="text-emerald-500 text-glow">MODULES</span>
                        </h2>

                        {/* Stack Integrity Subline */}
                        <div className="font-mono text-[10px] md:text-xs text-emerald-500/60 tracking-widest uppercase max-w-4xl mx-auto py-3 px-4 border-y border-emerald-500/20 bg-black/50">
                            <strong>Stack Integrity:</strong> Powered by: Next.js 16.0.8, Tailwind CSS v4, Framer Motion 12<br />
                            Engineered for maximum performance, cleaner bundling, and enterprise-grade UI flow.
                        </div>

                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
                            Deploying advanced capability across the entire digital stack.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                        {MODULES.map((mod, i) => (
                            <MotionGlass
                                key={mod.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group p-8 flex flex-col items-center text-center"
                            >
                                {/* Icon Ring */}
                                <div className="mb-6 relative">
                                    <div className="w-16 h-16 rounded-full border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-black/50 z-10 relative">
                                        {mod.icon}
                                    </div>
                                    <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 font-mono tracking-wider">{mod.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    {mod.desc}
                                </p>

                                {/* Tag List */}
                                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                    {mod.details.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-emerald-500/5 text-emerald-400 border border-emerald-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </MotionGlass>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 border border-green-500/30 text-green-400 font-mono text-sm tracking-widest uppercase rounded hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            VIEW FULL CAPABILITY MATRIX <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </MasterPanel>

                {/* PART 2: PRODUCTIZED ENGAGEMENT MODELS */}
                <MasterPanel title="ENGAGEMENT_PROTOCOLS // BLUEPRINTS">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
                            PROJECT <span className="text-emerald-500 text-glow">BLUEPRINTS</span>
                        </h2>
                        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg font-light">
                            Select the engagement tier that matches your system requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {TIERS.map((tier, i) => (
                            <MotionGlass
                                key={tier.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.15) }}
                                className="flex flex-col p-8 group overflow-hidden"
                            >
                                <div className="relative z-10 mb-6 pb-6 border-b border-emerald-500/20">
                                    <div className="text-emerald-500/70 font-mono text-xs tracking-widest mb-2">
                                        // {tier.title}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                    <div className="text-xl font-mono text-emerald-400">{tier.price}</div>
                                </div>

                                <p className="relative z-10 text-zinc-400 text-sm mb-8 leading-relaxed">
                                    {tier.desc}
                                </p>

                                <ul className="relative z-10 space-y-3 mb-8 flex-1">
                                    {tier.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3 text-sm text-zinc-400">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="#contact" scroll={true} className="relative z-10 mt-auto">
                                    <button className="w-full py-3 px-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                        <span>INITIATE {tier.title}</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </Link>
                            </MotionGlass>
                        ))}
                    </div>
                </MasterPanel>

            </div>

            <CapabilityMatrixModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
