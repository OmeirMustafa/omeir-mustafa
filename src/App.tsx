import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Code2 } from 'lucide-react';

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

const cardHover = {
  hover: {
    y: -5,
    scale: 1.01,
    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
    borderColor: "rgba(6, 182, 212, 0.5)", // Subtle cyan border on hover
    transition: { duration: 0.3 }
  }
};

const pulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// --- REUSABLE COMPONENTS ---

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-24 opacity-20">
    <div className="absolute inset-0 bg-pebble-900"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ width: '200%', opacity: 0.5 }}
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-pebble-100/80 backdrop-blur-xl border-b border-pebble-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-wider text-pebble-900 group cursor-pointer flex items-baseline gap-1"
        >
          <span className="text-2xl font-extrabold tracking-tighter">Omeir Mustafa</span>
          <span className="block w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-pebble-800">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-accent-cyan transition-colors duration-300">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="relative px-6 py-2.5 rounded-full bg-pebble-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-accent-cyan hover:text-white transition-all duration-300 shadow-lg shadow-pebble-900/20 hover:shadow-accent-cyan/40">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pebble-100/50 to-pebble-100"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pebble-200 text-xs font-bold text-pebble-900 mb-8 shadow-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          SHIPPING SEETHRUO v2.0
        </motion.div>

        {/* HEADLINE */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-pebble-900 leading-[1.05] mb-10"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pebble-900 via-accent-blue to-accent-cyan">
            Intelligent
          </span> <br />
          Interfaces.
        </motion.h1>

        {/* Subhead */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-pebble-800/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          I orchestrate systems. I build full-stack AI products 
          that merge <strong className="text-pebble-900 border-b-2 border-accent-cyan/30">LLMs</strong> with <strong className="text-pebble-900 border-b-2 border-accent-cyan/30">forensic UX</strong>. 
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            href="#work" 
            className="px-8 py-4 bg-pebble-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-pebble-900/20"
          >
            Explore Work <ArrowRight size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: "#fff", borderColor: "#06b6d4" }}
            href="https://seethruo-engine.vercel.app/" 
            target="_blank" 
            className="px-8 py-4 bg-white text-pebble-900 font-bold rounded-xl border border-pebble-200 flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            Launch SeeThruo <ExternalLink size={20} className="text-accent-cyan" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-pebble-900 mb-6 tracking-tight">
          The Builder's Protocol
        </h2>
        <p className="text-lg text-pebble-800/70 max-w-3xl mx-auto leading-relaxed">
          Code is useless if it doesn't ship. My process is ruthless prioritization of functionality, security, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Rapid Iteration", desc: "The fastest path to a market-fit product is through continuous deployment and empirical learning, not theoretical perfection.", color: "text-yellow-600" },
          { icon: ShieldAlert, title: "Security First", desc: "Security is architectural. I implement server-side environment segregation to eliminate key leakage.", color: "text-red-600" },
          { icon: Layout, title: "Forensic UX", desc: "Interface design must build trust. I focus on information architecture and micro-interactions.", color: "text-accent-cyan" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            animate={continuousFloat.animate}
            whileHover={cardHover.hover}
            className="p-8 rounded-3xl bg-white border border-pebble-200 shadow-sm"
          >
            <div className={`w-14 h-14 rounded-2xl bg-pebble-100 border border-pebble-200 flex items-center justify-center mb-6`}>
              <item.icon className={`w-7 h-7 ${item.color}`} />
            </div>
            <h3 className="text-xl font-bold text-pebble-900 mb-4">{item.title}</h3>
            <p className="text-pebble-800/70 leading-relaxed text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 

  const continuousFloatAndRotate = {
    animate: { y: [0, -10, 0], rotateY: [0, 1, -1, 0] }, 
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  };

  useEffect(() => {
    const images = ['/dashboard.png', '/dashboard2.png']; 
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 6000); // FIX: 6 Seconds per image for slower transition
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="work" className="py-20 relative"> 
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER LINE (Dark Scanner) */}
        <div className="flex items-center gap-4 mb-8 opacity-80">
          <div className="h-px flex-grow relative overflow-hidden bg-pebble-300">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-pebble-900 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ width: '200%', opacity: 0.3 }} 
            />
          </div>

          <motion.span 
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            className="text-xs font-mono text-pebble-900 tracking-[0.3em] uppercase font-bold"
          >
            Flagship Project
          </motion.span>
          
          <div className="h-px flex-grow relative overflow-hidden bg-pebble-300">
             <motion.div 
              className="absolute inset-0 bg-gradient-to-l from-transparent via-pebble-900 to-transparent" 
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ width: '200%', opacity: 0.3 }}
            />
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.005 }}
          // FIX: "day-glow" class applies the soft colored shadow
          className="rounded-[2.5rem] overflow-hidden border border-pebble-200 bg-white shadow-2xl shadow-pebble-900/5 day-glow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* TEXT CONTENT */}
            <div className="p-8 md:p-14 flex flex-col justify-center relative"> 
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-pebble-100 border border-pebble-200 flex items-center justify-center mb-6 shadow-sm">
                  <ScanEye className="w-8 h-8 text-pebble-900" />
                </div>
                <h3 className="text-4xl font-bold text-pebble-900 mb-3 tracking-tight">SeeThruo</h3>
                <p className="text-lg text-pebble-500 mb-6 font-mono">Decision Intelligence Engine</p> 
                <p className="text-pebble-800/80 mb-8 leading-relaxed text-md">
                  A proprietary AI system that decodes corporate comms, media bias, and hidden intent. 
                  Built with a forensic "Glass & Glow" interface for rapid information processing.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Gemini 2.0 Flash', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-pebble-100 border border-pebble-200 text-xs text-pebble-900 font-mono font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 bg-pebble-900 hover:bg-black text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-pebble-900/20">
                    Live System <ExternalLink size={16} />
                  </a>
                  <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-6 py-3 border border-pebble-200 hover:bg-pebble-100 text-pebble-900 font-medium rounded-xl transition-colors flex items-center gap-2">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* VISUAL MOCKUP */}
            <div className="bg-pebble-100/50 p-6 flex items-center justify-center relative overflow-hidden min-h-[350px] border-l border-pebble-200">
              <motion.div 
                animate={continuousFloatAndRotate.animate}
                transition={continuousFloatAndRotate.transition}
                className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-pebble-200 bg-white group cursor-pointer"
              >
                <motion.img 
                  key={currentImage} 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }} // SLOW FADE
                  src={currentImage} 
                  alt="SeeThruo Dashboard" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                     const parent = e.currentTarget.parentElement;
                     if(parent) {
                       e.currentTarget.style.display = 'none';
                       parent.classList.add('bg-pebble-200');
                       parent.innerHTML = '<div class="h-80 flex items-center justify-center text-pebble-500 font-mono">System Preview</div>';
                     }
                  }}
                />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-pebble-200 shadow-sm">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-pebble-900 uppercase tracking-wider">Live</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-32 relative">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
         <h2 className="text-4xl md:text-5xl font-bold text-pebble-900 mb-6 tracking-tight">
           Production Stack
         </h2>
         <p className="text-pebble-800/60 max-w-2xl mx-auto text-lg">
           I don't chase trends. I use the stack that delivers <span className="text-accent-cyan font-bold">speed</span>, <span className="text-accent-blue font-bold">security</span>, and <span className="text-pebble-900 font-bold">scale</span>.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { title: "Frontend", icon: Layout, color: "text-accent-cyan", border: "hover:border-accent-cyan/50", skills: ["React 18", "TypeScript", "Tailwind", "Framer Motion"] },
           { title: "Backend & AI", icon: Cpu, color: "text-accent-blue", border: "hover:border-accent-blue/50", skills: ["Node.js", "Vercel Edge", "Gemini 2.0", "PostgreSQL"] },
           { title: "DevOps", icon: Globe, color: "text-green-600", border: "hover:border-green-500/50", skills: ["Git/GitHub", "CI/CD", "Security", "Analytics"] }
         ].map((stack, i) => (
           <motion.div 
             key={i}
             animate={continuousFloat.animate}
             whileHover={cardHover.hover}
             className={`p-8 rounded-3xl bg-white border border-pebble-200 transition-colors ${stack.border} group shadow-sm`}
           >
              <div className="flex items-center gap-3 mb-6">
                 <stack.icon className={`w-6 h-6 ${stack.color}`} />
                 <h3 className="text-sm font-mono text-pebble-900 uppercase tracking-widest">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {stack.skills.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-md bg-pebble-100 border border-pebble-200 text-pebble-800 text-xs font-medium">{s}</span>
                 ))}
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-pebble-900 mb-8 tracking-tighter">
        Let's Build.
      </h2>
      
      <p className="text-xl text-pebble-800/70 max-w-2xl mx-auto mb-12 leading-relaxed">
        I’m open to freelance and full-time opportunities. If you need an engineer who understands product strategy as well as code, let’s talk.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kaziomeirmustafa@gmail.com&su=Portfolio%20Inquiry" 
          target="_blank" 
          className="px-10 py-5 bg-pebble-900 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-pebble-900/20"
        >
          <Mail size={20} /> Email Me
        </motion.a>
        
        <motion.a 
          whileHover={{ scale: 1.05, backgroundColor: "#fff", borderColor: "#06b6d4" }}
          href="https://www.linkedin.com/in/omeir-mustafa-uddin/" 
          target="_blank" 
          className="px-10 py-5 bg-white text-pebble-900 font-bold rounded-2xl border border-pebble-200 flex items-center justify-center gap-3 shadow-sm"
        >
          <Linkedin size={20} /> LinkedIn
        </motion.a>
      </div>
      
      <footer className="py-12 text-center text-pebble-400 text-xs uppercase tracking-widest mt-20 border-t border-pebble-200">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-pebble-100 min-h-screen text-pebble-900 font-sans overflow-x-hidden selection:bg-pebble-900 selection:text-white">
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