import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...fixupConfigRules(
    compat.extends(
      "next/core-web-vitals",
      "plugin:import/recommended",
      "plugin:prettier/recommended",
    ),
  ),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": typescriptEslintPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      "react/jsx-props-no-spreading": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/require-default-props": "off",
      "react/function-component-definition": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/interactive-supports-focus": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "no-shadow": "off",
    },
  },
];

export default eslintConfig;
