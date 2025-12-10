"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <section className="py-24 px-6 relative bg-[#0a0a0a] overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] mix-blend-screen opacity-20" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Let’s Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Future-State Product
                        </span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Book a strategy call to discuss your roadmap, architecture, or digital transformation goals.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0c0c0c] border border-white/5 p-8 md:p-12 rounded-2xl text-left shadow-2xl glass-panel"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Name</label>
                                <Input type="text" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                                <Input type="email" placeholder="john@company.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Company</label>
                            <Input type="text" placeholder="Acme Corp" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Project Goals</label>
                            <Textarea placeholder="Briefly describe your objectives..." />
                        </div>

                        <Button variant="neon" size="lg" className="w-full font-bold mt-4" type="submit">
                            <Send size={18} className="mr-2" /> INITIATE PROTOCOL
                        </Button>

                        <p className="text-center text-xs text-white/30 pt-4">
                            Direct secure channel to: <a href="mailto:kaziomeirmustafa@gmail.com" className="text-white/50 hover:text-white transition-colors">kaziomeirmustafa@gmail.com</a>
                        </p>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
