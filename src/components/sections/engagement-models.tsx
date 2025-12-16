"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const MODELS = [
    {
        title: "Strategic Audit",
        price: "Fixed Scope",
        desc: "A surgical review of your codebase, stack, and deployment pipeline. I identify critical risks before investors do.",
        features: ["Codebase Analysis", "Security Posture Check", "Scalability Report", "Remediation Roadmap"],
        cta: "Request Audit"
    },
    {
        title: "Build Sprint",
        price: "Project Basis",
        desc: "I step in as Interim Product Architect to build your MVP or v2.0 foundation correctly from day one.",
        features: ["Next.js/React Architecture", "Design System Implementation", "Performance Engineering", "SEO/Analytics Setup"],
        cta: "Start Build",
        highlight: true
    },
    {
        title: "Fractional Retainer",
        price: "Monthly",
        desc: "Ongoing technical leadership for non-technical founders. I manage your dev team and own the roadmap.",
        features: ["Team Management", "Vendor Selection", "Code Review", "Strategic Planning"],
        cta: "Discuss Retainer"
    }
];

export function EngagementModels() {
    return (
        <section id="engagement" className="py-24 px-6 bg-[#030504]">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-500/60 block mb-4">
                        ENGAGEMENT PROTOCOLS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        How I stabilize your trajectory.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {MODELS.map((model, idx) => (
                        <div
                            key={idx}
                            className={`p-8 border rounded-sm flex flex-col h-full transition-all duration-300 ${model.highlight
                                ? "bg-emerald-950/10 border-emerald-500/30"
                                : "bg-transparent border-white/10 hover:border-emerald-500/20"
                                }`}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                                <div className="text-sm font-mono text-slate-400">{model.price}</div>
                            </div>

                            <p className="text-slate-400 font-light leading-relaxed mb-8 flex-1 text-sm">
                                {model.desc}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {model.features.map(feat => (
                                    <li key={feat} className="flex items-start gap-3 text-sm text-slate-300">
                                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`w-full py-4 text-xs font-bold uppercase tracking-widest text-center transition-colors flex items-center justify-center gap-2 ${model.highlight
                                    ? "bg-emerald-600 text-white hover:bg-emerald-500"
                                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                                    }`}
                            >
                                {model.cta} <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
