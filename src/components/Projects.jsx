import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "./icons";
import Reveal from "./Reveal";
import { projects } from "../data";

function ProjectCard({ project: p, index: i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <div ref={ref} className="sticky" style={{ top: `${88 + i * 44}px` }}>
      <motion.article
        style={{ scale, filter, transformOrigin: "center top" }}
        className="overflow-hidden rounded-[2rem] border border-line bg-surface-raised transition-colors duration-300 hover:border-accent/40"
      >
        <div className="flex items-center justify-between gap-4 px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="flex items-baseline gap-4">
            <span className="display-xl text-4xl text-white/90 sm:text-5xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Client
              </p>
              <h3 className="font-display text-lg uppercase text-white sm:text-xl">
                {p.client}
              </h3>
            </div>
          </div>
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider sm:px-6 sm:py-2.5"
          >
            Live project
            <Icon name="arrow" stroke className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="max-w-2xl px-6 pt-4 text-sm leading-relaxed text-zinc-400 sm:px-10">
          <span className="font-semibold text-zinc-200">{p.title} — </span>
          {p.description}
        </p>

        <div className="grid gap-3 p-6 sm:grid-cols-3 sm:p-10 sm:pt-6">
          <img
            src={p.image}
            alt={`${p.client} — ${p.title}`}
            loading="lazy"
            className="h-52 w-full rounded-2xl border border-line object-cover sm:col-span-2 sm:h-64"
          />
          <div className="grid grid-rows-2 gap-3">
            <img
              src={p.imageA}
              alt={`${p.client} — detail 1`}
              loading="lazy"
              className="h-24 w-full rounded-2xl border border-line object-cover sm:h-full"
            />
            <img
              src={p.imageB}
              alt={`${p.client} — detail 2`}
              loading="lazy"
              className="h-24 w-full rounded-2xl border border-line object-cover sm:h-full"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8">
      <Reveal>
        <h2 className="display-xl text-center text-white text-[clamp(2.8rem,9vw,7rem)]">
          Projects
        </h2>
      </Reveal>

      <div className="mt-14 space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.client} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
