import { lazy, Suspense, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Icon from "./icons";
import Typewriter from "./Typewriter";
import { socials } from "../data";

const Scene = lazy(() => import("./Scene"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.5 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function Portrait3D() {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(-py * 14);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 900 }}
      className="relative z-10 mx-auto -mt-6 sm:-mt-20"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
        }}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      >
        <motion.img
          src="/portrait-nobg.webp"
          alt="Blen Solomon"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-80 w-auto sm:h-[26rem] lg:h-[30rem]"
          style={{
            filter:
              "drop-shadow(0 24px 50px rgba(236,127,168,0.30)) drop-shadow(0 10px 20px rgba(0,0,0,0.55))",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0">
          <Scene variant="hero" />
        </div>
      </Suspense>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
      >
        <motion.h1
          variants={item}
          className="display-xl text-center text-white text-[clamp(3.2rem,12.5vw,10.5rem)]"
        >
          Hi, I&apos;m Blen
        </motion.h1>

        <motion.p variants={item} className="mt-3 text-center font-mono text-sm tracking-widest text-zinc-400 sm:text-base">
          <Typewriter />
        </motion.p>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <motion.p variants={item} className="max-w-xs text-center text-sm leading-relaxed text-zinc-400 sm:text-left">
            A web developer, video editor &amp; AI automation specialist crafting
            bold and memorable projects.
          </motion.p>
          <motion.a
            variants={item}
            href="#contact"
            className="btn-gradient rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider"
          >
            Contact me
          </motion.a>
        </div>

        <Portrait3D />

        <motion.div variants={item} className="mt-6 flex items-center justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-zinc-500 transition-all hover:-translate-y-0.5 hover:text-accent"
            >
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
