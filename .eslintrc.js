module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/no-unused-vars-experimental": "warn",
    "object-curly-spacing": ["warn", "always"],
    "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/jsx-key": "error",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "react/react-in-jsx-scope": "off"
  }
};
