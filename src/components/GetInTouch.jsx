import { motion } from "framer-motion";
import Rise from "./Rise";
import { EMAIL } from "../data";

function Flower() {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className="h-20 w-20 sm:h-28 sm:w-28"
      animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <circle cx="60" cy="28" r="24" fill="#8b5cf6" />
      <circle cx="88" cy="50" r="24" fill="#7c3aed" />
      <circle cx="76" cy="82" r="24" fill="#a78bfa" />
      <circle cx="44" cy="82" r="24" fill="#8b5cf6" />
      <circle cx="32" cy="50" r="24" fill="#c4b5fd" />
      <circle cx="60" cy="58" r="22" fill="#6d28d9" />
    </motion.svg>
  );
}

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden bg-[#e9e9ef] py-24 text-[#0c0c12] sm:py-28">
      <div className="absolute -left-4 top-8 sm:left-10 sm:top-10">
        <Flower />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="display-xl text-[clamp(3.2rem,12vw,10rem)]">
          <Rise>
            <span className="text-[#b2b2bf]">Get in</span>
          </Rise>
          <Rise delay={0.12}>
            <span>Touch</span>
          </Rise>
        </h2>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Rise delay={0.2}>
            <a
              href={`mailto:${EMAIL}`}
              className="text-lg font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-accent-strong sm:text-2xl"
            >
              {EMAIL}
            </a>
          </Rise>
          <Rise delay={0.28}>
            <a
              href="#contact"
              className="inline-block rounded-full border-2 border-[#0c0c12] px-16 py-3 text-sm font-bold uppercase tracking-[0.3em] transition-colors hover:bg-[#0c0c12] hover:text-[#e9e9ef]"
            >
              Send
            </a>
          </Rise>
        </div>
      </div>
    </section>
  );
}
