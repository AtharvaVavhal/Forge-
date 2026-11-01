import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const brandColors = [
  {
    name: "Midnight Indigo",
    hex: "#171338",
    role: "Primary brand ground & wordmark",
    contrast: "17.70:1 (AAA)",
    bgClass: "bg-[#171338]",
    textLight: true,
    border: false,
  },
  {
    name: "Nook Violet",
    hex: "#7657F6",
    role: "Primary accent & app icon ground",
    contrast: "4.70:1 (AA)",
    bgClass: "bg-[#7657F6]",
    textLight: true,
    border: false,
  },
  {
    name: "Soft Lavender",
    hex: "#F4F1FF",
    role: "Surface & panel tint",
    contrast: "15.90:1 (AAA)",
    bgClass: "bg-[#F4F1FF]",
    textLight: false,
    border: true,
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    role: "Reversed mark & card surface",
    contrast: "17.70:1 (AAA)",
    bgClass: "bg-white",
    textLight: false,
    border: true,
  },
  {
    name: "Primary Text",
    hex: "#26233D",
    role: "Body copy (not a logo colour)",
    contrast: "14.20:1 (AAA)",
    bgClass: "bg-[#26233D]",
    textLight: true,
    border: false,
  },
];

export default function NookBrandIdentity() {
  return (
    <section className="border-t border-paper/10 bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="05" label="Brand Identity & Design System" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            A precise, monoline visual identity built for product clarity.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            Nook maintains its own distinct visual identity within the Forge portfolio.
            Engineered around closed vector geometries with zero font dependencies, the brand
            couples Midnight Indigo with high-contrast Nook Violet to establish an unmistakable,
            accessible presence in both software consoles and mobile apps.
          </p>
        </Reveal>

        {/* Color Palette Grid */}
        <Reveal variant="subtle" delay={40} className="mt-12">
          <h3 className="mono text-xs uppercase tracking-wider text-steel">
            Official Approved Palette
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brandColors.map((c) => (
              <div
                key={c.hex}
                className="overflow-hidden rounded-xl border border-steel/20 bg-paper-elev p-3.5 shadow-sm"
              >
                <div
                  className={`h-16 w-full rounded-lg ${c.bgClass} ${
                    c.border ? "border border-steel/20" : ""
                  }`}
                />
                <div className="mt-3">
                  <p className="font-display text-sm font-bold text-ink">{c.name}</p>
                  <p className="mono mt-0.5 text-xs text-steel">{c.hex}</p>
                  <p className="mt-2 text-[11px] leading-tight text-ink/70">{c.role}</p>
                  <p className="mono mt-1 text-[10px] text-steel">WCAG: {c.contrast}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Logo Variations & Marks */}
        <Reveal variant="clip" delay={80} className="mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Primary on Light */}
            <div className="flex flex-col justify-between rounded-2xl border border-steel/20 bg-white p-6 shadow-sm md:p-8">
              <div>
                <span className="mono text-[11px] uppercase tracking-wider text-steel">
                  Primary Wordmark · Light Surface
                </span>
                <div className="relative mt-6 h-12 w-44">
                  <Image
                    src="/nook/nook-logo-primary.svg"
                    alt="Nook primary wordmark"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <p className="mono mt-6 text-xs text-steel">
                Midnight Indigo (#171338) on White / Soft Lavender
              </p>
            </div>

            {/* Reversed on Midnight Indigo */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#26233D] bg-[#171338] p-6 shadow-sm md:p-8">
              <div>
                <span className="mono text-[11px] uppercase tracking-wider text-white/50">
                  Reversed Wordmark · Dark Surface
                </span>
                <div className="relative mt-6 h-12 w-44">
                  <Image
                    src="/nook/nook-logo-white.svg"
                    alt="Nook white wordmark"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <p className="mono mt-6 text-xs text-white/60">
                Pure White (#FFFFFF) on Midnight Indigo
              </p>
            </div>
          </div>
        </Reveal>

        {/* Monogram, App Icon, and Geometry */}
        <Reveal variant="subtle" delay={120} className="mt-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Monogram Violet */}
            <div className="rounded-2xl border border-steel/20 bg-paper-elev p-6 text-center">
              <span className="mono text-[11px] uppercase tracking-wider text-steel">
                Monogram Symbol
              </span>
              <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#F4F1FF]">
                <div className="relative h-10 w-8">
                  <Image
                    src="/nook/nook-symbol-violet.svg"
                    alt="Nook violet monogram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-steel">Lowercase &apos;n&apos; monoline monogram</p>
            </div>

            {/* App Icon Rounded */}
            <div className="rounded-2xl border border-steel/20 bg-paper-elev p-6 text-center">
              <span className="mono text-[11px] uppercase tracking-wider text-steel">
                App Icon Master
              </span>
              <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/nook/nook-app-icon-rounded-1024.png"
                    alt="Nook App Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-steel">iOS/Android full-bleed Violet tile</p>
            </div>

            {/* Geometry Spec */}
            <div className="rounded-2xl border border-steel/20 bg-paper-elev p-6">
              <span className="mono text-[11px] uppercase tracking-wider text-steel">
                Construction Spec
              </span>
              <ul className="mt-3 space-y-1.5 mono text-[11px] text-ink/80">
                <li>• x-height: 100 units</li>
                <li>• Stroke weight: 16 units</li>
                <li>• 45° symmetric &apos;k&apos; arm &amp; leg</li>
                <li>• Min clear space: 32 units</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Visual Brand Board Reference */}
        <Reveal variant="clip" delay={160} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-steel/20 bg-paper-elev p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-steel/15 pb-4">
              <div>
                <span className="mono text-xs uppercase tracking-wider text-steel">
                  Official Asset Inspection
                </span>
                <h3 className="font-display text-lg font-bold text-ink">
                  Nook Brand Board &amp; System Geometry
                </h3>
              </div>
              <span className="mono rounded bg-paper px-2.5 py-1 text-xs text-steel">
                Asset Archive: nook-brand-assets
              </span>
            </div>
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-steel/10 bg-[#171338]">
              <Image
                src="/nook/nook-brand-board.png"
                alt="Nook official brand board with logo variations, palette, and icon guidelines"
                fill
                className="object-contain"
              />
            </div>
            <p className="mono mt-4 text-center text-xs text-steel">
              Official Nook Brand Board: Wordmark lockups, WCAG contrast verification, and UI tiles.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
