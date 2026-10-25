import { useEffect, useRef, useState } from "react";
import { fmt } from "../data.js";

/**
 * Número estilo marcador que cuenta de 0 hasta `value`
 * cuando entra en el viewport.
 */
export default function StatCounter({
  value,
  dec = 0,
  prefix = "",
  suffix = "",
  className = "",
  duration = 1500,
}) {
  const [val, setVal] = useState(0);
  const nodeRef = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {fmt(val, dec)}
      {suffix}
    </span>
  );
}
