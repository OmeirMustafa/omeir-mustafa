// components/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-b from-[#0A0F1C] to-[#0D1117]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-200 leading-snug">
          Synthesizing human intent with machine velocity.
        </h1>

        <p className="text-base md:text-lg text-gray-400 mt-4 leading-relaxed">
          I build full-stack intelligence systems that integrate LLMs with
          clean, forensic-grade interfaces.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#work"
            className="px-5 py-2.5 text-sm border border-gray-500 rounded-lg hover:bg-gray-800 transition"
          >
            Explore Work →
          </a>

          <a
            href="https://seethruo-engine.vercel.app/"
            target="_blank"
            className="px-5 py-2.5 text-sm border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition"
          >
            Launch SeeThruo ↗
          </a>
        </div>
      </div>
    </section>
  );
}
