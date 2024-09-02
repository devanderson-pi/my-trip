import { ZodSchema } from 'zod';

import { z } from '../../config/i18next';
import { TripRegistration } from '../@types/tripTypes';

export const tripSchema: ZodSchema<TripRegistration> = z.object({
  location: z.string().refine(val => !(val.length === 0), {
    params: { i18n: 'errors.invalid_type_received_undefined' },
  }),
  title: z.string().refine(val => !(val.length === 0), {
    params: { i18n: 'errors.invalid_type_received_undefined' },
  }),
});

tripSchema.safeParse('');
