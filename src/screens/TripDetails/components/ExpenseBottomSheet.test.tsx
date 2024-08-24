import { screen } from '@testing-library/react-native';

import { customRender } from '../../../config/test/utils/customRender';
import { Expense } from '../../../data/@types/expenseType';
import ExpenseBottomSheet from './ExpenseBottomSheet';

describe('screens/TripDetails/components/ExpenseBottomSheet', () => {
  test('renders correctly', () => {
    const dismiss = jest.fn();
    const expense = {
      title: 'Test',
    } as Expense & { tripId: string };

    customRender(
      <ExpenseBottomSheet
        dismiss={dismiss}
        expense={expense}
      />
    );

    expect(screen.getByText('Test')).toBeOnTheScreen();
  });
});
