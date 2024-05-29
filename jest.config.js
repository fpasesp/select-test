const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|md)(\\?.*)?$": "identity-obj-proxy",
    "react-markdown":
      "<rootDir>/node_modules/react-markdown/react-markdown.min.js",
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
