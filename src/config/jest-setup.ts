import '@testing-library/react-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@gorhom/bottom-sheet', () => require('@gorhom/bottom-sheet/mock'));

jest.mock('@react-native-firebase/auth', () => ({
  auth: jest.fn(),
}));

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: jest.fn(),
}));

jest.mock('react-native-localization-settings');

jest.mock('react-native-snackbar', () => ({
  show: jest.fn(),
}));
