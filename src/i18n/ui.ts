import type { SupportedLanguage } from './config';

export type Translation = {
  nav: {
    features: string;
    faq: string;
    download: string;
    language: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: {
      download: string;
      learnMore: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    list: {
      smartDetection: {
        title: string;
        description: string;
      };
      safeRemoval: {
        title: string;
        description: string;
      };
      quickPreview: {
        title: string;
        description: string;
      };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      howItWorks: {
        question: string;
        answer: string;
      };
      isSafe: {
        question: string;
        answer: string;
      };
      fileTypes: {
        question: string;
        answer: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
  };
  footer: {
    privacy: string;
    terms: string;
    imprint: string;
    copyright: string;
  };
  legal: {
    backToHome: string;
    lastUpdated: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

export function getRelativeLocaleUrl(lang: SupportedLanguage, path: string = ''): string {
  return `/${lang}${path}`;
}

export function getLocaleFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang in languageNames) return lang as SupportedLanguage;
  return defaultLang;
}

export function formatDate(date: Date, lang: SupportedLanguage): string {
  return new Intl.DateTimeFormat(languageRegions[lang], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

export function getUserPreferredLanguage(): SupportedLanguage {
  if (typeof navigator === 'undefined') return defaultLang;
  
  const browserLangs = navigator.languages || [navigator.language];
  
  for (const browserLang of browserLangs) {
    const lang = browserLang.split('-')[0];
    if (supportedLanguages.includes(lang as SupportedLanguage)) {
      return lang as SupportedLanguage;
    }
  }
  
  return defaultLang;
}

export function buildAlternateLinks(currentPath: string): Array<{
  href: string;
  hreflang: string;
}> {
  return supportedLanguages.map((lang) => ({
    href: `${siteUrl}${getRelativeLocaleUrl(lang, currentPath)}`,
    hreflang: languageRegions[lang],
  }));
}

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return supportedLanguages.includes(lang as SupportedLanguage);
}

import { defaultLang, supportedLanguages, languageNames, languageRegions } from './config';

const siteUrl = 'https://zeroduplicates.com'; // Make sure to update this with your actual domain