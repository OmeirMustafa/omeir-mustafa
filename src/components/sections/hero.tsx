"use client";

import Link from "next/link";
import React from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const handleScrollProjects = () => {
        const section = document.getElementById('projects');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-32 md:pt-48 relative overflow-hidden">
            {/* Minimalist ambient tint */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="container-width relative z-10 w-full flex flex-col items-center text-center">

                <div className="max-w-[900px]">
                    <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.05] mb-8 animate-fade-up opacity-0">
                        Turn your leaking website into a <span className="animate-text-shimmer inline-block bg-[200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-[#0A58FF] via-[#5FA8FF] to-[#0A58FF]">predictable revenue engine.</span>
                    </h1>

                    <h2 className="text-[16px] md:text-[18px] text-slate-500 max-w-[70ch] mx-auto leading-[1.6] mb-12 font-regular animate-fade-up delay-100 opacity-0">
                        I help founders and scaling teams rebuild fragile web presences into high-trust, conversion-first systems that increase qualified inquiries and predictable revenue.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up delay-200 opacity-0">
                        {/* Primary CTA */}
                        <button
                            onClick={handleScrollProjects}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:shadow-[#0A58FF]/40 hover:bg-[#0A58FF] transition-all duration-300 hover:-translate-y-1 active:scale-95 min-w-[200px] min-h-[52px] group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Strategic Work
                            </span>
                            {/* Pulse Entry & Steady Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        {/* Secondary CTA */}
                        <button
                            onClick={handleScrollProjects}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border border-slate-300 text-slate-900 font-bold text-lg shadow-sm hover:shadow-[0_0_20px_rgba(10,88,255,0.15)] hover:border-[#0A58FF]/50 transition-all hover:-translate-y-1 active:scale-95 min-w-[200px] min-h-[52px] group relative"
                        >
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0A58FF] transition-colors">
                                Explore Case Studies
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
