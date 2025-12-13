"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { SystemCalibrator } from "@/components/ui/SystemCalibrator";

export function SecureAISystems() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6">

                {/* Background Grid/Glow (Optional, recycled from master panel vibe) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[var(--bg-deep)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-green)_0%,transparent_70%)] opacity-5" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <MasterPanel className="flex flex-col gap-12 border-none bg-transparent shadow-none" title="SYS // CALIBRATION_MODE">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Column: Context */}
                            <div className="lg:col-span-5 space-y-8 text-left">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] text-[var(--text-primary)] uppercase">
                                    SYSTEM <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-dim)]">
                                        CALIBRATION
                                    </span>
                                </h2>
                                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                                    Precision engineering for digital ecosystems. <br />
                                    Scroll to calibrate the architecture.
                                </p>

                                <div className="hidden lg:flex flex-col gap-2 mt-8">
                                    <div className="h-[1px] w-full bg-[var(--hairline)]" />
                                    <div className="flex justify-between text-[10px] font-mono text-[var(--accent-green)] opacity-50 uppercase tracking-widest">
                                        <span>Input: Scroll</span>
                                        <span>Status: Ready</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: The Instrument */}
                            <div className="lg:col-span-7 relative min-h-[500px] flex items-center justify-center">
                                <SystemCalibrator scrollProgress={scrollYProgress} />
                            </div>

                        </div>
                    </MasterPanel>
                </div>
            </div>
        </section>
    );
}
