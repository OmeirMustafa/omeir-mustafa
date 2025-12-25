"use client";

import React from "react";
import { Lock, ArrowUpRight } from "lucide-react";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

export function Projects() {
    return (
        <section id="projects" className="section-spacing bg-[#F8FAFC]">
            <div className="container-width">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-up">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-adventure tracking-tight mb-4">
                            Curated Engagements
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl">
                            Strategic projects chosen for impact — focused on authority, conversion, and measurable client growth.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Featured Case: Lumina Law (Full Width) */}
                    <div className="w-full">
                        <LuminaCaseStudy />
                    </div>

                    {/* Compact Grid: Two Up */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card 1: Kuro Coffee */}
                        <div className="group paper-card p-8 md:p-10 transition-all duration-420 opacity-0 animate-[fadeUp_450ms_200ms_var(--ease-entrance)_forwards]">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 group-hover:text-adventure transition-colors">
                                    E-Commerce Performance
                                </span>
                                <div className="p-3 bg-optimism-light rounded-full group-hover:bg-optimism transition-colors duration-300">
                                    <ArrowUpRight size={18} className="text-ink-strong group-hover:text-ink-strong transition-colors" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-adventure transition-colors">
                                Kuro Coffee
                            </h3>

                            <p className="text-slate-600 text-[17px] leading-relaxed">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                    <Lock size={12} /> Coming Soon
                                </span>
                                <br />
                                Designed a fast, mobile-first storefront focused on speed, clarity, and repeat purchases.
                            </p>
                        </div>

                        {/* Card 2: Confidential (Locked) */}
                        <div className="group paper-card p-8 md:p-10 transition-all duration-420 opacity-0 animate-[fadeUp_450ms_300ms_var(--ease-entrance)_forwards]">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 group-hover:text-adventure transition-colors">
                                    Confidential
                                </span>
                                <div className="px-3 py-1.5 bg-slate-100 rounded-full flex items-center gap-1.5 group-hover:bg-slate-200 transition-colors">
                                    <Lock size={12} className="text-slate-500" />
                                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">NDA</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-adventure transition-colors">
                                Enterprise Data Dashboard
                            </h3>

                            <p className="text-slate-600 text-[17px] leading-relaxed">
                                Structured complex information into a calm, decision-ready dashboard experience.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <style jsx global>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
