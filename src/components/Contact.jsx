import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./icons";
import Reveal from "./Reveal";
import { EMAIL, socials } from "../data";

const inputCls =
  "w-full rounded-xl border border-line bg-[#0c0c12] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="display-xl text-center text-white text-[clamp(2.8rem,9vw,7rem)]">
            Contact
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-5xl leading-[1.05] text-white sm:text-7xl lg:text-8xl">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Let&apos;s build
                </motion.span>
                <motion.span
                  className="block text-accent"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  together
                </motion.span>
              </h3>

              <a
                href={`mailto:${EMAIL}`}
                className="nav-link mt-6 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-strong"
              >
                <Icon name="mail" className="h-4 w-4" />
                {EMAIL}
              </a>

              <div className="mt-8 flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-zinc-400 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent hover:shadow-[0_8px_30px_-8px_rgba(242,167,195,0.4)]"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.5rem] border border-line bg-surface-raised p-6 transition-shadow duration-300 hover:shadow-[0_24px_80px_-30px_rgba(242,167,195,0.25)] sm:p-8"
            >
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-300">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputCls}
                />
              </label>
              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-300">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </label>
              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-300">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project…"
                  className={`${inputCls} resize-none`}
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gradient mt-6 w-full rounded-full py-3 text-sm font-bold uppercase tracking-wider disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && (
                <p className="mt-3 text-center text-sm text-emerald-400">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center text-sm text-red-400">
                  Something went wrong — email me directly at {EMAIL}.
                </p>
              )}
              {status === "idle" && (
                <p className="mt-3 text-center text-xs text-zinc-600">
                  Goes straight to my inbox — I get notified instantly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
