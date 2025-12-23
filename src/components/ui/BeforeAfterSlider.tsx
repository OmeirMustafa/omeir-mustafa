"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal, ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleInteractionStart = () => setIsDragging(true);
    const handleInteractionEnd = () => setIsDragging(false);

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);

    return (
        <div
            className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none group border border-white/20 shadow-2xl"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
        >
            {/* AFTER Image (Background - Full Width) */}
            <div className="absolute inset-0 select-none pointer-events-none">
                <Image
                    src={afterImage}
                    alt={`After ${alt}`}
                    fill
                    className="object-cover object-top select-none pointer-events-none"
                    draggable={false}
                />
                <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-white/10">
                    After: Rebuild
                </div>
            </div>

            {/* BEFORE Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden select-none pointer-events-none"
                style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
            >
                <Image
                    src={beforeImage}
                    alt={`Before ${alt}`}
                    fill
                    className="object-cover object-top select-none pointer-events-none"
                    draggable={false}
                />
                <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-white/10">
                    Before: Legacy site
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-105 transition-transform"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-900/10">
                    <ArrowLeftRight size={16} className="text-slate-900" />
                </div>
            </div>
        </div>
    );
}
