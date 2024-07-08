import { commonEnUS, commonPtBR } from './common';
import {
  authErrorTranslationEnUS,
  authErrorTranslationPtBR,
} from './errors/authErrorTranslation';
import { navigationEnUS, navigationPtBR } from './navigation';
import {
  homeTranslationEnUS,
  homeTranslationPtBR,
} from './screens/homeTranslation';
import {
  languageTranslationEnUS,
  languageTranslationPtBR,
} from './screens/languageTranslation';
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
    home: homeTranslationEnUS,
    language: languageTranslationEnUS,
    navigation: navigationEnUS,
    settings: settingsTranslationEnUS,
    signIn: signInTranslationEnUS,
    signUp: signUpTranslationEnUS,
  },
  'pt-BR': {
    authError: authErrorTranslationPtBR,
    common: commonPtBR,
    home: homeTranslationPtBR,
    language: languageTranslationPtBR,
    navigation: navigationPtBR,
    settings: settingsTranslationPtBR,
    signIn: signInTranslationPtBR,
    signUp: signUpTranslationPtBR,
  },
};

export default resources;
