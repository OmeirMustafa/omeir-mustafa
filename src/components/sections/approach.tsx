"use client";

import React from "react";
import { ScanSearch, Compass, Zap, TrendingUp } from "lucide-react";

const STEPS = [
    {
        icon: ScanSearch,
        title: "Diagnose (Week 0)",
        desc: "We pinpoint where your site leaks revenue: messaging, trust signals, and interaction friction. We quantify the leak so fixes are surgical and measurable."
    },
    {
        icon: Compass,
        title: "Architect (Week 1–2)",
        desc: "We design a conversion-first homepage and proof modules (estimators, sliders, case studies) that immediately reduce friction and build credibility."
    },
    {
        icon: Zap,
        title: "Build (Week 2–4)",
        desc: "Lean, production-safe implementation: fast LCP, clear schema, and pixel-perfect motion. We stage changes so your live site never loses availability."
    },
    {
        icon: TrendingUp,
        title: "Measure & Iterate (Week 4+)",
        desc: "Real metrics, weekly improvements. We track qualified inquiries and tweak the funnel until the conversion economics meet your target."
    }
];

export function Approach() {
    return (
        <section id="approach" className="section-spacing bg-[#F1F5F9] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container-width relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-fade-up">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            The Protocol
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Design that behaves like <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">financial strategy.</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                            Rigorous adherence to revenue-focused architecture, carried out in four sprints.
                        </p>
                    </div>
                </div>

                {/* Animated Connector Line (Desktop Only) */}
                <div className="hidden lg:block relative w-full h-[2px] bg-slate-200 mb-12 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A58FF] via-[#5FA8FF] to-[#0A58FF] opacity-50 w-[50%] animate-[flow_2s_linear_infinite]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STEPS.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-200 text-xl border border-slate-100 shadow-sm group-hover:text-blue-500 group-hover:border-blue-100 transition-colors z-10">
                                {idx + 1}
                            </div>

                            <div className="mb-6 relative">
                                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xl shadow-slate-900/10 group-hover:scale-110 group-hover:bg-[#0A58FF] transition-all duration-300">
                                    <step.icon size={24} />
                                </div>
                                {/* Connector Arrow for Mobile Loop? No, visual clutter. */}
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-4 h-[56px] flex items-end">
                                {step.title}
                            </h3>

                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx global>{`
                @keyframes flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </section>
    );
}
