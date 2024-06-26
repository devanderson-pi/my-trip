import resources from '../data/translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en-US'];
  }
}
