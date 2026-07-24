import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — White Teeth Dental, Mangaluru" },
      {
        name: "description",
        content:
          "Answers to common questions about braces, aligners, cleanings, appointments and more at White Teeth Dental Mangaluru.",
      },
      { property: "og:title", content: "FAQs — White Teeth Dental" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
        Questions? <span className="text-gradient-brand">We've got answers.</span>
      </h1>
      <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold">
              <span>{f.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-primary transition group-open:rotate-45">
                <i className="fa-solid fa-plus text-xs" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
