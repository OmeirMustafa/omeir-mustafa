"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

export function Projects() {
    return (
        <section id="projects" className="section-spacing bg-[#F8FAFC]">
            <div className="container-width">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-up">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            Curated Engagements
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl">
                            Strategic projects chosen for impact — focused on authority, conversion, and measurable client growth.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Featured Case: Lumina Law */}
                    <div className="w-full">
                        <LuminaCaseStudy />
                    </div>

                    {/* Placeholder: Kuro Coffee */}
                    <div className="group w-full glass-card rounded-3xl p-10 border border-slate-200 opacity-60 cursor-not-allowed grayscale">
                        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
                            <div className="space-y-4 max-w-3xl">
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                                    E-Commerce Performance
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-400">
                                    Kuro Coffee
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Designed a fast, mobile-first storefront focused on speed, clarity, and repeat purchases.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    Confidential
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder: Apex SaaS */}
                    <div className="group w-full glass-card rounded-3xl p-10 border border-slate-200 opacity-60 cursor-not-allowed grayscale">
                        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
                            <div className="space-y-4 max-w-3xl">
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                                    Enterprise Data Dashboard
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-400">
                                    Apex SaaS
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Structured complex information into a calm, decision-ready dashboard experience.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    Confidential
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
