#!/usr/bin/env node
const { spawn } = require("child_process");

const [, , ...passthroughArgs] = process.argv;
const config = `--config=${require.resolve("./zero-jest-config")}`;
spawn("jest", [config, ...passthroughArgs], { stdio: "inherit" });
