import type { Copy, Locale } from './types';
import { common } from './common';
import { navigation } from './navigation';
import { home } from './pages/home';

export const translations: Record<Locale, Copy> = {
    en: { common: common.en, navigation: navigation.en, home: home.en },
    nl: { common: common.nl, navigation: navigation.nl, home: home.nl }
};
