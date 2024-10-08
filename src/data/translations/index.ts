import zodTranslationEn from 'zod-i18n-map/locales/en/zod.json';
import zodTranslationPt from 'zod-i18n-map/locales/pt/zod.json';

import { commonEnUS, commonPtBR } from './common';
import {
  authErrorTranslationEnUS,
  authErrorTranslationPtBR,
} from './errors/authErrorTranslation';
import { navigationEnUS, navigationPtBR } from './navigation';
import {
  addExpenseTranslationEnUS,
  addExpenseTranslationPtBR,
} from './screens/addExpenseTranslation';
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
    addExpense: addExpenseTranslationEnUS,
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
    zod: zodTranslationEn,
  },
  'pt-BR': {
    addExpense: addExpenseTranslationPtBR,
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
    zod: zodTranslationPt,
  },
};

export default resources;
