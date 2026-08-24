/**
 * Editorial, masked word-by-word reveal for headline moments (hero, case
 * study masthead). Pure CSS (`.word-reveal` / `forge-word-in` in
 * globals.css) — no client JS, so it plays even before hydration and never
 * risks leaving text invisible if a script fails. Content is the literal
 * text in the DOM the whole time; only the visual reveal is animated.
 */
export default function TextReveal({
  text,
  as: Tag = "span",
  wordDelay = 40,
  startDelay = 0,
  className = "",
}: {
  text: string;
  as?: "span" | "h1" | "h2";
  /** Stagger between words, in ms. */
  wordDelay?: number;
  /** Delay before the first word starts, in ms. */
  startDelay?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="word-reveal">
            <span
              style={{ animationDelay: `${startDelay + i * wordDelay}ms` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
