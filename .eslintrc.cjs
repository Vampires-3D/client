module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module', project: ['./tsconfig.json']},
  plugins: ['react-refresh', 'prettier'],
  rules: {
    "no-unused-vars": "warn",
    "react/jsx-filename-extension": "off",
    "import/extensions": "warn",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "error",
    "react/jsx-props-no-spreading": "error",
    "no-param-reassign": "error",
    'react-refresh/only-export-components': 'warn',
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  }
}
