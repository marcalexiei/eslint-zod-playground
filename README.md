# eslint-plugin-zod-playground

Repository for "e2e" testing of

- [eslint-plugin-zod](https://npmx.dev/package/eslint-plugin-zod).
- [eslint-plugin-zod-mini](https://npmx.dev/package/eslint-plugin-zod-mini).

## Structure

Each plugin has one package per linter under `examples/<plugin>/`:

- `eslint` owns the fixtures in `src`;
- `oxlint` symlinks `src` to the ESLint one and does not depend on ESLint.
