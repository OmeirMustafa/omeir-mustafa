"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) cursorRef.current.style.opacity = "1";

      // Check hover targeting
      const element = e.target as HTMLElement;
      const isInteractive =
        element.tagName === 'BUTTON' ||
        element.tagName === 'A' ||
        element.closest('button') !== null ||
        element.closest('a') !== null ||
        window.getComputedStyle(element).cursor === 'pointer';

      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(0.9)`;
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        const scale = isHovering ? 2 : 1;
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(${scale})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Animation Loop
    let rafId: number;
    const animate = () => {
      // Lerp for smooth trailing (0.12)
      const dx = target.current.x - position.current.x;
      const dy = target.current.y - position.current.y;

      position.current.x += dx * 0.12;
      position.current.y += dy * 0.12;

      if (cursorRef.current) {
        const targetScale = isHovering ? 1.9 : 1;
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(${targetScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isHovering]);

  return (
    <>
      <style jsx global>{`
                @media (pointer: fine) {
                    body, a, button, [role="button"] { cursor: none !important; }
                }
                /* Ensure default cursor returns on touch/coarse or if validation fails */
                @media (pointer: coarse) {
                    body, a, button, [role="button"] { cursor: auto !important; }
                }
            `}</style>

      {/* Cursor Container - Hidden on touch */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform"
      >
        {/* Custom Arrow SVG */}
        <div className="relative">
          {/* Glow Layer: 18px blur, 0.18 opacity base, 0.28 on hover? User said "glow opacity to 0.28" on hover */}
          <div className={`absolute inset-0 rounded-full bg-[#0A58FF] blur-[18px] transition-opacity duration-300 ${isHovering ? 'opacity-[0.28]' : 'opacity-[0.18]'}`} style={{ width: '100%', height: '100%' }} />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ease-out-expo relative z-10 ${isHovering ? 'scale-100 translate-x-1 translate-y-1' : 'scale-100'}`}
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="#0A58FF"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
