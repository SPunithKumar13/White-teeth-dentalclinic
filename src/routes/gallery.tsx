import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import aligners from "@/assets/aligners.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import receptionImg from "@/assets/reception-pic.png";
import hero from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Before & After | White Teeth Dental" },
      {
        name: "description",
        content:
          "Real smile transformations from White Teeth Dental Mangaluru — braces, aligners, veneers and whitening results.",
      },
      { property: "og:title", content: "Smile Gallery — White Teeth Dental" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: smile1, cap: "Cosmetic veneers" },
  { src: smile2, cap: "Ceramic braces" },
  { src: aligners, cap: "Invisible aligners" },
  { src: hero, cap: "Family smiles" },
  { src: receptionImg, cap: "Reception Area" },
  { src: treatmentRoom, cap: "Treatment suite" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Smile Gallery
        </span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
          Real smiles. <span className="text-gradient-brand">Real transformations.</span>
        </h1>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((im, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={im.src}
                alt={im.cap}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground opacity-0 transition group-hover:opacity-100">
                {im.cap}
              </div>
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"
          role="dialog"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
          <img
            src={IMAGES[open].src}
            alt={IMAGES[open].cap}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
