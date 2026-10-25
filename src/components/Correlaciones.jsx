import Reveal, { useReveal } from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import TiltCard from "./TiltCard.jsx";
import { correlaciones } from "../data.js";

function FilaCorrelacion({ c, i }) {
  const [ref, visible] = useReveal(0.4);
  const positive = c.valor >= 0;
  const ancho = visible ? `${Math.abs(c.valor) * 50}%` : "0%";

  return (
    <div
      ref={ref}
      className="grid grid-cols-[minmax(11rem,13rem)_1fr_3.5rem] items-center gap-3 sm:gap-4"
      title={c.nota}
    >
      <div>
        <p className="text-sm font-semibold text-slate-200 sm:text-base">{c.par}</p>
        <p className="hidden text-xs text-slate-500 sm:block">{c.nota}</p>
      </div>

      {/* Regla bifásica: centro = 0 */}
      <div className="relative h-3 overflow-hidden rounded-full bg-white/5">
        <span className="absolute left-1/2 top-0 h-full w-px bg-white/25" />
        {positive ? (
          <div
            className="absolute rounded-full bg-neon transition-all duration-1000 ease-out"
            style={{ left: "50%", width: ancho, boxShadow: "0 0 12px rgba(0,255,213,.5)" }}
          />
        ) : (
          <div
            className="absolute rounded-full bg-magenta transition-all duration-1000 ease-out"
            style={{ right: "50%", width: ancho, boxShadow: "0 0 12px rgba(255,43,214,.5)" }}
          />
        )}
      </div>

      <span
        className={`text-right font-pixel text-[11px] ${
          positive ? "text-neon" : "text-magenta"
        }`}
      >
        {c.valor > 0 ? "+" : ""}
        {c.valor.toFixed(2).replace(".", ",")}
      </span>
    </div>
  );
}

export default function Correlaciones() {
  return (
    <section id="correlaciones" className="scroll-mt-20 pt-24">
      <SectionHeading
        tag="// SECTOR 07"
        title="MATRIZ DE PODERES"
        sub="Correlaciones de Spearman entre atributos del dataset. Verde = alianza, rosa = rivalidad."
      />

      <Reveal delay={150}>
        <TiltCard className="panel corners rounded-xl" max={3}>
          <div className="space-y-6 p-6 sm:p-10">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>◀ RIVALIDAD (negativa) · centro = 0 · ALIANZA (positiva) ▶</span>
            </div>

            {correlaciones.map((c, i) => (
              <FilaCorrelacion key={c.par} c={c} i={i} />
            ))}
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}
