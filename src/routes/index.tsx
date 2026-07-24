import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-family.jpg";
import clinicImg from "@/assets/clinic-interior1.png";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import aligners from "@/assets/aligners.jpg";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CLINIC, SERVICES, STATS, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "White Teeth Dental & Orthodontic Centre — Mangaluru | Braces, Aligners & Implants",
      },
      {
        name: "description",
        content:
          "Mangaluru's trusted dental clinic in Kottara Chowki. Gentle, modern dentistry — braces, invisible aligners, implants, cosmetic dentistry. Rated 4.9★ on Google.",
      },
      { property: "og:title", content: "White Teeth Dental & Orthodontic Centre" },
      {
        property: "og:description",
        content: "Creating Beautiful Smiles with Gentle Care in Mangaluru.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function useCounter(target: number, run: boolean, duration = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.3,
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-3xl gradient-brand p-8 text-white shadow-soft md:grid-cols-4 md:p-12">
        {STATS.map((s) => {
          const n = useCounter(s.value, visible);
          return (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-extrabold md:text-5xl">
                {n.toLocaleString()}
                {s.suffix}
              </div>
              <div className="mt-1 text-sm text-white/85">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Home() {
  const featured = SERVICES.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary shadow-card">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now accepting new patients
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Your Smile Deserves <span className="text-gradient-brand">the Best Dental Care</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              {CLINIC.tagline}. Advanced dentistry, pain-free treatment, and experienced doctors —
              right in the heart of Mangaluru.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground">
              {["Advanced Dentistry", "Pain-Free Treatment", "Experienced Doctors"].map((f) => (
                <span key={f} className="inline-flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-secondary" />
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                <i className="fa-regular fa-calendar-check" /> Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-brand-soft"
              >
                <i className="fa-solid fa-phone text-primary" /> Call Now
              </a>
              <WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-95">
                <i className="fa-brands fa-whatsapp" /> WhatsApp
              </WhatsAppLink>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-teal" />
                <div className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-teal to-primary" />
                <div className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/70 to-teal/70" />
              </div>
              <div>
                <div className="text-amber-500">★★★★★</div>
                <div className="text-xs text-muted-foreground">
                  Rated <b className="text-foreground">4.9/5</b> by 88 happy patients
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={heroImg}
                alt="Smiling family at White Teeth Dental Clinic Mangaluru"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="animate-float absolute -left-4 top-8 hidden rounded-2xl border border-border bg-card p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-primary">
                  <i className="fa-solid fa-truck-medical" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Emergency</div>
                  <div className="text-sm font-semibold">24 × 7 Support</div>
                </div>
              </div>
            </div>
            <div
              className="animate-float absolute -bottom-4 left-6 rounded-2xl border border-border bg-card p-4 shadow-card"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="text-amber-500">★★★★★</div>
                <div>
                  <div className="text-sm font-bold">4.9 / 5</div>
                  <div className="text-[11px] text-muted-foreground">88 Google Reviews</div>
                </div>
              </div>
            </div>
            <div
              className="animate-float absolute -right-3 bottom-16 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-primary">
                  <i className="fa-regular fa-clock" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Open Today</div>
                  <div className="text-sm font-semibold">9:30 AM – 7:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee trust */}
      <section aria-hidden className="border-y border-border bg-card/60 py-4 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap px-6 text-sm font-medium text-muted-foreground">
          {[
            ..."ISO Certified · Digital X-Ray · Rotary Endodontics · CBCT Imaging · Laser Dentistry · Sterile Protocols · Digital Smile Design · Same-day Crowns · "
              .repeat(2)
              .split("·"),
          ].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <i className="fa-solid fa-tooth text-primary/60" />
              {t.trim()}
            </span>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={clinicImg}
            alt="Interior of White Teeth Dental Clinic"
            width={1400}
            height={1000}
            loading="lazy"
            className="rounded-3xl shadow-soft"
          />

          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-card md:block">
            <div className="text-3xl font-extrabold text-primary">10+</div>
            <div className="text-xs text-muted-foreground">Years of trusted care</div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About the Clinic
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            A modern dental home built around <span className="text-gradient-brand">you</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            At White Teeth, we combine cutting-edge technology with genuinely warm care. From your
            first check-up to complex orthodontics and implants, every visit is designed to be calm,
            transparent, and comfortable.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Modern Equipment",
              "Experienced Dentists",
              "Patient-Centered Care",
              "Pain-Free Procedures",
              "Affordable Pricing",
              "Sterile Protocols",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-check text-secondary" />
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn more about us <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Treatments
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Complete care under one roof
            </h2>
          </div>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all treatments <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <article
              key={s.slug}
              className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-primary text-xl transition group-hover:gradient-brand group-hover:text-white">
                <i className={`fa-solid ${s.icon}`} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to="/treatments"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Read more <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Ortho highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
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
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Orthodontics
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Straight teeth, effortlessly.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Metal, ceramic or completely invisible — we'll craft the orthodontic journey that fits
              your life.
            </p>
            <div className="mt-6">
              <Link
                to="/orthodontics"
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
              >
                Explore Orthodontics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Loved by families across Mangaluru
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div className="text-amber-500">★★★★★</div>
              <blockquote className="mt-3 text-sm text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read all reviews <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>
      </section>

      {/* Google reviews CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-soft text-primary text-2xl">
              <i className="fa-brands fa-google" />
            </div>
            <div>
              <div className="text-4xl font-extrabold text-foreground">
                4.9 <span className="text-amber-500">★★★★★</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Based on 88 verified Google reviews
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=White+Teeth+Dental+Mangaluru"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Read Google Reviews <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl gradient-brand p-8 text-white shadow-soft md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Dental tips, delivered gently.
              </h2>
              <p className="mt-2 text-white/85">
                Monthly oral-health tips and clinic offers. No spam — ever.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
                alert("Thanks for subscribing!");
              }}
            >
              <input
                required
                type="email"
                placeholder="you@example.com"
                aria-label="Email"
                className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white placeholder-white/70 outline-none focus:bg-white/20"
              />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-primary hover:bg-white/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-center md:flex-row md:text-left">
          <p className="flex items-center gap-3 text-sm font-medium text-foreground">
            <i className="fa-solid fa-truck-medical text-destructive text-lg" /> Dental emergency?
            We offer same-day appointments.
          </p>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-destructive-foreground"
          >
            <i className="fa-solid fa-phone" /> Call {CLINIC.phone}
          </a>
        </div>
      </section>

      <div className="sr-only" aria-hidden>
        <img src={smile1} alt="" />
      </div>
    </>
  );
}
