import * as z from 'zod/mini';

z.pick(
  z
    .object({ name: z.string() })
    .check(z.refine((value) => value.name.length > 0, { error: 'Name is required' })),
  { name: true },
);
