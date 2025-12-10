"use client";

import React from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Database, Cpu, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
    {
        title: "The Architect",
        icon: <Database className="w-6 h-6 text-cyan-400" />,
        desc: "Translating abstract expertise into structured digital systems. Value ladders, product logic, and high-level product thinking."
    },
    {
        title: "The Builder",
        icon: <Cpu className="w-6 h-6 text-cyan-400" />,
        desc: "Next.js engineering, secure SSR, vector database design, RAG integration, and component-driven architecture."
    },
    {
        title: "The Visionary",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        desc: "AI-native product invention: predictive workflows, intelligent dashboards, and next-generation interfaces."
    }
];

export function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 bg-[#0b0c10] relative overflow-hidden">

            <div className="max-w-7xl mx-auto w-full z-10 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                        Component Architecture
                    </span>
                </h2>
                <p className="text-slate-200/60 max-w-2xl mx-auto text-lg">
                    My operating system consists of three core modules.
                </p>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {modules.map((module, i) => (
                    <TiltCard key={module.title} className="h-[350px]">
                        <div className={cn(
                            "h-full w-full bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 p-8 flex flex-col items-center text-center rounded-lg hover:border-cyan-400/70 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300"
                        )}>
                            <div className="w-14 h-14 rounded-lg bg-black/40 flex items-center justify-center mb-6 border border-cyan-500/20">
                                {module.icon}
                            </div>
                            <h3 className="text-xl font-mono font-bold text-slate-200 mb-4">{module.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {module.desc}
                            </p>

                            {/* Tech Clamps */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500 opacity-50" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500 opacity-50" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500 opacity-50" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500 opacity-50" />
                        </div>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
}
