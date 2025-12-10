"use client";

import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";
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
            <div className="bg-hud-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto transition-all hover:border-neon-cyan/50">
                {/* Logo */}
                <Link href="/" className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 overflow-hidden">
                    <span className="absolute inset-0 bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-all" />
                    <Zap className="w-5 h-5 text-neon-cyan relative z-10" />
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-mono tracking-wide transition-colors hover:text-neon-cyan",
                                pathname === item.href ? "text-neon-cyan text-shadow-neon" : "text-white/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Status Chip */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/5 text-[10px] font-mono text-neon-cyan">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon-cyan" />
                    </span>
                    ONLINE
                </div>
            </div>
        </nav>
    );
}
