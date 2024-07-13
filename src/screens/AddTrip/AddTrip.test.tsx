import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import { RootStackScreenProps } from '../../navigation/types';
import AddTrip from '.';

test('renders correctly', () => {
  const navigation = {} as RootStackScreenProps<'AddTrip'>['navigation'];
  const route = {} as RootStackScreenProps<'AddTrip'>['route'];

  customRender(
    <AddTrip
      navigation={navigation}
      route={route}
    />
  );

  expect(screen.getByText('Add trip')).toBeOnTheScreen();
});
