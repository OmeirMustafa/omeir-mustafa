"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useTransform, MotionValue, useMotionValue } from "framer-motion";

// --- CONFIGURATION ---
const TOTAL_ZONES = 5;
const DAMPING = 20;
const STIFFNESS = 60;
const MASS = 1.5;

const ZONES = [
    {
        id: "01",
        label: "STATE 01",
        title: "Brand Architecture",
        desc: "Structural alignment of identity, positioning, and perception."
    },
    {
        id: "02",
        label: "STATE 02",
        title: "Web System Engineering",
        desc: "High-performance interfaces engineered for scale and clarity."
    },
    {
        id: "03",
        label: "STATE 03",
        title: "Experience Calibration",
        desc: "Motion, interaction, and flow tuned to human behavior."
    },
    {
        id: "04",
        label: "STATE 04",
        title: "Conversion Logic",
        desc: "Systems designed to guide attention and decision-making."
    },
    {
        id: "05",
        label: "STATE 05",
        title: "Scalability Readiness",
        desc: "Foundations built to evolve without rewrites."
    }
];

// Tick Mark Generation
const TICKS = Array.from({ length: 60 }).map((_, i) => {
    const isMajor = i % 10 === 0;
    return {
        angle: i * 6, // 360 / 60
        isMajor
    };
});

interface SystemCalibratorProps {
    scrollProgress: MotionValue<number>;
}

export function SystemCalibrator({ scrollProgress }: SystemCalibratorProps) {
    // 1. Map Scroll to Angle (0 - 1  ->  -90deg to +90deg or 0 to 270)
    // Let's use a semi-circle or full range. 240 degrees seems instrumental. (-120 to +120)
    const rawAngle = useTransform(scrollProgress, [0, 1], [-100, 100]);

    // 2. Physics Spring
    // The needle follows the raw scroll input but with inertia/mass
    const springAngle = useSpring(rawAngle, {
        stiffness: STIFFNESS,
        damping: DAMPING,
        mass: MASS
    });

    // 3. Discrete State Logic
    const [activeIndex, setActiveIndex] = useState(0);

    // Listen to scroll changes to snap the text state
    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            const step = 1 / TOTAL_ZONES;
            const index = Math.min(Math.floor(latest / step), TOTAL_ZONES - 1);
            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        });
        return () => unsubscribe();
    }, [scrollProgress, activeIndex]);


    // 4. Idle Drift (Breathing)
    // We add a subtle sine wave to the spring output for the "Live" feel
    // Since useSpring returns a MotionValue, we can't easily add another motion value to it directly in the transform without a custom hook or frame loop.
    // Simpler: Animate the container of the needle with a separate keyframe, or just use a small sub-element.
    // Let's rotate the needle's GROUP with the spring, and the needle PATH with the drift.

    return (
        <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center relative select-none">

            {/* INSTRUMENT DIAL */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">

                {/* Dial SVG */}
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">

                    {/* Outer Ring / Bezel */}
                    <circle cx="200" cy="200" r="190" fill="none" stroke="var(--accent-green)" strokeOpacity="0.1" strokeWidth="1" />
                    <circle cx="200" cy="200" r="140" fill="none" stroke="var(--accent-green)" strokeOpacity="0.05" strokeWidth="40" strokeDasharray="4 6" />

                    {/* Tick Marks */}
                    <g transform="translate(200, 200)">
                        {TICKS.map((tick, i) => (
                            <line
                                key={i}
                                y1={-180}
                                y2={tick.isMajor ? -160 : -175}
                                transform={`rotate(${tick.angle})`}
                                stroke="var(--accent-green)"
                                strokeWidth={tick.isMajor ? 2 : 1}
                                strokeOpacity={tick.isMajor ? 0.6 : 0.2}
                            />
                        ))}
                    </g>

                    {/* Calibration Arcs */}
                    <path
                        d="M 60 200 A 140 140 0 0 1 340 200"
                        fill="none"
                        stroke="var(--accent-green)"
                        strokeOpacity="0.1"
                        strokeWidth="1"
                        strokeDasharray="10 10"
                        transform="rotate(180 200 200)"
                    />

                    {/* DYNAMIC NEEDLE ASSEMBLY */}
                    <motion.g
                        style={{ rotate: springAngle }}
                        className="origin-center"
                        initial={{ rotate: -100 }}
                    >
                        {/* Breathing Drift Container */}
                        <motion.g
                            animate={{ rotate: [0, 1.5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* The Needle Itself */}
                            <line x1="200" y1="200" x2="200" y2="40" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="200" cy="200" r="8" fill="var(--bg-deep)" stroke="var(--accent-green)" strokeWidth="2" />
                            <circle cx="200" cy="40" r="3" fill="var(--accent-green)" className="animate-pulse" />
                        </motion.g>
                    </motion.g>

                </svg>

                {/* Center Readout (Digital) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 text-center pointer-events-none">
                    <div className="text-[10px] font-mono text-[var(--accent-green)] opacity-50 tracking-widest mb-1">
                        CALIBRATION_ZONE
                    </div>
                    <div className="text-xl font-bold font-mono text-[var(--text-primary)] tabular-nums">
                        {ZONES[activeIndex].id}
                    </div>
                </div>

            </div>

            {/* TEXT STATE DISPLAY */}
            <div className="relative h-32 w-full max-w-lg mt-8 text-center flex items-center justify-center">
                {ZONES.map((state, i) => (
                    <motion.div
                        key={state.id}
                        className="absolute inset-0 flex flex-col items-center justify-center p-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: activeIndex === i ? 1 : 0,
                            y: activeIndex === i ? 0 : 5,
                            filter: activeIndex === i ? "blur(0px)" : "blur(4px)"
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] uppercase tracking-tight mb-2">
                            {state.title}
                        </h3>
                        <p className="text-sm md:text-base text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                            {state.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Labels */}
            <div className="absolute bottom-4 left-6 text-[10px] font-mono text-[var(--accent-green)] opacity-30 md:block hidden">
                SYS: ACTIVE
            </div>
            <div className="absolute bottom-4 right-6 text-[10px] font-mono text-[var(--accent-green)] opacity-30 md:block hidden">
                FREQ: 60HZ
            </div>

        </div>
    );
}
