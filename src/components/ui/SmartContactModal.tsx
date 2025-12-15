"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#050505] border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/20 bg-emerald-950/20">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
                                    INITIALIZE UPLINK
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-zinc-500 hover:text-emerald-400 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 md:p-8 space-y-6">
                            <div className="space-y-2 text-center">
                                <h3 className="text-2xl font-bold text-white">
                                    Secure Connection
                                </h3>
                                <p className="text-zinc-400 text-sm">
                                    Send a direct encrypted message to Omeir.
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-emerald-600 uppercase">Identity</label>
                                    <input
                                        type="text"
                                        placeholder="Name / Organization"
                                        className="w-full bg-black/50 border border-emerald-500/20 rounded p-3 text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-emerald-600 uppercase">Coordinates (Email)</label>
                                    <input
                                        type="email"
                                        placeholder="email@domain.com"
                                        className="w-full bg-black/50 border border-emerald-500/20 rounded p-3 text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-emerald-600 uppercase">Transmission</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Project details..."
                                        className="w-full bg-black/50 border border-emerald-500/20 rounded p-3 text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm resize-none"
                                    />
                                </div>

                                <button
                                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-widest uppercase text-sm rounded transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                                >
                                    <Mail size={16} />
                                    <span>Transmit Data</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
