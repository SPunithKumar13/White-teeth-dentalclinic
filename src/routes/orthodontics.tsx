import { createFileRoute, Link } from "@tanstack/react-router";

import aligners from "@/assets/aligners.jpg";
import smile2 from "@/assets/smile-2.jpg";

import p1 from "@/assets/patient1.png";
import p2 from "@/assets/patient2.png";
import p3 from "@/assets/patient3.png";
import p4 from "@/assets/patient4.png";
import p5 from "@/assets/patient5.png";
import p6 from "@/assets/patient6.png";
const PATIENTS = [
  {
    src: p1,
    tag: "Before & After",
    title: "Severe Crowding Corrected",
    desc: "Fixed metal braces resolved crowding and misalignment.",
  },
  {
    src: p2,
    tag: "Ceramic Braces",
    title: "Confident New Smile",
    desc: "Ceramic braces straightened teeth while maintaining a natural appearance.",
  },
  {
    src: p3,
    tag: "Metal Braces",
    title: "Full-mouth Realignment",
    desc: "Complete bite correction using coloured brackets.",
  },
  {
    src: p4,
    tag: "Expansion",
    title: "Upper Arch Expansion",
    desc: "Rapid maxillary expansion created proper spacing.",
  },
  {
    src: p5,
    tag: "Ceramic",
    title: "Ceramic Braces",
    desc: "Tooth-coloured braces for a discreet orthodontic treatment.",
  },
  {
    src: p6,
    tag: "Aligners",
    title: "Invisible Aligners",
    desc: "Clear aligners provided a comfortable and nearly invisible treatment.",
  },
];
export const Route = createFileRoute("/orthodontics")({
  head: () => ({
    meta: [
      { title: "Orthodontics — Braces & Invisible Aligners in Mangaluru" },
      {
        name: "description",
        content:
          "Metal braces, ceramic braces and invisible aligners at White Teeth Dental, Mangaluru. Straighten your smile with expert orthodontists.",
      },
      { property: "og:title", content: "Orthodontics — White Teeth Dental" },
      { property: "og:url", content: "/orthodontics" },
    ],
    links: [{ rel: "canonical", href: "/orthodontics" }],
  }),
  component: Ortho,
});

const TYPES = [
  {
    title: "Metal Braces",
    desc: "The classic and most economical option. Modern brackets are smaller and more comfortable than ever.",
    icon: "fa-grip-lines",
  },
  {
    title: "Ceramic Braces",
    desc: "Tooth-coloured brackets that blend in — ideal for adults and image-conscious teens.",
    icon: "fa-braille",
  },
  {
    title: "Invisible Aligners",
    desc: "Nearly invisible, removable trays that straighten teeth without brackets or wires.",
    icon: "fa-mask-face",
  },
];

const STEPS = [
  { t: "Consultation", d: "Digital scans, X-rays and a personalised plan." },
  { t: "Fit or Deliver", d: "Braces bonded, or your first aligner set delivered." },
  { t: "Adjustments", d: "Comfortable visits every 4–6 weeks." },
  { t: "Retention", d: "Retainers to lock in your beautiful new smile." },
];

const FAQ = [
  { q: "How long does treatment take?", a: "12–24 months on average, depending on complexity." },
  {
    q: "Are aligners as effective as braces?",
    a: "For most mild-to-moderate cases, yes. Complex cases may still need fixed braces.",
  },
  {
    q: "Do braces hurt?",
    a: "Mild soreness for a couple of days after each adjustment — completely manageable.",
  },
];

function Ortho() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Orthodontics
          </span>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Straight teeth. <span className="text-gradient-brand">Confident smile.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Braces align crooked, crowded or protruding teeth using gentle continuous force. We
            offer classic metal, discreet ceramic, and virtually invisible aligners.
          </p>
          <div className="mt-6">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Book Orthodontic Consult
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={smile2}
            alt="Ceramic braces"
            loading="lazy"
            width={900}
            height={900}
            className="h-full w-full rounded-2xl object-cover"
          />
          <img
            src={aligners}
            alt="Invisible aligners"
            loading="lazy"
            width={900}
            height={900}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Choose your journey</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {TYPES.map((t) => (
            <div key={t.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white text-xl">
                <i className={`fa-solid ${t.icon}`} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">The treatment process</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-4xl font-extrabold text-gradient-brand">0{i + 1}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Benefits</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Improved bite and chewing",
            "Easier to clean, healthier gums",
            "Boosted self-confidence",
            "Prevents jaw & TMJ issues",
          ].map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <i className="fa-solid fa-circle-check text-secondary" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Patient Results
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Real patients. <span className="text-gradient-brand">Real transformations.</span>
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A look at some of the orthodontic journeys completed at White Teeth Dental — from
            crowding and gaps to fully aligned, healthy smiles.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PATIENTS.map((p) => (
              <figure
                key={p.title}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-soft">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <span className="inline-block rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Photos shared with patient consent. Results vary based on individual conditions and
            treatment plans.
          </p>
        </div>

        <h2 className="mt-14 text-3xl font-extrabold sm:text-4xl">Frequently asked</h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="ml-3 text-primary transition group-open:rotate-45">
                  <i className="fa-solid fa-plus" />
                </span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
