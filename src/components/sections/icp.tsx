"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe2, Users, Briefcase } from "lucide-react";

export function ICPSection() {
    return (
        <section id="icp" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden bg-[#050505]">

            {/* Background Context */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.02),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Who I Engineer For
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        I partner with ambitious founders and teams building the next generation of digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="quantum-glass neon-border rounded-xl p-8 flex items-start gap-6 group hover:bg-[#0a0a0a]"
                    >
                        <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center shrink-0 border border-neon-cyan/20">
                            <Briefcase className="text-neon-cyan w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">Early-Stage Founders</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                You have a vision and funding, but need a technical partner to build the MVP right the first time. I provide the architecture and speed you need.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="quantum-glass neon-border rounded-xl p-8 flex items-start gap-6 group hover:bg-[#0a0a0a]"
                    >
                        <div className="w-12 h-12 rounded-lg bg-voltage-purple/10 flex items-center justify-center shrink-0 border border-voltage-purple/20">
                            <Building2 className="text-voltage-purple w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-voltage-purple transition-colors">SaaS Scale-Ups</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                You have traction but your codebase is crumbling. I step in to refactor, optimize, and stabilize your platform for the next level of growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="quantum-glass neon-border rounded-xl p-8 flex items-start gap-6 group hover:bg-[#0a0a0a]"
                    >
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                            <Users className="text-blue-500 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">Non-Technical Teams</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                You need a bridge between business requirements and technical execution. I translate your goals into clear developer specifications.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="quantum-glass neon-border rounded-xl p-8 flex items-start gap-6 group hover:bg-[#0a0a0a]"
                    >
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                            <Globe2 className="text-emerald-500 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">Global Remote Teams</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                I operate asynchronously and autonomously, integrating seamlessly with distributed teams to deliver value without constant oversight.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
