"use client";

import React from "react";
import { Shield, Lock, Server, FileCode } from "lucide-react";

const SECURITY_SPECS = [
    {
        label: "Secure Headers",
        value: "HSTS / CSP / X-Frame",
        icon: <Shield size={16} />,
        status: "ENFORCED"
    },
    {
        label: "Data Residency",
        value: "Vercel Edge (US-East)",
        icon: <Server size={16} />,
        status: "LOCKED"
    },
    {
        label: "Encryption",
        value: "TLS 1.3 / AES-256",
        icon: <Lock size={16} />,
        status: "ACTIVE"
    },
    {
        label: "Code Integrity",
        value: "Strict TypeScript / CI Audit",
        icon: <FileCode size={16} />,
        status: "VERIFIED"
    }
];

export function SecurityGrid() {
    return (
        <section id="security" className="py-24 px-6 bg-[#030504] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-500/60 block mb-4">
                            RISK MITIGATION
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Security is an architecture, <br /> not a feature.
                        </h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                            LAST AUDIT: {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/5">
                    {SECURITY_SPECS.map((spec, idx) => (
                        <div key={idx} className="bg-[#030504] p-8 flex flex-col gap-4 group hover:bg-white/[0.01] transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                                    {spec.icon}
                                </div>
                                <div className="text-[10px] font-mono text-emerald-500 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
                                    {spec.status}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-1">{spec.label}</h4>
                                <p className="text-xs font-mono text-slate-500">{spec.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-emerald-950/5 border border-emerald-900/20 rounded-sm">
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                        <strong className="text-emerald-400 font-medium">Why this matters:</strong> Investors scrutinize technical debt.
                        A secure, compliant, and well-documented codebase increases valuation and speeds up due diligence.
                    </p>
                </div>
            </div>
        </section>
    );
}
