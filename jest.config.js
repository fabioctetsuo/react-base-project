module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.(js|jsx)'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 0,
      functions: 90,
      lines: 50,
    },
  },
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js',
  ],
};
