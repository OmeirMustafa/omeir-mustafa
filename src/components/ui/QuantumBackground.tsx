"use client";

import React from "react";
import { motion } from "framer-motion";

export function QuantumBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Cyan Orb */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-[100px] mix-blend-screen opacity-40"
            />

            {/* Blue Orb */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-40"
            />

            {/* Purple/Holographic Accent */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[30%] left-[30%] w-[300px] h-[300px] bg-voltage-purple/20 rounded-full blur-[80px] mix-blend-overlay"
            />
        </div>
    );
}
