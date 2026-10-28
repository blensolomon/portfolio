import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#e9e9ef] py-24 text-[#0c0c12]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="display-xl text-center text-[clamp(2.8rem,9vw,7rem)]">
          Services
        </h2>

        <div className="mt-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group grid gap-4 border-t border-black/15 py-10 last:border-b md:grid-cols-[auto_1fr_1.2fr] md:items-start md:gap-10"
            >
              <span className="display-xl text-4xl text-black/80 sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display-xl text-2xl sm:text-3xl">{s.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-black/20 px-3 py-1 text-xs font-medium text-black/60 transition-colors group-hover:border-black/40"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-black/60 md:justify-self-end">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
