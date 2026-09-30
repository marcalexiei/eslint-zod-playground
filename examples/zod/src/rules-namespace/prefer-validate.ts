import * as z from 'zod';

const nameSchema = z.string().trim();

export const isValidName = (value: unknown) => nameSchema.safeParse(value).success;
