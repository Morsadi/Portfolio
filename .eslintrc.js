module.exports = {
 
  extends: ['airbnb', 'prettier'],
 
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'arrow-parens':0,
    "indent": ["error", 2]
  },
  parser: 'babel-eslint'
};
