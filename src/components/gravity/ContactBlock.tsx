"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, AppWindow } from "lucide-react";

interface ContactBlockProps {
    className?: string;
    style?: React.CSSProperties;
    onMouseDown?: () => void;
}

export function ContactBlock({ className, style, onMouseDown }: ContactBlockProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText("omeirmustafa.work@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`contact-block group relative flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-xl border-2 rounded-2xl cursor-grab active:cursor-grabbing transition-all duration-300 ${className}`}
            style={style}
            onMouseDown={onMouseDown}
            onClick={handleClick}
        >
            {/* Hover Glow handled via Tailwind group-hover on parent usually, but here we do local */}
            <div className="absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] group-hover:border-orange-500 border-white/10" />

            <div className="relative z-10 text-center pointer-events-none">
                <div className="text-white font-bold text-xl mb-1">Contact Now</div>
                <div className="text-slate-400 text-xs">omeirmustafa.work@gmail.com</div>
            </div>

            {/* Smart Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#0F172A] border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-[100] animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=omeirmustafa.work@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-300 hover:text-white border-b border-slate-800"
                    >
                        <Mail size={16} className="text-red-500" /> Gmail Web
                    </a>
                    <a
                        href="mailto:omeirmustafa.work@gmail.com"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-300 hover:text-white border-b border-slate-800"
                    >
                        <AppWindow size={16} className="text-blue-500" /> Default App
                    </a>
                    <button
                        onClick={handleCopy}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-300 hover:text-white text-left"
                    >
                        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-orange-500" />}
                        {copied ? "Copied!" : "Copy Email"}
                    </button>
                </div>
            )}
        </div>
    );
}
