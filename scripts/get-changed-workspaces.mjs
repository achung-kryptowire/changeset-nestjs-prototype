#!/usr/bin/env zx

$.verbose = false;
await $`npx changeset status --output=temp.json`;
const releases = require('../../temp.json');
console.log(JSON.stringify(releases.releases.map(({ name }) => name)));
