import { ZodSchema } from 'zod';

import { z } from '../../config/i18next';
import { ExpenseRegistration } from '../@types/expenseType';

function convertCommaToDot(value: string): number {
  return parseFloat(value.replaceAll(',', '.'));
}

export const expenseSchema: ZodSchema<ExpenseRegistration> = z.object({
  amount: z.union([
    z
      .string()
      .transform(value => convertCommaToDot(value))
      .pipe(z.coerce.number().positive()),
    z.literal('').refine(() => false, {
      params: { i18n: 'errors.invalid_type_received_undefined' },
    }),
  ]),
  category: z.string().refine(val => !(val.length === 0), {
    params: { i18n: 'errors.invalid_type_received_undefined' },
  }),
  title: z.string().refine(val => !(val.length === 0), {
    params: { i18n: 'errors.invalid_type_received_undefined' },
  }),
});

expenseSchema.safeParse('');
