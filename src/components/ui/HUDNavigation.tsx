"use client";

import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
];

export function HUDNavigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
            <div className="bg-hud-black/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto transition-all hover:border-neon-cyan/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {/* Logo */}
                <Link href="/" className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 overflow-hidden hover:bg-neon-cyan/10 transition-all">
                    <span className="absolute inset-0 bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-all opacity-0 group-hover:opacity-100" />
                    <Zap className="w-5 h-5 text-neon-cyan relative z-10" />
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-6 relative">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative text-sm font-mono tracking-wide transition-all duration-300 px-2 py-1",
                                pathname === item.href ? "text-neon-cyan text-shadow-neon font-bold" : "text-slate-400 hover:text-neon-cyan"
                            )}
                        >
                            {item.name}
                            {/* Active Micro-Chip Indicator */}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-neon-cyan shadow-[0_0_8px_#00f5ff]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {/* Hover Sweep (CSS handled, or we can add framer if needed, but keeping it simple for perf) */}
                        </Link>
                    ))}
                </div>

                {/* Status Chip */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/5 text-[10px] font-mono text-neon-cyan shadow-inner">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan shadow-[0_0_10px_#06b6d4]" />
                    </span>
                    ONLINE
                </div>
            </div>
        </nav>
    );
}
