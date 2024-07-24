export interface Expense {
  amount: number;
  category: string;
  createdAt: Date;
  id: string;
  title: string;
  tripId?: string;
}
