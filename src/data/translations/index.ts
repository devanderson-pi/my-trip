import { commonEnUS, commonPtBR } from './common';
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
    common: commonEnUS,
    signIn: signInTranslationEnUS,
    signUp: signUpTranslationEnUS,
  },
  'pt-BR': {
    common: commonPtBR,
    signIn: signInTranslationPtBR,
    signUp: signUpTranslationPtBR,
  },
};

export default resources;
