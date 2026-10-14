import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { it } from 'node:test';

it('eslint is not resolvable from the plugin', () => {
  const pluginRequire = createRequire(import.meta.resolve('eslint-plugin-zod'));

  assert.throws(() => pluginRequire.resolve('eslint'), { code: 'MODULE_NOT_FOUND' });
});
