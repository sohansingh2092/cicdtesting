module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['cobertura', 'html'],
    testResultsProcessor: 'jest-junit',
    reporters: [
      'default',
      [ 'jest-junit', { outputDirectory: './', outputName: 'jest-results.xml' } ]
    ],
    testEnvironment: 'jsdom',
  };
  