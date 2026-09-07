export type Vector = [number, number, number];
export type Axis = "x" | "y" | "z";
export type Turn = { axis: Axis; layer: number; direction: 1 | -1 };
export type Cubie = {
  id: string;
  home: Vector;
  position: Vector;
  basis: [Vector, Vector, Vector];
};
export const axisIndex = { x: 0, y: 1, z: 2 } as const;
export const faces = [
  { name: "front", axis: 2, side: 1, color: "candy" },
  { name: "back", axis: 2, side: -1, color: "flower" },
  { name: "right", axis: 0, side: 1, color: "apple" },
  { name: "left", axis: 0, side: -1, color: "peach" },
  { name: "top", axis: 1, side: -1, color: "apricot" },
  { name: "bottom", axis: 1, side: 1, color: "berry" },
] as const;

export function solvedCube(): Cubie[] {
  const cubies: Cubie[] = [];
  for (let x = -1; x <= 1; x++)
    for (let y = -1; y <= 1; y++)
      for (let z = -1; z <= 1; z++) {
        if (x === 0 && y === 0 && z === 0) continue;
        cubies.push({
          id: `${x},${y},${z}`,
          home: [x, y, z],
          position: [x, y, z],
          basis: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
        });
      }
  return cubies;
}

// Integer quarter-turns preserve both positions and sticker orientations exactly.
function rotate([x, y, z]: Vector, axis: Axis, direction: number): Vector {
  if (axis === "x") return [x, -direction * z, direction * y];
  if (axis === "y") return [direction * z, y, -direction * x];
  return [-direction * y, direction * x, z];
}
export function turnCube(cube: Cubie[], turn: Turn): Cubie[] {
  return cube.map((cubie) =>
    cubie.position[axisIndex[turn.axis]] !== turn.layer
      ? cubie
      : {
          ...cubie,
          position: rotate(cubie.position, turn.axis, turn.direction),
          basis: cubie.basis.map((vector) =>
            rotate(vector, turn.axis, turn.direction),
          ) as Cubie["basis"],
        },
  );
}
export function orientationMatrix(cubie: Cubie): string {
  return `matrix3d(${cubie.basis.map((vector) => [...vector, 0].join(",")).join(",")},0,0,0,1)`;
}
const scramble: Turn[] = [
  { axis: "x", layer: 1, direction: 1 },
  { axis: "y", layer: -1, direction: -1 },
  { axis: "z", layer: 1, direction: 1 },
  { axis: "x", layer: 1, direction: -1 },
  { axis: "y", layer: -1, direction: 1 },
  { axis: "z", layer: 1, direction: -1 },
];
export const solution: Turn[] = [...scramble]
  .reverse()
  .map((turn) => ({ ...turn, direction: -turn.direction as 1 | -1 }));
export const cubeStates = [scramble.reduce(turnCube, solvedCube())];
for (const turn of solution)
  cubeStates.push(turnCube(cubeStates[cubeStates.length - 1], turn));
