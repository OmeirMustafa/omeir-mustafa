"use client";

import React, { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      // Ensure cursor is visible on movement
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    const handleMouseDown = () => {
      // Shrink on click
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(0.8)`;
    };

    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(1)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Animation Loop
    let rafId: number;
    const animate = () => {
      // Lerp for smooth trailing
      const dx = target.current.x - position.current.x;
      const dy = target.current.y - position.current.y;

      position.current.x += dx * 0.15; // Speed factor
      position.current.y += dy * 0.15;

      if (cursorRef.current) {
        // translate3d for GPU acceleration
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Global Cursor Hide */}
      <style jsx global>{`
                @media (pointer: fine) {
                    body { cursor: none; }
                    a, button, [role="button"] { cursor: none; }
                }
            `}</style>

      {/* Cursor Follower (Neon Ring) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 bg-cyan-500/10 pointer-events-none z-[9999] hidden md:block mix-blend-screen transition-opacity duration-300"
        style={{
          marginTop: -16, // Center offset
          marginLeft: -16,
          boxShadow: "0 0 15px 1px rgba(34, 211, 238, 0.6), 0 0 5px 1px rgba(255, 255, 255, 0.4)" // Neon Cyan/Blue Glow
        }}
      />

      {/* Center Dot (Standard Pointer Replacement) */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-200 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen"
        style={{
          transform: 'translate(-50%, -50%)', // Center
          left: 0, top: 0, // Reset default
        }}
      />

      {/* JS Logic for Dot Following (Simple) */}
      <script dangerouslySetInnerHTML={{
        __html: `
                const dot = document.querySelector('.bg-cyan-200');
                if(dot) {
                    document.addEventListener('mousemove', (e) => {
                        dot.style.left = e.clientX + 'px';
                        dot.style.top = e.clientY + 'px';
                    });
                }
            `}} />
    </>
  );
}
