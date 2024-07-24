import { commonEnUS, commonPtBR } from './common';
import {
  authErrorTranslationEnUS,
  authErrorTranslationPtBR,
} from './errors/authErrorTranslation';
import { navigationEnUS, navigationPtBR } from './navigation';
import {
  addTripTranslationEnUS,
  addTripTranslationPtBR,
} from './screens/addTripTranslation';
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
import {
  tripDetailsTranslationEnUS,
  tripDetailsTranslationPtBR,
} from './screens/tripDetails';

const resources = {
  'en-US': {
    addTrip: addTripTranslationEnUS,
    authError: authErrorTranslationEnUS,
    common: commonEnUS,
    home: homeTranslationEnUS,
    language: languageTranslationEnUS,
    navigation: navigationEnUS,
    settings: settingsTranslationEnUS,
    signIn: signInTranslationEnUS,
    signUp: signUpTranslationEnUS,
    tripDetails: tripDetailsTranslationEnUS,
  },
  'pt-BR': {
    addTrip: addTripTranslationPtBR,
    authError: authErrorTranslationPtBR,
    common: commonPtBR,
    home: homeTranslationPtBR,
    language: languageTranslationPtBR,
    navigation: navigationPtBR,
    settings: settingsTranslationPtBR,
    signIn: signInTranslationPtBR,
    signUp: signUpTranslationPtBR,
    tripDetails: tripDetailsTranslationPtBR,
  },
};

export default resources;
