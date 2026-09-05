<script lang="ts">
    import { locale, setLocale } from '$lib/i18n';
    import type { Locale } from '$lib/i18n/types';

    const languages: Array<{ value: Locale; label: string; flag: string }> = [
        { value: 'en', label: 'English', flag: '🇬🇧' },
        { value: 'nl', label: 'Nederlands', flag: '🇳🇱' }
    ];

    let selected = $derived(languages.find((language) => language.value === $locale) ?? languages[0]);
</script>

<label class="language-switcher">
    <span aria-hidden="true">{selected.flag}</span>
    <select value={$locale} onchange={(event) => setLocale((event.currentTarget as HTMLSelectElement).value as Locale)} aria-label="Choose language">
        {#each languages as language}
            <option value={language.value}>{language.label}</option>
        {/each}
    </select>
</label>


