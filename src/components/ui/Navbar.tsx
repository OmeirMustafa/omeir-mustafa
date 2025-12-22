"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle Copy Email
    const handleCopy = () => {
        navigator.clipboard.writeText("omeirmustafa.work@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container-width">
                <div
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${scrolled
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
                        className="relative text-lg font-bold tracking-tight text-slate-900 group transition-all duration-300"
                    >
                        <span className="relative z-10 group-hover:text-[#0A58FF] transition-colors duration-300">Omeir Mustafa</span>
                        <span className="absolute inset-0 blur-xl bg-[#0A58FF]/0 group-hover:bg-[#0A58FF]/20 transition-all duration-300 rounded-full scale-150 opacity-0 group-hover:opacity-100" />

                        <span className="text-slate-400 font-normal ml-2 hidden sm:inline-block group-hover:text-slate-600 transition-colors relative z-10">
                            / Architect
                        </span>
                    </Link>

                    {/* CENTER: Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#approach">Approach</NavLink>
                        <NavLink href="#qa">Q&A</NavLink>
                    </div>

                    {/* RIGHT: Contact Now */}
                    <div>
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#0A58FF] transition-colors shadow-lg shadow-slate-900/10 active:scale-95 flex items-center gap-2 group"
                        >
                            Contact Now
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
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
            className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0A58FF]/50 rounded-lg"
        >
            <span className="relative z-10">{children}</span>
            {/* Soft Outer Glow - No text blur, expensive feel */}
            <span className="absolute inset-0 rounded-lg bg-[#0A58FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0A58FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
    );
}
