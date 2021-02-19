#!/usr/bin/env node
const { spawn } = require("child_process");
const os = require("os");
const path = require("path");

// path.basename(process.env._) === "npx"
if (process.env.DEBUG === "true") {
  console.log({
    jestBin: path.resolve("./node_modules/.bin/jest"),
    jestModule: require.resolve("jest"),
    tsjestPath: path.resolve("./node_modules/ts-jest"),
    tsjest: require.resolve("ts-jest"),
  });
}

const [, , ...passthroughArgs] = process.argv;
const config = `--config=${require.resolve("./zero-jest-config")}`;
spawn(path.resolve("./node_modules/.bin/jest"), [config, ...passthroughArgs], {
  shell: os.platform() === "win32",
  stdio: "inherit",
});
