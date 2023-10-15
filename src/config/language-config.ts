import enUS from '../assets/i18n/en-US';
import viVN from '../assets/i18n/vi-VN';

export const LANGUAGES = [
  {
    code: 'vi-vn',
    lang: 'Vietnamese',
    prefix: 'VN',
  },
  {
    code: 'en-us',
    lang: 'English',
    prefix: 'US',
  },
];

export const I18N_LANGUAGES = ['vi-vn', 'en-us'];
export const DEFAULT_LANG = 'en-us';

export const I18N = {
  'vi-vn': viVN,
  'en-us': enUS,
};
