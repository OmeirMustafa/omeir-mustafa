"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Copy, Check } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";

// Structure Content
const SECTIONS = [
    {
        title: "BRAND_INTELLIGENCE",
        tags: ["Identity System", "Visual Language", "Global Positioning"]
    },
    {
        title: "WEB_ARCHITECTURE",
        tags: ["Next.js 16", "Dark Mode", "Technical SEO", "Framer Motion"]
    },
    {
        title: "SYS_INTEGRATION",
        tags: ["Auto-Pipelines", "Smart UX", "AI-Ready Core"]
    },
    {
        title: "SECURITY_LAYER",
        tags: ["SSR-First", "Data Minimization", "Zero-Exposure"]
    },
    {
        title: "OPS_PERFORMANCE",
        tags: ["Zero CLS", "Fast LCP", "Clean Code"]
    }
];

export function CapabilityMatrixModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = React.useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            // Lock body scroll (Critical Fix)
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden"; // Backup for Safari/Mobile
        } else {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };

    const handleCopy = () => {
        const text = SECTIONS.map(s =>
            `${s.title}\n${s.tags.map(t => `[${t}]`).join(' ')}`
        ).join('\n\n');

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(SECTIONS, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "capability_matrix.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Premium Card Content with Spotlight */}
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#050505] border border-green-500/30 rounded-xl p-8 shadow-[0_0_50px_rgba(0,255,0,0.15)] overflow-visible group/card"
                        style={{
                            backgroundImage: "radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(0, 255, 0, 0.08), transparent 40%)"
                        }}
                    >
                        {/* Floating Close Button (Top Center Outside) */}
                        <button
                            onClick={onClose}
                            className="absolute -top-16 left-1/2 -translate-x-1/2 p-3 rounded-full bg-black border border-green-500 text-white hover:bg-green-500 hover:text-black transition-all z-50 shadow-[0_0_20px_rgba(0,255,160,0.3)]"
                            aria-label="Close Modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        {/* Connector Line */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-green-500/30"></div>

                        <div className="relative z-10 pointer-events-none">
                            {/* Header */}
                            <div className="mb-6 border-b border-green-500/20 pb-4 text-center">
                                <div className="text-xs text-green-500/70 uppercase tracking-widest mb-2 font-mono">
                                    SYSTEM ARCHITECTURE
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    System Capability Matrix
                                </h2>
                            </div>

                            {/* 2-Column Grid - Compact Spacing */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                {SECTIONS.map((section, idx) => (
                                    <div key={idx} className="group/item">
                                        <h3 className="text-green-400 font-bold mb-1 text-xs font-mono uppercase flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-green-500" />
                                            {section.title.replace("_", " ")}
                                        </h3>
                                        <div className="space-y-0.5 pl-3 border-l border-green-500/10 group-hover/item:border-green-500/30 transition-colors">
                                            {section.tags.map((tag, i) => (
                                                <div key={i} className="text-zinc-400 text-[11px] md:text-xs leading-relaxed">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Actions - Pointer Events Auto for Buttons */}
                            <div className="mt-6 pt-4 border-t border-green-500/20 flex justify-center gap-3 pointer-events-auto">
                                <button
                                    onClick={handleCopy}
                                    className="px-4 py-2 rounded text-[10px] font-bold font-mono uppercase bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black transition-all border border-transparent hover:border-green-500"
                                >
                                    {copied ? "COPIED" : "COPY DATA"}
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="px-4 py-2 rounded text-[10px] font-bold font-mono uppercase border border-white/20 text-white/70 hover:border-white hover:text-white transition-all"
                                >
                                    DOWNLOAD JSON
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
