import TiltCard from "./TiltCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { rangosPrecio, fmt } from "../data.js";

const tiers = [
  { texto: "text-neon", borde: "border-neon/30", barra: "from-neon to-neon/30" },
  { texto: "text-sky-300", borde: "border-sky-300/30", barra: "from-sky-300 to-sky-300/30" },
  { texto: "text-gold", borde: "border-gold/30", barra: "from-gold to-gold/30" },
  { texto: "text-orange-400", borde: "border-orange-400/30", barra: "from-orange-400 to-orange-400/30" },
  { texto: "text-magenta", borde: "border-magenta/30", barra: "from-magenta to-magenta/30" },
];

export default function Precios() {
  return (
    <section id="precios" className="scroll-mt-20 pt-24">
      <SectionHeading
        tag="// SECTOR 05"
        title="ARSENAL DE PRECIOS"
        sub="Cinco tiers según el precio final. En esta muestra, cada rango negocia con descuentos activos."
      />

      <div className="grid gap-4 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-5">
        {rangosPrecio.map((r, i) => {
          const c = tiers[i];
          return (
            <Reveal key={r.rango} delay={i * 70}>
              <TiltCard className={`panel h-full rounded-lg border ${c.borde}`} max={8}>
                <div className="flex h-full flex-col p-5 text-center">
                  <p className={`font-pixel text-[10px] tracking-wider ${c.texto}`}>
                    {r.rango.toUpperCase()}
                  </p>
                  <p className="mt-4 text-xl font-bold text-white">
                    ${fmt(r.min, 2)}
                    <span className="text-slate-500"> – </span>
                    ${fmt(r.max, 2)}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Nivel común del tier
                  </p>

                  <div className="mt-4 block h-px bg-white/10" />

                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-slate-300">
                      🎮 <span className="font-semibold">{r.juegos}</span> juegos
                    </p>
                    <p className="text-magenta">🏷️ -{fmt(r.descuento, 1)}% dto. promedio</p>
                    <p className="text-emerald-300">✅ {fmt(r.positivas, 1)}% positivas</p>
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${c.barra}`}
                        style={{ width: `${r.descuento}%` }}
                      />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 flex items-center justify-between font-pixel text-[9px] tracking-widest text-slate-500">
        <span>◀ MÁS BARATO</span>
        <span>MÁS CARO ▶</span>
      </p>
    </section>
  );
}
