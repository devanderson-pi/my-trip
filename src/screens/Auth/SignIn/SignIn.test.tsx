import { screen } from '@testing-library/react-native';

import { customRender } from '../../../config/test/utils/customRender';
import { RootStackScreenProps } from '../../../navigation/types';
import SignIn from '.';

test('renders correctly', () => {
  const navigation = {} as RootStackScreenProps<'SignIn'>['navigation'];
  const route = {} as RootStackScreenProps<'SignIn'>['route'];

  customRender(
    <SignIn
      navigation={navigation}
      route={route}
    />
  );

  expect(screen.getByTestId('signInScreen')).toBeOnTheScreen();
});
