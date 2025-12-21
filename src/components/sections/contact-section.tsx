"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
            <div className="container-width">
                <div className="max-w-[920px] mx-auto glass-panel rounded-2xl p-8 md:p-16 text-center shadow-2xl border border-white/60 relative overflow-hidden group">

                    {/* Decorative Pulse Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />

                    <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-700" />
                    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-slate-400/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Status: Accepting New Projects
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            Most websites don’t fail.<br className="hidden md:block" /> They quietly <span className="text-blue-600">leak opportunity.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                            If you suspect your site isn’t pulling its weight, you’re probably right. The cost compounds every month you wait.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/10 hover:bg-blue-600 hover:shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Stop the Leak
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Button Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
