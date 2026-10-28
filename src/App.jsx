import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0a0a0f] text-zinc-300">
        <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
        <AnimatedBackground />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
