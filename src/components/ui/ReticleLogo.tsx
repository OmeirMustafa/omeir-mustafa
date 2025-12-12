"use client";

import React from "react";
import { motion } from "framer-motion";

export function ReticleLogo() {
    return (
        <div role="img" aria-label="Site logo" className="relative w-10 h-10 flex items-center justify-center pointer-events-none select-none">
            {/* Outer Ring */}
            <svg viewBox="0 0 40 40" className="w-full h-full text-[var(--accent-green)]">
                <motion.circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeOpacity="0.3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Crosshairs */}
                <line x1="20" y1="4" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="32" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" />
                <line x1="4" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" />
                <line x1="32" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" />

                {/* Inner Pulse */}
                <motion.circle
                    cx="20"
                    cy="20"
                    r="3"
                    fill="currentColor"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
