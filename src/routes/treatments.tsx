import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — White Teeth Dental, Mangaluru" },
      { name: "description", content: "Explore all treatments at White Teeth Dental: cleaning, whitening, RCT, crowns, implants, braces, aligners, veneers and more." },
      { property: "og:title", content: "Dental Treatments — White Teeth" },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: Treatments,
});

const CATS = ["All", "General", "Orthodontics", "Cosmetic", "Surgical", "Kids"] as const;

function Treatments() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const list = useMemo(() =>
    SERVICES.filter((s) =>
      (cat === "All" || s.category === cat) &&
      (s.title.toLowerCase().includes(q.toLowerCase()) || s.desc.toLowerCase().includes(q.toLowerCase()))
    ), [q, cat]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Treatments</span>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">Every treatment, gently delivered.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">From routine check-ups to complex smile makeovers — search a treatment or browse by category.</p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input aria-label="Search treatments" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search treatments…" className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none focus:border-primary" />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${cat === c ? "gradient-brand border-transparent text-white shadow-soft" : "border-border bg-card text-foreground/70 hover:bg-brand-soft"}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {list.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">No treatments match your search.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <article key={s.slug} className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-primary text-xl transition group-hover:gradient-brand group-hover:text-white">
                    <i className={`fa-solid ${s.icon}`} />
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{s.category}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/appointment" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Book this treatment <i className="fa-solid fa-arrow-right text-[10px]" /></Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}