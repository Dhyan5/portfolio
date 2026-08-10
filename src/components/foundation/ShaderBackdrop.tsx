"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// High-end Active Theory / Buttermax style GLSL Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_velocity;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Distort vertices slightly near cursor for 3D liquid plane reaction
    float dist = distance(uv, u_mouse);
    float wave = sin(dist * 20.0 - u_time * 4.0) * exp(-dist * 4.0);
    pos.z += wave * 0.08 * u_velocity;

    gl_Position = vec4(pos, 1.0);
  }
`;

// High-end Active Theory / Buttermax style GLSL Fragment Shader
const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_velocity;
  uniform float u_active;

  // Simplex / Perlin noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 aspectUv = vUv;
    float aspect = u_resolution.x / max(u_resolution.y, 1.0);
    aspectUv.x *= aspect;

    vec2 mouse = u_mouse;
    mouse.x *= aspect;

    // Distance and vector from cursor
    vec2 toMouse = aspectUv - mouse;
    float dist = length(toMouse);
    vec2 dir = normalize(toMouse + vec2(0.0001));

    // Mouse hover proximity mask (0.0 when mouse is absent/far, 1.0 directly under cursor)
    float proximity = exp(-dist * 4.2) * u_active;

    // Dynamic fluid ripple & mouse velocity displacement gated by proximity
    float ripple = sin(dist * 24.0 - u_time * 5.0) * exp(-dist * 5.0) * (u_velocity + 0.1) * proximity;
    float noiseVal = snoise(vUv * 3.5 + vec2(u_time * 0.1, u_time * 0.15)) * proximity;
    
    // UV pixel displacement mapping strictly localized under cursor hover
    vec2 distortedUv = vUv + dir * (ripple * 0.05 + proximity * 0.04);
    distortedUv += vec2(snoise(vUv * 8.0 + u_time * 0.2)) * 0.01 * proximity;

    // Chromatic Aberration sampling offset
    float caOffset = (0.005 * (1.0 + u_velocity * 2.0) + ripple * 0.02) * proximity;
    float r = snoise(distortedUv * 4.0 + vec2(caOffset, 0.0)) * proximity;
    float g = snoise(distortedUv * 4.0) * proximity;

    // Simulated Normal Vector Lighting & Surface Specular Highlight
    vec3 normal = normalize(vec3(dir * (ripple + noiseVal * 0.3), 0.8));
    vec3 lightDir = normalize(vec3(mouse - aspectUv, 0.6));
    float specular = pow(max(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 16.0) * proximity;

    // Static Pure Black background at rest
    vec3 baseBg = vec3(0.0, 0.0, 0.0);
    vec3 deepGoldSmoke = vec3(0.14, 0.10, 0.02);  // Interactive Gold Tint on Hover
    vec3 metallicGold = vec3(1.0, 0.84, 0.22);    // Bright Metallic Gold (#ffd700)
    vec3 champagneGlow = vec3(1.0, 0.94, 0.72);   // Specular Gold Highlight

    vec3 color = mix(baseBg, deepGoldSmoke, r * 0.5 + 0.3 * proximity);
    color = mix(color, champagneGlow * 0.5, g * 0.3);
    
    // Interactive mouse hover metallic gold glow & specular highlights
    color += metallicGold * (proximity * 0.45 + specular * 0.7 + u_velocity * proximity * 0.25);

    // Radial vignette
    float vignette = smoothstep(1.3, 0.3, length(vUv - 0.5));
    color *= vignette;

    gl_FragColor = vec4(color, 0.95);
  }
`;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function ShaderBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || hasCoarsePointer) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_velocity: { value: 0 },
      u_active: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const targetMouse = { x: 0.5, y: 0.5 };
    const currentMouse = { x: 0.5, y: 0.5 };
    const prevMouse = { x: 0.5, y: 0.5 };
    let targetActive = 0;
    let currentActive = 0;
    let currentVelocity = 0;

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - e.clientY / window.innerHeight;
      targetActive = 1.0;
    };

    const onMouseLeave = () => {
      targetActive = 0.0;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    resize();

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      uniforms.u_time.value = elapsedTime;

      // Smooth Physics Linear Interpolation (lerp) & Mouse Active State
      currentMouse.x = lerp(currentMouse.x, targetMouse.x, 0.08);
      currentMouse.y = lerp(currentMouse.y, targetMouse.y, 0.08);
      currentActive = lerp(currentActive, targetActive, 0.06);

      const dx = currentMouse.x - prevMouse.x;
      const dy = currentMouse.y - prevMouse.y;
      const instVelocity = Math.sqrt(dx * dx + dy * dy) * 45.0;

      currentVelocity = lerp(currentVelocity, instVelocity, 0.12);
      currentVelocity = Math.min(currentVelocity, 2.0);

      prevMouse.x = currentMouse.x;
      prevMouse.y = currentMouse.y;

      uniforms.u_mouse.value.set(currentMouse.x, currentMouse.y);
      uniforms.u_velocity.value = currentVelocity;
      uniforms.u_active.value = currentActive;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="shader-backdrop" aria-hidden />;
}

