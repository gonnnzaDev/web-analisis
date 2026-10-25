import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import StatsBar from "./components/StatsBar.jsx";
import Hallazgos from "./components/Hallazgos.jsx";
import Generos from "./components/Generos.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Precios from "./components/Precios.jsx";
import Descuentos from "./components/Descuentos.jsx";
import Correlaciones from "./components/Correlaciones.jsx";
import Footer from "./components/Footer.jsx";
import AchievementToast from "./components/AchievementToast.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void font-tech text-slate-200 antialiased">
      <Nav />
      <Hero />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <StatsBar />
        <Hallazgos />
        <Generos />
        <Leaderboard />
        <Precios />
        <Descuentos />
        <Correlaciones />
      </main>
      <Footer />
      <AchievementToast />
      {/* Capas CRT */}
      <div className="scanlines pointer-events-none fixed inset-0 z-40" />
      <div className="vignette pointer-events-none fixed inset-0 z-40" />
    </div>
  );
}
