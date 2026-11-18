import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';

import { runOxlint } from './test-utils.ts';

const srcPath = path.join(import.meta.dirname, '../src');

for (const folder of fs.readdirSync(srcPath).filter((name) => name.startsWith('rules-'))) {
  describe(folder, () => {
    for (const file of fs.readdirSync(path.join(srcPath, folder))) {
      it(path.parse(file).name, (t) => {
        const { code, diagnostics } = runOxlint(path.join(srcPath, folder, file));

        assert.equal(code, 1);
        t.assert.snapshot(diagnostics);
      });
    }
  });
}
