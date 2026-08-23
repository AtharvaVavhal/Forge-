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
      className={`overflow-hidden rounded-2xl border border-steel/40 bg-ink shadow-xl ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
      </div>
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border border-dashed border-paper/15 m-3 rounded-lg px-6 text-center">
        <span className="mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
          {heading}
        </span>
        <span className="mono text-[11px] text-paper/30">{caption}</span>
      </div>
    </div>
  );
}
