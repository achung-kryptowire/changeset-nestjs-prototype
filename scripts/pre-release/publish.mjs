#!/usr/bin/env zx

const npmrcPath = `${await $`pwd`}/.npmrc`.replace(/\n/g, '');

if (!(await fs.pathExists(npmrcPath))) {
  await $`echo ${process.env.JFROG_NPMRC_B64} | base64 -d >> .npmrc`;

  process.on('end', async () => {
    await $`rm -rf .npmrc`;
  });
}

console.log(`=============== Building dist =================================`);
await $`npm run build`;

console.log(`========= Publishing repository ==========`);
await $`npm_config_registry=https://krwr.jfrog.io/artifactory/api/npm/main/ npm exec -- changeset publish`;
