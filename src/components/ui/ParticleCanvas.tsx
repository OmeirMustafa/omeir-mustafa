"use client";
import React, { useRef, useEffect } from "react";

export function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current; if (!canvas) return;
        const ctx = canvas.getContext("2d"); if (!ctx) return;
        let width = window.innerWidth; let height = window.innerHeight;
        canvas.width = width; canvas.height = height;
        const particles: any[] = [];
        let mouseX = 0; let mouseY = 0;
        window.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });

        class Particle {
            x = Math.random() * width; y = Math.random() * height;
            size = Math.random() * 1.5 + 0.5;
            speedX = Math.random() * 0.5 - 0.25; speedY = Math.random() * 0.5 - 0.25;
            update() {
                this.x += this.speedX; this.y += this.speedY;
                if (this.x > width) this.x = 0; else if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0; else if (this.y < 0) this.y = height;
                const dx = mouseX - this.x; const dy = mouseY - this.y;
                if (Math.sqrt(dx * dx + dy * dy) < 200) { this.x += dx * 0.01; this.y += dy * 0.01; }
            }
            draw() { ctx!.fillStyle = "rgba(0, 245, 255, 0.4)"; ctx!.beginPath(); ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx!.fill(); }
        }
        for (let i = 0; i < 70; i++) particles.push(new Particle());
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        };
        animate();
    }, []);
    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
