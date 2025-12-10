"use client";

import React from "react";
import { QuantumCard } from "./QuantumCard";
import { Mail, Calendar } from "lucide-react";

export function ContactCommandPanel() {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <QuantumCard className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your digital architecture?</h2>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                    Book a 30-minute strategy call to assess your product, roadmap, or RAG opportunity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] transition-all flex items-center justify-center gap-2">
                        <Calendar size={18} />
                        INITIATE MISSION
                    </button>

                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2">
                        <Mail size={18} />
                        EMAIL HQ
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-xs text-white/30 font-mono">
                    SECURE TRANSMISSION // ENCRYPTED
                </div>
            </QuantumCard>
        </div>
    );
}
