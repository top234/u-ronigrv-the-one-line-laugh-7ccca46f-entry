// The One-Line Laugh — one funny line, at most 200 characters.
// The program writes a single sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My smartwatch congratulated me on standing up, which is the saddest standing ovation of my life.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
