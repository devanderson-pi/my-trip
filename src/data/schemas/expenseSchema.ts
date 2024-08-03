import i18next, { Namespace } from 'i18next';
import { z, ZodSchema } from 'zod';

import { ExpenseRegistration } from '../@types/expenseType';

const ns: Namespace = 'common';

const message = {
  invalidNumber: i18next.t('errors.formValidation.invalidNumber', { ns }),
  positiveNumber: i18next.t('errors.formValidation.positiveNumber', { ns }),
  requiredField: i18next.t('errors.formValidation.requiredField', { ns }),
};

function convertCommaToDot(value: string): number {
  return parseFloat(value.replaceAll(',', '.'));
}

export const expenseSchema: ZodSchema<ExpenseRegistration> = z.object({
  amount: z.union([
    z
      .string()
      .transform(value => convertCommaToDot(value))
      .pipe(
        z.coerce
          .number({ message: message.invalidNumber })
          .positive({ message: message.positiveNumber })
      ),
    z.literal('').refine(() => false, { message: message.requiredField }),
  ]),
  category: z
    .string({ required_error: message.requiredField })
    .min(1, message.requiredField),
  title: z
    .string({ required_error: message.requiredField })
    .min(1, message.requiredField),
});
