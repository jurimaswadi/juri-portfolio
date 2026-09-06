import type { CSSProperties } from "react";
// A small original brick flower: pieces assemble once, with a static reduced-motion fallback.
const bricks = [
  [3, 8, 3, "green"],
  [4, 7, 1, "green"],
  [4, 6, 1, "green"],
  [4, 5, 1, "green"],
  [4, 4, 1, "green"],
  [2, 5, 2, "green"],
  [1, 4, 2, "green"],
  [5, 4, 2, "green"],
  [6, 3, 1, "green"],
  [3, 1, 3, "pink"],
  [2, 2, 2, "rose"],
  [5, 2, 2, "pink"],
  [3, 3, 3, "rose"],
  [4, 2, 1, "yellow"],
] as const;
export function LegoAccent() {
  return (
    <figure
      className="flower-figure"
      aria-label="A LEGO-inspired flower built from pink, yellow, and green pieces"
    >
      <div className="flower-orbit orbit-one" />
      <div className="flower-orbit orbit-two" />
      <div className="flower-grid" aria-hidden="true">
        {bricks.map(([x, y, width, color], index) => (
          <div
            key={index}
            className={`brick brick-${color}`}
            style={
              {
                "--x": x,
                "--y": y,
                "--w": width,
                "--order": index,
              } as CSSProperties
            }
          >
            {Array.from({ length: width }, (_, i) => (
              <span className="stud" key={i} />
            ))}
          </div>
        ))}
      </div>
      <figcaption>
        <span className="tiny-plus">+</span> A little curiosity. Piece by piece.
      </figcaption>
    </figure>
  );
}
