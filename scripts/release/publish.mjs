#!/usr/bin/env zx
await $`echo ${process.env.JFROG_NPMRC_B64} | base64 -d >> .npmrc`;

try {
  console.log(`====================== Installing dependencies ==============`);
  await $`npm ci`;

  console.log(
    `=============== Building dist =================================`,
  );
  await $`npm run build`;

  console.log(`========= Publishing repository ==========`);
  await $`npm_config_registry=https://krwr.jfrog.io/artifactory/api/npm/main/ npm exec -- changeset publish`;
} finally {
  await $`rm -rf .npmrc`;
}
