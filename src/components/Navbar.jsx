import { useEffect, useState } from "react";
import Icon from "./icons";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm uppercase tracking-widest text-white"
        >
          Blen<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-accent"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-zinc-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} stroke className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-[#0a0a0f]/95 px-5 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-accent"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
