/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["turbo", "prettier", "plugin:@typescript-eslint/recommended"],
};
