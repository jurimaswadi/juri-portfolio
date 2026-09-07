import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

// Compile the dependency-free model in memory, using the existing TypeScript dev dependency.
const source = readFileSync(
  new URL("../src/lib/cube.ts", import.meta.url),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
});
const { solvedCube, turnCube, cubeStates, solution, faces, axisIndex } =
  await import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
  );
const canonical = (value) => JSON.parse(JSON.stringify(value));
function exposedColors(cube, face) {
  return cube.flatMap((cubie) =>
    faces.flatMap((sticker) => {
      if (cubie.home[sticker.axis] !== sticker.side) return [];
      const normal = cubie.basis[sticker.axis].map(
        (component) => component * sticker.side,
      );
      return normal[face.axis] === face.side ? [sticker.color] : [];
    }),
  );
}

test("initial visible faces are genuinely mixed, with all 54 stickers preserved", () => {
  for (const face of faces) {
    const colors = exposedColors(cubeStates[0], face);
    assert.equal(colors.length, 9);
    if (["front", "top", "right"].includes(face.name))
      assert.ok(
        new Set(colors).size >= 3,
        `${face.name} should look scrambled`,
      );
  }
});

test("six legal layer turns solve every face without sticker substitutions", () => {
  let cube = cubeStates[0];
  for (const [index, turn] of solution.entries()) {
    assert.equal(
      cube.filter((c) => c.position[axisIndex[turn.axis]] === turn.layer)
        .length,
      9,
    );
    const previous = cube;
    cube = turnCube(cube, turn);
    assert.equal(new Set(cube.map((c) => c.position.join(","))).size, 26);
    for (const cubie of previous.filter(
      (c) => c.position[axisIndex[turn.axis]] !== turn.layer,
    ))
      assert.equal(
        cube.find((c) => c.id === cubie.id),
        cubie,
      );
    assert.deepEqual(canonical(cube), canonical(cubeStates[index + 1]));
  }
  assert.deepEqual(canonical(cube), canonical(solvedCube()));
  for (const face of faces)
    assert.deepEqual(exposedColors(cube, face), Array(9).fill(face.color));
});

test("each axis returns to its original arrangement after four quarter-turns", () => {
  for (const axis of ["x", "y", "z"]) {
    let cube = solvedCube();
    for (let i = 0; i < 4; i++)
      cube = turnCube(cube, { axis, layer: 1, direction: 1 });
    assert.deepEqual(canonical(cube), canonical(solvedCube()));
  }
});
