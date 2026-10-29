import { motion } from "framer-motion";
import Rise from "./Rise";
import { EMAIL, PHONE, LOCATION, socials } from "../data";

const year = new Date().getFullYear();

const shapeClass = "h-11 w-11 sm:h-16 sm:w-16";

const shapes = [
  <svg key="ring" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <circle cx="32" cy="32" r="22" fill="none" stroke="#b9a6f2" strokeWidth="14" />
  </svg>,
  <svg key="star" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M32 6v52M10 20l44 26M10 46l44-26" stroke="#e845b8" strokeWidth="11" strokeLinecap="round" fill="none" />
  </svg>,
  <svg key="dome" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M10 52a22 22 0 0 1 44 0Z" fill="#f2f2f8" />
  </svg>,
  <svg key="chev" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M16 12 L38 32 L16 52 L30 52 L52 32 L30 12 Z" fill="#fb923c" />
  </svg>,
  <svg key="pac" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M32 32 L52 14 A26 26 0 1 0 52 50 Z" fill="#7c3aed" />
  </svg>,
  <svg key="dots" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <circle cx="18" cy="18" r="11" fill="#f2f2f8" />
    <circle cx="46" cy="18" r="11" fill="#f2f2f8" />
    <circle cx="18" cy="46" r="11" fill="#f2f2f8" />
    <circle cx="46" cy="46" r="11" fill="#f2f2f8" />
  </svg>,
  <svg key="stripes" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <rect x="10" y="12" width="44" height="10" rx="5" fill="#e845b8" />
    <rect x="10" y="27" width="44" height="10" rx="5" fill="#e845b8" />
    <rect x="10" y="42" width="44" height="10" rx="5" fill="#e845b8" />
  </svg>,
  <svg key="arch" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M12 52a20 20 0 0 1 40 0v4H40v-4a8 8 0 0 0-16 0v4H12Z" fill="#fb923c" />
  </svg>,
  <svg key="blob" viewBox="0 0 64 64" className={shapeClass} aria-hidden="true">
    <path d="M32 8c14 0 26 8 26 24s-12 24-26 24S6 46 6 32 18 8 32 8Z" fill="#b9a6f2" opacity="0.55" />
    <circle cx="24" cy="24" r="12" fill="#7c3aed" />
  </svg>,
];

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-between gap-14 rounded-[2rem] border border-line bg-[#101018] px-6 py-12 sm:px-12 sm:py-16">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <h2 className="font-bungee-outline leading-[1.02] text-[clamp(2.6rem,9.5vw,7rem)] uppercase text-[#e6e6ef]">
            <Rise>Blen</Rise>
            <Rise delay={0.12}>Solomon</Rise>
          </h2>

          <div className="flex gap-14 pt-2 sm:gap-20">
            <div>
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#5c5c6e]">
                Social
              </p>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link text-sm text-[#e6e6ef] transition-colors hover:text-accent"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#5c5c6e]">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-[#e6e6ef]">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="nav-link transition-colors hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${PHONE}`} className="nav-link transition-colors hover:text-accent">
                    {PHONE}
                  </a>
                </li>
                <li className="text-[#8a8a99]">{LOCATION}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-6">
          {shapes.map((shape, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="block cursor-default"
                  animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
                  transition={{
                    duration: 4 + i * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8 + i * 0.07,
                  }}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                >
                  {shape}
                </motion.span>
              </motion.span>
            </span>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-[11px] uppercase tracking-[0.2em] text-zinc-600">
        © {year} Blen Solomon — All rights reserved
      </p>
    </footer>
  );
}
