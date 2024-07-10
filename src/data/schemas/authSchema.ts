import i18next from 'i18next';
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
    name: z
      .string({
        required_error: i18next.t('formValidation.requiredField', {
          ns: 'authError',
        }),
      })
      .min(3, i18next.t('formValidation.nameTooShort', { ns: 'authError' })),
    email: z
      .string({
        required_error: i18next.t('formValidation.requiredField', {
          ns: 'authError',
        }),
      })
      .email(i18next.t('formValidation.invalidEmail', { ns: 'authError' })),
    password: z
      .string({
        required_error: i18next.t('formValidation.requiredField', {
          ns: 'authError',
        }),
      })
      .min(
        6,
        i18next.t('formValidation.passwordTooShort', { ns: 'authError' })
      ),
  })
  .required();
