"use client";

import React from "react";
import { AlertTriangle, Terminal } from "lucide-react";

export function ProblemFraming() {
    return (
        <section className="py-24 px-6 bg-[#030504] border-y border-white/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8 opacity-70">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                        THE FOUNDER'S DILEMMA
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight leading-tight">
                    Your product is a <span className="text-slate-500">technical black box.</span> <br />
                    And that is a liability.
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-400 leading-relaxed font-light">
                            Founders and VC operate on speed. <br />
                            Engineers operate on complexity.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed font-light">
                            When these two incentives misalign, you generate <strong>Technical Debt</strong>—invisible structural damage that kills scalability, fails due diligence, and burns capital.
                        </p>
                    </div>

                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm font-mono text-xs text-slate-400">
                        <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-white/5 pb-2">
                            <Terminal size={12} />
                            <span>risk_assessment.log</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="text-red-500">[CRIT]</span> Silent Scalability Failure
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-500">[CRIT]</span> Vendor Lock-in (Unintentional)
                            </li>
                            <li className="flex gap-3">
                                <span className="text-amber-500">[WARN]</span> Slow LCP / SEO Invisible
                            </li>
                            <li className="flex gap-3">
                                <span className="text-amber-500">[WARN]</span> Security Compliance Gaps
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
