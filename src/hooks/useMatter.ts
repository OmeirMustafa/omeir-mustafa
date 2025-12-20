"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export const useMatter = (containerRef: React.RefObject<HTMLElement | null>) => {
    const [scene, setScene] = useState<Matter.Composite | null>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 1. Setup Matter Engine
        const engine = Matter.Engine.create();
        engineRef.current = engine;

        // 2. Setup Render (Optional debug view, largely we will sync DOM)
        // We can use a transparent canvas for the mouse constraint interaction
        const render = Matter.Render.create({
            element: containerRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio
            }
        });
        renderRef.current = render;

        // 3. Boundaries
        const width = window.innerWidth;
        const height = window.innerHeight;
        const wallThick = 60;

        const floor = Matter.Bodies.rectangle(width / 2, height + wallThick / 2 - 10, width, wallThick, {
            isStatic: true,
            render: { visible: false },
            label: "Floor"
        });
        const leftWall = Matter.Bodies.rectangle(0 - wallThick / 2, height / 2, wallThick, height * 5, {
            isStatic: true,
            render: { visible: false }
        });
        const rightWall = Matter.Bodies.rectangle(width + wallThick / 2, height / 2, wallThick, height * 5, {
            isStatic: true,
            render: { visible: false }
        });

        Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);
        setScene(engine.world);

        // 4. Mouse Control
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        Matter.Composite.add(engine.world, mouseConstraint);

        // Allow scrolling if not capturing a body? 
        // Matter.js captures scroll by default usually, might need tuning.
        // render.mouse.element.removeEventListener("mousewheel", render.mouse.mousewheel);
        // render.mouse.element.removeEventListener("DOMMouseScroll", render.mouse.mousewheel);

        // 5. Run
        Matter.Render.run(render);

        const runner = Matter.Runner.create();
        runnerRef.current = runner;
        Matter.Runner.run(runner, engine);

        // 6. Cleanup
        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
        };
    }, [containerRef]);

    return { scene, engineRef };
};
