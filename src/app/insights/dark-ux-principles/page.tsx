import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DarkUXArticle() {
    return (
        <article className="min-h-screen bg-[#0b0c10] py-24 px-6 text-slate-300">
            <div className="max-w-3xl mx-auto">
                <Link href="/insights" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 font-mono text-xs uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
                </Link>

                <header className="mb-12 border-b border-cyan-500/20 pb-8">
                    <div className="text-cyan-400 font-mono text-xs mb-4">NOV 15, 2025 • 6 MIN READ</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Dark UX Principles: Engineering Trust & Perception
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Why professional tools are going dark, and the neuroscience of high-contrast interfaces.
                    </p>
                </header>

                <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-headings:text-white prose-p:leading-relaxed">
                    <h2 className="text-cyan-300 flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyan-400 block"></span>
                        The "Moth Effect"
                    </h2>
                    <p>
                        Human attention is naturally drawn to light sources in darkness. By using a dark canvas (like <code>#0b0c10</code>),
                        we can control exactly where the user looks by applying light (color, brightness, glow)
                        only to interactive elements.
                    </p>

                    <h3>Trust Signals</h3>
                    <p>
                        Dark interfaces have become synonymous with "developer tools", "finance terminals", and "security consoles".
                        When a B2B SaaS adopts a high-quality dark mode, it subconsciously signals:
                    </p>
                    <ul>
                        <li><strong>Power:</strong> This tool is for professionals.</li>
                        <li><strong>Permanence:</strong> This isn't a disposable consumer app.</li>
                        <li><strong>Focus:</strong> We care about long-session eye strain.</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        <div className="bg-white p-4 text-black rounded">
                            <strong>Light Mode</strong>
                            <div className="text-sm mt-2 opacity-70">High strain, feels like a document. Good for reading long text.</div>
                        </div>
                        <div className="bg-black border border-cyan-500/50 p-4 text-white rounded">
                            <strong>Dark Mode</strong>
                            <div className="text-sm mt-2 text-cyan-200">Low strain, feels like a cockpit. Good for monitoring and control.</div>
                        </div>
                    </div>

                    <h3>Motion Hierarchy</h3>
                    <p>
                        In a HUD interface, motion shouldn't be "bouncy". It should be mechanical, instant, and precise.
                        Use <code>ease-out</code> curves and quick durations (200ms) to make the system feel responsive
                        and "snappy", rather than "playful".
                    </p>
                </div>
            </div>
        </article>
    );
}
