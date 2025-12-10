"use client";

import React from "react";
import { ContactCommandPanel } from "@/components/ui/ContactCommandPanel";

export function FinalCTASection() {
    return (
        <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <ContactCommandPanel />
            </div>
        </section>
    );
}
