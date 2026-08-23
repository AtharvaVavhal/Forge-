import Link from "next/link";

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
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight">
              FORGE
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Web &amp; Software Development
            </p>
            <p className="text-sm text-paper/70">Pune, Maharashtra, India</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold text-paper/80 transition-colors hover:text-ember"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mono text-sm text-paper/70">
            <p>
              hello@forge.studio{" "}
              <span className="text-paper/40">(TODO: confirm email)</span>
            </p>
            <p className="mt-1">
              +91 00000 00000{" "}
              <span className="text-paper/40">(TODO: confirm phone)</span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} FORGE. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
