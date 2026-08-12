"use client";

import type { ReactNode } from "react";
import RouteTransition from "./RouteTransition";
import ShaderBackdrop from "./ShaderBackdrop";
import IntroLoader from "./IntroLoader";

type GlobalAtmosphereShellProps = {
  children: ReactNode;
};

/* ═══════════════════════════════════════════════════════════════════════
 *  GlobalAtmosphereShell — Composites full-site 3D WebGL background
 *    1. ShaderBackdrop  → Fullscreen 3D WebGL particle scene (fixed background)
 *    2. IntroLoader     → Staggered Tech Stack splash loader on page refresh
 *    3. Grain overlay   → Subtle texture
 *    4. Content         → Scrollable page content with smooth transitions
 * ═══════════════════════════════════════════════════════════════════ */
export default function GlobalAtmosphereShell({ children }: GlobalAtmosphereShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      {/* Fullsite 3D Tech Intro Loader Overlay on reload */}
      <IntroLoader />

      {/* Fullsite WebGL 3D particle constellation backdrop */}
      <ShaderBackdrop />

      {/* Film grain texture overlay */}
      <div className="grain-overlay" />

      {/* Page content */}
      <div className="relative z-10">
        <RouteTransition>{children}</RouteTransition>
      </div>
    </div>
  );
}
