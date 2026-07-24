import { createFileRoute, Link } from "@tanstack/react-router";
import treatmentRoom from "@/assets/treatment-room.jpg";
import receptionImg from "@/assets/reception-pic.png";
import { CLINIC } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — White Teeth Dental & Orthodontic Centre, Mangaluru" },
      {
        name: "description",
        content:
          "Meet the team behind White Teeth Dental — our mission, vision and why families across Mangaluru trust us with their smiles.",
      },
      { property: "og:title", content: "About — White Teeth Dental" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const why = [
    {
      icon: "fa-microscope",
      title: "Modern Equipment",
      desc: "Digital X-rays, CBCT, laser & rotary systems for precise care.",
    },
    {
      icon: "fa-user-doctor",
      title: "Experienced Dentists",
      desc: "MDS-qualified specialists across every dental discipline.",
    },
    {
      icon: "fa-heart-pulse",
      title: "Patient-Centered Care",
      desc: "Every plan is personal — we listen before we treat.",
    },
    {
      icon: "fa-face-smile",
      title: "Pain-Free Procedures",
      desc: "Modern anaesthetics and gentle technique for calm visits.",
    },
    {
      icon: "fa-tag",
      title: "Transparent Pricing",
      desc: "No surprises — clear estimates before any treatment begins.",
    },
    {
      icon: "fa-shield-halved",
      title: "Strict Sterilization",
      desc: "Autoclaved instruments and hospital-grade hygiene protocols.",
    },
  ];
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          About the Clinic
        </span>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          A dental home built on{" "}
          <span className="text-gradient-brand">trust, technology & warmth</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {CLINIC.tagline}. For over a decade, White Teeth has been Mangaluru's calm, modern
          destination for families, professionals and children alike.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img
          src={receptionImg}
          alt="Reception area of White Teeth Dental & Orthodontic Centre"
          loading="lazy"
          width={1400}
          height={1000}
          className="rounded-3xl object-cover shadow-soft"
        />
        <div className="flex flex-col justify-center gap-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-2 inline-flex items-center gap-2 text-primary">
              <i className="fa-solid fa-bullseye" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Mission</span>
            </div>
            <p className="text-muted-foreground">
              To deliver world-class dental care that feels human — personalised, precise and
              completely pain-free.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-2 inline-flex items-center gap-2 text-primary">
              <i className="fa-solid fa-eye" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Vision</span>
            </div>
            <p className="text-muted-foreground">
              To be the most trusted smile studio on the coast — where every patient leaves feeling
              seen, safe and radiantly confident.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Why choose White Teeth</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w) => (
            <div
              key={w.title}
              className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                <i className={`fa-solid ${w.icon}`} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <img
            src={treatmentRoom}
            width={1200}
            height={900}
            alt="Modern treatment room"
            loading="lazy"
            className="rounded-2xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ready for a healthier smile?</h2>
            <p className="mt-3 text-muted-foreground">Book a consultation and meet the team.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-brand-soft"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
