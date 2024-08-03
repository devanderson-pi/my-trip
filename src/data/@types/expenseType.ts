export interface Expense {
  amount: number | string;
  category: string;
  createdAt: Date;
  id: string;
  title: string;
}

export type ExpenseRegistration = Omit<Expense, 'createdAt' | 'id'>;
