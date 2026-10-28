import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
      aria-hidden="true"
    >
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="font-display text-2xl uppercase tracking-wide text-white sm:text-3xl"
      >
        Blen<span className="text-accent">.</span>Solomon
      </motion.p>
    </motion.div>
  );
}
