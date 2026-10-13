import * as z from 'zod';

export function buildSchema() {
  return z.string().trim();
}
