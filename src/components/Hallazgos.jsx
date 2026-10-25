import TiltCard from "./TiltCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const hallazgos = [
  {
    icon: "🏆",
    titulo: "CAMPEÓN DE LA ARENA",
    color: "text-gold",
    borde: "border-l-gold",
    texto: "Tenebris Somnia domina con 1.037 jugadores conectados, 95,3% de reseñas positivas y un precio de USD 3,99.",
  },
  {
    icon: "🧲",
    titulo: "LA CORRELACIÓN ESTRELLA",
    color: "text-neon",
    borde: "border-l-neon",
    texto: "Jugadores actuales ↔ Reseñas totales: Spearman = 0,72. Quien juega, opina. Es la relación más fuerte del dataset.",
  },
  {
    icon: "💸",
    titulo: "ESTACIÓN DE OFERTAS",
    color: "text-magenta",
    borde: "border-l-magenta",
    texto: "58 de 100 juegos con descuento activo. El tramo más frecuente es 1–25% con 35 juegos sobre oferta.",
  },
  {
    icon: "☁️",
    titulo: "FREE TO PLAY, RARO PERO QUERIDO",
    color: "text-neon",
    borde: "border-l-neon",
    texto: "Solo 11 gratis de 100. Sin embargo, tienen más reseñas medianas (1 vs 0) y el 100% de valoraciones positivas.",
  },
  {
    icon: "💰",
    titulo: "ECONOMÍA DE PRECIOS",
    color: "text-gold",
    borde: "border-l-gold",
    texto: "Precio mediano USD 3,00. El rango completo va de USD 0 a 27,59 y el rango barato es el que más descuento promedio tiene (25,8%).",
  },
  {
    icon: "📦",
    titulo: "EL LOOT MÁS RARO",
    color: "text-magenta",
    borde: "border-l-magenta",
    texto: "Deportes y Carreras son los géneros más imposibles de encontrar: solo 5 y 4 juegos, con 4 jugadores conectados entre ambos.",
  },
];

export default function Hallazgos() {
  return (
    <section id="hallazgos" className="scroll-mt-20 pt-24">
      <SectionHeading
        tag="// SECTOR 02"
        title="HALLAZGOS ÉPICOS"
        sub="Lo más importante que dejó esta ejecución del pipeline exploratorio."
      />

      <div className="grid gap-5 [perspective:1200px] md:grid-cols-2 lg:gap-6">
        {hallazgos.map((h, i) => (
          <Reveal key={h.titulo} delay={i * 70}>
            <TiltCard
              className={`panel corners h-full rounded-lg border-l-4 ${h.borde}`}
              max={8}
            >
              <div className="flex gap-4 p-6">
                <span className="text-3xl sm:text-4xl">{h.icon}</span>
                <div>
                  <h3 className={`font-pixel text-[10px] tracking-wider ${h.color}`}>
                    {h.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{h.texto}</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
