// @ts-check
import eslint from '@eslint/js';
import eslintPluginZodCore from 'eslint-plugin-zod-core';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...eslintPluginZodCore.configs.recommended,
    files: ['src/**'],
  },
  {
    files: ['src/rules-namespace/consistent-schema-output-type-style.ts'],
    rules: {
      'zod-core/consistent-schema-output-type-style': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-validate.ts'],
    rules: {
      'zod-core/prefer-validate': ['error'],
    },
  },
);
