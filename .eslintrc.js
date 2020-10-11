module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    // 'no-console': ['warn', {
    //   allow: ['warn', 'error']
    // }],
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': ['warn', 'always'],
    'prefer-const': ['error', {
      'destructuring': 'all',
      'ignoreReadBeforeAssign': true
    }],
    '@typescript-eslint/indent': ['error', 2, {
      VariableDeclarator: 2,
      SwitchCase: 1
    }],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/ban-types': 0,
    "@typescript-eslint/no-explicit-any": 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-triple-slash-reference': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/triple-slash-reference': ['error', {
      'path': 'always',
      'types': 'never',
      'lib': 'never'
    }],
  }
};