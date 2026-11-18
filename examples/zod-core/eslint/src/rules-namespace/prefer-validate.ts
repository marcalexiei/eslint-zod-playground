import * as core from 'zod/v4/core';

export const isValid = (schema: core.$ZodType, value: unknown) =>
  core.safeParse(schema, value).success;
