import { ZodSchema } from 'zod';

import { z } from '../../config/i18next';
import { UserCredential, UserRegistration } from '../@types/authType';

export const signInSchema: ZodSchema<UserCredential> = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();

export const signUpSchema: ZodSchema<UserRegistration> = z
  .object({
    name: z.string().refine(val => !(val.length < 3), {
      params: { i18n: 'formValidation.nameTooShort' },
    }),
    email: z.string().email(),
    password: z.string().refine(val => !(val.length < 6), {
      params: { i18n: 'formValidation.passwordTooShort' },
    }),
  })
  .required();

signUpSchema.safeParse('');
