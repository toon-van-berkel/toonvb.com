import type { Copy, Locale } from './types';
import { common } from './common';
import { navigation } from './navigation';
import { home } from './pages/home';
import { footer } from './footer';
import { researchPage } from './pages/research';
import { projectsPage } from './pages/projects';
import { playgroundPage } from './pages/playground';

export const translations: Record<Locale, Copy> = {
    en: { common: common.en, navigation: navigation.en, footer: footer.en, researchPage: researchPage.en, projectsPage: projectsPage.en, playgroundPage: playgroundPage.en, home: home.en },
    nl: { common: common.nl, navigation: navigation.nl, footer: footer.nl, researchPage: researchPage.nl, projectsPage: projectsPage.nl, playgroundPage: playgroundPage.nl, home: home.nl }
};
