module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:node/recommended',
  ],
  rules: {
    'max-len': ['error', {
      code: 120,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    // 'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'all' }],
  },
}
