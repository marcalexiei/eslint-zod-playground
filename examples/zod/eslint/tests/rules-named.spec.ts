import path from 'node:path';
import { describe, it } from 'node:test';

import { ESLint } from 'eslint';

import { mapEslintMessagesForSnapshot } from './test-utils.ts';

const eslint = new ESLint();

describe('named - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = path.join(import.meta.dirname, '../src/rules-named');

  describe('no-any-schema', () => {
    const filePath = path.join(rulesFolderPath, 'no-any-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });
  });
});
