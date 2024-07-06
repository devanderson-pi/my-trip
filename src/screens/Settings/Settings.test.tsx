import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import { HomeTabScreenProps } from '../../navigation/types';
import Settings from '.';

test('renders correctly', () => {
  const navigation = {} as HomeTabScreenProps<'Settings'>['navigation'];
  const route = {} as HomeTabScreenProps<'Settings'>['route'];

  customRender(
    <Settings
      navigation={navigation}
      route={route}
    />
  );

  expect(screen.getByText('Sign out')).toBeOnTheScreen();
});
