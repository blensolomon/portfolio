import { motion } from "framer-motion";
import Rise from "./Rise";
import { EMAIL, socials } from "../data";

const year = new Date().getFullYear();

const shapeClass = "h-12 w-12 sm:h-16 sm:w-16";

const shapes = [
  <svg key="x" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M14 14 L50 50 M50 14 L14 50" stroke="#8b5cf6" strokeWidth="15" strokeLinecap="round" />
  </svg>,
  <svg key="dots" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <circle cx="18" cy="18" r="12" fill="#a3e635" />
    <circle cx="46" cy="18" r="12" fill="#a3e635" />
    <circle cx="18" cy="46" r="12" fill="#a3e635" />
    <circle cx="46" cy="46" r="12" fill="#a3e635" />
  </svg>,
  <svg key="pie" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M32 8 a24 24 0 0 1 0 48 L32 32 Z" fill="#f5f5f7" />
    <path d="M32 8 a24 24 0 0 0 0 48 L32 32 Z" fill="#f5f5f7" opacity="0.35" />
  </svg>,
  <svg key="circle" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <circle cx="32" cy="32" r="26" fill="#7c3aed" />
  </svg>,
  <svg key="chev" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M10 14 L28 32 L10 50 M32 14 L50 32 L32 50" stroke="#f5f5f7" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="bowtie" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M10 12 L54 12 L32 32 L54 52 L10 52 L32 32 Z" fill="#fb923c" />
  </svg>,
  <svg key="tri" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M32 10 L56 52 L8 52 Z" fill="#f5f5f7" />
    <path d="M32 30 L44 48 L20 48 Z" fill="#0a0a0f" />
  </svg>,
  <svg key="ring" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <circle cx="32" cy="32" r="22" fill="none" stroke="#ec4899" strokeWidth="14" />
  </svg>,
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0a0a0f] pb-10 pt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <h2 className="display-xl leading-[0.95] text-[clamp(2.8rem,10vw,7.5rem)]">
            <Rise>
              <span className="outline-text">Blen</span>
            </Rise>
            <Rise delay={0.1}>
              <span className="outline-text">Solomon</span>
            </Rise>
          </h2>

          <div className="flex gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Social
              </p>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link text-sm text-zinc-300 transition-colors hover:text-accent"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="nav-link transition-colors hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>Remote — worldwide</li>
                <li>Open to freelance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-center gap-4 sm:gap-6">
          {shapes.map((shape, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {shape}
              </motion.span>
            </span>
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] uppercase tracking-[0.2em] text-zinc-600">
          © {year} Blen Solomon — All rights reserved
        </p>
      </div>
    </footer>
  );
}
