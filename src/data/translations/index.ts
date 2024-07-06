import { commonEnUS, commonPtBR } from './common';
import {
  authErrorTranslationEnUS,
  authErrorTranslationPtBR,
} from './errors/authErrorTranslation';
import { navigationEnUS, navigationPtBR } from './navigation';
import {
  settingsTranslationEnUS,
  settingsTranslationPtBR,
} from './screens/settingsTranslation';
import {
  signInTranslationEnUS,
  signInTranslationPtBR,
} from './screens/signInTranslation';
import {
  signUpTranslationEnUS,
  signUpTranslationPtBR,
} from './screens/signUpTranslation';

const resources = {
  'en-US': {
    authError: authErrorTranslationEnUS,
    common: commonEnUS,
    navigation: navigationEnUS,
    settings: settingsTranslationEnUS,
    signIn: signInTranslationEnUS,
    signUp: signUpTranslationEnUS,
  },
  'pt-BR': {
    authError: authErrorTranslationPtBR,
    common: commonPtBR,
    navigation: navigationPtBR,
    settings: settingsTranslationPtBR,
    signIn: signInTranslationPtBR,
    signUp: signUpTranslationPtBR,
  },
};

export default resources;
