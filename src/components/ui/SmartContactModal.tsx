"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { MOTION } from "@/config/motion";

export function SmartContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = useState(false);
    const email = "kaziomeirmustafa@gmail.com";
    const handleCopy = () => { navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 3000); };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={MOTION.snap} className="relative w-full max-w-md bg-slate-950/90 border border-cyan-500/40 p-8 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,245,255,0.15)]">
                        <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px] animate-scanline" />
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 z-10" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 z-10" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-mono font-bold text-white tracking-widest uppercase">ESTABLISH UPLINK</h3>
                                    <div className="text-[10px] text-cyan-400 font-mono flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" /> SECURE CHANNEL</div>
                                </div>
                                <button onClick={onClose}><X className="text-slate-500 hover:text-white" /></button>
                            </div>
                            <div className="space-y-3">
                                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry`} target="_blank" className="flex items-center justify-between p-4 bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 transition-all group">
                                    <div className="flex items-center gap-3"><ShieldCheck className="text-cyan-400 w-5 h-5" /> <div className="text-left"><div className="text-sm font-bold text-white font-mono">INITIALIZE GMAIL</div></div></div>
                                </a>
                                <a href={`mailto:${email}`} className="flex items-center justify-between p-4 border border-slate-700 hover:border-white/50 transition-all"><div className="flex items-center gap-3"><Mail className="text-slate-400 w-5 h-5" /> <div className="text-left"><div className="text-sm font-bold text-slate-300 font-mono">SYSTEM DEFAULT</div></div></div></a>
                                <button onClick={handleCopy} className="flex items-center justify-between p-4 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all w-full"><div className="flex items-center gap-3"><Copy className="text-slate-400 w-5 h-5" /> <div className="text-left"><div className="text-sm font-bold text-slate-300 font-mono">COPY COORDINATES</div></div></div></button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
