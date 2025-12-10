"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "starter",
        tier: "Diagnostic",
        title: "Founder Diagnostic Audit",
        originalPrice: "$750",
        price: "$249",
        bestFor: "Solo founders, Pre-Seed to Seed",
        deliverables: [
            "48-Hour Code Health Check",
            "UX Friction Report",
            "Technical Debt Map",
            "Immediate Remediation Plan"
        ],
        isSpecial: true
    },
    {
        id: "audit",
        tier: "Entry Offer",
        title: "Technical Audit",
        price: "$3,500 – $5,000",
        bestFor: "SaaS founders, VC portfolios",
        deliverables: [
            "Codebase quality assessment",
            "Architecture risk map",
            "UX heuristics report",
            "RAG readiness evaluation",
            "“Red/Amber/Green” priority roadmap"
        ]
    },
    {
        id: "sprint",
        tier: "Core Product",
        title: "Build Sprint",
        price: "$15,000 – $60,000",
        bestFor: "Non-technical founders, SaaS teams",
        mainFeatures: [
            "Next.js product architecture",
            "UI/UX design systems",
            "Secure SSR flows & Local RAG tools",
            "Operational dashboards"
        ],
        outcome: "A scalable, investor-ready digital product."
    },
    {
        id: "retainer",
        tier: "Retainer",
        title: "Fractional Product Leadership",
        price: "$6,000 – $12,000/mo",
        bestFor: "Scale-ups, high-growth teams",
        deliverables: [
            "Product strategy ownership",
            "Vendor + dev team oversight",
            "Technical hiring",
            "KPI / OKR roadmap leadership"
        ],
        outcome: "CPO/CTO-level guidance."
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function ServicesSection() {
    return (
        <section className="py-24 px-6 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background for Services */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Value Ladder
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl text-lg">
                        From technical due diligence to full-scale digital product architecture.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className={cn(
                                "relative p-6 rounded-2xl border bg-[#0a0a0a]/80 backdrop-blur-sm transition-all flex flex-col min-h-[500px] group hover:z-10",
                                service.isSpecial
                                    ? "border-amber-500/50 hover:border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                                    : "border-white/5 hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                            )}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {service.isSpecial && (
                                <motion.div
                                    animate={{ opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-2xl border border-amber-500/30 pointer-events-none"
                                />
                            )}

                            {service.isSpecial && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase rounded-bl-xl rounded-tr-xl flex items-center gap-1 shadow-lg">
                                    <Zap size={12} fill="currentColor" /> LIMITED
                                </div>
                            )}

                            {/* Best Value Badge for Core Product */}
                            {service.id === "sprint" && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-neon-cyan text-black text-[10px] font-bold uppercase rounded-bl-xl rounded-tr-xl flex items-center gap-1 shadow-lg">
                                    <ShieldCheck size={12} fill="currentColor" /> SCALABLE
                                </div>
                            )}

                            <div className="mb-6">
                                <span className={cn(
                                    "text-xs font-mono uppercase tracking-wider mb-2 block font-bold",
                                    service.isSpecial ? "text-amber-500" : "text-neon-cyan"
                                )}>
                                    {service.tier}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

                                <div className="flex items-baseline gap-2 mb-1">
                                    <div className="text-2xl font-light text-white/90">{service.price}</div>
                                    {service.originalPrice && (
                                        <div className="text-sm text-white/40 line-through decoration-white/30">{service.originalPrice}</div>
                                    )}
                                </div>
                                <div className="text-xs text-white/40 mb-4 h-8 flex items-center">Best for: {service.bestFor}</div>
                            </div>

                            <div className="flex-grow space-y-3 mb-6">
                                {((service.deliverables || service.mainFeatures) || []).map((item) => (
                                    <div key={item} className="flex items-start gap-2 text-xs text-white/70">
                                        <Check className={cn("w-3.5 h-3.5 mt-0.5 shrink-0", service.isSpecial ? "text-amber-500" : "text-neon-cyan")} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                                {service.mainFeatures && (
                                    <div className="text-[10px] uppercase text-white/30 font-bold tracking-widest mt-2 border-t border-white/5 pt-2">Includes above</div>
                                )}
                            </div>

                            {service.outcome && (
                                <div className="mt-auto pt-4 border-t border-white/10 mb-6">
                                    <p className="text-xs text-white/50 italic">
                                        "{service.outcome}"
                                    </p>
                                </div>
                            )}

                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full mt-auto h-10 border-white/10 hover:bg-white/5 text-xs uppercase tracking-wide transition-colors",
                                    service.isSpecial && "bg-amber-500/10 border-amber-500/50 hover:bg-amber-500/20 text-amber-500",
                                    !service.isSpecial && "group-hover:bg-neon-cyan/10 group-hover:text-neon-cyan group-hover:border-neon-cyan/50"
                                )}
                            >
                                {service.isSpecial ? "Claim Audit" : "Select Protocol"} <ArrowRight className="w-3 h-3 ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
                            </Button>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

