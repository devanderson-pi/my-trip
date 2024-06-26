/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/config/jest-setup.ts'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|@react-navigation|react-native)/)',
  ],
};

module.exports = config;
