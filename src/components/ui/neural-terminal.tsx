"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Send } from "lucide-react";

interface Command {
    id: string;
    label: string;
    response: string;
}

const COMMANDS: Command[] = [
    {
        id: "services",
        label: "> run services_audit",
        response: "INITIATING AUDIT...\n[DETECTED]: HIGH-ROI OPPORTUNITIES\n- Conversion Optimization\n- Technical Rebranding\n- Authority Platform Architecture",
    },
    {
        id: "stack",
        label: "> check_tech_stack",
        response: "ANALYZING CORE SUBSYSTEMS...\n[LOGIC]: Next.js 15, TypeScript\n[PHYSICS]: Framer Motion, Tailwind CSS\n[INTELLIGENCE]: OpenAI API, Gemini Integration",
    },
    {
        id: "contact",
        label: "> open_comm_channel",
        response: "OPENING SECURE CHANNEL...\nProtocol: ESTABLISHED.\nReady for incoming transmission.\nStatus: AVAILABLE FOR SELECTED PROJECTS.",
    },
];

export function NeuralTerminal() {
    const [history, setHistory] = useState<{ type: "input" | "output"; content: string }[]>([
        { type: "output", content: "NEURAL TERMINAL v1.0.4 [ONLINE]\nSYSTEM READY to process inquiries..." },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = async (cmd: Command) => {
        if (isTyping) return;

        // Add User Command
        setHistory((prev) => [...prev, { type: "input", content: cmd.label }]);
        setIsTyping(true);

        // Simulate Processing Delay
        await new Promise((resolve) => setTimeout(resolve, 600));

        // Typewriter Effect for Response
        const responseLines = cmd.response.split("");
        let currentResponse = "";

        // We'll just push the full response for now to keep it simple, 
        // or we could animate it char by char in a separate effect if needed.
        // For "Engineering" feel, block reveal is also nice. 
        // Let's do a simple delay simulate.

        setHistory((prev) => [...prev, { type: "output", content: cmd.response }]);
        setIsTyping(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto glass-panel rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black/80 backdrop-blur-xl"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-neon-cyan" />
                    <span className="text-xs font-mono text-gray-400">root@omeir-mustafa:~</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>

            {/* Terminal Output */}
            <div
                ref={scrollRef}
                className="h-64 overflow-y-auto p-4 font-mono text-sm space-y-3 scrollbar-hide text-opacity-90"
            >
                {history.map((entry, idx) => (
                    <div key={idx} className={cn("flex flex-col", entry.type === "input" ? "text-neon-cyan" : "text-gray-300")}>
                        <span className="opacity-50 text-[10px] mb-0.5">{entry.type === "input" ? ">> COMMAND" : ">> SYSTEM"}</span>
                        <pre className="whitespace-pre-wrap font-geist-mono">{entry.content}</pre>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex gap-1 items-center text-neon-cyan/50 text-xs animate-pulse">
                        <span>PROCESSING</span>
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce delay-75">.</span>
                        <span className="animate-bounce delay-150">.</span>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-2 bg-white/5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {COMMANDS.map((cmd) => (
                    <button
                        key={cmd.id}
                        onClick={() => handleCommand(cmd)}
                        disabled={isTyping}
                        className="text-xs text-left px-3 py-2 rounded border border-white/5 bg-white/5 hover:bg-white/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono truncate"
                    >
                        {cmd.label}
                    </button>
                ))}
            </div>
        </motion.div>
    );
}
