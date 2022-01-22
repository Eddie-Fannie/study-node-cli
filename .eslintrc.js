module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  plugins: ['prettier', '@typescript-eslint'], //定义了该eslint文件所依赖的插件,
  extends: ['prettier'],
  rules: {
    'no-var': 'error',
    'prettier/prettier': 'error',
    semi: [2, 'always'],
    quotes: [2, 'single'],
  },
};