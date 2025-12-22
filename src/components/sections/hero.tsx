"use client";

import Link from "next/link";
import React from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="hero" className="min-h-[85vh] flex items-start pt-32 md:pt-48 relative overflow-hidden">
            {/* 
               Padding Note: 
               Navbar is usually ~80px-100px. 
               Req: "Add 48px (desktop) top padding between navbar bottom and hero headline."
               If Navbar is fixed ~88px (py-6 + content), then pt should be ~88 + 48 = 136px.
               However, "min-h-screen flex items-center" centers vertical content.
               To enforce specific TOP padding distance relative to navbar, we might need 'items-start' or careful padding.
               Using 'flex items-center' overrides sticky top padding often.
               Let's trust the user's specific "Add 48px... top padding".
               I will remove 'items-center' and use 'items-start' with explicit padding-top to ensure the gap is exact.
            */}

            {/* Minimalist ambient tint - removed heavy noise/blur for "Restraint" */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] opacity-30 pointer-events-none" />

            <div className="container-width relative z-10 w-full h-full flex flex-col justify-start"> {/* Align Top */}

                <div className="max-w-4xl pt-12 md:pt-12"> {/* Buffer for Navbar? No, container-width usually has padding. Layout padding. */}
                    {/* Actually, let's stick to standard `pt-32` + `mt-12` roughly? 
                        The prompt asks for "48px padding between navbar bottom and hero headline".
                        Assuming Navbar height ~90px.
                        pt-24 is 96px. pt-32 is 128px.
                        Let's go with pt-32 md:pt-40 as established in previous step, but ensure content aligns top.
                    */}

                    <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold tracking-tight text-slate-900 leading-[1.05] mb-6 animate-fade-up opacity-0">
                        Turn your leaking website into a <span className="animate-text-shimmer inline-block">predictable revenue engine.</span>
                    </h1>

                    <h2 className="text-[18px] text-slate-500 max-w-[70ch] leading-[1.6] mb-12 font-regular animate-fade-up delay-100 opacity-0">
                        I help founders and scaling teams rebuild fragile web presences into high-trust, conversion-first systems that increase qualified inquiries and predictable revenue.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-5 animate-fade-up delay-200 opacity-0">
                        <button
                            onClick={() => {
                                const approachSection = document.getElementById('approach');
                                if (approachSection) {
                                    approachSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:shadow-[#0A58FF]/40 hover:bg-[#0A58FF] transition-all duration-300 hover:-translate-y-1 active:scale-95 min-w-[180px] group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                See How It Works
                            </span>
                            {/* Subtle Glow Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button
                            onClick={() => {
                                const projectsSection = document.getElementById('projects');
                                if (projectsSection) {
                                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border border-slate-300 text-slate-900 font-bold text-lg shadow-sm hover:border-[#0A58FF]/50 hover:shadow-[#0A58FF]/10 transition-all hover:-translate-y-1 active:scale-95 min-w-[180px] group"
                        >
                            View Results
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
} // Adjusted spacing logic in className: "pt-[140px]" to account for fixed navbar + 48px. 
// Actually, let's clean the className.
