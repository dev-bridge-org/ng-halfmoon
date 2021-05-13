const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ng-halfmoon-app/tsconfig.spec.json',
    },
  },
};
