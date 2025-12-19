import React from "react";
import { CheckCircle2 } from "lucide-react";

const STATS = [
    "3+ Years Engineering Foundation",
    "JS / TS / Python Capable",
    "Business-First Focus"
];

export function AboutSection() {
    return (
        <section id="about" className="section-spacing bg-[#0F172A] border-t border-slate-800">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Copy Side */}
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            Engineer's Story
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
                            Why I trade theory <br />
                            for <span className="text-blue-500">velocity</span>.
                        </h2>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Traditional education optimizes for theory. <span className="text-white font-medium">The market optimizes for shipping.</span>
                            </p>
                            <p>
                                I made the strategic decision to leave the lecture hall and build my engineering foundation in the real world. This wasn't a shortcut—it was an acceleration.
                            </p>
                            <p>
                                Today, I combine that engineering rigor with the founder mentality needed to ship products that actually survive the market.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="mt-10 pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-slate-300 leading-tight">
                                        {stat}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden group">
                        {/* Abstract Grid Visual */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
                                backgroundSize: "32px 32px"
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <span className="block text-6xl font-bold text-slate-700 mb-2 group-hover:text-blue-500 transition-colors duration-500">
                                    &lt;/&gt;
                                </span>
                                <span className="text-slate-500 text-sm font-mono uppercase tracking-widest">
                                    System Architecture
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
