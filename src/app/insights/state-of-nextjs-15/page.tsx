import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NextJs15Article() {
    return (
        <article className="min-h-screen bg-[#0b0c10] py-24 px-6 text-slate-300">
            <div className="max-w-3xl mx-auto">
                <Link href="/insights" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 font-mono text-xs uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
                </Link>

                <header className="mb-12 border-b border-cyan-500/20 pb-8">
                    <div className="text-cyan-400 font-mono text-xs mb-4">DEC 10, 2025 • 5 MIN READ</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        The State of Next.js 15: What Founders Need To Know
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Why the latest improvements in partial prerendering and edge runtimes matter for your bottom line.
                    </p>
                </header>

                <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-headings:text-white prose-p:leading-relaxed prose-pre:bg-[#050505] prose-pre:border prose-pre:border-white/10">
                    <h2 className="text-cyan-300 flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyan-400 block"></span>
                        Benchmarks & Reality
                    </h2>
                    <p>
                        Next.js 15 isn't just a version bump; it's a fundamental shift in how we architect B2B dashboards.
                        The introduction of stable <strong>Partial Prerendering (PPR)</strong> means we no longer choose between
                        static speed and dynamic data—we get both in the same byte stream.
                    </p>

                    <div className="my-8 p-6 bg-black/40 border border-cyan-500/20 rounded-lg">
                        <div className="font-mono text-xs text-cyan-500 mb-2 uppercase">Core Improvements</div>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>TurboPack is now default (94% faster startups)</li>
                            <li>Server Actions reduce API boilerplate by 40%</li>
                            <li>OpenTelemetry instrumentation is native</li>
                        </ul>
                    </div>

                    <h3>Why Server Actions Matter for ROI</h3>
                    <p>
                        For founders, this means faster shipping velocity. We used to write separate API routes, validation logic,
                        and client-fetchers. Now, a function exported from the server can be called directly from a button.
                        Less code = Fewer Bugs = Faster MVP.
                    </p>

                    <pre className="not-prose bg-[#111] p-4 rounded border border-white/10 text-xs overflow-x-auto text-slate-300">
                        {`// Server Action Example
export async function createLead(formData: FormData) {
  'use server'
  const db = await connectToVectorDB();
  await db.leads.create({ email: formData.get('email') });
}`}
                    </pre>

                    <h3>Architectural Implications</h3>
                    <p>
                        The "Edge" is no longer a buzzword; it's practically required for low-latency AI responses.
                        Running streaming LLM responses from Vercel Edge Functions prevents the "cold start" latency
                        typical of traditional serverless and keeps your application feeling instant.
                    </p>
                </div>
            </div>
        </article>
    );
}
