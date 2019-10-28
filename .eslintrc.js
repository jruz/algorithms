module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  globals: {},
  env: {
    jest: true,
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'import/prefer-default-export': 0,
    'max-len': ['error', { code: 80, ignoreStrings: true, ignoreUrls: true }],
    'no-console': ['warn'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-plusplus': 0,
    'no-unused-vars': ['error'],
  },
  plugins: ['jest'],
};
