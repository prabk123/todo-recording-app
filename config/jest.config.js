module.exports = {
  rootDir: "../",
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleNameMapper: {
    "\\.(css|sass|png|jpg|jpeg|svg)$": "<rootDir>/config/fileMock.js",
    "^Shared(.*)$": "<rootDir>/src/components/Shared$1",
    "^Assets(.*)$": "<rootDir>/src/assets$1",
    "^Actions(.*)$": "<rootDir>/src/actions$1",
    "^Services(.*)$": "<rootDir>/src/services$1"
  },
  setupFiles: ["<rootDir>/config/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false
};
