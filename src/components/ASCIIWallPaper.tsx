'use client';

import { useEffect, useRef } from 'react';

export type ASCIIWallPaperProps = {
  className?: string;
  glyphs?: string;
  size?: number;
  spacing?: number;
  color?: string;
  speed?: number;
  clearing?: number;
  holeQuantity?: number;
  opacity?: number;
  variant?: 'field' | 'clouds' | 'rings';
};

export default function ASCIIWallPaper({
  className = '',
  glyphs = ' .:-=+*#%@',
  size = 11,
  spacing = 1,
  color = '#b8e4d0',
  speed = 0.35,
  clearing = 0.25,
  holeQuantity = 0.25,
  opacity = 0.7,
  variant = 'field'
}: ASCIIWallPaperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;

    const field = (x: number, y: number, time: number) => {
      if (variant === 'rings') {
        const dx = x - width * 0.5;
        const dy = y - height * 0.5;
        return (Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.035 - time * 2) + 1) * 0.5;
      }

      if (variant === 'clouds') {
        return (
          Math.sin(x * 0.008 + time) * 0.25
          + Math.sin(y * 0.012 - time * 0.7) * 0.25
          + Math.sin((x + y) * 0.006 + time * 0.4) * 0.25
          + 0.5
        );
      }

      return (
        Math.sin(x * 0.018 + time) * 0.28
        + Math.cos(y * 0.014 - time * 0.8) * 0.28
        + Math.sin((x + y) * 0.009 + time * 0.35) * 0.24
        + 0.5
      );
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      context.globalAlpha = opacity;
      context.font = `${Math.round(size * 0.72)}px monospace`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      const characters = Array.from(glyphs);
      const holeDensity = Math.max(0, Math.min(1, holeQuantity));
      const cellWidth = size * Math.max(0.25, spacing);
      const cellHeight = size * 1.15;

      for (let y = cellHeight * 0.5; y < height; y += cellHeight) {
        for (let x = cellWidth * 0.5; x < width; x += cellWidth) {
          let strength = field(x, y, time);

          const dx = (x - width * 0.5) / (width * clearing || 1);
          const dy = (y - height * 0.5) / (height * clearing || 1);
          strength *= 1 - Math.max(0, 1 - (dx * dx + dy * dy)) * 0.8;

          if (pointer.active) {
            const distance = Math.hypot(x - pointer.x, y - pointer.y);
            if (distance < size * 6) {
              strength += (1 - distance / (size * 6)) * 0.55;
            }
          }

          strength = Math.max(0, Math.min(1, strength));

          const holeSeed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
          const hole = holeDensity > 0
            && (holeSeed - Math.floor(holeSeed)) < holeDensity;
          if (hole) continue;

          const glyphIndex = Math.round(strength * (characters.length - 1));
          const glyph = characters[glyphIndex];
          if (glyph && glyph !== ' ') context.fillText(glyph, x, y);
        }
      }

      context.globalAlpha = 1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(reducedMotion ? 0 : performance.now() * 0.001 * speed);
    };

    const animate = (now: number) => {
      if (!visible || reducedMotion) return;
      draw(now * 0.001 * speed);
      frame = window.requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      window.cancelAnimationFrame(frame);
      if (visible && !reducedMotion) frame = window.requestAnimationFrame(animate);
    });
    visibility.observe(canvas);

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);

    resize();

    return () => {
      observer.disconnect();
      visibility.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [glyphs, size, spacing, color, speed, clearing, holeQuantity, opacity, variant]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
