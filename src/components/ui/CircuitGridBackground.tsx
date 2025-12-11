"use client";

import React from "react";

export function CircuitGridBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Base Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#04050A] via-[#06080F] to-[#0A0F17]" />

            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Circuit Lines (Procedural-style) */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M100 0H0V100" fill="none" stroke="cyan" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="0" cy="0" r="1" fill="cyan" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>

            {/* Vignette & Depth Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

            {/* Top Light Sweep */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[100px] bg-cyan-500/10 blur-[100px]" />
        </div>
    );
}
