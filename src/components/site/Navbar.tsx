import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV, CLINIC } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 min-w-0" aria-label={CLINIC.name}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-brand text-white shadow-soft">
            <i className="fa-solid fa-tooth text-lg" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-[15px] font-extrabold text-foreground">White Teeth</span>
            <span className="truncate text-[11px] font-medium text-muted-foreground">Dental & Orthodontic Centre</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition hover:text-foreground hover:bg-brand-soft"
              activeProps={{ className: "rounded-full px-3.5 py-2 text-sm font-semibold text-primary bg-brand-soft" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-semibold text-foreground hover:bg-brand-soft"
          >
            <i className="fa-solid fa-phone text-primary" /> Call
          </a>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Book Appointment <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground/80 hover:bg-brand-soft"
                activeProps={{ className: "rounded-lg px-3 py-2.5 text-[15px] font-semibold text-primary bg-brand-soft" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/appointment" className="mt-2 rounded-xl gradient-brand px-4 py-3 text-center text-sm font-semibold text-white">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}