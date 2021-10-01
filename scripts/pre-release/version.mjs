#!/usr/bin/env zx

await $`npm exec -- changeset pre enter beta`;
await $`npm exec -- changeset version`;
