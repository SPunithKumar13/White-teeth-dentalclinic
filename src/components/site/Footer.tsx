import { Link } from "@tanstack/react-router";
import { CLINIC, NAV } from "@/lib/site-data";
import { WhatsAppLink } from "./WhatsAppLink";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-brand-soft/30 to-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white">
              <i className="fa-solid fa-tooth" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display font-extrabold">White Teeth</span>
              <span className="text-xs text-muted-foreground">Dental & Orthodontic Centre</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">{CLINIC.tagline}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
            <span className="text-amber-500">★★★★★</span>
            <span className="font-semibold">{CLINIC.rating}</span>
            <span className="text-muted-foreground">({CLINIC.reviews} Google reviews)</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Braces & Aligners</li>
            <li>Dental Implants</li>
            <li>Root Canal Treatment</li>
            <li>Smile Designing</li>
            <li>Teeth Whitening</li>
            <li>Pediatric Dentistry</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
            <p>{CLINIC.address.line1}<br />{CLINIC.address.line2}<br />{CLINIC.address.city}, {CLINIC.address.state} – {CLINIC.address.pin}</p>
            <p><a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-primary"><i className="fa-solid fa-phone mr-2 text-primary" />{CLINIC.phone}</a></p>
            <p><WhatsAppLink className="hover:text-primary"><i className="fa-brands fa-whatsapp mr-2 text-primary" />WhatsApp</WhatsAppLink></p>
            <p><a href={`mailto:${CLINIC.email}`} className="hover:text-primary"><i className="fa-solid fa-envelope mr-2 text-primary" />{CLINIC.email}</a></p>
          </address>
          <div className="mt-4 flex gap-2">
            {["facebook-f", "instagram", "youtube", "x-twitter"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary">
                <i className={`fa-brands fa-${s}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Creating beautiful smiles in Mangaluru.</p>
        </div>
      </div>
    </footer>
  );
}