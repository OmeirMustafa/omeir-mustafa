"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { IntelligenceBriefModal } from "@/components/ui/IntelligenceBriefModal";
import { InteractiveGlass } from "@/components/ui/InteractiveGlass";

const MotionGlass = motion(InteractiveGlass);

const VISUAL_MAPPING = [
    {
        title: "What makes a website feel premium?", tag: "DESIGN",
        content: "Premium websites rely on clarity, balanced typography, and intentional spacing. They avoid clutter and use consistent design systems that signal professionalism and trust instantly."
    },

    {
        title: "Why dark mode for modern brands?", tag: "AESTHETICS",
        content: "Dark interfaces reduce eye strain and allow visual assets to pop. When executed well, they signal engineering precision and a modern, high-tech identity."
    },

    {
        title: "How do you turn ideas into real products?", tag: "EXECUTION",
        content: "By applying a structured architectural approach—starting with strategy, moving to blueprinting, and executing with performant code frameworks like Next.js."
    },

    {
        title: "What defines intelligent UI motion?", tag: "INTERACTION",
        content: "Motion should be functional, not just decorative. Good motion guides the user's eye, provides feedback, and makes the system feel alive without slowing down tasks."
    },

    {
        title: "How do modern businesses differentiate online?", tag: "STRATEGY",
        content: "By investing in custom-built digital experiences rather than generic templates. A tailored site reflects your unique value and operational excellence."
    }
];

export function ThoughtLeadershipSection() {
    const [selectedSummary, setSelectedSummary] = useState<{ title: string; content: string } | null>(null);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="insights" className="py-12 md:py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <MasterPanel title="INTELLIGENCE // DATABASE">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-white tracking-tight">
                        INTELLIGENCE <span className="text-emerald-500 text-glow">BRIEFS</span>
                    </h2>

                    <div className="grid gap-3 md:gap-4">
                        {VISUAL_MAPPING.map((article, idx) => (
                            <MotionGlass
                                key={article.title}
                                onClick={() => setSelectedSummary({ title: article.title, content: article.content })}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full text-left flex items-center justify-between p-4 md:p-6 group cursor-pointer"
                                role="button"
                            >
                                <div className="flex items-center gap-3 md:gap-6">
                                    <span className="text-emerald-500/40 font-mono text-xs tracking-widest shrink-0">
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <div className="text-[10px] text-emerald-500/60 font-mono mb-1 tracking-widest">
                                            // {article.tag}
                                        </div>
                                        <h3 className="text-base md:text-xl font-medium text-white group-hover:text-emerald-400 transition-colors pr-2">
                                            {article.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500 group-hover:shadow-[0_0_15px_#10b981] transition-all shrink-0 bg-black/40">
                                    <ArrowRight className="text-emerald-500/50 w-3 h-3 md:w-4 md:h-4 group-hover:text-emerald-400 group-hover:-rotate-45 transition-all duration-300" />
                                </div>
                            </MotionGlass>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 border border-emerald-500/20 text-emerald-500/60 hover:text-emerald-400 hover:border-emerald-500 font-mono text-xs tracking-widest uppercase transition-all"
                        >
                            ACCESS FULL DATABASE
                        </button>
                    </div>
                </MasterPanel>
            </div>

            <IntelligenceBriefModal
                isOpen={!!selectedSummary}
                onClose={() => setSelectedSummary(null)}
                data={selectedSummary || { title: "", content: "" }}
            />
        </section>
    );
}
