// makefun-patch-notes — Real-Life Patch Notes: The Comedy Changelog
// Writes one 160-char-max patch note line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "v1.0.3: Fixed a bug where the brain auto-played your most embarrassing moment from 2011 at 3 AM instead of sleeping.";

// Gate: the entry must be 1-160 UTF-8 chars, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-160`);
}
if (ENTRY.includes("\n") || !ENTRY.trim()) {
  throw new Error("entry must be a single non-blank line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
