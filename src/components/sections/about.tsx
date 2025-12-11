"use client";

import React from 'react';
import { Database, Cpu, Eye } from 'lucide-react';
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

const SKILLS = [
    {
        title: "Technical Foundation",
        desc: "Next.js 15, React Server Components, and Edge Runtime optimization.",
        icon: <Database className="w-6 h-6 text-[var(--accent-green)] group-hover:animate-pulse" />,
    },
    {
        title: "System Architecture",
        desc: "Scalable component patterns and atomic design principles.",
        icon: <Cpu className="w-6 h-6 text-[var(--accent-green)] group-hover:animate-spin-slow" />,
    },
    {
        title: "Visual Intelligence",
        desc: "Data visualization and interactive HUD interfaces.",
        icon: <Eye className="w-6 h-6 text-[var(--accent-green)]" />,
    }
];

export function AboutSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Interactive Diagram */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-auto md:h-[500px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-green)]/5 to-transparent rounded-2xl border border-white/5 backdrop-blur-sm p-8 flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                Component <span className="text-[var(--accent-green)]">Architecture</span>
                            </h3>
                            <p className="text-[var(--text-muted)] max-w-xs mx-auto text-sm">
                                Modular, type-safe, and built for scale.
                            </p>
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 m-auto w-64 h-64 border border-[var(--hairline)] rounded-full animate-spin-slow border-dashed opacity-30" />
                        <div className="absolute inset-0 m-auto w-48 h-48 border border-[var(--accent-green)]/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                    </div>
                </motion.div>

                {/* Right: Cards */}
                <div className="space-y-6">
                    {SKILLS.map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="relative h-full group p-8 rounded-lg bg-slate-900/60 backdrop-blur-xl border border-[var(--hairline)] hover:border-[var(--accent-green)]/60 transition-all duration-300 hover:shadow-[0_0_30px_var(--halo)] flex flex-col">

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-green)]/50 group-hover:border-[var(--accent-green)] transition-colors" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-green)]/50 group-hover:border-[var(--accent-green)] transition-colors" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-green)]/50 group-hover:border-[var(--accent-green)] transition-colors" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-green)]/50 group-hover:border-[var(--accent-green)] transition-colors" />

                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="p-3 rounded bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 group-hover:bg-[var(--accent-green)]/20 group-hover:border-[var(--accent-green)]/50 transition-all">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-green)] transition-colors">{skill.title}</h4>
                                        <p className="text-[var(--text-muted)] leading-relaxed">{skill.desc}</p>
                                    </div>
                                </div>

                                {/* Hover Gradient Sweep */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-green)]/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
