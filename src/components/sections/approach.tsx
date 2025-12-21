"use client";

import React from "react";
import { Search, PenTool, Layout, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        title: "Diagnostic Audit",
        desc: "We identify the revenue leaks and friction points in your current funnel before writing a single line of code."
    },
    {
        icon: PenTool,
        title: "Strategic Blueprint",
        desc: "Structure precedes style. I map the user journey directly to your business outcomes. No dead ends, only conversion paths."
    },
    {
        icon: Layout,
        title: "Visual Authority",
        desc: "Editorial-grade design that separates you from competitors instantly. We build systems that signal competence at first glance."
    },
    {
        icon: Rocket,
        title: "Systematic Scale",
        desc: "Modular, high-performance engineering designed for growth. Fast load times, SEO-ready structure, and zero technical debt."
    }
];

export function Approach() {
    return (
        <section id="approach" className="section-spacing bg-[#F1F5F9] relative overflow-hidden">
            {/* Subtle background element */}
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
                            Most projects fail because they value decoration over function. I follow a rigorous adherence to revenue-focused architecture.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative glass-card p-8 rounded-2xl min-h-[320px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="absolute top-6 right-6 text-slate-200 text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity select-none">
                                0{idx + 1}
                            </div>

                            <div>
                                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-8 shadow-lg shadow-slate-900/10 group-hover:scale-110 transition-transform duration-500">
                                    <step.icon size={20} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 pr-8">
                                    {step.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100 group-hover:border-blue-100 transition-colors">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                                    Phase 0{idx + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
