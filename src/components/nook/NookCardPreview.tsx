import Image from "next/image";

export default function NookCardPreview() {
  return (
    <div className="group/nook relative overflow-hidden rounded-2xl border border-[#26233D]/70 bg-[#171338] text-white shadow-xl transition-all duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:border-[#7657F6]/50 hover:shadow-2xl">
      {/* Top Browser / App Chrome */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex items-center gap-2">
          <span className="mono text-[11px] uppercase tracking-[0.16em] text-white/50">
            trynook.in
          </span>
        </div>
        <span className="mono inline-flex items-center gap-1.5 rounded-full bg-[#7657F6]/20 px-2 py-0.5 text-[10px] font-medium text-[#A58FFF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7657F6] animate-pulse" />
          In Dev
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {/* Nook Brand Lockup */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="relative h-7 w-20">
            <Image
              src="/nook/nook-logo-white.svg"
              alt="nook"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Hostel &amp; PG SaaS
          </span>
        </div>

        {/* Visual Architecture & Inventory Representation */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-[#26233D]/60 p-2.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="mono text-[11px] text-[#A58FFF]">ORG</span>
              <span className="font-semibold text-white/90">Karve Nagar Campus</span>
            </div>
            <span className="mono rounded bg-[#7657F6]/30 px-1.5 py-0.5 text-[10px] text-[#F4F1FF]">
              Tenant Isolated
            </span>
          </div>

          {/* Floor & Bed Unit Hierarchy */}
          <div className="rounded-lg border border-white/10 bg-[#120F2D]/80 p-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="mono text-white/60">FLOOR 02 · ROOM 204</span>
              <span className="mono text-[10px] text-[#A58FFF]">2 BEDS</span>
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center justify-between rounded border border-white/10 bg-[#26233D]/70 px-2 py-1.5">
                <span className="mono text-[11px] text-white/80">Bed A</span>
                <span className="rounded bg-[#7657F6] px-1.5 py-0.5 text-[10px] font-medium text-white">
                  Occupied
                </span>
              </div>
              <div className="flex items-center justify-between rounded border border-dashed border-[#7657F6]/40 bg-[#7657F6]/10 px-2 py-1.5">
                <span className="mono text-[11px] text-[#F4F1FF]">Bed B</span>
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Engine Foundation Specs */}
          <div className="flex items-center justify-between pt-1 text-[11px] text-white/50">
            <span className="mono text-[10px] uppercase tracking-wider">
              NestJS · PostgreSQL · Prisma
            </span>
            <span className="mono text-[10px] text-[#A58FFF]">
              Phase 2 Foundation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
