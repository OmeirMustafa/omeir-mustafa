"use client";

import React from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Code2, Cpu, ScanFace } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 bg-[#0c0c0e] relative overflow-hidden">

            <div className="max-w-7xl mx-auto w-full z-10 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
                        Component Architecture
                    </span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    My operating system consists of three core modules.
                </p>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                <TiltCard className="h-[400px]">
                    <div className="h-full w-full bg-[#111] border border-white/5 p-8 flex flex-col items-center text-center rounded-xl">
                        <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center mb-6 border border-neon-cyan/20">
                            <ScanFace className="text-neon-cyan w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Architect</h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Product translation, system mapping, and value ladder engineering. I design the blueprint before a single line of code is written to ensure scalability and alignment.
                        </p>
                    </div>
                </TiltCard>

                <TiltCard className="h-[400px]">
                    <div className="h-full w-full bg-[#111] border border-white/5 p-8 flex flex-col items-center text-center rounded-xl">
                        <div className="w-16 h-16 rounded-2xl bg-neon-violet/10 flex items-center justify-center mb-6 border border-neon-violet/20">
                            <Code2 className="text-neon-violet w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Builder</h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Full-stack execution using Next.js, Server-Side Rendering (SSR), Tailwind CSS, RAG pipelines, Vector Databases, and Agent Orchestrators.
                        </p>
                    </div>
                </TiltCard>

                <TiltCard className="h-[400px]">
                    <div className="h-full w-full bg-[#111] border border-white/5 p-8 flex flex-col items-center text-center rounded-xl">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                            <Cpu className="text-blue-500 w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Visionary</h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Focusing on AI-native patterns, automation principles, and long-term product viability in a rapidly evolving technological landscape.
                        </p>
                    </div>
                </TiltCard>
            </div>
        </section>
    );
}
