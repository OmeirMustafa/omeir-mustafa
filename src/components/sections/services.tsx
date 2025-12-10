"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "starter",
        tier: "Diagnostic",
        title: "Founder Audit",
        price: "$249",
        bestFor: "Solo / Pre-Seed",
        features: ["48-Hour Code Check", "UX Friction Report", "Tech Debt Map"],
        isSpecial: true
    },
    {
        id: "audit",
        tier: "Entry",
        title: "Technical Audit",
        price: "$3.5k+",
        bestFor: "SaaS Founders",
        features: ["Codebase Assessment", "Architecture Risk", "Priority Roadmap"]
    },
    {
        id: "sprint",
        tier: "Core",
        title: "Build Sprint",
        price: "$15k+",
        bestFor: "Growth Teams",
        features: ["Next.js Architecture", "UI/UX Systems", "Secure SSR Flows"]
    },
    {
        id: "retainer",
        tier: "Retainer",
        title: "Fractional CPO",
        price: "$6k/mo",
        bestFor: "Scale-ups",
        features: ["Strategy Ownership", "Vendor Oversight", "Tech Hiring"]
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="min-h-screen flex flex-col justify-center items-center py-24 px-4 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Value Ladder
                        </span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        From technical due diligence to full-scale architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "quantum-glass rounded-xl p-6 flex flex-col relative group transition-all duration-300",
                                service.isSpecial && "border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                            )}
                        >
                            {/* Special Pulse for Audit */}
                            {service.isSpecial && (
                                <div className="absolute inset-0 rounded-xl border-2 border-amber-500/20 animate-pulse pointer-events-none" />
                            )}

                            {service.isSpecial && (
                                <div className="absolute -top-3 right-4 px-2 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase rounded shadow-lg flex items-center gap-1 z-20">
                                    <Zap size={10} fill="currentColor" /> LIMITED
                                </div>
                            )}

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-xl bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="mb-6 relative z-10">
                                <span className={cn("text-xs font-mono uppercase tracking-wider mb-2 block font-bold", service.isSpecial ? "text-amber-500" : "text-neon-cyan")}>
                                    {service.tier}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <div className="text-3xl font-light text-white mb-1">{service.price}</div>
                                <div className="text-xs text-white/40">Best for: {service.bestFor}</div>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow relative z-10">
                                {service.features.map((item) => (
                                    <div key={item} className="flex items-start gap-2 text-xs text-white/70">
                                        <Check className={cn("w-3.5 h-3.5 mt-0.5 shrink-0", service.isSpecial ? "text-amber-500" : "text-neon-cyan")} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={cn(
                                    "w-full py-3 text-xs uppercase font-bold tracking-wide rounded-lg border transition-all relative z-10 flex items-center justify-center gap-2 group-hover:gap-3",
                                    service.isSpecial
                                        ? "bg-amber-500 text-black border-amber-500 hover:bg-amber-400"
                                        : "bg-transparent border-white/20 hover:bg-white/10 text-white"
                                )}
                            >
                                Select <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
