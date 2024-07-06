import { screen } from '@testing-library/react-native';

import { customRender } from '../../../config/test/utils/customRender';
import { RootStackScreenProps } from '../../../navigation/types';
import SignUp from '.';

test('renders correctly', () => {
  const navigation = {} as RootStackScreenProps<'SignUp'>['navigation'];
  const route = {} as RootStackScreenProps<'SignUp'>['route'];

  customRender(
    <SignUp
      navigation={navigation}
      route={route}
    />
  );

  expect(screen.getByTestId('signUpScreen')).toBeOnTheScreen();
});
