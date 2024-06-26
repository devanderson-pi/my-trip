module.exports = {
  extends: '@react-native',
  plugins: ['simple-import-sort'],
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
  },
};
