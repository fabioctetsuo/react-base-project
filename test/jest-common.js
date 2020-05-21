const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
    '^components(.*)$': '<rootDir>/src/components$1',
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
