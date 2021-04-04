module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
}
