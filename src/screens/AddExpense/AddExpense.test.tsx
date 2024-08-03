import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import { RootStackScreenProps } from '../../navigation/types';
import AddExpense from '.';

test('renders correctly', () => {
  const navigation = {} as RootStackScreenProps<'AddExpense'>['navigation'];
  const route = {
    params: {
      tripId: '',
    },
  } as RootStackScreenProps<'AddExpense'>['route'];

  customRender(
    <AddExpense
      navigation={navigation}
      route={route}
    />
  );

  expect(screen.getByText('Add expense')).toBeOnTheScreen();
});
