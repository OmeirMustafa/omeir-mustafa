"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact-section" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden"> {/* Lighter bg to contrast with dark modal popup if needed, but keeping global consist. */}
            <div className="container-width">
                <div className="max-w-[920px] mx-auto paper-card p-8 md:p-16 text-center shadow-lg relative overflow-hidden group">

                    {/* Background: Subtle Moving Gradient Mesh */}
                    {/* Background: Subtle Optimism Tint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-optimism/10 opacity-50" />

                    {/* Animated Accents */}
                    {/* Simple Float Animations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-adventure/5 rounded-full blur-3xl animate-float delay-100" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-optimism/10 rounded-full blur-3xl animate-float delay-300" />

                    <div className="relative z-10">
                        {/* Status Indicator */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Accepting New Projects
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight animate-fade-up delay-100">
                            Are you ready to recover lost revenue?
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
                            Small, methodical improvements compound into measurable growth. The longer you wait, the more qualified leads slip away.
                        </p>

                        <div className="animate-fade-up delay-300">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-adventure text-lg inline-flex items-center justify-center group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start a Conversation
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Gloss Effect */}
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
