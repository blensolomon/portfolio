import { lazy, Suspense } from "react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats } from "../data";

const Scene = lazy(() => import("./Scene"));

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24 py-28">
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0">
          <Scene variant="about" />
        </div>
      </Suspense>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="display-xl text-white text-[clamp(2.8rem,9vw,7rem)]">
            About me
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-zinc-400">
            With experience across web development, video editing and AI
            automation, I specialize in work that looks great and runs itself —
            sites that load fast, edits that hold attention, and systems that do
            the boring parts for you. Let&apos;s create something amazing together!
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-3xl text-accent sm:text-4xl"
                />
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="#contact"
            className="btn-gradient mt-10 inline-block rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider"
          >
            Contact me
          </a>
        </Reveal>
      </div>
    </section>
  );
}
