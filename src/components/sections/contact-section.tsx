"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden"> {/* Lighter bg to contrast with dark modal popup if needed, but keeping global consist. */}
            <div className="container-width">
                <div className="max-w-[920px] mx-auto glass-panel rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-blue-900/5 border border-white/60 relative overflow-hidden group">

                    {/* Background: Subtle Moving Gradient Mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/80 to-blue-50/50 opacity-100" />

                    {/* Animated Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#0A58FF]/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#0A58FF]/5 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse-slow delay-1000" />

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
                            Most websites don’t fail.<br className="hidden md:block" /> They quietly <span className="text-gradient">leak opportunity.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
                            If you suspect your site isn’t pulling its weight, you’re likely right. The cost of inaction compounds every week.
                        </p>

                        <div className="animate-fade-up delay-300">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-[#0A58FF] hover:shadow-[#0A58FF]/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Stop the Leak
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Gloss Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
