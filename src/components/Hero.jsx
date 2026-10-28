import { lazy, Suspense } from "react";
import Icon from "./icons";
import { socials } from "../data";

const Scene = lazy(() => import("./Scene"));

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0">
          <Scene variant="hero" />
        </div>
      </Suspense>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <h1 className="display-xl text-center text-white text-[clamp(3.2rem,12.5vw,10.5rem)]">
          Hi, I&apos;m Blen
        </h1>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-xs text-center text-sm leading-relaxed text-zinc-400 sm:text-left">
            A web developer, video editor &amp; AI automation specialist crafting
            bold and memorable projects.
          </p>
          <a
            href="#contact"
            className="btn-gradient rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider"
          >
            Contact me
          </a>
        </div>

        <div className="relative z-10 mx-auto -mt-4 sm:-mt-14">
          <img
            src="/portrait.jpg"
            alt="Blen Solomon"
            className="h-72 w-64 rounded-t-full border border-white/15 object-cover object-top shadow-2xl shadow-pink-500/10 sm:h-80 sm:w-72"
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
