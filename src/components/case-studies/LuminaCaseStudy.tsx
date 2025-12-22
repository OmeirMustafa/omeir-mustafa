"use client";

import React, { useState } from "react";
import { ArrowRight, X, ExternalLink, Maximize2 } from "lucide-react";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export function LuminaCaseStudy() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Card - Floating Glass Aesthetic */}
            <div
                className="group relative backdrop-blur-md bg-white/60 border border-white/40 p-10 rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 w-full max-w-2xl mx-auto"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative z-10 text-left">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-3 block">Case Study</span>
                            <h3 className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-[#0A58FF] transition-colors">Lumina Law</h3>
                            <p className="text-slate-600 font-medium">Estate Planning & Probate Architecture</p>
                        </div>
                        <div className="p-4 bg-white rounded-full shadow-sm border border-slate-100 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-300">
                            <ArrowRight className="w-6 h-6 text-slate-900 group-hover:text-[#0A58FF]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-slate-200/60 pt-8">
                        <div>
                            <span className="block text-4xl font-bold text-slate-900 mb-1 tracking-tight">300%</span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Inquiry Increase</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-slate-900 mb-1 tracking-tight">4 Weeks</span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Build Time</span>
                        </div>
                    </div>
                </div>

                {/* Hoever State: Soft Gradient Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Background Glow */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Premium Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative w-full max-w-7xl h-[90vh] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fade-up">

                        {/* LEFT: Visual Engine (Slider + Proof) */}
                        <div className="w-full lg:w-[65%] bg-slate-50 relative flex flex-col border-r border-slate-200">
                            {/* Toolbar */}
                            <div className="p-6 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center z-10 sticky top-0">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#0A58FF] rounded-full animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Visual Evidence</span>
                                </div>
                                <a
                                    href="https://luminalaw.ca"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-[#0A58FF] transition-all shadow-lg shadow-slate-900/10 active:scale-95"
                                >
                                    View Live Details <ExternalLink size={12} />
                                </a>
                            </div>

                            {/* Slider Content */}
                            <div className="flex-1 overflow-y-auto p-8 lg:p-12 scrollbar-hide">
                                <div className="space-y-12">
                                    {/* Proof Block 1: Before/After */}
                                    <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                                        <div className="mb-4 px-4 pt-4">
                                            <h4 className="text-base font-bold text-slate-900">Transformation Engine</h4>
                                            <p className="text-sm text-slate-500">Drag to compare 2014 Legacy vs. 2024 Authority</p>
                                        </div>
                                        <BeforeAfterSlider
                                            beforeImage="/images/lumina-old.jpg"
                                            afterImage="/images/lumina-new.jpg"
                                            alt="Lumina Law Redesign"
                                        />
                                    </div>

                                    {/* Quote Block */}
                                    <blockquote className="text-xl md:text-2xl font-medium text-slate-900 text-center max-w-2xl mx-auto leading-relaxed">
                                        "Most websites are brochures. This is a <span className="text-gradient">conversion weapon</span>."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Editorial Content */}
                        <div className="w-full lg:w-[35%] bg-white h-auto lg:h-full overflow-y-auto flex flex-col relative z-20">
                            <div className="p-8 md:p-10 flex-1">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <span className="text-[#0A58FF] font-bold text-sm tracking-widest uppercase mb-2 block">The Protocol</span>
                                        <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                                            Lumina Law
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
                                    >
                                        <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
                                    </button>
                                </div>

                                <div className="space-y-10">
                                    <div className="space-y-6">
                                        {/* Problem */}
                                        <div className="relative pl-6 border-l-2 border-red-200">
                                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">The Leak</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Lumina's legacy site was leaking 90% of mobile traffic. The "brochure" layout failed to communicate their specialized authority in high-net-worth estate planning.
                                            </p>
                                        </div>

                                        {/* Intervention */}
                                        <div className="relative pl-6 border-l-2 border-[#0A58FF]">
                                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">The Fix</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We deployed a <strong>Next.js + Sanity</strong> architecture.
                                            </p>
                                            <ul className="mt-3 space-y-2">
                                                <li className="flex items-center gap-2 text-sm text-slate-700">
                                                    <span className="w-1.5 h-1.5 bg-[#0A58FF] rounded-full" />
                                                    High-Velocity Branding
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-slate-700">
                                                    <span className="w-1.5 h-1.5 bg-[#0A58FF] rounded-full" />
                                                    Probate Fee Calculator Hook
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-slate-700">
                                                    <span className="w-1.5 h-1.5 bg-[#0A58FF] rounded-full" />
                                                    Zero-Latency Page Loads
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Outcome */}
                                        <div className="relative pl-6 border-l-2 border-emerald-400">
                                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">The Result</h4>
                                            <p className="text-emerald-700 bg-emerald-50 p-4 rounded-xl text-sm leading-relaxed border border-emerald-100 font-medium">
                                                "Since launch, our qualified inquiry rate has tripled. The calculator alone generates 5-10 high-value leads per week."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Action */}
                            <div className="p-8 border-t border-slate-100 bg-slate-50">
                                <a
                                    href="https://luminalaw.ca"
                                    target="_blank"
                                    className="block w-full text-center py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#0A58FF] transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                                >
                                    Visit Live Site
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
