"use client";

import React from "react";
import { CaseTeaserHUD } from "@/components/ui/CaseTeaserHUD";
import { ProcessTimelineHUD } from "@/components/ui/ProcessTimelineHUD";

export function WorkflowSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-24 px-6 bg-[#0b0b0d] relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="max-w-7xl mx-auto w-full z-10 space-y-24">

                {/* Workflow Part */}
                <div className="text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        The Architect Workflow
                    </h2>
                    <ProcessTimelineHUD />
                </div>

                {/* Case Teaser Part */}
                <div>
                    <div className="mb-12 text-center md:text-left">
                        <div className="text-[var(--accent-green)] font-mono text-xs uppercase tracking-widest mb-2">Proof of Work</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Deployment</h2>
                    </div>
                    <CaseTeaserHUD />
                </div>
            </div>
        </section>
    );
}
