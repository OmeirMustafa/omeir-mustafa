"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, RefreshCw, Crown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "conversion",
        title: "Conversion Engineering",
        description: "Full audit & optimization of digital touchpoints. We don't just fix bugs; we eliminate friction.",
        roi: "Avg. +40% Lead Capture",
        icon: BarChart3,
        colSpan: "lg:col-span-2",
    },
    {
        id: "rebrand",
        title: "Technical Rebrand",
        description: "Migrating legacy stacks to Next.js 15. Speed, SEO, and scalability as a standard.",
        roi: "Sub-100ms Load Times",
        icon: RefreshCw,
        colSpan: "lg:col-span-1",
    },
    {
        id: "authority",
        title: "The Authority Platform",
        description: "Complete digital ecosystem build. AI integration, CRM pipelines, and premium aesthetics.",
        roi: "Enterprise-Grade Architecture",
        icon: Crown,
        colSpan: "lg:col-span-3",
    },
];

export function ServicesSection() {
    return (
        <section className="py-32 px-6 container mx-auto max-w-7xl relative">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                        Protocol Capabilities
                    </span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-voltage-purple rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className={cn(
                            "group relative overflow-hidden rounded-2xl glass-panel p-8 min-h-[300px] flex flex-col justify-between hover:border-neon-cyan/30 transition-colors",
                            service.colSpan
                        )}
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-voltage-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan/20 transition-all">
                                    <service.icon size={28} />
                                </div>
                                <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                {service.title}
                            </h3>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto border-t border-white/10 pt-4">
                            <span className="text-xs uppercase tracking-wider text-neon-cyan font-mono">
                                Outcome: {service.roi}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
