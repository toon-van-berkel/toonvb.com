import type { Copy, Locale } from './types';
import { common } from '$lib/locales/common';
import { navigation } from '$lib/locales/navigation';
import { page as homeEn } from '$lib/pages/home/home-en';
import { page as homeNl } from '$lib/pages/home/home-nl';
import { search } from '$lib/locales/search';

export const translations: Record<Locale, Copy> = {
	en: { common: common.en, navigation: navigation.en, home: homeEn, search: search.en },
	nl: { common: common.nl, navigation: navigation.nl, home: homeNl, search: search.nl }
};
