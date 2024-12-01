export const defaultLang = 'en';
export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

export const languageNames = {
  en: 'English',
  de: 'Deutsch',
} as const;

// SEO related
export const languageRegions = {
  en: 'en_US',
  de: 'de_DE',
} as const;