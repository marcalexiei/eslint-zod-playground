import { z as zNamed } from 'zod/mini';
import * as z from 'zod/mini'; // Error: Import Zod Mini with a named import

z.object({});
zNamed.object({});
