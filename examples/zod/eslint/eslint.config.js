// @ts-check
import eslint from '@eslint/js';
import eslintPluginZod from 'eslint-plugin-zod';
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
    ...eslintPluginZod.configs.recommended,
    files: ['src/**'],
    rules: {
      ...eslintPluginZod.configs.recommended.rules,
      'zod/no-unknown-schema': ['error'],
      'zod/schema-error-property-style': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/array-style-function.ts'],
    rules: {
      'zod/array-style': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/consistent-import-source.ts'],
    rules: {
      'zod/consistent-import-source': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/consistent-object-schema-type.ts'],
    rules: {
      'zod/consistent-object-schema-type': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/array-style-method.ts'],
    rules: {
      'zod/array-style': ['error', { style: 'method' }],
    },
  },
  {
    files: ['src/rules-namespace/no-conflicting-checks.ts'],
    rules: {
      'zod/no-conflicting-checks': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-dynamic-schema-value.ts'],
    rules: {
      'zod/no-dynamic-schema-value': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-function-scoped-schema.ts'],
    rules: {
      'zod/no-function-scoped-schema': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-unnecessary-readonly.ts'],
    rules: {
      'zod/no-unnecessary-readonly': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-enum-over-literal-union.ts'],
    rules: {
      'zod/prefer-enum-over-literal-union': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-meta.ts'],
    rules: {
      'zod/prefer-meta': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-meta-last.ts'],
    rules: {
      'zod/prefer-meta-last': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-nullish.ts'],
    rules: {
      'zod/prefer-nullish': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-string-schema-with-trim.ts'],
    rules: {
      'zod/prefer-string-schema-with-trim': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-trim-before-string-length-checks.ts'],
    rules: {
      'zod/prefer-trim-before-string-length-checks': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-tuple-over-array-length.ts'],
    rules: {
      'zod/prefer-tuple-over-array-length': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-string-length-over-min-max.ts'],
    rules: {
      'zod/prefer-string-length-over-min-max': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-map-set-size-over-min-max.ts'],
    rules: {
      'zod/prefer-map-set-size-over-min-max': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-validate.ts'],
    rules: {
      'zod/prefer-validate': ['error'],
    },
  },
  {
    files: ['src/rules-named/*.ts'],
    rules: {
      'zod/consistent-import': ['off'],
    },
  },
  {
    files: ['src/rules-named-z/*.ts'],
    rules: {
      'zod/consistent-import': ['error', { syntax: 'named' }],
    },
  },
);
