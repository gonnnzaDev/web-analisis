// ============================================================
// DATOS DE UNA EJECUCIÓN DEL PIPELINE "Steam Market Analysis"
// Fuente: reportes/tablas/*.csv + reportes/resumen_analisis.md
// ============================================================

export const meta = {
  fecha: "2026-10-17",
  pipeline: "pipeline.py · src/analisis/exploratorio.py",
  fuente: "100 juegos de Steam ordenados por lanzamiento reciente",
};

export const resumen = {
  totalJuegos: 100,
  jugadoresHoy: 3007,
  conDescuento: 58,
  gratis: 11,
  medianaPrecio: 3,
  anioMuestra: 2026,
};

export const generos = [
  { nombre: "Indie", juegos: 79, resenas: 1246, precioMedio: 2.99, jugadores: 2250 },
  { nombre: "Casual", juegos: 51, resenas: 210, precioMedio: 2.69, jugadores: 659 },
  { nombre: "Acción", juegos: 37, resenas: 262, precioMedio: 3.69, jugadores: 832 },
  { nombre: "Estrategia", juegos: 30, resenas: 760, precioMedio: 3.76, jugadores: 879 },
  { nombre: "Aventura", juegos: 27, resenas: 1089, precioMedio: 3.98, jugadores: 1704 },
  { nombre: "Simuladores", juegos: 23, resenas: 258, precioMedio: 3.28, jugadores: 1027 },
  { nombre: "Rol", juegos: 14, resenas: 684, precioMedio: 3.99, jugadores: 170 },
  { nombre: "Acceso anticipado", juegos: 14, resenas: 146, precioMedio: 4.56, jugadores: 108 },
  { nombre: "Free to Play", juegos: 11, resenas: 26, precioMedio: 0, jugadores: 12 },
  { nombre: "Deportes", juegos: 5, resenas: 1, precioMedio: 3.29, jugadores: 4 },
  { nombre: "Carreras", juegos: 4, resenas: 2, precioMedio: 1.57, jugadores: 4 },
  { nombre: "Multijugador masivo", juegos: 2, resenas: 16, precioMedio: 0, jugadores: 5 },
];

export const topJugadores = [
  { rank: 1, juego: "Tenebris Somnia", jugadores: 1037, resenas: 232, positivas: 95.3, precio: 3.99 },
  { rank: 2, juego: "Beyond These Stars", jugadores: 710, resenas: 67, positivas: 74.6, precio: 11.99 },
  { rank: 3, juego: "Flipping is Hard", jugadores: 380, resenas: 63, positivas: 92.1, precio: 5.55 },
  { rank: 4, juego: "Who's Cheating?", jugadores: 251, resenas: 9, positivas: 66.7, precio: 3.65 },
  { rank: 5, juego: "A Game About Needle In A Haystack", jugadores: 219, resenas: 64, positivas: 71.9, precio: 3.0 },
  { rank: 6, juego: "Penguin Colony", jugadores: 84, resenas: 59, positivas: 81.4, precio: 7.19 },
  { rank: 7, juego: "Order: The New Dawn", jugadores: 58, resenas: 58, positivas: 55.2, precio: 11.24 },
  { rank: 8, juego: "Blightstone", jugadores: 47, resenas: 574, positivas: 76.5, precio: 5.94 },
  { rank: 9, juego: "Dimenshot", jugadores: 45, resenas: 82, positivas: 93.9, precio: 4.37 },
  { rank: 10, juego: "Fuego y Agua: Espíritus del Bosque", jugadores: 42, resenas: 9, positivas: 55.6, precio: 2.28 },
];

export const rangosPrecio = [
  { rango: "Más barato", juegos: 22, min: 0, max: 1.39, descuento: 9.4, positivas: 100 },
  { rango: "Barato", juegos: 18, min: 1.49, max: 2.64, descuento: 25.8, positivas: 100 },
  { rango: "Medio", juegos: 20, min: 2.69, max: 3.69, descuento: 14.6, positivas: 100 },
  { rango: "Caro", juegos: 20, min: 3.75, max: 4.99, descuento: 14.0, positivas: 93.9 },
  { rango: "Más caro", juegos: 20, min: 5.21, max: 27.59, descuento: 10.0, positivas: 78.9 },
];

export const tramosDescuento = [
  { tramo: "Sin descuento", juegos: 42, positivas: 100, color: "slate" },
  { tramo: "1–25%", juegos: 35, positivas: 93.9, color: "neon" },
  { tramo: "26–50%", juegos: 23, positivas: 96.1, color: "magenta" },
];

export const gratisVsPago = [
  { tipo: "PAGO", juegos: 89, resenasMedianas: 0, jugadoresMedianos: 0, positivas: 95.3 },
  { tipo: "GRATIS", juegos: 11, resenasMedianas: 1, jugadoresMedianos: 1, positivas: 100 },
];

export const correlaciones = [
  { par: "Jugadores ↔ Reseñas", valor: 0.72, nota: "La asociación más fuerte del dataset" },
  { par: "Precio ↔ Logros", valor: 0.4, nota: "Los juegos más caros traen más logros" },
  { par: "Géneros ↔ Jugadores", valor: 0.34, nota: "Más etiquetas, más audiencia" },
  { par: "Precio ↔ % positivas", valor: -0.29, nota: "A mayor precio, más exigencia" },
  { par: "Jugadores ↔ % positivas", valor: -0.45, nota: "Popularidad no garantiza amor" },
  { par: "Reseñas ↔ % positivas", valor: -0.58, nota: "Volumen alto, opiniones divididas" },
];

// Formateo estilo es-AR: 3007 -> "3.007", 3.99 -> "3,99"
export function fmt(n, dec = 0) {
  if (dec > 0) return n.toFixed(dec).replace(".", ",");
  return Math.round(n).toLocaleString("es-AR");
}
