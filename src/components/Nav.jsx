const links = [
  { href: "#stats", label: "HUD" },
  { href: "#hallazgos", label: "HALLAZGOS" },
  { href: "#generos", label: "GÉNEROS" },
  { href: "#leaderboard", label: "TOPS" },
  { href: "#precios", label: "PRECIOS" },
  { href: "#correlaciones", label: "MATRIZ" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon/15 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="font-pixel text-[11px] text-neon text-glow tracking-wider">
          ◈ WEB·ANALISIS
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-pixel text-[9px] tracking-wider text-slate-400 transition-colors hover:text-neon"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <span className="hidden font-pixel text-[9px] text-gold tracking-wider sm:block">
          XP 100% <span className="text-neon">▓▓▓▓▓</span>
        </span>
      </div>
    </header>
  );
}
