import { lazy, Suspense } from "react";
import { resumen, fmt } from "../data.js";

const Scene3D = lazy(() => import("./Scene3D.jsx"));

const ticker = [
  "100 JUEGOS ANALIZADOS",
  "3.007 JUGADORES CONECTADOS",
  "TOP 1 · TENEBRIS SOMNIA (1.037)",
  "GÉNERO MÁS PRESENTE · INDIE",
  "CORRELACIÓN ESTRELLA · 0,72",
  "58 JUEGOS EN OFERTA",
  "PRECIO MEDIANO · USD 3,00",
];

function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-y border-neon/15 bg-void/60 py-3 backdrop-blur-sm">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-6 font-pixel text-[10px] tracking-wider text-neon/80 sm:text-[11px]"
          >
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fondos */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,213,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,43,214,0.07),transparent_60%)]" />

      {/* Escena 3D */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Contenido */}
      <div className="corners relative z-10 mx-4 max-w-3xl px-6 py-12 text-center sm:px-10">
        <p className="font-pixel text-[9px] tracking-widest text-gold sm:text-[10px]">
          ▶ RESULTADOS DE EJECUCIÓN · PIPELINE COMPLETADO AL 100%
        </p>

        <h1
          className="glitch mt-6 font-pixel text-[clamp(1.4rem,5.2vw,3.4rem)] leading-[1.25] text-neon text-glow animate-flicker"
          data-text="STEAM MARKET ANALYSIS"
        >
          STEAM MARKET ANALYSIS
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Dashboard de los resultados de una ejecución del pipeline de análisis de
          datos: {" "}
          <span className="text-neon font-semibold">100 juegos</span> de Steam,
          extraídos con Playwright y procesados con IA local + pandas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded border border-neon/30 bg-neon/5 px-3 py-1.5 text-sm font-semibold text-neon">
            🎮 {resumen.totalJuegos} JUEGOS EN MUESTRA
          </span>
          <span className="rounded border border-magenta/30 bg-magenta/5 px-3 py-1.5 text-sm font-semibold text-magenta">
            👥 {fmt(resumen.jugadoresHoy)} CONECTADOS HOY
          </span>
          <span className="rounded border border-gold/30 bg-gold/5 px-3 py-1.5 text-sm font-semibold text-gold">
            🏷️ {resumen.conDescuento} EN OFERTA
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#leaderboard"
            className="corners rounded bg-neon/10 px-6 py-3 font-pixel text-[10px] tracking-wider text-neon transition-all hover:bg-neon/20 hover:shadow-[0_0_30px_rgba(0,255,213,0.35)] sm:text-[11px]"
          >
            VER LEADERBOARD ▼
          </a>
          <a
            href="https://github.com/gonnnzaDev/web-analisis"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-magenta/40 px-6 py-3 font-pixel text-[10px] tracking-wider text-magenta transition-all hover:bg-magenta/10 hover:shadow-[0_0_30px_rgba(255,43,214,0.3)] sm:text-[11px]"
          >
            VER CÓDIGO ⛏
          </a>
        </div>

        <p className="mt-12 font-pixel text-[9px] tracking-widest text-slate-500 animate-blink">
          - PRESS START -
        </p>
      </div>

      <Ticker />
    </section>
  );
}
