export default function SectionLabel({
  number,
  label,
  tone = "steel",
}: {
  number: string;
  label: string;
  tone?: "steel" | "paper";
}) {
  const color = tone === "paper" ? "text-paper/50" : "text-steel";
  return (
    <div className="flex items-center gap-3">
      <span className={`mono text-xs ${color}`}>{number}</span>
      <span className={`mono text-xs uppercase tracking-[0.2em] ${color}`}>
        {label}
      </span>
    </div>
  );
}
