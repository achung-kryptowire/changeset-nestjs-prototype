#!/usr/bin/env zx

console.log(`====================== Installing dependencies ==============`);
await $`npm ci`;

console.log(`=============== Building dist =================================`);
await $`npm run build`;
