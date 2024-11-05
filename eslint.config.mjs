import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  {
    linterOptions: { reportUnusedDisableDirectives: "error" }
  },
  {
    rules: {
      eqeqeq: "off",
      curly: "error",
      "no-unused-vars": "off",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
    }
  }
];