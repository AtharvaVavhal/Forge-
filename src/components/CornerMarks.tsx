/**
 * Technical corner brackets — a restrained "viewfinder" mark used to frame
 * key visual elements (hero, featured work, case-study screens). Part of
 * Forge's editorial-engineering visual language. Parent must be `relative`.
 */
export default function CornerMarks({
  tone = "paper",
}: {
  tone?: "paper" | "ink";
}) {
  const color = tone === "paper" ? "border-paper/25" : "border-ink/15";
  const base = "absolute h-4 w-4 sm:h-5 sm:w-5";

  return (
    <>
      <span
        className={`${base} -left-2 -top-2 border-l border-t ${color}`}
        aria-hidden
      />
      <span
        className={`${base} -right-2 -top-2 border-r border-t ${color}`}
        aria-hidden
      />
      <span
        className={`${base} -bottom-2 -left-2 border-b border-l ${color}`}
        aria-hidden
      />
      <span
        className={`${base} -bottom-2 -right-2 border-b border-r ${color}`}
        aria-hidden
      />
    </>
  );
}
