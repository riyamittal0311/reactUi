const config ={
  testURL: 'http://localhost/',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
      "^.+\\.scss$": 'jest-scss-transform',

  },
  transformIgnorePatterns:["/node_modules/", "\\.pnp\\.[^\\\/]+$","/node_modules/(?!axios)"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "setupFilesAfterEnv": [
    "<rootDir>/test/setupTests.js"
  ],
  "testEnvironment": "jsdom"
}


module.exports = config