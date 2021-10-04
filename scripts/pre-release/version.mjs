#!/usr/bin/env zx
const preFilePath = path.join(__dirname, '../../.changeset/pre.json');

if (await fs.pathExists(preFilePath)) {
  const pre = JSON.parse((await fs.readFile(preFilePath)).toString());
  if (pre.mode !== 'pre') {
    console.log(`============== Entering pre mode ================`);
    await $`npm exec -- changeset pre enter beta`;
  }
}

console.log('================== Versioning ==============');
await $`npm exec -- changeset version`;
