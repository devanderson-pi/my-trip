import { z, ZodSchema } from 'zod';

import { UserCredential } from '../@types/authType';

export const signInSchema: ZodSchema<UserCredential> = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();
