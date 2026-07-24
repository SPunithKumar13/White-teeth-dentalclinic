import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CLINIC, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — White Teeth Dental, Mangaluru" },
      {
        name: "description",
        content:
          "Book your dental appointment online with White Teeth Dental Mangaluru. Quick, easy, confirmed within hours.",
      },
      { property: "og:title", content: "Book an Appointment — White Teeth Dental" },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: Appointment,
});

function Appointment() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const errors: Record<string, string> = {};
    if (!(f.get("name") as string)?.trim()) errors.name = "Please enter your name";
    if (!/^\+?[0-9\s-]{7,15}$/.test((f.get("phone") as string) || ""))
      errors.phone = "Enter a valid phone number";
    const email = (f.get("email") as string) || "";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Invalid email";
    if (!(f.get("date") as string)) errors.date = "Pick a date";
    setErr(errors);
    if (Object.keys(errors).length === 0) {
      const name = f.get("name") as string;
      const phone = f.get("phone") as string;
      const emailV = (f.get("email") as string) || "-";
      const treatment = (f.get("treatment") as string) || "-";
      const date = f.get("date") as string;
      const time = (f.get("time") as string) || "-";
      const message = (f.get("message") as string) || "-";
      const text =
        `*New Appointment Request*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Email:* ${encodeURIComponent(emailV)}%0A` +
        `*Treatment:* ${encodeURIComponent(treatment)}%0A` +
        `*Preferred Date:* ${encodeURIComponent(date)}%0A` +
        `*Preferred Time:* ${encodeURIComponent(time)}%0A` +
        `*Message:* ${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/${CLINIC.phoneRaw.replace(/[^0-9]/g, "")}?text=${text}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setSent(true);
      e.currentTarget.reset();
    }
  };

  const input =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-primary";
  const label = "text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Appointment
          </span>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Let's book your <span className="text-gradient-brand">next visit</span>.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Fill in the form and our team will confirm your slot within a few hours. Prefer to talk?
            Just call.
          </p>

          {sent ? (
            <div className="mt-8 rounded-3xl border border-secondary/40 bg-secondary/10 p-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <i className="fa-solid fa-check text-xl" />
              </div>
              <h2 className="mt-4 text-xl font-bold">WhatsApp opened!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your details were pre-filled in a WhatsApp chat with the clinic. Just tap{" "}
                <b>Send</b> to confirm — we'll reply shortly.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                If WhatsApp didn't open, please call {CLINIC.phone}.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-5 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold"
              >
                Book another
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className={label}>Full Name</span>
                  <input name="name" className={input} placeholder="Your full name" />
                  {err.name && <span className="text-xs text-destructive">{err.name}</span>}
                </label>
                <label className="grid gap-1.5">
                  <span className={label}>Phone</span>
                  <input name="phone" className={input} placeholder="+91 …" />
                  {err.phone && <span className="text-xs text-destructive">{err.phone}</span>}
                </label>
                <label className="grid gap-1.5">
                  <span className={label}>Email</span>
                  <input
                    name="email"
                    type="email"
                    className={input}
                    placeholder="you@example.com"
                  />
                  {err.email && <span className="text-xs text-destructive">{err.email}</span>}
                </label>
                <label className="grid gap-1.5">
                  <span className={label}>Treatment</span>
                  <select name="treatment" className={input} defaultValue="">
                    <option value="" disabled>
                      Select a treatment
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5">
                  <span className={label}>Preferred Date</span>
                  <input name="date" type="date" className={input} />
                  {err.date && <span className="text-xs text-destructive">{err.date}</span>}
                </label>
                <label className="grid gap-1.5">
                  <span className={label}>Preferred Time</span>
                  <input name="time" type="time" className={input} />
                </label>
              </div>
              <label className="grid gap-1.5">
                <span className={label}>Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className={input}
                  placeholder="Anything we should know?"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Request Appointment <i className="fa-solid fa-arrow-right text-xs" />
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary">
              Talk to us
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-3 rounded-xl bg-brand-soft p-3"
              >
                <i className="fa-solid fa-phone text-primary text-lg" />
                <span className="font-semibold">{CLINIC.phone}</span>
              </a>
              <WhatsAppLink className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 p-3">
                <i className="fa-brands fa-whatsapp text-[#25D366] text-lg" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </WhatsAppLink>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary">
              Hours
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {CLINIC.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span className="text-foreground">{h.day}</span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary">
              Address
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {CLINIC.address.line1}
              <br />
              {CLINIC.address.line2}
              <br />
              {CLINIC.address.city}, {CLINIC.address.state} – {CLINIC.address.pin}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
