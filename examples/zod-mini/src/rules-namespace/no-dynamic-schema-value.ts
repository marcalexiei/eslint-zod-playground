import * as z from 'zod/mini';

z.date().check(z.maximum(new Date()));
