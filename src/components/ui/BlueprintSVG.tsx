"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlueprintSVGProps {
    className?: string;
    viewBox?: string;
    children?: React.ReactNode;
    // If paths are passed directly, or we can use a standard preset if none provided
    paths?: string[];
    color?: string;
    duration?: number;
    delay?: number;
}

export function BlueprintSVG({
    className,
    viewBox = "0 0 100 100",
    paths = [],
    color = "#06b6d4",
    duration = 1.4,
    delay = 0
}: BlueprintSVGProps) {

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: delay + (i * 0.2), type: "spring", duration: duration, bounce: 0 },
                opacity: { delay: delay + (i * 0.2), duration: 0.01 }
            } as any // Bypass strict transition type check for mixed properties
        })
    };

    return (
        <motion.svg
            viewBox={viewBox}
            className={cn("w-full h-full pointer-events-none", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {paths.map((d, i) => (
                <g key={i}>
                    {/* Glow Layer */}
                    <motion.path
                        d={d}
                        stroke={color}
                        strokeWidth="3"
                        fill="none"
                        variants={draw}
                        custom={i}
                        className="opacity-20 blur-[2px]"
                    />
                    {/* Crisp Layer */}
                    <motion.path
                        d={d}
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        variants={draw}
                        custom={i}
                    />
                </g>
            ))}
        </motion.svg>
    );
}

// Preset Blueprints for specific sections
export const RAG_PIPELINE_PATH = [
    "M10 50 L30 50 L30 20 L50 20",
    "M30 50 L30 80 L50 80",
    "M50 20 L80 20 L80 50 L90 50",
    "M50 80 L80 80 L80 50"
];

export const NEXT_FLOW_PATH = [
    "M10 10 C 30 10, 30 90, 50 90",
    "M50 90 C 70 90, 70 10, 90 10"
];
