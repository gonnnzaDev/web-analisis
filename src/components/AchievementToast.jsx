import { useEffect, useState } from "react";

export default function AchievementToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 3500);
    const t2 = setTimeout(() => setShow(false), 11000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="panel corners flex max-w-sm items-center gap-4 rounded-lg p-4 shadow-[0_0_40px_rgba(255,214,0,0.15)]">
        <span className="animate-floaty text-3xl">🏆</span>
        <div>
          <p className="font-pixel text-[9px] tracking-widest text-gold text-glow-gold">
            ¡LOGRO DESBLOQUEADO!
          </p>
          <p className="mt-1.5 text-sm text-slate-300">
            <strong className="text-neon">Explorador de datos</strong> — dashboard
            cargado con los 100 juegos de la muestra.
          </p>
        </div>
      </div>
    </div>
  );
}
