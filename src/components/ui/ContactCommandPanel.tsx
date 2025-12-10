"use client";

import React, { useState } from "react";
import { QuantumCard } from "./QuantumCard";
import { Calendar } from "lucide-react";
import { SmartContactModal } from "./SmartContactModal";

export function ContactCommandPanel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <QuantumCard className="p-8 md:p-12 text-center bg-[#0b0c10] border-cyan-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your digital architecture?</h2>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                    Book a 30-minute strategy call to assess your product, roadmap, or RAG opportunity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
                    >
                        <Calendar size={18} />
                        INITIATE MISSION
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-cyan-500/10 text-xs text-cyan-500/40 font-mono">
                    SECURE TRANSMISSION // ENCRYPTED
                </div>
            </QuantumCard>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
