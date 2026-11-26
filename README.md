# Funniest Cat Voicemail Greeting

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/ujang201/funniest-cat-voicemail/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/ujang201/funniest-cat-voicemail/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

One voicemail greeting as if a cat recorded it — at most 120 characters, judged in pairs by a house judge model.

## The greeting

> "You've reached Whiskers. I'm asleep in the box — leave a message, then go open a can at 4 a.m. Beep." (100 characters)

## Why it works

It is the cat speaking, not the owner writing about the cat. Two things every cat owner recognises: the cat asleep in the cardboard box, and the 4 a.m. demand that a can be opened. The classic voicemail shape — greeting, leave a message, beep — makes it land spoken aloud in the few seconds a caller waits. The closing "Beep." is part of the joke: the cat has learned the voicemail ritual and performs it, badly, on its own terms.

## How it runs

`main.ts` is a deterministic TypeScript program (Node 22): no randomness, no clock, no network, no input. It validates the greeting against the gate (UTF-8 text, 1–120 characters, not only whitespace, a single line) and writes it to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset).

```
node main.ts
```

Built with [make.fun](https://make.fun/r/wfjv7kgb).
