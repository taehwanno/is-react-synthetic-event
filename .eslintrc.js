module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['src/*'],
      env: {
        browser: true,
      },
    },
    {
      files: ['tests/**/*'],
      env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
      },
    },
  ],
  parser: 'babel-eslint',
};
