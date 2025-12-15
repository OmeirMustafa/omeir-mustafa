'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                    {/* Backdrop with Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* The Glass Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg z-10"
                    >
                        <SpotlightCard className="w-full p-0 overflow-hidden border-emerald-500/30 bg-[#050505] shadow-[0_0_50px_rgba(16,185,129,0.1)]" noFloat={true}>
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-emerald-500/20 p-6 bg-black/40">
                                <h2 className="font-mono text-lg tracking-widest text-emerald-400">
                                    ESTABLISH UPLINK
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 text-zinc-500 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    {/* Option 1 */}
                                    <button className="w-full group flex items-center gap-4 p-4 border border-emerald-500/20 rounded hover:bg-emerald-500/10 transition-all text-left bg-black/20">
                                        <div className="text-emerald-500">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 font-mono">INITIALIZE GMAIL</div>
                                            <div className="text-xs text-zinc-500">Secure encrypted channel</div>
                                        </div>
                                    </button>

                                    {/* Option 2 */}
                                    <button
                                        onClick={() => navigator.clipboard.writeText("omeir.mustafa@example.com")} // Placeholder email, user can update
                                        className="w-full group flex items-center gap-4 p-4 border border-emerald-500/20 rounded hover:bg-emerald-500/10 transition-all text-left bg-black/20"
                                    >
                                        <div className="text-emerald-500">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 font-mono">COPY COORDINATES</div>
                                            <div className="text-xs text-zinc-500">Save comms data to clipboard</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Footer Status */}
                            <div className="bg-emerald-950/30 p-3 text-center border-t border-emerald-500/20">
                                <span className="text-[10px] text-emerald-500 tracking-[0.2em] animate-pulse font-mono">
                                    ● SECURE CHANNEL READY
                                </span>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
