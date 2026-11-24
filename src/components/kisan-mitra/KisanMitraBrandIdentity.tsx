import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const colors = [
  { name: "Deep Forest", hex: "#174C38", role: "Primary, about 75–80% of any layout", light: true },
  { name: "Agricultural Green", hex: "#34785A", role: "Secondary bars and UI states", light: true },
  { name: "Harvest Gold", hex: "#C5A451", role: "Accent only, under 5% of area", light: false },
  { name: "Warm Ivory", hex: "#F7F7F2", role: "Light background", light: false, border: true },
  { name: "Deep Charcoal", hex: "#202923", role: "Body text and dark surfaces", light: true },
];

export default function KisanMitraBrandIdentity() {
  return (
    <section className="border-t border-steel/15 bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="05" label="Brand Identity" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            Quiet precision with human warmth.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            Kisan Mitra has its own identity inside the FORGE portfolio: a
            forest-green system, an Inter typeface, and a mark built from
            measurement lines with a single gold calibration notch.
          </p>
        </Reveal>

        <Reveal variant="subtle" delay={40} className="mt-12">
          <h3 className="mono text-xs uppercase tracking-wider text-steel">
            Approved palette
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {colors.map((c) => (
              <div
                key={c.hex}
                className="overflow-hidden rounded-xl border border-steel/20 bg-paper-elev p-3.5 shadow-sm"
              >
                <div
                  className={`h-16 w-full rounded-lg ${c.border ? "border border-steel/20" : ""}`}
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-3 font-display text-sm font-bold text-ink">{c.name}</p>
                <p className="mono mt-0.5 text-xs text-steel">{c.hex}</p>
                <p className="mt-2 text-[11px] leading-tight text-ink/70">{c.role}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="clip" delay={80} className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border border-steel/20 bg-white p-6 shadow-sm">
              <span className="mono text-[11px] uppercase tracking-wider text-steel">
                Primary · Light
              </span>
              <div className="relative mt-6 h-12 w-full">
                <Image
                  src="/kisan-mitra/kisan-mitra-primary-horizontal-transparent.svg"
                  alt="Kisan Mitra primary logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-[#174C38] bg-[#174C38] p-6 shadow-sm">
              <span className="mono text-[11px] uppercase tracking-wider text-[#F7F7F2]/70">
                Reverse · Dark
              </span>
              <div className="relative mt-6 h-12 w-full">
                <Image
                  src="/kisan-mitra/kisan-mitra-reverse-dark-transparent.svg"
                  alt="Kisan Mitra reverse logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-steel/20 bg-paper-elev p-6 shadow-sm">
              <span className="mono text-[11px] uppercase tracking-wider text-steel">
                App icon
              </span>
              <div className="relative mt-6 h-12 w-12 overflow-hidden rounded-xl">
                <Image
                  src="/kisan-mitra/kisan-mitra-app-icon-master.svg"
                  alt="Kisan Mitra app icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
