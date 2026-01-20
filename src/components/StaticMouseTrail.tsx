"use client";

import { useEffect, useRef } from "react";

export function StaticMouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const isMovingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Linear interpolation function
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Draw static noise at a specific position with soft edges
    const drawStaticAt = (x: number, y: number, radius: number, intensity: number) => {
      if (!ctx) return;

      // Create radial gradient for soft edges
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${intensity})`);
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${intensity * 0.5})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      // Create noise pattern
      const imageData = ctx.createImageData(radius * 2, radius * 2);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const px = (i / 4) % (radius * 2);
        const py = Math.floor(i / 4 / (radius * 2));
        const dx = px - radius;
        const dy = py - radius;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          // Create pixelated noise
          const noise = Math.random() * 255;
          const alpha = intensity * (1 - dist / radius);
          data[i] = noise;
          data[i + 1] = noise;
          data[i + 2] = noise;
          data[i + 3] = alpha * 255;
        }
      }

      ctx.putImageData(imageData, x - radius, y - radius);
    };

    // Draw static effect with interpolation
    const drawStatic = () => {
      if (!ctx) return;

      // Fade out previous frame
      ctx.fillStyle = "rgba(5, 5, 5, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { x, y } = mousePosRef.current;
      const lastPos = lastMousePosRef.current;
      const radius = 100;
      const intensity = 0.35;

      // Calculate distance between last and current position
      const dx = x - lastPos.x;
      const dy = y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If mouse is moving, interpolate between positions
      if (isMovingRef.current && distance > 2) {
        const steps = Math.ceil(distance / 2); // Draw every 2px
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const interpX = lerp(lastPos.x, x, t);
          const interpY = lerp(lastPos.y, y, t);
          drawStaticAt(interpX, interpY, radius, intensity);
        }
        lastMousePosRef.current = { x, y };
      } else if (isMovingRef.current) {
        // Draw at current position
        drawStaticAt(x, y, radius, intensity);
        lastMousePosRef.current = { x, y };
      }

      // Gradually reduce movement flag
      if (!isMovingRef.current) {
        lastMousePosRef.current = { x, y };
      }

      animationFrameRef.current = requestAnimationFrame(drawStatic);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      isMovingRef.current = true;
    };

    // Reset movement flag when mouse stops
    let movementTimeout: NodeJS.Timeout;
    const handleMouseStop = () => {
      clearTimeout(movementTimeout);
      movementTimeout = setTimeout(() => {
        isMovingRef.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleMouseStop);
    drawStatic();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleMouseStop);
      clearTimeout(movementTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
