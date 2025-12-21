"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Mail, Check, Copy, AppWindow, ArrowRight } from "lucide-react";

export function Hero() {
    const [contactOpen, setContactOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("omeirmustafa.work@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-32 md:pt-40">
            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50 animate-pulse delay-1000 duration-[10s]" />

            <div className="container-width relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8 animate-fade-up opacity-0">
                        I design digital systems that turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">clarity into momentum.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-8 font-medium animate-fade-up delay-100 opacity-0">
                        I help founders and growing teams replace fragile websites with focused systems that attract attention, earn trust, and convert consistently.
                    </p>

                    <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase mb-12 animate-fade-up delay-200 opacity-0">
                        Every decision is intentional. Every element earns its place.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 animate-fade-up delay-300 opacity-0 relative">
                        {/* Smart Contact Button */}
                        <div className="relative">
                            <button
                                onClick={() => setContactOpen(!contactOpen)}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 min-w-[200px]"
                            >
                                Contact Now
                                <ArrowRight size={18} className={`ml-2 transition-transform ${contactOpen ? "rotate-90" : ""}`} />
                            </button>

                            {/* Dropdown */}
                            {contactOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setContactOpen(false)} />
                                    <div className="absolute top-full left-0 mt-3 w-72 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-2xl p-2 z-50 animate-fade-in flex flex-col gap-1">
                                        <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Connect via</div>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=omeirmustafa.work@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 text-sm font-bold">
                                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500"><Mail size={16} /></div>
                                            Gmail
                                        </a>
                                        <a href="mailto:omeirmustafa.work@gmail.com" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 text-sm font-bold">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><AppWindow size={16} /></div>
                                            Default App
                                        </a>
                                        <button onClick={handleCopy} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 text-sm font-bold w-full text-left">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${copied ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"}`}>
                                                {copied ? <Check size={16} /> : <Copy size={16} />}
                                            </div>
                                            {copied ? "Copied!" : "Copy Email"}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-lg shadow-sm hover:border-slate-300 hover:shadow-md transition-all hover:-translate-y-1 active:scale-95 min-w-[200px]"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
