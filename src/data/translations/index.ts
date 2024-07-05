import { commonEnUS, commonPtBR } from './common';
import {
  authErrorTranslationEnUS,
  authErrorTranslationPtBR,
} from './errors/authErrorTranslation';
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
    signIn: signInTranslationEnUS,
    signUp: signUpTranslationEnUS,
  },
  'pt-BR': {
    authError: authErrorTranslationPtBR,
    common: commonPtBR,
    signIn: signInTranslationPtBR,
    signUp: signUpTranslationPtBR,
  },
};

export default resources;
