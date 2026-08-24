export default function DeviceFramePlaceholder({
  heading = "Product screen placeholder",
  caption,
  className = "",
}: {
  heading?: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-steel/40 bg-ink shadow-xl transition-shadow duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
      </div>
      <div
        className="relative m-3 flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-dashed border-paper/15 px-6 text-center transition-transform duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] group-hover:scale-[1.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,236,223,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(242,236,223,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-paper/25" aria-hidden />
        <span className="mono mt-1 text-[11px] uppercase tracking-[0.2em] text-paper/40">
          {heading}
        </span>
        <span className="mono text-[11px] text-paper/30">{caption}</span>
      </div>
    </div>
  );
}
