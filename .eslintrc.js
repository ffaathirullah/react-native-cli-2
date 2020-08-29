module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': ['error', { variables: false }],
    'max-classes-per-file': ['error', 10],
    'react/state-in-constructor': 'off',
    'react/prefer-stateless-function': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'no-lone-blocks': 'off',
    'react/jsx-no-undef': 'off',

  },
};
