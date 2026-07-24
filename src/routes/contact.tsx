import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CLINIC } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — White Teeth Dental, Kottara Chowki, Mangaluru" },
      {
        name: "description",
        content:
          "Visit White Teeth Dental at Kottara Chowki, Mangaluru. Call +91 86182 98078 or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact — White Teeth Dental" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
          We'd love to <span className="text-gradient-brand">hear from you</span>.
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white">
            <i className="fa-solid fa-location-dot" />
          </span>
          <h3 className="mt-4 font-bold">Address</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.city},{" "}
            {CLINIC.address.state} – {CLINIC.address.pin}
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white">
            <i className="fa-solid fa-phone" />
          </span>
          <h3 className="mt-4 font-bold">Phone & WhatsApp</h3>
          <p className="mt-1 text-sm">
            <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-primary">
              {CLINIC.phone}
            </a>
          </p>
          <p className="text-sm">
            <WhatsAppLink className="hover:text-primary">Chat on WhatsApp</WhatsAppLink>
          </p>
          <p className="text-sm">
            <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
              {CLINIC.email}
            </a>
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white">
            <i className="fa-regular fa-clock" />
          </span>
          <h3 className="mt-4 font-bold">Business Hours</h3>
          <ul className="mt-1 space-y-1 text-sm">
            {CLINIC.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-muted-foreground">{h.day}</span>
                <span className="font-semibold">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft"
          >
            <i className="fa-solid fa-phone" /> Call
          </a>
          <a
            href={CLINIC.mapDirections}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold"
          >
            <i className="fa-solid fa-diamond-turn-right text-primary" /> Directions
          </a>
          <WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white">
            <i className="fa-brands fa-whatsapp" /> WhatsApp
          </WhatsAppLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="White Teeth Dental location"
            src={CLINIC.mapEmbed}
            loading="lazy"
            className="h-[420px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
