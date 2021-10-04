#!/usr/bin/env zx

await $`npm_config_registry=https://krwr.jfrog.io/artifactory/api/npm/main/ npm exec -- changeset publish`;
