import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import TiltCard from "./TiltCard.jsx";
import StatCounter from "./StatCounter.jsx";
import { tramosDescuento, gratisVsPago, resumen, fmt } from "../data.js";

const coloresSegmento = {
  slate: "bg-slate-600/50",
  neon: "bg-gradient-to-r from-neon/80 to-neon/40",
  magenta: "bg-gradient-to-r from-magenta/80 to-magenta/40",
};

const leyenda = {
  slate: "bg-slate-500",
  neon: "bg-neon",
  magenta: "bg-magenta",
};

export default function Descuentos() {
  const total = 100;

  return (
    <section id="descuentos" className="scroll-mt-20 pt-24">
      <SectionHeading
        tag="// SECTOR 06"
        title="ESTACIÓN DE DESCUENTOS"
        sub="Reparto del inventario según tramo de descuento, más el duelo de cantidad de juegos gratis vs de pago."
      />

      <Reveal>
        <TiltCard className="panel corners rounded-xl" max={3}>
          <div className="p-6 sm:p-10">
            <p className="text-center font-pixel text-lg text-neon text-glow">
              <StatCounter value={resumen.conDescuento} />
              <span className="text-slate-400">/{total} EN OFERTA 🔥</span>
            </p>

            {/* Barra segmentada */}
            <div className="mt-8 flex h-12 overflow-hidden rounded-lg border border-neon/20">
              {tramosDescuento.map((t) => (
                <div
                  key={t.tramo}
                  className={`flex items-center justify-center ${coloresSegmento[t.color]}`}
                  style={{ width: `${t.juegos}%` }}
                >
                  <span className="font-pixel text-[9px] text-white sm:text-[10px]">
                    {t.juegos}
                  </span>
                </div>
              ))}
            </div>

            {/* Leyenda */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {tramosDescuento.map((t) => (
                <div
                  key={t.tramo}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-200">
                    <span className={`inline-block h-2.5 w-2.5 rounded-sm ${leyenda[t.color]}`} />
                    {t.tramo}
                  </p>
                  <p className="mt-2 font-pixel text-xl text-white">{t.juegos}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    ✅ {fmt(t.positivas, 1)}% positivas mediano
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>
      </Reveal>

      {/* GRATIS VS PAGO */}
      <div className="mt-16 grid items-stretch gap-6 [perspective:1200px] md:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <TiltCard className="panel corners h-full rounded-xl border-l-4 border-l-neon">
            <div className="p-6 sm:p-8">
              <p className="font-pixel text-[10px] tracking-widest text-neon">PAGO 💳</p>
              <p className="mt-3 font-pixel text-3xl text-white">
                {gratisVsPago[0].juegos}
                <span className="text-sm text-slate-400"> juegos</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>📝 Reseñas medianas: {gratisVsPago[0].resenasMedianas}</li>
                <li>👥 Jugadores medianos: {gratisVsPago[0].jugadoresMedianos}</li>
                <li>
                  ✅ Positivas mediano:{" "}
                  <span className="text-emerald-300">{fmt(gratisVsPago[0].positivas, 1)}%</span>
                </li>
              </ul>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={120} className="self-center">
          <span className="block text-center font-pixel text-2xl text-magenta text-glow-magenta animate-flicker md:rotate-[-8deg]">
            VS
          </span>
        </Reveal>

        <Reveal delay={200}>
          <TiltCard className="panel corners h-full rounded-xl border-l-4 border-l-magenta">
            <div className="p-6 sm:p-8">
              <p className="font-pixel text-[10px] tracking-widest text-magenta">
                GRATIS 🆓
              </p>
              <p className="mt-3 font-pixel text-3xl text-white">
                {gratisVsPago[1].juegos}
                <span className="text-sm text-slate-400"> juegos</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>📝 Reseñas medianas: {gratisVsPago[1].resenasMedianas}</li>
                <li>👥 Jugadores medianos: {gratisVsPago[1].jugadoresMedianos}</li>
                <li>
                  ✅ Positivas mediano:{" "}
                  <span className="text-emerald-300">{fmt(gratisVsPago[1].positivas, 1)}%</span> 👑
                </li>
              </ul>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
