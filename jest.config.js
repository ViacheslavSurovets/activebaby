module.exports = {
  clearMocks: true,
  moduleFileExtensions: [ 'js', 'jsx' ],
  setupFiles: [ '<rootDir>/enzyme.config.js' ],
  testMatch: [ '**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)' ],
  testPathIgnorePatterns: [ '\\\\node_modules\\\\' ],
  transformIgnorePatterns: [ '<rootDir>/node_modules/' ],
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};
