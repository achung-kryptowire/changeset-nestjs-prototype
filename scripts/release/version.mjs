#!/usr/bin/env zx
const preFilePath = path.join(__dirname, '../../.changeset/pre.json');

const pre = (await fs.pathExists(preFilePath))
  ? JSON.parse((await fs.readFile(preFilePath)).toString())
  : 'DNE';

if (pre !== 'DNE' && pre.mode === 'pre') {
  console.log(`============== Entering pre mode ================`);
  await $`npm exec -- changeset pre exit`;
}

console.log('================== Versioning ==============');
await $`npm exec -- changeset version`;
