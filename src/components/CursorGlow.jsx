import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const glowX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed left-0 top-0 z-[80] -ml-10 -mt-10 h-20 w-20 rounded-full bg-accent/25 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[80] -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
        aria-hidden="true"
      />
    </>
  );
}
