"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function InitialLoaderWrapper({ children, duration = 1000, fade = 100 }) {
    // duration = how long the splash stays (ms). fade = fade-out duration (ms).
    const [isLoading, setIsLoading] = useState(true);
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        // hide loader after `duration`
        const t = setTimeout(() => setIsLoading(false), duration);
        return () => clearTimeout(t);
    }, [duration]);

    useEffect(() => {
        // after isLoading becomes false, keep overlay for fade time, then remove from DOM
        if (!isLoading) {
            const t = setTimeout(() => setShowOverlay(false), fade);
            return () => clearTimeout(t);
        }
    }, [isLoading, fade]);

    return (
        <>
            {/* overlay */}
            {showOverlay && (
                <div
                    aria-hidden={isLoading ? "false" : "true"}
                    className={`fixed inset-0 z-9999 flex items-center justify-center bg-white/95 backdrop-blur-sm
                      transition-opacity duration-${Math.min(Math.round(fade / 50) * 50, 1000)}
                      ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={{ transitionDuration: `${fade}ms` }}
                >
                    <Loader />
                </div>
            )}

            {/* disable pointer events while overlay is visible to avoid clicks */}
            <div className={`${showOverlay ? "pointer-events-none" : ""}`}>{children}</div>
        </>
    );
}
