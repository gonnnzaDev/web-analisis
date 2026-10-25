import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import TiltCard from "./TiltCard.jsx";
import StatCounter from "./StatCounter.jsx";
import { topJugadores, fmt } from "../data.js";

const MAX = topJugadores[0].jugadores;

const medallas = ["🥇", "🥈", "🥉"];

const estilosPodio = [
  "sm:-translate-y-6 border-gold/50 shadow-[0_0_40px_rgba(255,214,0,0.12)]",
  "sm:-translate-y-3 border-slate-400/50",
  "sm:translate-y-0 border-orange-700/50",
];

function Podio() {
  return (
    <div className="flex flex-col items-end gap-6 [perspective:1200px] sm:flex-row sm:justify-center">
      {[1, 0, 2].map((orden) => {
        const j = topJugadores[orden];
        return (
          <Reveal key={j.rank} delay={orden * 120}>
            <TiltCard className={`panel rounded-xl border ${estilosPodio[j.rank - 1]}`}>
              <div className="w-64 p-6 text-center sm:w-72">
                <p className="text-4xl">{medallas[j.rank - 1]}</p>
                <p className="mt-2 font-pixel text-[9px] tracking-widest text-slate-400">
                  RANK #{j.rank}
                </p>
                <h3
                  className={`mt-3 font-pixel text-sm ${
                    j.rank === 1 ? "text-gold text-glow-gold" : "text-slate-100"
                  }`}
                >
                  {j.juego}
                </h3>
                <p className="mt-4 flex items-baseline justify-center gap-2">
                  <StatCounter
                    value={j.jugadores}
                    className="font-pixel text-3xl text-neon text-glow"
                  />
                  <span className="text-xs text-slate-400">👥 online</span>
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center text-xs">
                  <div>
                    <p className="font-pixel text-[9px] text-slate-500">RESEÑAS</p>
                    <p className="mt-1 font-semibold text-slate-200">{j.resenas}</p>
                  </div>
                  <div>
                    <p className="font-pixel text-[9px] text-slate-500">POSITIVAS</p>
                    <p className="mt-1 font-semibold text-neon">{fmt(j.positivas, 1)}%</p>
                  </div>
                  <div>
                    <p className="font-pixel text-[9px] text-slate-500">PRECIO</p>
                    <p className="mt-1 font-semibold text-gold">${fmt(j.precio, 2)}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        );
      })}
    </div>
  );
}

function FilaRanking({ j, i }) {
  return (
    <div
      className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-neon/40 hover:bg-neon/5 hover:translate-x-1 sm:gap-4"
      style={{ transitionDelay: `${i * 30}ms` }}
    >
      <span className="w-10 shrink-0 font-pixel text-[10px] text-slate-500">
        #{j.rank}
      </span>

      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-200 sm:text-lg">
        {j.juego}
      </span>

      <div className="hidden h-1.5 w-40 shrink-0 overflow-hidden rounded-full bg-white/5 sm:block">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon to-magenta"
          style={{ width: `${(j.jugadores / MAX) * 100}%` }}
        />
      </div>

      <span className="w-14 shrink-0 text-right font-pixel text-xs text-neon">
        {fmt(j.jugadores)}
      </span>

      <span className="hidden w-20 shrink-0 text-right text-sm text-slate-400 sm:block">
        ✅ {fmt(j.positivas, 1)}%
      </span>

      <span className="hidden w-20 shrink-0 rounded border border-gold/20 bg-gold/10 px-1.5 py-0.5 text-right text-xs font-semibold text-gold sm:block">
        ${fmt(j.precio, 2)}
      </span>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="scroll-mt-20 pt-24">
      <SectionHeading
        tag="// SECTOR 04"
        title="TOP JUGADORES CONECTADOS"
        sub="El ranking al momento de la extracción. Datos en vivo del catálogo Steam."
      />

      <Podio />

      <div className="mt-16 space-y-3">
        {topJugadores.slice(3).map((j, i) => (
          <Reveal key={j.rank} delay={i * 60}>
            <FilaRanking j={j} i={i} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center font-pixel text-[9px] tracking-widest text-slate-500">
        ▼ RANKS 4 AL 10 · FUERA DEL PODIO, DENTRO DEL JUEGO
      </p>
    </section>
  );
}
