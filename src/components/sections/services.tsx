"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantumCard } from "@/components/ui/QuantumCard";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";
import Link from "next/link";

const OFFERS = [
    {
        tier: "LIMITED ENTRY",
        title: "FOUNDER DIAGNOSTIC",
        price: "$249",
        desc: "48-Hour UX & Code Scan.",
        features: ["Technical Health Check", "UX Friction Audit", "Report in 48h"],
        isSpecial: true
    },
    {
        tier: "AUDIT",
        title: "TECHNICAL AUDIT",
        price: "$3,500",
        desc: "Architecture, Security & Performance Roadmap.",
        features: ["Deep Code Analysis", "Security Risk Map", "Scale Roadmap"],
    },
    {
        tier: "EXECUTION",
        title: "BUILD SPRINT",
        price: "$15k+",
        desc: "AI-powered MVP Architecture & Execution.",
        features: ["Next.js Architecture", "RAG Integration", "Production Launch"],
        duration: "Per Sprint"
    },
    {
        tier: "PARTNER",
        title: "FRACTIONAL CPO",
        price: "$6k/mo",
        desc: "Long-term architecture ownership.",
        features: ["Strategy Leadership", "Vendor Management", "Team Hiring"],
        duration: "Monthly"
    },
];

export function ServicesSection() {
    return (
        <HUDSectionWrapper className="py-24">
            <React.Fragment>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
                        VALUE <span className="text-[var(--accent-green)]">LADDER</span>
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                        Transparent pricing for high-velocity engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {OFFERS.map((offer, i) => (
                        <motion.div
                            key={offer.tier}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative h-full"
                        >
                            <QuantumCard className={cn("h-full flex flex-col p-6", offer.isSpecial && "border-[var(--accent-green)]/50 shadow-[0_0_30px_var(--halo)]")}>
                                {offer.isSpecial && (
                                    <div className="absolute top-0 right-0 px-2 py-1 bg-[var(--accent-green)] text-black text-[10px] font-bold uppercase rounded-bl-lg">
                                        Recommended
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className={cn("text-xs font-mono uppercase tracking-widest mb-2", offer.isSpecial ? "text-[var(--accent-green)]" : "text-[var(--text-muted)]")}>{offer.tier}</div>
                                    <div className="text-3xl font-bold text-[var(--text-primary)]">{offer.price}</div>
                                    <div className="text-xs text-[var(--text-muted)] mt-1">{offer.duration}</div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {offer.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-primary)]/80">
                                            <Check className="w-3 h-3 text-[var(--accent-green)] shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="w-full">
                                    <button className={cn(
                                        "w-full py-3 px-4 rounded text-xs font-mono font-bold uppercase tracking-widest transition-all",
                                        offer.isSpecial
                                            ? "bg-[var(--accent-green)] text-black border-[var(--accent-green)] hover:bg-white hover:border-white"
                                            : "bg-transparent border-[var(--hairline)] text-[var(--text-primary)] hover:bg-white/5 hover:border-[var(--accent-green)]"
                                    )}>
                                        Select Protocol
                                    </button>
                                </Link>
                            </QuantumCard>
                        </motion.div>
                    ))}
                </div>
            </React.Fragment>
        </HUDSectionWrapper>
    );
}
