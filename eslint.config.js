export default defineConfig([
  globalIgnores(["dist"]),

  // Configuração para arquivos .js de frontend
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },

  // 👇 Novo bloco para arquivos Node.js
  {
    files: ["*.config.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: globals.node,
    },
  },
]);
