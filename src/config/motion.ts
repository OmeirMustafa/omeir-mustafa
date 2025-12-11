export const MOTION = {
    spring: { type: "spring", stiffness: 140, damping: 20, mass: 0.9 } as const,
    snap: { type: "spring", stiffness: 220, damping: 26 } as const,
    subtle: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } as const,
    stagger: 0.08,
};

export const VARIANTS = {
    container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: MOTION.stagger, delayChildren: 0.1 } },
    },
    item: {
        hidden: { opacity: 0, y: 15, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: MOTION.spring },
    },
};
