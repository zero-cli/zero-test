const globby = require("globby");
const importCwd = require("import-cwd");
const tsconfig = require("./zero-tsconfig");

const packageJson = importCwd.silent("./package.json");
const rootDir = process.cwd();

let testEnvironment = "node";
if (packageJson?.dependencies?.react || packageJson?.devDependencies?.react) {
  testEnvironment = "jsdom";
}

module.exports = async () => {
  const config = {
    rootDir,
    testEnvironment,
    errorOnDeprecated: true,
    collectCoverageFrom: ["<rootDir>/src/**"],
    watchPathIgnorePatterns: [
      "<rootDir>/recordings",
      "<rootDir>/the-recordings",
    ],
  };

  for await (const path of globby.stream("src/**/*.{ts,tsx}")) {
    config.preset = "ts-jest";
    config.globals = {
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
