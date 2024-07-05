import { commonEnUS, commonPtBR } from './common';
import {
  authErrorTranslationEnUS,
  authErrorTranslationPtBR,
} from './errors/authErrorTranslation';
import { navigationEnUS, navigationPtBR } from './navigation';
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
    signIn: signInTranslationEnUS,
    signUp: signUpTranslationEnUS,
  },
  'pt-BR': {
    authError: authErrorTranslationPtBR,
    common: commonPtBR,
    navigation: navigationPtBR,
    signIn: signInTranslationPtBR,
    signUp: signUpTranslationPtBR,
  },
};

export default resources;
