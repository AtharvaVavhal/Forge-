const items = ["Websites", "Web Applications", "E-Commerce", "Business Automation"];

export default function WhatWeBuild() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-6 border-t border-steel/20 pt-8 md:grid-cols-4">
          {items.map((item) => (
            <p
              key={item}
              className="font-display text-lg font-semibold text-ink md:text-xl"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
