# web-analisis

Dashboard gamer (React + Tailwind + three.js) con los resultados de una ejecución del pipeline **Steam Market Analysis**: 100 juegos analizados, top de jugadores conectados, géneros, rangos de precio, descuentos, gratis vs pago y correlaciones.

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- three.js + @react-three/fiber (escena 3D)
- CSS 3D (tilt de tarjetas, reveal con scroll)

## Desarrollo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Datos

Los datos provienen de los reportes generados por el pipeline (`reportes/tablas/*.csv` y `reportes/resumen_analisis.md`) y están embebidos en `src/data.js`.
