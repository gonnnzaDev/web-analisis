import Reveal, { useReveal } from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import TiltCard from "./TiltCard.jsx";
import { generos, fmt } from "../data.js";

const MAX = Math.max(...generos.map((g) => g.juegos));

function BarraGenero({ g, i }) {
  const [ref, visible] = useReveal(0.3);
  const pct = (g.juegos / MAX) * 100;

  return (
    <div
      ref={ref}
      className="grid grid-cols-[7.5rem_1fr_2.5rem_5.5rem] items-center gap-3 sm:grid-cols-[10rem_1fr_3rem_6.5rem]"
      style={{ transitionDelay: `${i * 50}ms` }}
    >
      <span
        className={`truncate text-right text-base font-semibold sm:text-lg ${
          g.nombre === "Indie" ? "text-neon" : "text-slate-200"
        }`}
        title={g.nombre}
      >
        {g.nombre}
      </span>

      <div className="h-3 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon to-magenta transition-all duration-1000 ease-out"
          style={{ width: visible ? `${pct}%` : "0%" }}
        />
      </div>

      <span className="text-right font-pixel text-[11px] text-neon">{g.juegos}</span>

      <span className="text-right text-xs text-slate-400 sm:text-sm">
        👥 {fmt(g.jugadores)}
      </span>
    </div>
  );
}

export default function Generos() {
  return (
    <section id="generos" className="scroll-mt-20 pt-24">
      <SectionHeading
        tag="// SECTOR 03"
        title="SELECT DE GÉNEROS"
        sub="Roster completo del pool de datos: presencia de cada género en la muestra y jugadores conectados por equipo."
      />

      <Reveal delay={150}>
        <TiltCard className="panel corners rounded-xl" max={3}>
          <div className="p-6 sm:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>Barra = juegos en la muestra ( {fmt(generos[0].juegos)} máx. )</span>
              <span>Chip = jugadores actuales sumados</span>
            </div>

            <div className="space-y-4">
              {generos.map((g, i) => (
                <BarraGenero key={g.nombre} g={g} i={i} />
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-400">
              <span className="text-gold">Género ganador:</span> Indie, con {generos[0].juegos}{" "}
              juegos y {fmt(generos[0].jugadores)} jugadores conectados (USD {fmt(generos[0].precioMedio, 2)} de precio mediano).
            </p>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}
