import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Reviews — White Teeth Dental, Mangaluru" },
      { name: "description", content: "Read reviews from patients at White Teeth Dental Mangaluru. Rated 4.9★ on Google with 88+ verified reviews." },
      { property: "og:title", content: "Patient Reviews — White Teeth Dental" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Reviews,
});

function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">What our patients say.</h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:p-12">
          <div className="text-amber-500 text-2xl">★★★★★</div>
          <blockquote className="mt-4 text-xl font-medium text-foreground md:text-2xl">"{t.text}"</blockquote>
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="grid h-14 w-14 place-items-center rounded-full gradient-brand text-white font-bold text-lg">{t.name[0]}</div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.role}</div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-2 rounded-full transition ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((r) => (
            <figure key={r.name} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="text-amber-500">★★★★★</div>
              <blockquote className="mt-3 text-sm text-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-white font-bold">{r.name[0]}</div>
                <div><div className="text-sm font-semibold">{r.name}</div><div className="text-xs text-muted-foreground">{r.role}</div></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}