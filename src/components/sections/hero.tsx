"use client";

import React from "react";

export function Hero() {
    const handleScrollProjects = () => {
        const section = document.getElementById('projects');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-32 md:pt-48 relative overflow-hidden">
            {/* Hero Background Video/Image - Standard IMG tag for reliable WebP loop */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/hero-background-glassmotion.webp"
                alt="Abstract glass motion background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-white/60" />

            <div className="container-width relative z-10 w-full flex flex-col items-center text-center">

                <div className="max-w-[900px]">
                    <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-ink-strong leading-[1.05] mb-8 animate-fade-up opacity-0">
                        Turn your leaking website into a <span className="mark-highlight px-2">predictable revenue engine</span>.
                    </h1>

                    <h2 className="text-[16px] md:text-[18px] text-slate-500 max-w-[70ch] mx-auto leading-[1.6] mb-12 font-regular animate-fade-up delay-100 opacity-0">
                        I help founders and scaling teams rebuild fragile web presences into high-trust, conversion-first systems that increase qualified inquiries and predictable revenue.
                    </h2>

                    <div className="flex flex-col items-center gap-6 animate-fade-up delay-200 opacity-0">
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            {/* Primary CTA: Book Audit (Scrolls to Contact) */}
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact-section');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="btn-adventure text-xl min-w-[220px] group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Book an Audit
                                </span>
                            </button>

                            {/* Secondary CTA: Strategic Work */}
                            <button
                                onClick={handleScrollProjects}
                                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-slate-200 text-ink-strong font-medium text-xl shadow-sm hover:bg-white hover:border-adventure/30 transition-all hover:-translate-y-1 active:scale-95 min-w-[220px] bg-white/50 backdrop-blur-sm group relative"
                            >
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-adventure transition-colors">
                                    Explore Strategic Work
                                </span>
                            </button>
                        </div>

                        {/* Microcopy - Clearer & Aligned */}
                        <p className="text-[17px] text-slate-500 font-medium tracking-wide text-center">
                            30-min site & product audit — <span className="text-adventure font-bold">free</span>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
