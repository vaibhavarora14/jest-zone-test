module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/projects/zone-test/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ],
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/projects/zone-test/src/$1',
    '^app/(.*)$': '<rootDir>/projects/zone-test/src/app/$1',
    '^assets/(.*)$': '<rootDir>/projects/zone-test/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/projects/zone-test/src/environments/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
