"use client";

import React, { useEffect, useState } from "react";
import { Mail, AppWindow, Copy, Check, X } from "lucide-react";

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleCopy = () => {
        navigator.clipboard.writeText("omeirmustafa.work@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal - Dark Gradient Glass */}
            <div className="relative w-full max-w-md bg-gradient-to-br from-[#0A2463] to-[#0A58FF] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] overflow-hidden">

                {/* Internal Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                        Stop the leak.
                    </h3>
                    <p className="text-blue-100/80 mb-8 text-sm leading-relaxed">
                        Every week you wait costs qualified clients. Choose your preferred channel.
                    </p>

                    <div className="space-y-3">
                        {/* Option 1: Gmail */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=omeirmustafa.work@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all group backdrop-blur-sm"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Mail size={18} />
                            </div>
                            <span className="font-bold text-white pointer-events-none">Open in Gmail</span>
                        </a>

                        {/* Option 2: Default */}
                        <a
                            href="mailto:omeirmustafa.work@gmail.com"
                            className="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all group backdrop-blur-sm"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <AppWindow size={18} />
                            </div>
                            <span className="font-bold text-white pointer-events-none">Default Mail App</span>
                        </a>

                        {/* Option 3: Copy */}
                        <button
                            onClick={handleCopy}
                            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all group text-left relative overflow-hidden backdrop-blur-sm"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors group-hover:scale-110 ${copied ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-white"}`}>
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </div>
                            <span className="font-bold text-white pointer-events-none">
                                {copied ? "Email copied to clipboard" : "Copy email address"}
                            </span>

                            {/* Success Overlay Flash */}
                            {copied && (
                                <div className="absolute inset-0 bg-emerald-500/90 text-white flex items-center justify-center font-bold animate-fade-in backdrop-blur-md">
                                    <Check size={20} className="mr-2" /> Copied
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>
        </div>
    );
}
