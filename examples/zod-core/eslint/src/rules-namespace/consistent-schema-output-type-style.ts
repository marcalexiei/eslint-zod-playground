import * as core from 'zod/v4/core';

export type SchemaType<T extends core.$ZodType> = core.infer<T>;
