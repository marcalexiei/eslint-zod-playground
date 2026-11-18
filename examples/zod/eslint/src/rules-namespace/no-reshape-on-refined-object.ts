import * as z from 'zod';

z.object({ name: z.string() })
  .refine((value) => value.name.length > 0, { error: 'Name is required' })
  .pick({ name: true });
