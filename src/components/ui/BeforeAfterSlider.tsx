"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

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
            className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none group border border-slate-200 shadow-lg"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
        >
            {/* AFTER Image (Background - Full Width) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt={`After ${alt}`}
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    AFTER
                </div>
            </div>

            {/* BEFORE Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="relative w-full h-full">
                    {/* We need to set the width of this inner image to the full container width 
                so it doesn't squish, but is masked by the parent div. 
                Using `vw` or fixed sizes is tricky. 
                Better approach: Use a wrapper with same aspect ratio.
             */}
                    <Image
                        src={beforeImage}
                        alt={`Before ${alt}`}
                        fill
                        className="object-cover object-top"
                        // Crucial: The image needs to be sized to the PARENT container, not this clipped container.
                        style={{ width: '100%', height: '100%' }}
                    />
                    {/* However, `fill` in Next.js biases to the parent. 
                 If parent is clipped 50%, image is 50%.
                 We need to counteract this.
                 Actually, simpler CSS trick:
              */}
                </div>
            </div>

            {/* Correction for "Before" Image Sizing */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="absolute inset-0 w-[100vw] sm:w-[500px] md:w-[600px] lg:w-[800px] h-full">
                    {/* This hardcoding is brittle. 
                 Better way:
              */}
                </div>
            </div>

            {/* RETRY: Standard way to do Before/After in React/Next/Tailwind */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
            >
                <Image
                    src={beforeImage}
                    alt={`Before ${alt}`}
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    BEFORE
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <MoveHorizontal size={16} className="text-slate-900" />
                </div>
            </div>
        </div>
    );
}
