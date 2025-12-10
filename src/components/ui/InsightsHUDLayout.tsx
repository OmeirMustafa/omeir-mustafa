"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantumCard } from "./QuantumCard";

const INSIGHTS = [
    { title: "The State of Next.js 15", date: "Dec 10, 2025", readTime: "5 min" },
    { title: "Building RAG Pipelines", date: "Nov 28, 2025", readTime: "8 min" },
    { title: "Dark UX Principles", date: "Nov 15, 2025", readTime: "6 min" },
];

export function InsightsHUDLayout() {
    return (
        <div className="space-y-6">
            {INSIGHTS.map((post, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <QuantumCard className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group hover:bg-white/5 cursor-pointer">
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{post.title}</h3>
                            <div className="flex gap-4 text-xs text-white/40 mt-1">
                                <span>{post.date}</span>
                                <span>{post.readTime} read</span>
                            </div>
                        </div>
                        <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/60 group-hover:border-neon-cyan/50 transition-colors">
                            Read Article
                        </div>
                    </QuantumCard>
                </motion.div>
            ))}
        </div>
    );
}
