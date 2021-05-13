const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ng-halfmoon/tsconfig.spec.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/ng-halfmoon/src/**/*.ts',
    '!**/node_modules/**',
    '!**/ng-halfmoon/src/**/*.module.ts',
    '!**/ng-halfmoon/src/**/index.ts',
    '!**/ng-halfmoon/src/**/public-api.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/environments/**',
    '!**/src/setupJest.ts'
  ]
};
