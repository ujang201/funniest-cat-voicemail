// Funniest Cat Voicemail Greeting — deterministic one-liner entry.
//
// The program writes exactly one voicemail greeting, recorded as if by a
// house cat, to $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR
// is unset). No randomness, no clock, no network, no input: the same bytes
// every run.
//
// The greeting plays on two things every cat owner recognises: the cat
// asleep in the cardboard box, and the 4 a.m. demand that a can be opened.
// The closing "Beep." is part of the joke — the cat has learned the
// voicemail ritual and performs it, badly, on its own terms.
// It is written as the cat speaking — "You've reached Whiskers" — with the
// classic voicemail shape (greeting, leave a message, beep) so it works
// spoken aloud in the few seconds a caller waits.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const GREETING =
  "You've reached Whiskers. I'm asleep in the box — leave a message, then go open a can at 4 a.m. Beep.";

// Gate enforced before writing: UTF-8 text, 1–120 characters, not only
// whitespace, a single line.
if (GREETING.length < 1 || GREETING.length > 120) {
  throw new Error(`greeting must be 1-120 characters, got ${GREETING.length}`);
}
if (GREETING.trim().length === 0) {
  throw new Error("greeting must not be only whitespace");
}
if (GREETING.includes("\n")) {
  throw new Error("greeting must be a single line");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), GREETING, "utf8");
