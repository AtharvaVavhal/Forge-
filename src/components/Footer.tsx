import Link from "next/link";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Reveal variant="fade" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-12 border-b border-paper/10 pb-12 md:flex-row md:justify-between md:pb-14">
          <div>
            <Logo className="h-7 w-auto text-paper" />
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              Web &amp; Software Development
              <br />
              Pune, Maharashtra, India
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold text-paper/80 transition-colors duration-[var(--duration-fast)] hover:text-ember-bright"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mono text-sm text-paper/70">
            <p>
              hello@forgebuilds.in{" "}
              <span className="text-paper/40">(TODO: confirm the email)</span>
            </p>
            <p className="mt-1.5">
              +91 86006 97250{" "}
              <span className="text-paper/40">(TODO: confirm phone)</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} FORGE. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
