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
      // Lerp for smooth trailing
      const dx = target.current.x - position.current.x;
      const dy = target.current.y - position.current.y;

      position.current.x += dx * 0.15;
      position.current.y += dy * 0.15;

      if (cursorRef.current) {
        const scale = isHovering ? 2.5 : 1; // 14px -> 35px approx (28px requested, so ~2x)
        // Using 2.0 for 28px/14px
        const targetScale = isHovering ? 2.0 : 1;

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
                /* Ensure default cursor returns on touch/coarse */
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ease-out-expo ${isHovering ? 'scale-110 translate-x-1 translate-y-1' : 'scale-100'}`}
            style={{
              filter: "drop-shadow(0 0 8px rgba(10, 88, 255, 0.5))"
            }}
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
