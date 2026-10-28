const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs uppercase tracking-[0.2em] text-zinc-600 sm:flex-row sm:px-8">
        <p>© {year} Blen Solomon</p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
