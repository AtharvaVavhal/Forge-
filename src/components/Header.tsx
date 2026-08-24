"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const mobileNav = (
    <div
      id="mobile-nav"
      className={`fixed inset-0 z-40 bg-ink pt-[73px] text-paper transition-[opacity,visibility] duration-200 md:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav className="flex h-full flex-col justify-between px-6 py-10">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`border-b border-paper/10 transition-[opacity,transform] duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className="font-display block py-4 text-2xl font-bold tracking-tight transition-colors hover:text-ember-bright"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="font-display rounded-full bg-ember-deep px-6 py-4 text-center text-base font-semibold text-paper"
        >
          Start a Project
        </Link>
      </nav>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-steel/20 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-ink"
        >
          FORGE
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`font-display group relative text-sm font-semibold transition-colors ${
                  active ? "text-ink" : "text-ink/80 hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-ember-deep transition-all duration-200 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="font-display hidden rounded-full bg-ember-deep px-5 py-2.5 text-sm font-semibold text-paper transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98] sm:inline-block"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {mounted ? createPortal(mobileNav, document.body) : null}
    </header>
  );
}
