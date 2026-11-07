const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { require: "readonly", module: "readonly", console: "readonly" },
    },
    rules: {
      semi: ["error", "always"],
      eqeqeq: "error",
      "no-unused-vars": "error",
    },
  },
];
