import { createFileRoute, Link } from "@tanstack/react-router";

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import drStanly from "@/assets/drstanly.png";

import { DOCTORS } from "@/lib/site-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — White Teeth Dental, Mangaluru" },
      {
        name: "description",
        content:
          "Meet the specialists at White Teeth Dental — experienced dentists in cosmetic dentistry, implants and orthodontics.",
      },
      { property: "og:title", content: "Our Doctors — White Teeth Dental" },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: Doctors,
});

const IMAGES: Record<string, string> = {
  drstanly: drStanly,
  "doctor-1": doctor1,
  "doctor-2": doctor2,
};

function Doctors() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Doctors
        </span>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          Specialists you can <span className="text-gradient-brand">trust</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {DOCTORS.map((d) => (
            <article
              key={d.name}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-soft">
                <img
                  src={IMAGES[d.image]}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {d.specialization}
                </div>
                <h2 className="mt-1 text-2xl font-extrabold">{d.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {d.qualification} · {d.experience}
                </p>
                <p className="mt-3 text-sm text-foreground/80">{d.bio}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {["linkedin-in", "instagram", "facebook-f"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        aria-label={s}
                        className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary"
                      >
                        <i className={`fa-brands fa-${s}`} />
                      </a>
                    ))}
                  </div>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
