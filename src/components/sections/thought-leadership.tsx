"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

const ARTICLES = [
    "Why Most SaaS Products Fail at Series A",
    "The Role of Architecture in Modern Product Development",
    "What Non-Technical CEOs Need to Know About AI & RAG",
    "The Dark-Mode Psychology Behind High-Trust Design",
    "The Future State Journey Map Every Company Needs"
];

export function ThoughtLeadershipSection() {
    return (
        <ReactorCoreHUD
            title="INTELLIGENCE BRIEFS"
            tagline="THOUGHT LEADERSHIP"
            systemId="SYS_INTEL: #202"
            className="py-24"
        >
            <div className="max-w-4xl mx-auto space-y-4">
                {ARTICLES.map((article, idx) => (
                    <motion.a
                        key={idx}
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group block p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-neon-cyan/50 font-mono text-xs">0{idx + 1}</span>
                            <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-neon-cyan transition-colors">
                                {article}
                            </h3>
                        </div>
                        <ArrowRight className="text-white/20 group-hover:text-neon-cyan group-hover:translate-x-2 transition-all" size={20} />
                    </motion.a>
                ))}
            </div>
        </ReactorCoreHUD>
    );
}
