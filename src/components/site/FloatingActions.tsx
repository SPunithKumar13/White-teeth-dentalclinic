import { useEffect, useState } from "react";
import { CLINIC } from "@/lib/site-data";
import { WhatsAppLink } from "./WhatsAppLink";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <WhatsAppLink
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      >
        <i className="fa-brands fa-whatsapp text-2xl" />
      </WhatsAppLink>
      <a
        href={`tel:${CLINIC.phoneRaw}`}
        aria-label="Call clinic"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full gradient-brand text-white shadow-soft transition hover:scale-105"
      >
        <i className="fa-solid fa-phone text-lg" />
      </a>
      {show && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground shadow-card hover:bg-brand-soft"
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      )}
    </>
  );
}