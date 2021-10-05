#!/usr/bin/env zx

console.log('================== Versioning ==============');
await $`npm exec -- changeset version`;
