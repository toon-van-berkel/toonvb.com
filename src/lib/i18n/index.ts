import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';
import { translations } from './translations';
import type { Locale } from './types';

const initial: Locale = browser && localStorage.getItem('locale') === 'nl' ? 'nl' : 'en';
export const locale = writable<Locale>(initial);
export const copy = derived(locale, ($locale) => translations[$locale]);

if (browser) locale.subscribe((value) => localStorage.setItem('locale', value));

export function setLocale(value: Locale) { locale.set(value); }
