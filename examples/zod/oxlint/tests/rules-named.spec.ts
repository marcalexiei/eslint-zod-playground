import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, it } from 'node:test';

import { runOxlint } from './test-utils.ts';

describe('named - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = path.join(import.meta.dirname, '../src/rules-named');

  describe('no-any-schema', () => {
    const filePath = path.join(rulesFolderPath, 'no-any-schema.ts');

    it('oxlint', async (t) => {
      const { code, diagnostics } = await runOxlint(filePath);

      assert.equal(code, 1);
      t.assert.snapshot(diagnostics);
    });
  });
});
