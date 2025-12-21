"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ArrowRight, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

interface LuminaCaseStudyProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LuminaCaseStudy({ isOpen, onClose }: LuminaCaseStudyProps) {
    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 opacity-100 transition-opacity duration-300">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-7xl h-[100vh] md:h-[95vh] bg-[#F8FAFC] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-up border border-white/50">

                {/* Close & Header Bar */}
                <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 pointer-events-none sticky bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent">
                    <div className="pointer-events-auto">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                            Case Study
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-900 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-full scrollbar-hide py-24 md:py-12 px-6 md:px-12">

                    {/* 1. Header Area */}
                    <div className="max-w-4xl pt-12 pb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            Lumina Law: Transforming a Legacy Firm into a Digital Authority
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            We rebuilt Lumina Law’s digital presence from the ground up, moving from a static brochure to a high-performance conversion engine.
                        </p>
                    </div>

                    {/* 2. Compare Slider (Full Width) */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 mb-20 relative group">
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="/images/lumina-old.jpg" alt="Before" />}
                            itemTwo={<ReactCompareSliderImage src="/images/lumina-new.jpg" alt="After" />}
                            className="h-full w-full"
                        />
                        <div className="absolute bottom-6 left-6 bg-slate-900/90 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md pointer-events-none">
                            Drag to Compare
                        </div>
                    </div>

                    {/* 3. Deep Dive Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                        {/* Left: Challenge */}
                        <div className="lg:col-span-4 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <AlertTriangle size={16} className="text-amber-500" />
                                    The Challenge
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    The original site was dense, text-heavy, and mobile-hostile. It failed to communicate the firm's prestige and lost 70% of traffic within 10 seconds.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-500 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                    No clear conversion paths
                                </li>
                                <li className="flex items-start gap-3 text-slate-500 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                    Outdated "Lawyer" stock imagery
                                </li>
                                <li className="flex items-start gap-3 text-slate-500 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                    Slow load times (3.8s LCP)
                                </li>
                            </ul>
                        </div>

                        {/* Right: Solution */}
                        <div className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8 flex items-center gap-2">
                                <TrendingUp size={16} />
                                Strategic Execution
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">Immersive Trust</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        We replaced stock photos with a cinematic "Dark Glass" aesthetic that communicates authority, precision, and modern capability instantly.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">Funnel Architecture</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        Restructured the sitemap to guide users from "Problem" to "Solution" to "Contact" in fewer than 3 clicks.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">Performance First</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        Rebuilt on Next.js. Page loads dropped to 0.8s. SEO visibility increased by 40% in week one.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">Direct Access</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        Implemented specific "Urgency" CTAs for high-value cases, bypassing generic intake forms.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 4. Footer CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-200">
                        <div className="text-slate-500 text-sm">
                            Result: <strong className="text-slate-900">+210% Inquiries</strong>
                        </div>
                        <a
                            href="https://lumina-law-website-rebuilt.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/10"
                        >
                            Visit Live Site <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Scrollbar Hide Style */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
