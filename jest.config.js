
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  collectCoverage: true,
  coverageReporters: [ 'html' ]
};