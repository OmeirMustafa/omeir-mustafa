"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
    { name: "APPROACH", href: "#approach" },
    { name: "ENGAGEMENT", href: "#engagement" },
    { name: "AUDIT", href: "#security" },
];

export function HUDNavigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
            scrolled ? "bg-[#030504]/90 backdrop-blur-md border-emerald-900/20 py-4" : "bg-transparent border-transparent py-6"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* 1. Identity / System Status */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded border border-emerald-900/40 bg-emerald-950/10">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-100 tracking-tight leading-none group-hover:text-emerald-400 transition-colors">
                            OMEIR MUSTAFA
                        </span>
                        <span className="text-[9px] font-mono text-emerald-500/60 tracking-widest uppercase mt-0.5">
                            ARCHITECT :: ACTIVE
                        </span>
                    </div>
                </Link>

                {/* 2. Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA */}
                    <Link
                        href="#contact"
                        className="ml-4 px-5 py-2 bg-white text-black text-xs font-bold tracking-wide uppercase rounded-sm hover:bg-emerald-400 transition-colors"
                    >
                        Request Review
                    </Link>
                </nav>

                {/* 3. Mobile Toggle */}
                <button
                    className="md:hidden text-slate-400 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#030504] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {NAV_LINKS.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm font-mono text-slate-300 py-2 border-l-2 border-transparent hover:border-emerald-500 pl-4 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 w-full text-center py-3 bg-white text-black font-bold uppercase text-xs"
                            >
                                Request Review
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
