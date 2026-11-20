// gta6-clipper-01 entry program.
//
// The whole entry is a single fact: the address of the YouTube video.
// This program copies VIDEO.json from the repository root into the
// output directory the grader names, byte for byte, and stays silent
// on success. Standard library only, no network, no clock.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "VIDEO.json");
const target = join(
  resolve(process.cwd(), process.env.MAKEFUN_OUTPUT_DIR ?? "out"),
  "VIDEO.json",
);

// The grader sets MAKEFUN_OUTPUT_DIR; a human running this by hand
// gets "out" next to the repository. Relative paths are read against
// the working directory, absolute ones are used as given.
mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);

// A copy that differs from the original would hand the grader a wrong
// or truncated address, so compare the two files byte for byte and
// fail loudly instead of reporting a silent success.
const original = readFileSync(source);
const copied = readFileSync(target);
if (!original.equals(copied)) {
  throw new Error("VIDEO.json copy does not match the original");
}
