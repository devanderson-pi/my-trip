import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import { RootStackScreenProps } from '../../navigation/types';
import TripDetails from '.';

test('renders correctly', () => {
  const navigation = {} as RootStackScreenProps<'TripDetails'>['navigation'];
  const route = {
    params: { location: 'test' },
  } as RootStackScreenProps<'TripDetails'>['route'];

  customRender(
    <TripDetails
      navigation={navigation}
      route={route}
    />
  );

  expect(screen.getByText('test')).toBeOnTheScreen();
});
