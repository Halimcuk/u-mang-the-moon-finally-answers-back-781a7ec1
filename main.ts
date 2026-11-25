// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// Writes the Moon's one-line comeback to <OUTPUT_DIR>/entry.txt.
// OUTPUT_DIR is read from the environment, falling back to "output".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I've kept a list of every wish for four billion years. Same three requests, no please, and somehow the wolves howling at me were the most honest ones.";

// Gate: 1 to 240 characters of UTF-8 text, not only whitespace.
// Counted in code points so multi-byte characters count once each.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 240 || ENTRY.trim().length === 0) {
  throw new Error(`Entry failed the length gate: ${chars} characters (must be 1-240).`);
}

const outputDir = process.env.OUTPUT_DIR || "output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`Wrote ${chars} characters to ${outPath}`);
