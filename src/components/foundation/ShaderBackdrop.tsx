"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════════════════
 *  ShaderBackdrop — Fullsite 3D Starfield & Constellation Canvas
 *  ─────────────────────────────────────────────────────────────────────
 *  • 1,400+ small, crisp 3D star particles (size: 0.1)
 *  • Multi-tone starry palette (Neon Green #39ff14, Mint, Cyan-White)
 *  • Enhanced cursor interaction — dynamic swirl & dispersion when cursor hovers
 *  • Fullsite scroll-linked camera movement through 3D space
 * ═══════════════════════════════════════════════════════════════════ */

const STAR_COUNT = 1400;
const CONNECTION_DISTANCE = 4.8;
const MOUSE_INFLUENCE_RADIUS = 16;
const MOUSE_REPULSION_STRENGTH = 0.35;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function ShaderBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── Renderer ──────────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    /* ── Scene & Deep Fog ─────────────────────────────────────────── */
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.015);

    /* ── Camera ────────────────────────────────────────────────────── */
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    );
    camera.position.set(0, 0, 40);

    /* ── Small Star Particles Buffer ────────────────────────────────── */
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const basePositions = new Float32Array(STAR_COUNT * 3);
    const velocities = new Float32Array(STAR_COUNT * 3);
    const starColors = new Float32Array(STAR_COUNT * 3);

    const palette = [
      new THREE.Color("#39ff14"),
      new THREE.Color("#39ff14"),
      new THREE.Color("#65ff47"),
      new THREE.Color("#9dff88"),
      new THREE.Color("#ffffff"),
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 90;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      velocities[i3] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.005;

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    // 3D particle size (0.22)
    const starMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    /* ── Constellation Connection Lines ───────────────────────────── */
    const maxLines = 1800;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();

    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    /* ── Floating Geometric Objects ────────────────────────────────── */
    const icoGeo = new THREE.IcosahedronGeometry(16, 2);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      wireframe: true,
      transparent: true,
      opacity: 0.035,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(22, -10, -25);
    scene.add(icoMesh);

    const torusGeo = new THREE.TorusGeometry(10, 0.5, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(-24, 15, -20);
    scene.add(torusMesh);

    /* ── Mouse & Scroll Interaction State ─────────────────────────── */
    const mouse = { x: 0, y: 0 };
    const smoothMouse = { x: 0, y: 0 };
    let scrollProgress = 0;
    let smoothScrollProgress = 0;

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouseWorld = new THREE.Vector3();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    const onScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scrollProgress = window.scrollY / maxScroll;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    /* ── Animation Loop ────────────────────────────────────────────── */
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth interpolation for mouse & document scroll ratio
      smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.06);
      smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.06);
      smoothScrollProgress = lerp(smoothScrollProgress, scrollProgress, 0.04);

      // Project mouse into 3D world space
      mouseNDC.set(smoothMouse.x, smoothMouse.y);
      raycaster.setFromCamera(mouseNDC, camera);
      raycaster.ray.intersectPlane(mousePlane, mouseWorld);

      // ── Fullsite Scroll-linked Camera Traversal (Enhanced Vertical & Touch Depth) ──
      camera.position.x = smoothMouse.x * 7;
      camera.position.y = -smoothScrollProgress * 35 + smoothMouse.y * 10;
      camera.position.z = 40 + Math.sin(smoothScrollProgress * Math.PI) * 8;
      camera.lookAt(smoothMouse.x * 2, -smoothScrollProgress * 35 + smoothMouse.y * 4, 0);

      // ── Animate Small Stars (Upward Flow + Kinetic Vertical Touch Response) ──
      const posArray = starGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < STAR_COUNT; i++) {
        const i3 = i * 3;

        // Upward kinetic drift stream + horizontal gentle sway
        posArray[i3] =
          basePositions[i3] +
          Math.sin(t * 0.4 + i * 0.1) * 1.5 +
          velocities[i3] * t * 30 +
          smoothMouse.x * 2;
        posArray[i3 + 1] =
          basePositions[i3 + 1] +
          Math.cos(t * 0.35 + i * 0.12) * 1.8 +
          velocities[i3 + 1] * t * 30 +
          smoothMouse.y * 3;
        posArray[i3 + 2] =
          basePositions[i3 + 2] + Math.sin(t * 0.3 + i * 0.08) * 1.2;

        // Wrap stars past boundary
        if (posArray[i3] > 65) posArray[i3] -= 130;
        if (posArray[i3] < -65) posArray[i3] += 130;
        if (posArray[i3 + 1] > 65) posArray[i3 + 1] -= 130;
        if (posArray[i3 + 1] < -65) posArray[i3 + 1] += 130;

        // Cursor & Touch Interaction — particles push & swirl dynamically horizontally AND vertically
        const dx = posArray[i3] - mouseWorld.x;
        const dy = posArray[i3 + 1] - (mouseWorld.y - smoothScrollProgress * 35);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_INFLUENCE_RADIUS && dist > 0.01) {
          const force = (1 - dist / MOUSE_INFLUENCE_RADIUS) * MOUSE_REPULSION_STRENGTH;
          const angle = Math.atan2(dy, dx) + 0.3; // dynamic swirl spin
          posArray[i3] += Math.cos(angle) * force * 2.0;
          posArray[i3 + 1] += Math.sin(angle) * force * 2.2;
          posArray[i3 + 2] += force * 0.8;
        }
      }

      starGeometry.attributes.position.needsUpdate = true;

      // ── Update Constellation Lines ──
      let lineCount = 0;
      const lp = lineGeometry.attributes.position.array as Float32Array;
      const lc = lineGeometry.attributes.color.array as Float32Array;

      for (let i = 0; i < STAR_COUNT && lineCount < maxLines; i++) {
        const i3 = i * 3;
        for (let j = i + 1; j < STAR_COUNT && lineCount < maxLines; j += 2) {
          const j3 = j * 3;
          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < CONNECTION_DISTANCE) {
            const idx = lineCount * 6;
            const alpha = 1 - dist / CONNECTION_DISTANCE;

            lp[idx] = posArray[i3];
            lp[idx + 1] = posArray[i3 + 1];
            lp[idx + 2] = posArray[i3 + 2];
            lp[idx + 3] = posArray[j3];
            lp[idx + 4] = posArray[j3 + 1];
            lp[idx + 5] = posArray[j3 + 2];

            lc[idx] = alpha * 0.2;
            lc[idx + 1] = alpha * 0.9;
            lc[idx + 2] = alpha * 0.1;
            lc[idx + 3] = alpha * 0.2;
            lc[idx + 4] = alpha * 0.9;
            lc[idx + 5] = alpha * 0.1;

            lineCount++;
          }
        }
      }

      for (let i = lineCount * 6; i < maxLines * 6; i++) {
        lp[i] = 0;
        lc[i] = 0;
      }

      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineCount * 2);

      // Rotate Geometries
      icoMesh.rotation.x = t * 0.04;
      icoMesh.rotation.y = t * 0.06;
      icoMesh.position.y = -10 - smoothScrollProgress * 25;

      torusMesh.rotation.x = t * 0.03;
      torusMesh.rotation.z = t * 0.05;
      torusMesh.position.y = 15 - smoothScrollProgress * 30;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameId);
      starGeometry.dispose();
      starMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="shader-backdrop" aria-hidden />;
}
