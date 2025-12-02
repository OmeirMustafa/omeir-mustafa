import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Cpu, Layers, Zap } from 'lucide-react';

// --- COMPONENTS ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-gray-900">
          Omeir<span className="text-blue-600">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {['About', 'Work', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
          Let's Connect
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
            Building fast, modern, <br/>
            <span className="text-blue-600">reliable web experiences.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            I turn ideas into clean, functional digital products — prototypes, websites, and apps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-semibold rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>
      
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p className="mb-6">
          I’m a self-taught developer who builds clean, modern digital experiences.
        </p>
        <p className="mb-6">
          I specialize in fast web apps, intuitive interfaces, and simple systems that help businesses grow.
          I use AI tools like Gemini for rapid prototyping, then refine everything manually in VS Code to produce stable, scalable, customized solutions.
        </p>
        <p>
          My goal is to work with clients worldwide — creating websites, tools, and apps that are fast, functional, and easy to use.
        </p>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "SeeThruo",
      category: "Web App",
      desc: "A minimal, distraction-filtering writing environment that helps users think clearly and produce better ideas.",
      stack: ["Next.js", "React", "Tailwind", "Vercel Edge"],
      link: "https://seethruo-engine.vercel.app/",
      icon: Zap
    },
    {
      title: "Personal Portfolio",
      category: "Website",
      desc: "My personal portfolio showcasing my skills, process, and approach to fast digital builds.",
      stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      link: "#",
      icon: Layers
    }
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <p.icon size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 border border-gray-100 px-3 py-1 rounded-full">{p.category}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.stack.map(s => (
                  <span key={s} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                    {s}
                  </span>
                ))}
              </div>
              
              <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                View Live Project <ExternalLink size={16} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="skills" className="py-24 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"], icon: Code },
          { title: "Backend & Tools", skills: ["Node.js", "APIs", "Git", "VS Code", "Gemini"], icon: Cpu },
          { title: "Strengths", skills: ["Clean UI", "Speed-Focused Builds", "Rapid Prototyping"], icon: Zap },
        ].map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <cat.icon className="text-blue-600" size={20} />
              <h3 className="font-bold text-gray-900">{cat.title}</h3>
            </div>
            <ul className="space-y-2">
              {cat.skills.map(s => (
                <li key={s} className="text-gray-600 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-white text-center">
    <div className="max-w-2xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Have a project in mind?</h2>
      <p className="text-xl text-gray-600 mb-10">
        I’d love to help you build it. Let's create something reliable and fast.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="mailto:kaziomeirmustafa@gmail.com" 
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <Mail size={20} /> Send Me a Message
        </a>
        <a 
          href="https://www.linkedin.com/in/omeir-mustafa-uddin/" 
          target="_blank" 
          className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-bold rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-gray-100 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;