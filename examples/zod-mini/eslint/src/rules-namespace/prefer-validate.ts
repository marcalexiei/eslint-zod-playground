import * as z from 'zod/mini';

const nameSchema = z.string();

export const isValidName = (value: unknown) => z.safeParse(nameSchema, value).success;
