import { useEffect, useRef, useState } from "react";

const HOT = "a, button, summary, label, [role='button']";
const TEXT = "input, textarea, select, [contenteditable='true']";

type Puff = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
};

export function GoldCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setActive(fine.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const root = document.documentElement;
    root.classList.add("has-gold-cursor");

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let scale = 1;
    let targetScale = 1;
    let visible = false;
    let frame = 0;
    let prevX = 0;
    let prevY = 0;
    let primed = false;
    const puffs: Puff[] = [];

    const canvas = smokeRef.current;
    const context = canvas?.getContext("2d") ?? null;

    const fitSmoke = () => {
      if (!canvas || !context) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    fitSmoke();

    const show = (on: boolean) => {
      visible = on;
      dotRef.current?.classList.toggle("is-on", on);
      ringRef.current?.classList.toggle("is-on", on);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        ringX = x;
        ringY = y;
        prevX = x;
        prevY = y;
        primed = true;
      }
      const dx = x - prevX;
      const dy = y - prevY;
      const distance = Math.hypot(dx, dy);
      if (primed && visible && distance > 4) {
        const nx = dx / distance;
        const ny = dy / distance;
        const steps = Math.min(3, Math.max(1, Math.round(distance / 16)));
        for (let step = 0; step < steps && puffs.length < 56; step += 1) {
          const along = (step + 1) / steps;
          puffs.push({
            x: prevX + dx * along - nx * 12,
            y: prevY + dy * along - ny * 12,
            vx: -nx * (0.45 + Math.random() * 0.85) + (Math.random() - 0.5) * 0.4,
            vy: -ny * (0.45 + Math.random() * 0.85) + (Math.random() - 0.5) * 0.4 - 0.14,
            life: 0,
            max: 28 + Math.random() * 18,
            size: 14 + Math.random() * 20,
          });
        }
      }
      prevX = x;
      prevY = y;
      primed = true;
      const target = event.target instanceof Element ? event.target : null;
      const typing = Boolean(target?.closest(TEXT));
      targetScale = typing ? 0 : target?.closest(HOT) ? 1.65 : 1;
      show(!typing);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onDown = () => {
      if (targetScale > 0) targetScale = Math.min(targetScale, 0.82);
    };

    const onUp = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      targetScale = target?.closest(HOT) ? 1.65 : 1;
    };

    const onLeave = () => show(false);

    const tick = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      scale += (targetScale - scale) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      if (context) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let index = puffs.length - 1; index >= 0; index -= 1) {
          const puff = puffs[index];
          puff.life += 1;
          if (puff.life >= puff.max) {
            puffs.splice(index, 1);
            continue;
          }
          puff.x += puff.vx;
          puff.y += puff.vy;
          puff.vx *= 0.97;
          puff.vy *= 0.97;
          const progress = puff.life / puff.max;
          const alpha = (1 - progress) * 0.38;
          const radius = puff.size * (0.55 + progress * 1.35);
          const glow = context.createRadialGradient(puff.x, puff.y, 0, puff.x, puff.y, radius);
          glow.addColorStop(0, `rgba(255, 246, 220, ${alpha})`);
          glow.addColorStop(0.42, `rgba(242, 201, 76, ${alpha * 0.42})`);
          glow.addColorStop(1, "rgba(242, 201, 76, 0)");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(puff.x, puff.y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("resize", fitSmoke);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      root.classList.remove("has-gold-cursor");
      window.removeEventListener("resize", fitSmoke);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <canvas ref={smokeRef} className="cursor-smoke" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
