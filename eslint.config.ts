import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import globals from "globals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintJs from "@eslint/js";
import { parser, configs as tseslintConfigs } from "typescript-eslint";
import { importX } from "eslint-plugin-import-x";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "dist/**",
    "build/**",
    "next-env.d.ts",
    "src/shared/components/ui/**",
  ]),

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.js", "**/*.mjs"],
    extends: [
      eslintJs.configs.recommended,
      tseslintConfigs.recommendedTypeChecked,
      tseslintConfigs.stylisticTypeChecked,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      nextVitals,
      nextTs,
    ],
    languageOptions: {
      parser: parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [
            "tsconfig.json",
            "apps/*/tsconfig.json",
            "packages/*/tsconfig.json",
          ],
        },
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
      ],
      "import-x/no-cycle": ["error", { maxDepth: 10, ignoreExternal: true }],
      "import-x/no-unresolved": "error",

      "@next/next/no-img-element": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "JSXOpeningElement[name.name='Image']:not(:has(JSXAttribute[name.name='width'])):not(:has(JSXAttribute[name.name='fill']))",
          message:
            "The <Image> component from next/image must have either a 'width' or 'fill' attribute.",
        },
        {
          selector:
            "JSXOpeningElement[name.name='Image']:not(:has(JSXAttribute[name.name='height'])):not(:has(JSXAttribute[name.name='fill']))",
          message:
            "The <Image> component from next/image must have either a 'height' or 'fill' attribute.",
        },
        {
          selector:
            "JSXOpeningElement[name.name='Image']:has(JSXAttribute[name.name='fill']):not(:has(JSXAttribute[name.name='sizes']))",
          message:
            "The <Image> component from next/image with 'fill' must have a 'sizes' attribute for performance.",
        },
      ],
    },
  },

  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/tests/**"],
    settings: {
      "import-x/core-modules": ["bun:test"],
    },
  },

  // PRETTIER - Must be last to disable conflicting rules
  eslintConfigPrettier,
]);

export default eslintConfig;
