export default function Eyebrow({
  children,
  tone = "steel",
  number,
}: {
  children: React.ReactNode;
  tone?: "steel" | "paper";
  /** Section index for the sitewide ledger system, e.g. "01". */
  number?: string;
}) {
  const color = tone === "paper" ? "text-paper/50" : "text-steel";
  return (
    <p
      className={`mono flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] ${color}`}
    >
      <span className="eyebrow-tick h-px w-5 bg-current" aria-hidden />
      {number && <span className="tabular-nums">{number}</span>}
      {children}
    </p>
  );
}
