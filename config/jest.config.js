module.exports = {
  rootDir: "../",
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleNameMapper: {
    "\\.(css|sass|png|jpg|jpeg)$": "<rootDir>/config/fileMock.js",
    "^Shared(.*)$": "<rootDir>/src/Components/Shared$1",
    "^Assets(.*)$": "<rootDir>/src/Assets$1",
    "^Actions(.*)$": "<rootDir>/src/Actions$1",
    "^Services(.*)$": "<rootDir>/src/Services$1"
  },
  setupFiles: ["<rootDir>/config/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false
};
