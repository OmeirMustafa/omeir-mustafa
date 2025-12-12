"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReticleLogo } from "@/components/ui/ReticleLogo";

const LEFT_LINKS = [
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#portfolio" },
];

const RIGHT_LINKS = [
    { name: "Insights", href: "/#insights" },
    { name: "Contact", href: "/#contact" },
];

export function HUDNavigation() {
    const pathname = usePathname();

    const NavLink = ({ item }: { item: { name: string; href: string } }) => (
        <Link
            href={item.href}
            className={cn(
                "relative text-sm font-mono tracking-wide transition-all duration-300 px-3 py-1",
                pathname === item.href ? "text-[var(--accent-green)] font-bold text-shadow-[0_0_8px_rgba(0,255,160,0.5)]" : "text-[var(--text-muted)] hover:text-[var(--accent-green)]"
            )}
        >
            {item.name}
        </Link>
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
            <div className="bg-[var(--bg-deep)]/90 backdrop-blur-xl border border-[var(--hairline)] rounded-full px-8 py-2 flex items-center gap-8 pointer-events-auto transition-all hover:border-[var(--accent-green)]/50 shadow-[0_0_20px_var(--halo)]">

                {/* Left Group */}
                <div className="hidden md:flex items-center gap-6">
                    {LEFT_LINKS.map((item) => <NavLink key={item.name} item={item} />)}
                </div>

                {/* Center Logo */}
                <Link href="/" className="group relative flex items-center justify-center p-1">
                    <ReticleLogo />
                </Link>

                {/* Right Group */}
                <div className="hidden md:flex items-center gap-6">
                    {RIGHT_LINKS.map((item) => <NavLink key={item.name} item={item} />)}
                </div>

                {/* Mobile Menu Fallback (Simple Hamburger or similar could go here if requested, but sticking to desktop request mainly) */}
            </div>
        </nav>
    );
}
