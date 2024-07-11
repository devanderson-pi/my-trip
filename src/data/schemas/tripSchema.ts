import i18next from 'i18next';
import { z, ZodSchema } from 'zod';

import { TripRegistration } from '../@types/tripTypes';

const message = i18next.t('errors.formValidation.requiredField', {
  ns: 'common',
});

export const tripSchema: ZodSchema<TripRegistration> = z.object({
  location: z.string({ required_error: message }).min(1, message),
  title: z.string({ required_error: message }).min(1, message),
});
