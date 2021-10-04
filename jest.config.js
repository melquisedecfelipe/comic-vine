module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/styles.ts',
    '!src/config/**/*.ts',
    '!src/mock/**',
    '!src/**/mock.ts',
    '!src/pages/**/*.ts(x)?',
    '!src/services/**/*.ts',
    '!src/styles/**',
    '!src/types/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
