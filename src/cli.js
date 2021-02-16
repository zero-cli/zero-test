#!/usr/bin/env node
const { spawn } = require("child_process");
const path = require("path");

const [, , ...passthroughArgs] = process.argv;
const config = `--config=${require.resolve("./zero-jest-config")}`;

spawn(path.resolve("./node_modules/.bin/jest"), [config, ...passthroughArgs], {
  stdio: "inherit",
});
