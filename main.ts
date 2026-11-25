// Laugh Track: The Crypto Trading Joke Contest
// Writes one joke about crypto and trading life to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "I bought the dip, then the dip bought a shovel and kept digging.";

// Guard: the sealed scorer only accepts UTF-8 text of 1-200 chars, not only
// whitespace. Fail loudly here instead of writing an entry that can never score.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error(`entry text invalid: ${JOKE.length} chars`);
  process.exit(1);
}

const outDir = (process.env.MAKEFUN_OUTPUT_DIR || "/output").trim();
if (outDir.length === 0) {
  console.error("MAKEFUN_OUTPUT_DIR is empty");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
