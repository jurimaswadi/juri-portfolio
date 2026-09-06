"use client";
import { useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Move,
} from "lucide-react";
const faces = ["front", "back", "right", "left", "top", "bottom"] as const;
export function RubiksCube() {
  const rotateX = useMotionValue(-24);
  const rotateY = useMotionValue(-32);
  const pointer = useRef<{ x: number; y: number; id: number } | null>(null);
  const turn = (x: number, y: number) => {
    rotateX.set(rotateX.get() + x);
    rotateY.set(rotateY.get() + y);
  };
  return (
    <div className="cube-widget">
      <div
        className="cube-stage"
        role="group"
        aria-label="Interactive Rubik’s cube"
        aria-describedby="cube-instructions"
        tabIndex={0}
        onKeyDown={(event) => {
          const turns: Record<string, [number, number]> = {
            ArrowLeft: [0, -20],
            ArrowRight: [0, 20],
            ArrowUp: [20, 0],
            ArrowDown: [-20, 0],
          };
          if (turns[event.key]) {
            event.preventDefault();
            turn(...turns[event.key]);
          }
          if (event.key === "Home") {
            event.preventDefault();
            rotateX.set(-24);
            rotateY.set(-32);
          }
        }}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          event.currentTarget.focus({ preventScroll: true });
          event.currentTarget.setPointerCapture(event.pointerId);
          pointer.current = {
            x: event.clientX,
            y: event.clientY,
            id: event.pointerId,
          };
        }}
        onPointerMove={(event) => {
          if (!pointer.current || pointer.current.id !== event.pointerId)
            return;
          turn(
            -(event.clientY - pointer.current.y) * 0.45,
            (event.clientX - pointer.current.x) * 0.45,
          );
          pointer.current = {
            x: event.clientX,
            y: event.clientY,
            id: event.pointerId,
          };
        }}
        onPointerUp={() => {
          pointer.current = null;
        }}
        onPointerCancel={() => {
          pointer.current = null;
        }}
        onLostPointerCapture={() => {
          pointer.current = null;
        }}
      >
        <div className="cube-shadow" aria-hidden="true" />
        <motion.div
          className="rubiks-cube"
          style={{ rotateX, rotateY }}
          aria-hidden="true"
        >
          {faces.map((face) => (
            <div key={face} className={`cube-face cube-${face}`}>
              {Array.from({ length: 9 }, (_, index) => (
                <span className="cube-tile" key={index} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      <p id="cube-instructions" className="cube-instructions">
        <Move size={15} /> Drag to explore, or use the arrow keys.
      </p>
      <div className="cube-controls" aria-label="Cube rotation controls">
        <button
          type="button"
          className="icon-button"
          aria-label="Rotate cube left"
          onClick={() => turn(0, -30)}
        >
          <ArrowLeft size={17} />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Rotate cube up"
          onClick={() => turn(30, 0)}
        >
          <ArrowUp size={17} />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Reset cube orientation"
          onClick={() => {
            rotateX.set(-24);
            rotateY.set(-32);
          }}
        >
          <RotateCcw size={16} />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Rotate cube down"
          onClick={() => turn(-30, 0)}
        >
          <ArrowDown size={17} />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Rotate cube right"
          onClick={() => turn(0, 30)}
        >
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
