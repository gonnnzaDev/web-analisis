import { useRef, useState } from "react";

/**
 * Tarjeta con inclinación 3D al pasar el mouse (efecto tilt + brillo).
 */
export default function TiltCard({ children, className = "", max = 10 }) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - py) * max * 2,
      ry: (px - 0.5) * max * 2,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const reset = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`group relative ${className}`}
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) ${
          t.active ? "translateZ(6px)" : ""
        }`,
        transition: t.active ? "transform .08s ease-out" : "transform .45s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: t.active ? 1 : 0,
          background: `radial-gradient(320px circle at ${t.gx}% ${t.gy}%, rgba(0,255,213,.14), transparent 55%)`,
        }}
      />
    </div>
  );
}
