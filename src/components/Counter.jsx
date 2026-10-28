import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

export default function Counter({ to, suffix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
