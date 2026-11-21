import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';

import { lint } from './test-utils.ts';

const srcPath = path.join(import.meta.dirname, '../src');

for (const folder of fs.readdirSync(srcPath).filter((name) => name.startsWith('rules-'))) {
  describe(folder, () => {
    for (const file of fs.readdirSync(path.join(srcPath, folder))) {
      it(path.parse(file).name, async (t) => {
        t.assert.snapshot(await lint(path.join(srcPath, folder, file)));
      });
    }
  });
}
