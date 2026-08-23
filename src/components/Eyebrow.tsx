export default function Eyebrow({
  children,
  tone = "steel",
}: {
  children: React.ReactNode;
  tone?: "steel" | "paper";
}) {
  const color = tone === "paper" ? "text-paper/50" : "text-steel";
  return (
    <p className={`mono text-xs uppercase tracking-[0.2em] ${color}`}>
      {children}
    </p>
  );
}
