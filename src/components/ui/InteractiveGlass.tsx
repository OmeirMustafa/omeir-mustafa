"use client";

import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    glowOpacity?: number; // 0 to 1, custom opacity for the glow
    noHover?: boolean; // Disable hover effect if needed
}

export const InteractiveGlass = forwardRef<HTMLDivElement, InteractiveGlassProps>(
    ({ children, className, glowOpacity = 0.18, noHover = false, ...props }, ref) => {
        const internalRef = useRef<HTMLDivElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [opacity, setOpacity] = useState(0);

        // Merge refs (internal + external)
        useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!internalRef.current || noHover) return;

            const div = internalRef.current;
            const rect = div.getBoundingClientRect();

            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            setOpacity(1);
        };

        const handleMouseEnter = () => {
            if (!noHover) setOpacity(1);
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        return (
            <div
                ref={internalRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "glass-panel relative overflow-hidden transition-all duration-300",
                    className
                )}
                {...props}
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(16,185,129,${glowOpacity}), transparent 40%)`,
                    }}
                />
                <div className="relative h-full z-10">{children}</div>
            </div>
        );
    }
);

InteractiveGlass.displayName = "InteractiveGlass";
