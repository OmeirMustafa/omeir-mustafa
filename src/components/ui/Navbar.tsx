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
                        ? "bg-white/95 backdrop-blur-md shadow-sm border border-slate-100"
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
                        className="relative group transition-all duration-300 flex flex-col justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A58FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
                        aria-label="Omeir Mustafa — Digital & Product Architect"
                    >
                        {/* Primary Brand */}
                        <div className="relative z-10 text-xl md:text-2xl font-bold tracking-tight text-adventure group-hover:text-adventure-dark transition-colors duration-300">
                            Omeir Mustafa
                        </div>

                        {/* Secondary Subtitle */}
                        <div className="relative z-10 text-xs md:text-sm text-slate-500 group-hover:text-ink-strong transition-colors duration-300 font-medium">
                            Digital & Product Architect
                        </div>
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
                            className="btn-optimism shadow-lg shadow-yellow-400/20 flex items-center gap-2 group min-h-[48px]"
                        >
                            Contact Now
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12" />
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
            className="group relative px-4 py-2 text-[16px] md:text-[18px] font-medium tracking-[0.01em] text-ink transition-colors duration-200 hover:text-ink-strong focus:outline-hidden focus:ring-2 focus:ring-adventure/50 rounded-lg select-none cursor-pointer overflow-hidden"
        >
            <span className="relative z-10">{children}</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-optimism group-hover:w-full transition-[width] duration-300 ease-out -translate-x-1/2 rounded-full" />
        </Link>
    );
}
