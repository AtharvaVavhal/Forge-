import Image from "next/image";

const rows = [
  { label: "Schedule search", tier: "Free" },
  { label: "Marathi chat, knowledge base first", tier: "Free + Pro" },
  { label: "Crop photo diagnosis", tier: "Pro" },
  { label: "Daily Marathi call", tier: "Pro" },
];

export default function KisanMitraCardPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#34785A]/40 bg-[#174C38] text-[#F7F7F2] shadow-xl transition-all duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:border-[#C5A451]/50 hover:shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="mono text-[11px] uppercase tracking-[0.16em] text-white/50">
          Illustrative
        </span>
        <span className="mono inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-[#F7F7F2]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5A451] animate-pulse" />
          In Dev
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="relative h-7 w-24">
            <Image
              src="/kisan-mitra/kisan-mitra-reverse-dark-transparent.svg"
              alt="Kisan Mitra"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Grape growers · Marathi
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between rounded-lg bg-white/[0.06] px-3 py-2 text-xs"
            >
              <span className="text-[#F7F7F2]/90">{r.label}</span>
              <span className="mono rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-[#F7F7F2]/80">
                {r.tier}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] text-white/50">
          <span className="mono text-[10px] uppercase tracking-wider">
            FastAPI · PostgreSQL · React Native
          </span>
        </div>
      </div>
    </div>
  );
}
