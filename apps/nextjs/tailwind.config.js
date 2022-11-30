/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@acme/tailwind-config")],
  content: ["./src/**/*.{ts,tsx}", "./src/_app.tsx"],
};
