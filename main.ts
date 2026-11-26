// The Meeting That Should Have Been an Email — one-line entry.
// Writes the single joke line to /output/entry.txt.
// Node 22 standard library only; no network, no dependencies.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The hook: the meeting's only output WAS the email —
// forty-five minutes of "circling back" produced a single action item:
// send the deck by email. The meeting was the email, delayed.
const LINE =
  "Forty-five minutes, twelve 'circling backs,' and the only action item was: send the deck by email.";

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, 'utf8');
