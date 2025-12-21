"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Force scroll to top on route change or refresh
        window.scrollTo(0, 0);

        // Disable browser's default scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, [pathname]);

    return null;
}
