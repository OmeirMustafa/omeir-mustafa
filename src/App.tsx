import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch, Terminal, Palette, MessageSquare, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- TYPES ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

// --- ANIMATION COMPONENTS ---

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
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
      <div style={{ transform: "translateZ(10px)" }}>{children}</div>
      <motion.div
        style={{ background: useMotionTemplate`radial-gradient(120px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 80%)` }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-inherit pointer-events-none"
      />
    </motion.div>
  );
};

const AuroraBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-void-900"></div>
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 45, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quantum-blue/20 via-void-900 to-transparent blur-[100px]"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
  </div>
);

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-20 opacity-30">
    <div className="absolute inset-0 bg-quantum-blue/20"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-cyan to-transparent blur-[1px]"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '100%', opacity: [0, 0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ width: '100%' }}
    />
  </div>
);

// --- ASK AI COMPONENT ---

const SYSTEM_PROMPT = `
You are the AI Assistant for Omeir Mustafa's portfolio. 
Your goal is to answer questions about Omeir based ONLY on the context below.
Keep answers concise (under 3 sentences), professional, and slightly futuristic/tech-focused.

CONTEXT:
- Name: Omeir Mustafa
- Role: AI Product Engineer & Full-Stack Developer.
- Core Value: "I bridge the gap between complex engineering and intuitive design."
- Tech Stack: React 18, TypeScript, Tailwind CSS, Framer Motion, Node.js, Vercel Edge, Gemini AI, PostgreSQL.
- Key Project: "SeeThruo" (formerly InsightMesh). It is a Decision Intelligence Engine that decodes corporate comms and media bias using AI.
- Philosophy: "The Builder's Protocol" - Rapid Iteration, Security First, Forensic UX.
- Status: Open for freelance and full-time roles.
- Contact: omeirmustafa.work@gmail.com.
`;

const AskAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm Omeir's AI Agent. Ask me about his skills, projects, or availability." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); };
  useEffect(scrollToBottom, [messages]);

  const handleSend = async (textOverride?: string) => {
    const userMsg = textOverride || input;
    if (!userMsg.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
         setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: "My neural link is currently offline (API Key missing). Please email Omeir directly." }]);
            setIsLoading(false);
         }, 1000);
         return;
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const chat = model.startChat({
        history: [{ role: "user", parts: [{ text: SYSTEM_PROMPT }] }, { role: "model", parts: [{ text: "Ready." }] }],
      });
      const result = await chat.sendMessage(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: result.response.text() }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Connection interrupted. Please email Omeir directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="group relative flex items-center justify-center w-14 h-14 bg-void-900 border border-quantum-cyan/50 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all">
          <div className="absolute inset-0 bg-quantum-cyan/20 rounded-full blur-md group-hover:animate-pulse"></div>
          {isOpen ? <X className="text-white w-6 h-6" /> : <Sparkles className="text-quantum-cyan w-6 h-6" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[350px] h-[500px] bg-void-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden neon-border-glow">
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-bold text-white tracking-wider">PORTFOLIO AI</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-quantum-cyan text-black font-bold' : 'bg-white/10 text-slate-200 border border-white/5'}`}>{msg.text}</div>
                </div>
              ))}
              {isLoading && <div className="text-xs text-slate-500 animate-pulse">Thinking...</div>}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about Omeir..." className="w-full bg-void-900 border border-white/10 rounded-full py-3 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-quantum-cyan/50" />
                <button onClick={() => handleSend()} disabled={isLoading || !input.trim()} className="absolute right-2 p-1.5 rounded-full bg-quantum-cyan text-black hover:scale-105"><Send size={14} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- MAIN SECTIONS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-void-900/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="font-heading font-bold text-xl tracking-wider text-white flex items-center gap-1">
          Omeir <span className="text-quantum-cyan">Mustafa</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Services', 'Work'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-quantum-cyan transition-colors">{item}</a>
          ))}
        </div>
        <a href="#contact" className="px-5 py-2 rounded-lg border border-white/10 text-xs font-bold hover:bg-white/5 hover:text-white transition-all text-slate-300">Contact</a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
    <AuroraBackground />
    <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-quantum-cyan mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-quantum-cyan animate-pulse"></span> AVAILABLE FOR NEW PROJECTS
      </div>
      <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
        Building Digital Experiences <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan to-quantum-purple">That Drive Growth.</span>
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        I bridge the gap between complex engineering and intuitive design—helping forward-thinking brands scale through high-performance web solutions.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#work" className="px-6 py-3 bg-white text-void-900 font-bold rounded-lg hover:bg-quantum-cyan transition-colors text-sm flex items-center gap-2">View Selected Work <ArrowRight size={16} /></a>
        <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-all text-sm">Launch App</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Behind the Code</h2>
        <p className="text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
          I am not just a developer; I am a digital architect focused on business outcomes. My approach combines technical precision with design thinking.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TiltCard className="p-8 rounded-xl bg-void-800/40 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-lg bg-blue-500/10"><Layout className="w-5 h-5 text-blue-400" /></div><h3 className="font-heading text-lg font-bold text-white">Frontend Core</h3></div>
          <div className="flex flex-wrap gap-2">{["React 18+", "TypeScript", "Next.js", "HTML5 / CSS3"].map(s => <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5">{s}</span>)}</div>
        </TiltCard>
        <TiltCard className="p-8 rounded-xl bg-void-800/40 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-lg bg-purple-500/10"><Palette className="w-5 h-5 text-purple-400" /></div><h3 className="font-heading text-lg font-bold text-white">Styling & UI</h3></div>
          <div className="flex flex-wrap gap-2">{["Tailwind CSS", "Framer Motion", "Shadcn/UI", "Figma"].map(s => <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5">{s}</span>)}</div>
        </TiltCard>
        <TiltCard className="p-8 rounded-xl bg-void-800/40 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-lg bg-green-500/10"><Terminal className="w-5 h-5 text-green-400" /></div><h3 className="font-heading text-lg font-bold text-white">Backend & Tools</h3></div>
          <div className="flex flex-wrap gap-2">{["Node.js", "PostgreSQL", "Git / CI/CD", "Vercel"].map(s => <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5">{s}</span>)}</div>
        </TiltCard>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
        <p className="text-sm text-slate-400 uppercase tracking-widest">Strategic Implementation</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: "Strategic Web Development", desc: "Building scalable, SEO-optimized, lightning-fast applications.", color: "text-quantum-cyan" },
          { icon: Layout, title: "UI/UX Engineering", desc: "Translating brand identity into pixel-perfect, accessible interfaces.", color: "text-quantum-purple" },
          { icon: Zap, title: "Performance Optimization", desc: "Auditing and refactoring existing codebases to improve Core Web Vitals.", color: "text-yellow-400" },
        ].map((item, i) => (
          <TiltCard key={i} className="p-8 rounded-2xl bg-void-800/30 border border-white/5 hover:border-quantum-cyan/30 transition-colors">
            <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
            <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 
  useEffect(() => {
    const interval = setInterval(() => setCurrentImage(p => p === '/dashboard.png' ? '/dashboard2.png' : '/dashboard.png'), 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="work" className="py-20 relative z-10"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 opacity-50">
          <div className="h-px flex-grow bg-white/10"></div>
          <span className="font-mono text-quantum-cyan text-[10px] tracking-widest uppercase">Flagship Project</span>
          <div className="h-px flex-grow bg-white/10"></div>
        </div>
        <TiltCard className="rounded-2xl border border-white/10 bg-void-800/40 backdrop-blur-xl overflow-hidden neon-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-8 md:p-12 flex flex-col justify-center"> 
              <div className="flex items-center gap-3 mb-6">
                 <ScanEye className="w-8 h-8 text-quantum-cyan" />
                 <h3 className="font-heading text-3xl font-bold text-white tracking-tight">SeeThruo</h3>
              </div>
              <p className="text-xs text-quantum-cyan/80 mb-6 font-mono uppercase">Decision Intelligence Engine</p> 
              <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                A next-generation AI system engineered to interpret corporate narratives, surface media bias, and uncover the strategic intent beneath every message.
              </p>
              <div className="flex gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-5 py-2 bg-quantum-cyan text-void-900 font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2 text-xs">Live System <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="bg-black/20 p-6 flex items-center justify-center border-l border-white/5 min-h-[300px]">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <motion.img key={currentImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} src={currentImage} alt="SeeThruo Dashboard" className="w-full h-full object-cover bg-void-900" />
              </motion.div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden z-10">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="font-heading text-4xl font-bold text-white mb-6">Ready to elevate your digital presence?</h2>
      <p className="text-sm text-slate-400 max-w-lg mx-auto mb-12">
        I am currently accepting new projects. Tell me about your goals, and let's determine if we are a good fit.
      </p>
      <div className="flex justify-center">
        <a href="mailto:omeirmustafa.work@gmail.com" className="px-8 py-4 bg-white text-void-900 font-bold rounded-full hover:bg-quantum-cyan hover:scale-105 transition-all flex items-center gap-2 text-sm shadow-xl shadow-white/10">
          <MessageSquare size={18} /> Start a Conversation
        </a>
      </div>
      <footer className="mt-32 text-slate-600 text-[10px] uppercase tracking-widest font-mono pt-8 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. Systems Active. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-void-900 min-h-screen text-slate-200 font-sans selection:bg-quantum-cyan/30 selection:text-white overflow-x-hidden relative perspective-1000">
      <Navbar />
      <Hero />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <Services />
      <AnimatedDivider />
      <FeaturedProject />
      <AnimatedDivider />
      <Contact />
      <AskAI />
    </div>
  );
};

export default App; 