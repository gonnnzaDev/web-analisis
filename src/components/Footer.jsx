import Reveal from "./Reveal.jsx";
import { meta } from "../data.js";

const chips = ["REACT 19", "VITE", "TAILWIND 4", "THREE.JS", "R3F"];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon/15 bg-void/80 py-12">
      <Reveal className="mx-auto max-w-4xl px-4 text-center [perspective:1200px]">
        <p className="font-pixel text-[11px] text-neon text-glow tracking-wider">
          ◈ WEB·ANALISIS ◈
        </p>

        <p className="mt-4 text-sm text-slate-400">
          Dashboard generado a partir de los reportes de una ejecución del pipeline{" "}
          <span className="text-slate-200">Steam Market Analysis</span> (Python ·
          Playwright · Ollama). El código fuente de la parte Python vive en el
          proyecto <code className="text-neon">analisis</code>; este frontend solo
          muestra los resultados.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded border border-neon/25 bg-neon/5 px-2.5 py-1 font-pixel text-[8px] tracking-wider text-neon/90"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-6 font-pixel text-[9px] tracking-widest text-slate-500">
          EJECUCIÓN · {meta.fecha}
        </p>

        <a
          href="https://github.com/gonnnzaDev/web-analisis"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm text-slate-400 underline decoration-neon/40 underline-offset-4 transition-colors hover:text-neon"
        >
          github.com/gonnnzaDev/web-analisis
        </a>

        <p className="mt-6 font-pixel text-[9px] tracking-widest text-slate-600">
          HECHO CON 💚 POR GONNNZADEV · GAME OVER? NO, HASTA LA PRÓXIMA EJECUCIÓN
        </p>
      </Reveal>
    </footer>
  );
}
