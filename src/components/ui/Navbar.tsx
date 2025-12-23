"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-5" : "py-8"
                }`}
        >
            <div className="container-width">
                <div
                    className={`flex items-center justify-between px-8 py-5 rounded-2xl transition-all duration-300 ${scrolled
                        ? "bg-white/70 backdrop-blur-xl shadow-sm border border-white/40"
                        : "bg-transparent"
                        }`}
                >
                    {/* LEFT: Logo */}
                    <Link
                        href="/"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            window.history.pushState({}, '', '/');
                        }}
                        className="relative text-[20px] font-bold tracking-tight text-slate-900 group transition-all duration-300"
                    >
                        <span className="relative z-10 group-hover:text-[#0A58FF] transition-colors duration-300">Omeir Mustafa</span>
                        <span className="absolute inset-0 blur-xl bg-[#0A58FF]/0 group-hover:bg-[#0A58FF]/20 transition-all duration-300 rounded-full scale-150 opacity-0 group-hover:opacity-100" />

                        <span className="text-slate-400 font-normal ml-3 hidden sm:inline-block group-hover:text-slate-600 transition-colors relative z-10 text-[16px]">
                            / Architect
                        </span>
                    </Link>

                    {/* CENTER: Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#approach">Approach</NavLink>
                        <NavLink href="#qa">Q&A</NavLink>
                    </div>

                    {/* RIGHT: Contact Now */}
                    <div>
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact-section');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="bg-slate-900 text-white px-7 py-3.5 rounded-xl text-[16px] font-medium hover:bg-[#0A58FF] transition-colors shadow-lg shadow-slate-900/10 active:scale-95 flex items-center gap-2 group min-h-[48px]"
                        >
                            Contact Now
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group relative px-4 py-2 text-[18px] font-medium tracking-[0.01em] text-[#5B6570] transition-all duration-240 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-[#0B1220] hover:-translate-y-[2px] focus:outline-hidden focus:ring-2 focus:ring-[#0A58FF]/50 rounded-lg hover:shadow-[0_6px_20px_rgba(10,88,255,0.12)]"
        >
            <span className="relative z-10">{children}</span>
        </Link>
    );
}
