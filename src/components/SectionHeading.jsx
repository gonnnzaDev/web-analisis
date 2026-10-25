import Reveal from "./Reveal.jsx";

export default function SectionHeading({ tag, title, sub }) {
  return (
    <Reveal className="mb-10 text-center [perspective:1200px]">
      <p className="font-pixel text-[10px] tracking-widest text-magenta">{tag}</p>
      <h2 className="mt-3 font-pixel text-2xl text-neon text-glow sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">{sub}</p>}
    </Reveal>
  );
}
