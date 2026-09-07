"use client";

import { useRef, type CSSProperties } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Front-facing proportions stay vertical; only the individual pieces travel.
const parts = [
  { name: "left-foot", x: 26, y: 87, w: 21, h: 10, color: "rose" },
  { name: "right-foot", x: 53, y: 87, w: 21, h: 10, color: "rose" },
  { name: "left-leg", x: 30, y: 70, w: 14, h: 17, color: "green" },
  { name: "right-leg", x: 56, y: 70, w: 14, h: 17, color: "green" },
  { name: "torso", x: 27, y: 39, w: 46, h: 30, color: "pink" },
  { name: "left-shoulder", x: 10, y: 40, w: 15, h: 12, color: "yellow" },
  { name: "right-shoulder", x: 75, y: 40, w: 15, h: 12, color: "yellow" },
  { name: "left-arm", x: 11, y: 53, w: 13, h: 20, color: "green" },
  { name: "right-arm", x: 76, y: 53, w: 13, h: 20, color: "green" },
  { name: "neck", x: 44, y: 32, w: 12, h: 6, color: "peach" },
  { name: "head", x: 25, y: 11, w: 50, h: 20, color: "pink" },
  { name: "antenna", x: 47, y: 2, w: 6, h: 8, color: "rose" },
];

export function LegoAccent() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  return (
    <figure
      ref={ref}
      className="robot-figure"
      data-assembled={visible || !!reducedMotion}
      aria-label="An upright brick-built robot with a head, torso, two arms, and two legs"
    >
      <div className="robot-orbit orbit-one" aria-hidden="true" />
      <div className="robot-orbit orbit-two" aria-hidden="true" />
      <div className="robot-ground" aria-hidden="true" />
      <div className="robot-model" aria-hidden="true">
        {parts.map((part, index) => (
          <div
            key={part.name}
            className={`robot-brick robot-${part.name} brick-${part.color}`}
            style={
              {
                "--x": `${part.x}%`,
                "--y": `${part.y}%`,
                "--w": `${part.w}%`,
                "--h": `${part.h}%`,
                "--order": index,
                "--from-x": `${part.x < 40 ? -35 : part.x > 55 ? 35 : 0}px`,
                "--from-y": `${part.y > 70 ? 40 : -45}px`,
              } as CSSProperties
            }
          >
            {part.name === "head" ? (
              <span className="robot-face">
                <i />
                <i />
                <b />
              </span>
            ) : part.name === "torso" ? (
              <>
                <span className="robot-studs">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="robot-core">
                  <i />
                  <i />
                </span>
              </>
            ) : part.name !== "antenna" && part.name !== "neck" ? (
              <span className="robot-stud" />
            ) : null}
          </div>
        ))}
      </div>
      <figcaption>
        <span className="tiny-plus">+</span> A little curiosity. Piece by piece.
      </figcaption>
    </figure>
  );
}
