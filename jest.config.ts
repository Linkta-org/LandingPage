import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const baseConfig: Config = {
  // Enable collection of test coverage statistics
  collectCoverage: true,

  // Specify the directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Define which coverage provider to use for code instrumentation
  coverageProvider: 'v8',

  // Resolve module path aliases to ensure modules are correctly imported during tests
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^test-utils$': '<rootDir>/test-utils/index',
    '^test-utils/(.*)$': '<rootDir>/test-utils/$1',
  },

  // Using TypeScript preset to handle TypeScript files
  preset: 'ts-jest',

  // Load additional Jest setup configuration from a separate file
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Define how TypeScript files should be transformed using ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

const unitConfig: Config = {
  ...baseConfig,
  displayName: 'unit',
  testMatch: ['<rootDir>/__tests__/unit/**/*.test.ts', '<rootDir>/__tests__/unit/**/*.test.tsx'],
  testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(baseConfig);
