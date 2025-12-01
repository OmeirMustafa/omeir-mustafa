import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, Terminal, ShieldAlert, Layout, ChevronDown, Zap, Activity, Brain, Info, FileText, ScanEye, Cpu, Globe, Layers } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter text-white">
          Omeir<span className="text-cyan-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[128px] opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Shipping SeeThruo v2.0
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
        >
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Intelligent</span> <br />
          Interfaces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          I don't just write code; I orchestrate systems. I build full-stack AI products 
          that merge <strong className="text-slate-200 font-medium">LLMs</strong> with <strong className="text-slate-200 font-medium">pixel-perfect UX</strong>. 
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#work" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Explore Work <ArrowRight size={18} />
          </a>
          <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105">
            Launch SeeThruo <ExternalLink size={18} className="text-cyan-400" />
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">The Builder's Protocol</h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Code is useless if it doesn't ship. My process is ruthless prioritization of functionality, security, and user experience.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { icon: Zap, title: "Ship to Learn", desc: "Don't theorize. Build the prototype, deploy to Vercel, break it, fix it, and ship it again." },
          { icon: ShieldAlert, title: "Security First", desc: "Handling API keys and env variables isn't an afterthought. Secure by default." },
          { icon: Layout, title: "Obsessive UX", desc: "A powerful backend needs a clean frontend. I obsess over spacing and micro-interactions." },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeInUp} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const FeaturedProject = () => (
  <section id="work" className="py-32 relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent flex-grow"></div>
        <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">Flagship Project</span>
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent flex-grow"></div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-panel rounded-3xl overflow-hidden border border-white/10 group hover:border-cyan-500/30 transition-all duration-500 shadow-2xl shadow-black/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* TEXT CONTENT */}
          <div className="p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-8">
                <Sparkles className="text-cyan-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">SeeThruo</h3>
              <p className="text-xl text-cyan-200/80 mb-6">Decision Intelligence Engine</p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A proprietary AI system that decodes corporate comms, media bias, and hidden intent. 
                Built with a forensic "Glass & Glow" interface for rapid information processing.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {['Gemini 2.0 Flash', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-cyan-900/20">
                  Live System <ExternalLink size={16} />
                </a>
                <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </div>

          {/* VISUAL MOCKUP */}
          <div className="bg-slate-900/50 p-8 flex items-center justify-center relative overflow-hidden min-h-[400px] border-t lg:border-t-0 lg:border-l border-white/5">
            
            {/* The Image Container with Tilt Effect */}
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 border border-white/10">
              {/* NOTE: Put a file named dashboard.png in your public folder for this to work. */}
              <img 
                src="/dashboard.png" 
                alt="SeeThruo Dashboard" 
                className="w-full h-full object-cover bg-slate-800"
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    e.currentTarget.style.display = 'none';
                    parent.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
                    parent.innerHTML = '<div class="h-64 flex items-center justify-center text-slate-500 font-mono text-sm">Dashboard Preview</div>';
                  }
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute -right-4 top-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl transform translate-x-4 group-hover:translate-x-0 transition-transform duration-700 delay-100">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-green-400">System Online</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  return (
    <section id="stack" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Production Stack</h2>
           <p className="text-slate-400 max-w-2xl mx-auto">
             I don't chase trends. I use the stack that delivers <span className="text-white font-medium border-b border-cyan-500/50">speed</span>, <span className="text-white font-medium border-b border-cyan-500/50">security</span>, and <span className="text-white font-medium border-b border-cyan-500/50">scalability</span>.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-mono text-cyan-400 mb-4 uppercase tracking-widest flex items-center gap-2"><Layout className="w-4 h-4"/> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                 {["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map(t => (
                    <span key={t} className="px-3 py-1 rounded bg-black/20 text-slate-300 text-xs border border-white/5">{t}</span>
                 ))}
              </div>
           </div>
           
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-mono text-purple-400 mb-4 uppercase tracking-widest flex items-center gap-2"><Cpu className="w-4 h-4"/> Backend & AI</h3>
              <div className="flex flex-wrap gap-2">
                 {["Node.js", "Vercel Edge", "Gemini 2.0 Flash", "REST APIs", "PostgreSQL"].map(t => (
                    <span key={t} className="px-3 py-1 rounded bg-black/20 text-slate-300 text-xs border border-white/5">{t}</span>
                 ))}
              </div>
           </div>

           <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-mono text-green-400 mb-4 uppercase tracking-widest flex items-center gap-2"><Globe className="w-4 h-4"/> Deploy & CI</h3>
              <div className="flex flex-wrap gap-2">
                 {["Vercel", "Git/GitHub", "Github Actions", "Security Headers", "Analytics"].map(t => (
                    <span key={t} className="px-3 py-1 rounded bg-black/20 text-slate-300 text-xs border border-white/5">{t}</span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's Build Something Smart.</h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        I am currently open to freelance projects and full-time opportunities in AI Engineering. 
        If you need an engineer who understands both code and product, let's connect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kaziomeirmustafa@gmail.com&su=Portfolio%20Inquiry%20from%20Website" 
          target="_blank" 
          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-white/10"
        >
          <Mail size={20} /> Email Me
        </a>
        
        <a 
          href="https://www.linkedin.com/in/omeir-mustafa-uddin/" 
          target="_blank" 
          className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 mt-20">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;