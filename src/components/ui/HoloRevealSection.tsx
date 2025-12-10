"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface HoloRevealSectionProps {
    children: React.ReactNode;
    className?: string;
}

export function HoloRevealSection({ children, className }: HoloRevealSectionProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    return (
        <section ref={containerRef} className={className}>
            <motion.div style={{ opacity, scale }} className="h-full w-full">
                {children}
            </motion.div>
        </section>
    );
}
