#!/usr/bin/env zx

console.log(`========= Publishing repository ==========`);
await $`npm_config_registry=https://krwr.jfrog.io/artifactory/api/npm/main/ npm exec -- changeset publish`;
