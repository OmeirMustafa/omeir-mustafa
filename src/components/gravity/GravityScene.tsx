"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { useMatter } from "@/hooks/useMatter";
import { ContactBlock } from "@/components/gravity/ContactBlock";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

// Types
type BlockData = {
    id: string;
    type: 'hero' | 'nav' | 'project' | 'contact' | 'strategy';
    x: number;
    y: number;
    w: number;
    h: number;
    text?: string;
    sub?: string;
    color?: string;
    onClick?: () => void;
};

export function GravityScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scene, engineRef } = useMatter(containerRef);
    const [blocks, setBlocks] = useState<BlockData[]>([]);
    const bodyMap = useRef<Map<string, Matter.Body>>(new Map());
    const [luminaOpen, setLuminaOpen] = useState(false);

    // Initial Spawns
    useEffect(() => {
        if (!scene || blocks.length > 0) return;

        const width = window.innerWidth;
        const isMobile = width < 768;
        const centerX = width / 2;

        // Responsive Sizing
        const heroW = Math.min(width - 40, 800);
        const projW = isMobile ? width - 40 : 350;
        const contactW = isMobile ? width - 60 : 300;

        // Define Blocks
        const newBlocks: BlockData[] = [
            // Nav Pills (Bouncy)
            { id: 'nav-projects', type: 'nav', x: centerX - (isMobile ? 80 : 120), y: -200, w: isMobile ? 80 : 100, h: 50, text: 'Projects' },
            { id: 'nav-approach', type: 'nav', x: centerX, y: -280, w: 110, h: 50, text: 'Approach' },
            { id: 'nav-qa', type: 'nav', x: centerX + (isMobile ? 80 : 120), y: -200, w: 80, h: 50, text: 'Q&A' },

            // Hero (Massive)
            { id: 'hero', type: 'hero', x: centerX, y: -600, w: heroW, h: 300, text: 'Gravity Hero' },

            // Projects
            { id: 'proj-lumina', type: 'project', x: isMobile ? centerX : centerX - 200, y: -1000, w: projW, h: 250, text: 'Lumina Law', sub: 'Legal Authority', onClick: () => setLuminaOpen(true) },
            { id: 'proj-kuro', type: 'project', x: isMobile ? centerX : centerX + 200, y: -1300, w: projW, h: 250, text: 'Kuro Coffee', sub: 'E-Commerce' },
            { id: 'proj-apex', type: 'project', x: centerX, y: -1600, w: projW, h: 250, text: 'Apex SaaS', sub: 'Enterprise' },

            // Strategy
            { id: 'strategy', type: 'strategy', x: centerX, y: -1900, w: Math.min(width - 40, 900), h: 100, text: 'Strategy Block' },

            // Contact
            { id: 'contact', type: 'contact', x: centerX, y: -2100, w: contactW, h: 150 },
        ];

        // Create Physics Bodies
        newBlocks.forEach(block => {
            const options: Matter.IChamferableBodyDefinition = {
                restitution: block.type === 'nav' ? 0.9 : 0.4, // Bounciness
                friction: 0.5,
                chamfer: { radius: block.type === 'nav' ? 25 : 10 },
                label: block.id,
                render: { visible: false } // We use DOM
            };

            const body = Matter.Bodies.rectangle(block.x, block.y, block.w, block.h, options);
            Matter.Composite.add(scene, body);
            bodyMap.current.set(block.id, body);
        });

        setBlocks(newBlocks);

        // Render Loop for Syncing DOM
        let frameId: number;
        const updateLoop = () => {
            newBlocks.forEach(block => {
                const body = bodyMap.current.get(block.id);
                const el = document.getElementById(`block-${block.id}`);
                if (body && el) {
                    const { x, y } = body.position;
                    const angle = body.angle;
                    // Sync DOM
                    el.style.transform = `translate(${x - block.w / 2}px, ${y - block.h / 2}px) rotate(${angle}rad)`;
                }
            });
            frameId = requestAnimationFrame(updateLoop);
        };
        updateLoop();

        return () => cancelAnimationFrame(frameId);

    }, [scene]);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-slate-950 text-white">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black opacity-80 pointer-events-none" />

            {/* DOM Overlay Blocks */}
            {blocks.map(block => {
                const isContact = block.type === 'contact';
                const commonClass = "absolute flex flex-col items-center justify-center text-center p-4 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl select-none will-change-transform";

                // Contact Block has special component
                if (isContact) {
                    return (
                        <div
                            key={block.id}
                            id={`block-${block.id}`}
                            style={{ width: block.w, height: block.h, position: 'absolute', top: 0, left: 0 }}
                        >
                            <ContactBlock className="w-full h-full" />
                        </div>
                    );
                }

                // Standard Blocks
                return (
                    <div
                        key={block.id}
                        id={`block-${block.id}`}
                        onClick={block.onClick}
                        className={`${commonClass} ${block.type === 'nav' ? 'rounded-full bg-slate-800/80 hover:bg-slate-700' : 'bg-slate-900/40 hover:bg-slate-800/60'}`}
                        style={{ width: block.w, height: block.h, top: 0, left: 0 }}
                    >
                        {block.text && (
                            <div className={`${block.type === 'hero' ? 'text-4xl md:text-6xl font-bold' : 'text-lg font-bold'}`}>
                                {block.text}
                            </div>
                        )}
                        {block.sub && <div className="text-slate-400 text-sm mt-2">{block.sub}</div>}
                    </div>
                );
            })}

            {/* Modals */}
            <LuminaCaseStudy isOpen={luminaOpen} onClose={() => setLuminaOpen(false)} />
        </div>
    );
}
