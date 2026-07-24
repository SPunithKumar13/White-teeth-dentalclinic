import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="bg-primary/95 text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2"><i className="fa-solid fa-location-dot" /> Kottara Chowki, Mangaluru — Open Mon–Sat 9:30 AM – 7:30 PM</p>
          <p className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><span className="text-amber-300">★</span> 4.9 · 88 reviews</span>
            <span className="opacity-60">|</span>
            <a href="tel:+918618298078" className="hover:underline"><i className="fa-solid fa-phone mr-1" /> +91 86182 98078</a>
          </p>
        </div>
      </div>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}