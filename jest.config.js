const { join } = require('path');

module.exports = {
  roots: [join(__dirname, '/app')],
  testRegex: ['(.*\\-(test|spec))\\.[t]sx?$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest'
};
