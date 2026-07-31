import type { Language } from "../../types";

const BLUE = "#2563eb";
const DOT_EMPTY = "#d1d5db";

// A language: name + level on the left, proficiency dots on the right.
export default function LanguageBar({ item }: { item: Language }) {
  const dots = [0, 1, 2, 3, 4];
  return (
    <div className="lang-item">
      <div>
        <p className="lang-name">{item.name}</p>
        <p className="lang-level">{item.level}</p>
      </div>
      <div className="dots">
        {dots.map((d) => (
          <span
            key={d}
            className="dot"
            style={{ background: d < item.dots ? BLUE : DOT_EMPTY }}
          />
        ))}
      </div>
    </div>
  );
}
