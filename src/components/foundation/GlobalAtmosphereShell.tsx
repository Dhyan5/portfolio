"use client";

import type { ReactNode } from "react";
import AmbientBackground from "./AmbientBackground";
import CustomCursor from "./CustomCursor";
import RouteTransition from "./RouteTransition";
import ShaderBackdrop from "./ShaderBackdrop";

type GlobalAtmosphereShellProps = {
  children: ReactNode;
};

export default function GlobalAtmosphereShell({ children }: GlobalAtmosphereShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <ShaderBackdrop />
      <div className="grain-overlay" />
      <CustomCursor />

      <div className="relative z-10">
        <RouteTransition>{children}</RouteTransition>
      </div>
    </div>
  );
}
