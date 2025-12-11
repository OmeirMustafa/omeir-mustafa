"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe2, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export function ICPSection() {
    return (
        <section id="icp" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden bg-[#050505]">

            {/* Background Context */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.02),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-deep)]">
                            Who I Engineer For
                        </span>
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
                        I partner with ambitious founders and teams building the next generation of digital products.
                    </p>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[var(--text-primary)] text-center">
                    Who I Work With <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-deep)]">
                        Best
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {/* ICP 1 */}
                    <Link href="/services" className="block group">
                        <div className="p-6 rounded-xl bg-white/5 border border-[var(--hairline)] hover:border-[var(--accent-green)]/50 transition-all flex items-start gap-6 h-full">
                            <div className="w-12 h-12 rounded-lg bg-[var(--accent-green)]/10 flex items-center justify-center shrink-0 border border-[var(--accent-green)]/20">
                                <Briefcase className="text-[var(--accent-green)] w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-green)] transition-colors">Early-Stage Founders</h3>
                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    You need a technical partner to build your MVP with precision and speed. No bloat, just shipping.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* ICP 2 */}
                    <Link href="/services" className="block group">
                        <div className="p-6 rounded-xl bg-white/5 border border-[var(--hairline)] hover:border-[var(--accent-deep)]/50 transition-all flex items-start gap-6 h-full">
                            <div className="w-12 h-12 rounded-lg bg-[var(--accent-deep)]/10 flex items-center justify-center shrink-0 border border-[var(--accent-deep)]/20">
                                <Building2 className="text-[var(--accent-deep)] w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-deep)] transition-colors">SaaS Scale-Ups</h3>
                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    Your architecture is buckling under load. You need RAG pipelines and secure data handling now.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* ICP 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl p-8 flex items-start gap-6 group hover:bg-[#0a0a0a] border border-[var(--hairline)] bg-white/5"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[var(--accent-green)]/10 flex items-center justify-center shrink-0 border border-[var(--accent-green)]/20">
                            <Users className="text-[var(--accent-green)] w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-green)] transition-colors">Non-Technical Teams</h3>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                You need a bridge between business requirements and technical execution. I translate your goals into clear developer specifications.
                            </p>
                        </div>
                    </motion.div>

                    {/* ICP 4 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="rounded-xl p-8 flex items-start gap-6 group hover:bg-[#0a0a0a] border border-[var(--hairline)] bg-white/5"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[var(--accent-deep)]/10 flex items-center justify-center shrink-0 border border-[var(--accent-deep)]/20">
                            <Globe2 className="text-[var(--accent-deep)] w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-deep)] transition-colors">Global Remote Teams</h3>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                I operate asynchronously and autonomously, integrating seamlessly with distributed teams to deliver value without constant oversight.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
