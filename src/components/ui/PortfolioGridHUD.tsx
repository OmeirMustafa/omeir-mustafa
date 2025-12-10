"use client";

import React from "react";
import { Loader } from "lucide-react";

export function PortfolioGridHUD() {
    return (
        <div className="w-full h-[400px] rounded-xl border border-cyan-500/20 bg-[#0b0c10] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Hologram Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl animate-pulse" />
                    <Loader className="w-12 h-12 text-cyan-400 animate-spin relative z-10" />
                </div>

                <h3 className="text-xl font-mono font-bold text-cyan-300 tracking-wider mb-2 animate-pulse">
                    SYSTEM UPGRADE IN PROGRESS...
                </h3>
                <p className="text-sm text-cyan-600 font-mono uppercase tracking-widest">
                    ARCHIVING CLASSIFIED PROJECTS
                </p>
            </div>
        </div>
    );
}
