import { useEffect, useRef, useState } from "react";

const HOT = "a, button, summary, label, [role='button']";
const TEXT = "input, textarea, select, [contenteditable='true']";

type Bubble = {
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
  const bubbleRef = useRef<HTMLCanvasElement>(null);
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
    const bubbles: Bubble[] = [];

    const canvas = bubbleRef.current;
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
      if (primed && visible && distance > 42 && bubbles.length < 7) {
        const nx = dx / distance;
        const ny = dy / distance;
        bubbles.push({
          x: x - nx * 22,
          y: y - ny * 22,
          vx: -nx * 0.22 + (Math.random() - 0.5) * 0.12,
          vy: -ny * 0.22 - 0.12,
          life: 0,
          max: 34 + Math.random() * 10,
          size: 6 + Math.random() * 4,
        });
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
        for (let index = bubbles.length - 1; index >= 0; index -= 1) {
          const bubble = bubbles[index];
          bubble.life += 1;
          if (bubble.life >= bubble.max) {
            bubbles.splice(index, 1);
            continue;
          }
          bubble.x += bubble.vx;
          bubble.y += bubble.vy;
          bubble.vx *= 0.985;
          bubble.vy *= 0.985;
          const progress = bubble.life / bubble.max;
          const alpha = (1 - progress) * 0.8;
          const radius = bubble.size * (1 + progress * 0.2);
          context.beginPath();
          context.arc(bubble.x, bubble.y, radius, 0, Math.PI * 2);
          context.fillStyle = `rgba(242, 201, 76, ${alpha * 0.14})`;
          context.fill();
          context.strokeStyle = `rgba(242, 201, 76, ${alpha})`;
          context.lineWidth = 1.35;
          context.stroke();
          context.beginPath();
          context.arc(
            bubble.x - radius * 0.34,
            bubble.y - radius * 0.36,
            Math.max(1.1, radius * 0.2),
            0,
            Math.PI * 2,
          );
          context.fillStyle = `rgba(255, 248, 224, ${alpha * 0.95})`;
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
      <canvas ref={bubbleRef} className="cursor-bubbles" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
