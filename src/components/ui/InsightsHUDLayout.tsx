"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantumCard } from "./QuantumCard";
import Link from "next/link";

const INSIGHTS = [
    { title: "The State of Next.js 15", slug: "state-of-nextjs-15", date: "Dec 10, 2025", readTime: "5 min" },
    { title: "Building RAG Pipelines", slug: "building-rag-pipelines", date: "Nov 28, 2025", readTime: "8 min" },
    { title: "Dark UX Principles", slug: "dark-ux-principles", date: "Nov 15, 2025", readTime: "6 min" },
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
                    <Link href={`/insights/${post.slug}`}>
                        <QuantumCard className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group hover:bg-cyan-950/10 hover:border-cyan-400/50 cursor-pointer border-cyan-500/20 bg-[#0b0c10]">
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">{post.title}</h3>
                                <div className="flex gap-4 text-xs text-slate-500 mt-1 font-mono">
                                    <span>{post.date}</span>
                                    <span>{post.readTime} read</span>
                                </div>
                            </div>
                            <div className="px-3 py-1 rounded bg-black/40 border border-cyan-500/20 text-xs text-cyan-600 group-hover:bg-cyan-400/10 group-hover:text-cyan-400 group-hover:border-cyan-400 transition-all font-mono">
                                Read Article
                            </div>
                        </QuantumCard>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
