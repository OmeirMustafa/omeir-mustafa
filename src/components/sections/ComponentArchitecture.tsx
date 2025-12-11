"use client";

import React from "react";
import { Database, Cpu, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { DiagramHUD } from "@/components/ui/DiagramHUD";
import { SystemStackDiagram } from "@/components/diagrams/SystemStackDiagram";
import { HoloPanel } from "@/components/ui/HoloPanel";
import { HUDSectionWrapper } from "@/components/ui/HUDSectionWrapper";

const modules = [
    {
        title: "The Architect",
        icon: <Database className="w-6 h-6 text-[var(--accent-green)]" />,
        desc: "Translating founder expertise into structured systems: product logic, value ladders, architecture thinking."
    },
    {
        title: "Foundation",
        desc: "Next.js 15, React Server Components",
        icon: <Database className="w-6 h-6 text-[var(--accent-green)]" />,
    },
    {
        title: "Structure",
        desc: "Atomic Design, Feature-First Architecture",
        icon: <Cpu className="w-6 h-6 text-[var(--accent-green)]" />,
    },
    {
        title: "Interface",
        desc: "Framer Motion, Tailwind v4",
        icon: <Eye className="w-6 h-6 text-[var(--accent-green)]" />,
    }
];

export function ComponentArchitecture() {
    return (
        <HUDSectionWrapper className="py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
                {modules.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <HoloPanel className="h-full p-8 flex flex-col items-start gap-4">
                            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 mb-2">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white font-mono">{item.title}</h3>
                            <p className="text-slate-300 leading-relaxed text-sm flex-grow">
                                {item.desc}
                            </p>
                        </HoloPanel>
                    </motion.div>
                ))}
            </div>

            {/* System Stack Diagram */}
            <div className="mt-24 max-w-2xl mx-auto">
                <DiagramHUD
                    title="SYSTEM_OPERATING_MODEL // V.3.0"
                    caption="A unified operating model combining strategy, architecture, and engineering."
                >
                    <SystemStackDiagram />
                </DiagramHUD>
            </div>
        </HUDSectionWrapper>
    );
}
