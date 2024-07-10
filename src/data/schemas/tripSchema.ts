import { z, ZodSchema } from 'zod';

import { TripRegistration } from '../@types/tripTypes';

export const tripSchema: ZodSchema<TripRegistration> = z
  .object({
    location: z.string(),
    title: z.string(),
  })
  .required();
