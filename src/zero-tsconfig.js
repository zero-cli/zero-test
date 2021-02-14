const importCwd = require("import-cwd");

const packageJson = importCwd.silent("./package.json");

let jsx = "react";
if (packageJson?.dependencies?.next || packageJson?.devDependencies?.next) {
  jsx = "preserve";
}

module.exports = {
  // project options
  declaration: true,
  importHelpers: true,
  isolatedModules: true,
  jsx,
  lib: ["dom", "dom.iterable", "esnext"],
  module: "esnext",
  noEmit: true,
  sourceMap: true,
  // strict checks
  strict: true,
  // module resolution
  baseUrl: ".",
  esModuleInterop: true,
  moduleResolution: "node",
  // advanced
  forceConsistentCasingInFileNames: true,
  resolveJsonModule: true,
  skipLibCheck: true,
};
