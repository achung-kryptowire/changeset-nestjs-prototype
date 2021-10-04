#!/usr/bin/env zx

console.log(`====================== Installing dependencies ==============`);
await $`npm ci`;

console.log(`=============== Building dist =================================`);
await $`npm run build`;

console.log(`========= Publishing repository ==========`);
await $`npm_config_registry=https://krwr.jfrog.io/artifactory/api/npm/main/ npm exec -- changeset publish`;
