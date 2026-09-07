"use client";

import { useRef, useState, type CSSProperties } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  axisIndex,
  cubeStates,
  faces,
  orientationMatrix,
  solution,
  type Cubie,
} from "@/lib/cube";

function CubePiece({ cubie }: { cubie: Cubie }) {
  const [x, y, z] = cubie.position;
  return (
    <div
      className="cube-piece"
      data-cubie={cubie.id}
      style={{
        transform: `translate3d(calc(${x} * var(--cubie-size)), calc(${y} * var(--cubie-size)), calc(${z} * var(--cubie-size))) ${orientationMatrix(cubie)}`,
      }}
    >
      {faces.map((face) => (
        <div key={face.name} className={`cubie-face cubie-${face.name}`}>
          {cubie.home[face.axis] === face.side && (
            <span
              className="cube-sticker"
              data-color={face.color}
              style={{ "--sticker": `var(--${face.color})` } as CSSProperties}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function RubiksCube() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.6 });
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const index = visible && reducedMotion ? solution.length : step;
  const solved = index === solution.length;
  const turn = visible && !solved ? solution[index] : undefined;
  const cube = cubeStates[index];
  const moving = (cubie: Cubie) =>
    turn && cubie.position[axisIndex[turn.axis]] === turn.layer;

  return (
    <div className="cube-widget">
      <div
        ref={ref}
        className="cube-stage"
        role="img"
        aria-label="A scrambled cube resolving into orderly, matching faces, representing learning and growth"
        data-state={solved ? "solved" : visible ? "solving" : "scrambled"}
        data-step={index}
      >
        <div className="cube-shadow" aria-hidden="true" />
        <div className="rubiks-cube" aria-hidden="true">
          {cube
            .filter((cubie) => !moving(cubie))
            .map((cubie) => (
              <CubePiece key={cubie.id} cubie={cubie} />
            ))}
          {turn && (
            <motion.div
              key={index}
              className="cube-layer"
              initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
              animate={{
                rotateX: turn.axis === "x" ? turn.direction * 90 : 0,
                rotateY: turn.axis === "y" ? turn.direction * 90 : 0,
                rotateZ: turn.axis === "z" ? turn.direction * 90 : 0,
              }}
              transition={{
                duration: 0.42,
                delay: index === 0 ? 0.3 : 0.08,
                ease: [0.45, 0, 0.2, 1],
              }}
              onAnimationComplete={() => setStep(index + 1)}
            >
              {cube.filter(moving).map((cubie) => (
                <CubePiece key={cubie.id} cubie={cubie} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
