"use client";

import { useEffect, useRef, useState } from "react";

const SPRING = 0.12;
const DAMPING = 0.76;
const RING_SIZE = 40;
const DOT_SIZE = 8;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouch = hasCoarsePointer || "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch || prefersReducedMotion || !hasFinePointer) {
      return;
    }

    document.documentElement.classList.add("cursor-enhanced");

    const dotEl = dotRef.current;
    const ringEl = ringRef.current;

    if (!dotEl || !ringEl) {
      return;
    }

    const update = () => {
      const mouse = mouseRef.current;
      const ring = ringPosRef.current;
      const vel = velocityRef.current;

      // Spring damping physics
      const ax = (mouse.x - ring.x) * SPRING;
      const ay = (mouse.y - ring.y) * SPRING;

      vel.x = (vel.x + ax) * DAMPING;
      vel.y = (vel.y + ay) * DAMPING;

      ring.x += vel.x;
      ring.y += vel.y;

      const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      const stretch = Math.min(speed * 0.04, 0.4);

      // Smooth Transform Matrix / Translate3d
      dotEl.style.transform = `translate3d(${mouse.x - DOT_SIZE / 2}px, ${mouse.y - DOT_SIZE / 2}px, 0)`;
      ringEl.style.transform = `translate3d(${ring.x - RING_SIZE / 2}px, ${ring.y - RING_SIZE / 2}px, 0) scale(${1 + stretch}, ${1 - stretch * 0.5})`;

      rafRef.current = window.requestAnimationFrame(update);
    };

    const handleMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;

      if (!hasMovedRef.current) {
        ringPosRef.current.x = event.clientX;
        ringPosRef.current.y = event.clientY;
        hasMovedRef.current = true;
        setVisible(true);
      }
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseDown = () => setPressed(true);
    const handleMouseUp = () => setPressed(false);

    const handleOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(".interactive-hover");
      if (target) {
        setHovered(true);
      }
    };

    const handleOut = (event: MouseEvent) => {
      const relatedTarget = event.relatedTarget as HTMLElement | null;
      if (relatedTarget?.closest(".interactive-hover")) {
        return;
      }
      setHovered(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    rafRef.current = window.requestAnimationFrame(update);

    return () => {
      document.documentElement.classList.remove("cursor-enhanced");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${visible ? "is-visible" : ""} ${hovered ? "is-hover" : ""} ${pressed ? "is-down" : ""}`}
        aria-hidden
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${visible ? "is-visible" : ""} ${hovered ? "is-hover" : ""} ${pressed ? "is-down" : ""}`}
        aria-hidden
      />
    </>
  );
}

