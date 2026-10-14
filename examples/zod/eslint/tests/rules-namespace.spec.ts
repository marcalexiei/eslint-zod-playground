import path from 'node:path';
import { describe, it } from 'node:test';

import { ESLint } from 'eslint';

import { mapEslintMessagesForSnapshot } from './test-utils.ts';

const eslint = new ESLint();

describe('namespace - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = path.join(import.meta.dirname, '../src/rules-namespace');

  describe('array-style (function)', () => {
    const filePath = path.join(rulesFolderPath, 'array-style-function.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('array-style (method)', async () => {
    const filePath = path.join(rulesFolderPath, 'array-style-method.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('consistent-import-source', () => {
    const filePath = path.join(rulesFolderPath, 'consistent-import-source.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('consistent-import', () => {
    const filePath = path.join(rulesFolderPath, 'consistent-import.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('consistent-object-schema-type', () => {
    const filePath = path.join(rulesFolderPath, 'consistent-object-schema-type.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-any-schema', async () => {
    const filePath = path.join(rulesFolderPath, 'no-any-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-conflicting-checks', () => {
    const filePath = path.join(rulesFolderPath, 'no-conflicting-checks.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-duplicate-schema-methods', () => {
    const filePath = path.join(rulesFolderPath, 'no-duplicate-schema-methods.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-dynamic-schema-value', () => {
    const filePath = path.join(rulesFolderPath, 'no-dynamic-schema-value.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('no-empty-custom-schema', () => {
    const filePath = path.join(rulesFolderPath, 'no-empty-custom-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-function-scoped-schema', () => {
    const filePath = path.join(rulesFolderPath, 'no-function-scoped-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('no-number-schema-with-int', async () => {
    const filePath = path.join(rulesFolderPath, 'no-number-schema-with-int.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('no-optional-and-default-together', async () => {
    const filePath = path.join(rulesFolderPath, 'no-optional-and-default-together.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('no-throw-in-refine', async () => {
    const filePath = path.join(rulesFolderPath, 'no-throw-in-refine.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-unknown-schema', async () => {
    const filePath = path.join(rulesFolderPath, 'no-unknown-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('no-unnecessary-readonly', async () => {
    const filePath = path.join(rulesFolderPath, 'no-unnecessary-readonly.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-enum-over-literal-union', () => {
    const filePath = path.join(rulesFolderPath, 'prefer-enum-over-literal-union.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-meta-last', () => {
    const filePath = path.join(rulesFolderPath, 'prefer-meta-last.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-meta', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-meta.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-nullish', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-nullish.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('require-error-message', () => {
    const filePath = path.join(rulesFolderPath, 'no-any-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  it('consistent-schema-var-name', async () => {
    const filePath = path.join(rulesFolderPath, 'consistent-schema-var-name.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('schema-error-property-style', async () => {
    const filePath = path.join(rulesFolderPath, 'schema-error-property-style.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-string-schema-with-trim', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-string-schema-with-trim.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-trim-before-string-length-checks', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-trim-before-string-length-checks.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-string-length-over-min-max', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-string-length-over-min-max.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-map-set-size-over-min-max', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-map-set-size-over-min-max.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-tuple-over-array-length', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-tuple-over-array-length.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('prefer-validate', () => {
    const filePath = path.join(rulesFolderPath, 'prefer-validate.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });

  describe('require-brand-type-parameter', async () => {
    const filePath = path.join(rulesFolderPath, 'require-brand-type-parameter.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });
});
