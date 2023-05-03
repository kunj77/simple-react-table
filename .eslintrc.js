module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
