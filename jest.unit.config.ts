import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  // Print label next to tests while running to clarify which config file is in use
  displayName: 'unit',

  // Enable collection of test coverage statistics
  collectCoverage: true,

  // Specify the directory where Jest should output its coverage files
  coverageDirectory: 'coverage/unit',

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

  testMatch: ['<rootDir>/__tests__/unit/**/*.test.ts', '<rootDir>/__tests__/unit/**/*.test.tsx'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Define how TypeScript files should be transformed using ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
