module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true,
      "experimentalObjectRestSpread": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "env": {
    "es6": true,
    "jest": true,
    "browser": true
  },
  "plugins": [
    "react",
    "prettier"
  ]
}
