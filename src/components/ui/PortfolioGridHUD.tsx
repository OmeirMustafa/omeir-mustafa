"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantumCard } from "./QuantumCard";

const PROJECTS = [
    { id: 1, title: "Fintech Dashboard", category: "SaaS", image: "/placeholder-1.jpg" },
    { id: 2, title: "AI Legal Assistant", category: "RAG / LLM", image: "/placeholder-2.jpg" },
    { id: 3, title: "Crypto Exchange", category: "Web3", image: "/placeholder-3.jpg" },
    { id: 4, title: "E-Com Architecture", category: "Headless", image: "/placeholder-4.jpg" },
];

export function PortfolioGridHUD() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <QuantumCard className="aspect-video relative group overflow-hidden bg-[#111]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />

                        {/* Placeholder Content since images might not exist */}
                        <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/10 font-mono text-4xl font-bold group-hover:scale-105 transition-transform duration-700">
                            {project.title[0]}
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                            <div className="text-neon-cyan text-xs font-mono mb-1">{project.category}</div>
                            <h3 className="text-xl font-bold text-white group-hover:translate-x-2 transition-transform">{project.title}</h3>
                        </div>

                        <div className="absolute inset-0 border-2 border-neon-cyan/0 group-hover:border-neon-cyan/50 transition-colors duration-300 rounded-xl pointer-events-none z-30" />
                    </QuantumCard>
                </motion.div>
            ))}
        </div>
    );
}
