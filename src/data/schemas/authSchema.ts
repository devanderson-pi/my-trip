import { z, ZodSchema } from 'zod';

import { UserCredential, UserRegistration } from '../@types/authType';

export const signInSchema: ZodSchema<UserCredential> = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();

export const signUpSchema: ZodSchema<UserRegistration> = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .required();
