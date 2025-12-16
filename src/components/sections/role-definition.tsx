"use client";

import React from "react";

export function RoleDefinition() {
    return (
        <section id="approach" className="py-24 px-6 bg-[#030504]">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-500/60 block mb-6">
                        IDENTITY
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                        Not a Consultant. <br />
                        A Builder-Executive.
                    </h2>
                    <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                        Consultants give you slides. Agencies give you billable hours.
                    </p>
                    <p className="text-lg text-slate-400 font-light leading-relaxed">
                        I give you <strong className="text-emerald-400 font-medium">deployed, production-grade architecture</strong>. I write code, I manage cloud infrastructure, and I align technical decisions with your exit strategy.
                    </p>
                </div>

                <div className="border-l border-white/10 pl-8 md:pl-12 space-y-8">
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">01</div>
                        <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2">Technical Authority</h4>
                        <p className="text-sm text-slate-500">I don&apos;t outsource understanding. I read the documentation, audit the code, and verify the security claims myself.</p>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">02</div>
                        <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2">Business Fluency</h4>
                        <p className="text-sm text-slate-500">I speak CAPEX/OPEX, burn rate, and valuation impact. Technology is just the lever for business leverage.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
