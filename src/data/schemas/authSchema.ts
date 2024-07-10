import i18next from 'i18next';
import { z, ZodSchema } from 'zod';

import { UserCredential, UserRegistration } from '../@types/authType';

export const signInSchema: ZodSchema<UserCredential> = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();

const required_error = i18next.t('errors.formValidation.requiredField', {
  ns: 'common',
});

export const signUpSchema: ZodSchema<UserRegistration> = z
  .object({
    name: z
      .string({ required_error })
      .min(3, i18next.t('formValidation.nameTooShort', { ns: 'authError' })),
    email: z
      .string({ required_error })
      .email(i18next.t('formValidation.invalidEmail', { ns: 'authError' })),
    password: z
      .string({ required_error })
      .min(
        6,
        i18next.t('formValidation.passwordTooShort', { ns: 'authError' })
      ),
  })
  .required();
