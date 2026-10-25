import TiltCard from "./TiltCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import StatCounter from "./StatCounter.jsx";
import { resumen } from "../data.js";

const cards = [
  {
    icon: "🎮",
    label: "JUEGOS EN MUESTRA",
    value: resumen.totalJuegos,
    sub: "Lanzados en 2026, ordenados por recencia",
    pct: 100,
    delay: 0,
  },
  {
    icon: "👥",
    label: "JUGADORES ACTUALES",
    value: resumen.jugadoresHoy,
    sub: "Suma al momento de la extracción",
    pct: 68,
    delay: 80,
  },
  {
    icon: "🏷️",
    label: "CON DESCUENTO",
    value: resumen.conDescuento,
    sub: "El tramo útil 1–25% domina las ofertas",
    pct: 58,
    delay: 160,
  },
  {
    icon: "🆓",
    label: "JUEGOS GRATIS",
    value: resumen.gratis,
    sub: "Free to Play dentro de la muestra",
    pct: 11,
    delay: 240,
  },
];

export default function StatsBar() {
  return (
    <section id="stats" className="scroll-mt-20 pt-24">
      <SectionHeading tag="// HUD PRINCIPAL" title="ESTADO DEL ANÁLISIS" />

      <div className="grid grid-cols-2 gap-4 [perspective:1200px] lg:grid-cols-4 lg:gap-6">
        {cards.map((c) => (
          <Reveal key={c.label} delay={c.delay}>
            <TiltCard className="panel corners h-full rounded-lg">
              <div className="flex h-full flex-col items-center p-6 text-center">
                <span className="animate-floaty text-4xl sm:text-5xl">{c.icon}</span>
                <p className="mt-4 font-pixel text-[9px] tracking-wider text-slate-400">
                  {c.label}
                </p>
                <p className="mt-2 font-pixel text-2xl text-neon text-glow sm:mt-3 sm:text-3xl">
                  <StatCounter value={c.value} />
                </p>
                <p className="mt-3 text-sm text-slate-400">{c.sub}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon to-magenta"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
