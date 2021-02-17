const path = require("path");
const globby = require("globby");
const importCwd = require("import-cwd");
const tsconfig = require("./zero-tsconfig");

const rootDir = process.cwd();
const packageJson = importCwd.silent("./package.json");

let customJestConfig =
  importCwd.silent("./jest.config.js") || packageJson?.jest || {};

let testEnvironment = "node";
if (packageJson?.dependencies?.react || packageJson?.devDependencies?.react) {
  testEnvironment = "jsdom";
}

module.exports = async () => {
  if (typeof customJestConfig === "function") {
    customJestConfig = await customJestConfig();
  }

  const config = {
    rootDir,
    testEnvironment,
    errorOnDeprecated: true,
    ...customJestConfig,
  };

  let options = { gitignore: true };
  for await (const filepath of globby.stream("**/*.{ts,tsx}", options)) {
    config.preset = path.resolve("./node_modules/ts-jest");
    config.globals = {
      ...customJestConfig.globals,
      "ts-jest": { tsconfig },
    };
    break;
  }

  if (config.preset !== "ts-jest") {
    config.transform = {
      "\\.jsx?$": require.resolve("./zero-babel-transformer"),
    };
  }

  return config;
};
