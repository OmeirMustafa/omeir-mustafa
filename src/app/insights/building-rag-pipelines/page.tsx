import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RagPipelinesArticle() {
    return (
        <article className="min-h-screen bg-[#0b0c10] py-24 px-6 text-slate-300">
            <div className="max-w-3xl mx-auto">
                <Link href="/insights" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 font-mono text-xs uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
                </Link>

                <header className="mb-12 border-b border-cyan-500/20 pb-8">
                    <div className="text-cyan-400 font-mono text-xs mb-4">NOV 28, 2025 • 8 MIN READ</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Building RAG Pipelines: A Guide for Modern Businesses
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Connect your internal data to Large Language Models without leaking secrets or hallucinations.
                    </p>
                </header>

                <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-headings:text-white prose-p:leading-relaxed">
                    <h2 className="text-cyan-300 flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyan-400 block"></span>
                        The RAG Advantage
                    </h2>
                    <p>
                        Retrieval-Augmented Generation (RAG) is the bridge between a "generic" ChatGPT and a system that actually
                        knows your business. It allows you to inject <strong>real-time, proprietary context</strong> into
                        every AI response.
                    </p>

                    <h3>The Stack</h3>
                    <p>To build a production-grade RAG pipeline, you need three core components:</p>
                    <ul>
                        <li><strong>Vector Database:</strong> (Pinecone, Weaviate, or pgvector) to store your "knowledge".</li>
                        <li><strong>Embeddings Model:</strong> (OpenAI text-embedding-3-small) to turn text into math.</li>
                        <li><strong>Orchestrator:</strong> (LangChain or Vercel AI SDK) to glue it all together.</li>
                    </ul>

                    <div className="my-12 border-l-2 border-cyan-500 pl-6 py-2">
                        <h4 className="text-white font-bold m-0 text-lg">Security First</h4>
                        <p className="m-0 text-sm text-slate-400 mt-2">
                            Never send PII (Personally Identifiable Information) to a public LLM. Always scrub data
                            before embedding, and enforce role-based access control (RBAC) at the retrieval layer.
                        </p>
                    </div>

                    <h3>Workflow: From Query to Answer</h3>
                    <ol>
                        <li>User asks: "What was the revenue for Q3?"</li>
                        <li>System converts query to vector coordinates.</li>
                        <li>Database returns the top 3 PDFs matching those coordinates.</li>
                        <li>System sends the User Query + PDF Content to the LLM.</li>
                        <li>LLM answers based <strong>only</strong> on the provided PDFs.</li>
                    </ol>

                    <p>
                        This "grounding" drastically reduces hallucinations because the model isn't making things up;
                        it's summarizing facts you gave it.
                    </p>
                </div>
            </div>
        </article>
    );
}
