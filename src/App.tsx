import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch } from 'lucide-react';

// --- ANIMATION VARIANTS ---

const continuousFloat = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const cardGlowHover = {
  hover: {
    y: -5,
    scale: 1.01,
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderColor: "rgba(34, 211, 238, 0.4)",
    boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)",
    transition: { duration: 0.3 }
  }
};

const pulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// --- REUSABLE COMPONENTS ---

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * width);
    y.set(yPct * height);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group transition-all duration-500 ${className}`}
    >
      <div style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-16 opacity-30">
    <div className="absolute inset-0 bg-quantum-blue/20"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-cyan to-transparent blur-[1px]"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ width: '100%' }}
    />
  </div>
);

// --- MAIN COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-wider text-white group cursor-pointer"
        >
          <span className="drop-shadow-lg text-2xl font-extrabold tracking-tighter">Omeir Mustafa</span>
          <span className="inline-block w-1 h-1 rounded-full bg-cyan-500 ml-1 animate-pulse">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-cyan-400 transition-colors duration-300">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#06b6d4]"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="relative px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-bold text-cyan-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          SHIPPING SEETHRUO v2.0
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-8"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
            Intelligent
          </span> <br />
          Interfaces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I orchestrate systems. I build full-stack AI products that merge <strong className="text-white">LLMs</strong> with <strong className="text-white">forensic UX</strong>.
        </motion.p>

        <div className="flex justify-center gap-4">
          <a href="#work" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
             Explore Work <ArrowRight size={16} />
          </a>
          <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 text-sm">
            Launch SeeThruo <ExternalLink size={16} className="text-cyan-400" />
          </a>
        </div>
      </div>
      
      <motion.div style={{ y }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50">
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 relative z-10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">The Builder's Protocol</h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">Ruthless prioritization of functionality, security, and user experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Rapid Iteration", desc: "Continuous deployment and empirical learning over theoretical perfection.", color: "text-yellow-400" },
          { icon: ShieldAlert, title: "Security First", desc: "Server-side environment segregation to eliminate key leakage.", color: "text-red-400" },
          { icon: Layout, title: "Forensic UX", desc: "Information architecture and micro-interactions that build trust.", color: "text-cyan-400" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            animate={continuousFloat.animate}
            whileHover={cardGlowHover.hover}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 
  
  useEffect(() => {
    const images = ['/dashboard.png', '/dashboard2.png']; 
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="work" className="py-20 relative z-10"> 
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 opacity-70">
          <div className="h-px flex-grow bg-cyan-500/30"></div>
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">Flagship Project</span>
          <div className="h-px flex-grow bg-cyan-500/30"></div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden neon-border-glow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center relative"> 
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                  <ScanEye className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">SeeThruo</h3>
                <p className="text-sm text-cyan-300/80 mb-6 font-mono uppercase">Decision Intelligence Engine</p> 
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                  A proprietary AI system that decodes corporate comms, media bias, and hidden intent. Built with a forensic "Glass & Light" interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Gemini 2.0', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded border border-white/10 text-xs text-cyan-100 font-mono">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors flex items-center gap-2 text-sm">
                    Live System <ExternalLink size={16} />
                  </a>
                  <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-6 py-2.5 border border-white/10 hover:bg-white/5 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm">
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black/30 p-6 flex items-center justify-center border-l border-white/5 min-h-[300px]">
              <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <motion.img 
                  key={currentImage} 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                  src={currentImage} 
                  alt="SeeThruo Dashboard" 
                  className="w-full h-full object-cover bg-slate-800"
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30 shadow-sm flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Live</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-20 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
         <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Intelligence Stack</h2>
         <p className="text-slate-400 text-sm max-w-xl mx-auto">Optimized for <span className="text-cyan-400">velocity</span>, <span className="text-purple-400">security</span>, and <span className="text-white">scale</span>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { title: "Frontend", icon: Layout, color: "text-cyan-400", skills: ["React 18", "TypeScript", "Tailwind"] },
           { title: "Backend", icon: Brain, color: "text-purple-400", skills: ["Node.js", "Edge Functions", "Gemini Pro"] },
           { title: "DevOps", icon: GitBranch, color: "text-green-400", skills: ["GitOps", "CI/CD", "Security"] }
         ].map((stack, i) => (
           <motion.div 
             key={i}
             animate={continuousFloat.animate}
             whileHover={cardGlowHover.hover}
             className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm"
           >
              <div className="flex items-center gap-3 mb-4">
                 <stack.icon className={`w-5 h-5 ${stack.color}`} />
                 <h3 className="text-base font-bold text-white uppercase tracking-wider">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {stack.skills.map(s => (
                    <span key={s} className="px-3 py-1 rounded bg-white/5 text-slate-400 text-xs border border-white/5">{s}</span>
                 ))}
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden z-10">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">Let's Architect The Future.</h2>
      <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12">
        Open for high-impact freelance engagements. If you need an engineer who thinks in systems, transmit a signal.
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:kaziomeirmustafa@gmail.com" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center gap-2 text-sm">
          <Mail size={18} /> Email Me
        </a>
        <a href="https://www.linkedin.com/in/omeir-mustafa-uddin/" target="_blank" className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg border border-white/10 hover:border-cyan-500 transition-colors flex items-center gap-2 text-sm">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
      <footer className="mt-24 text-slate-600 text-xs uppercase tracking-widest pt-12 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. Systems Active.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <FeaturedProject />
      <AnimatedDivider />
      <Skills />
      <AnimatedDivider />
      <Contact />
    </div>
  );
};

export default App;