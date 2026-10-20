<script lang="ts">
    import './LanguageSwitcher.scss';
    import { locale, setLocale } from '$lib/i18n';
    import type { Locale } from '$lib/i18n/types';

    const languages: Array<{ value: Locale; label: string }> = [
        { value: 'en', label: 'EN' },
        { value: 'nl', label: 'NL' }
    ];

    let open = $state(false);
    let selected = $derived(languages.find((language) => language.value === $locale) ?? languages[0]);

    function toggle() {
        open = !open;
    }

    function choose(value: Locale) {
        setLocale(value);
        open = false;
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') open = false;
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="language-switcher" class:language-switcher--open={open}>
    <button class="language-switcher__trigger" type="button" aria-haspopup="listbox" aria-expanded={open} aria-label="Choose language" onclick={toggle}>
        <span>{selected.label}</span>
        <span class="language-switcher__chevron" aria-hidden="true"></span>
    </button>

    {#if open}
        <div class="language-switcher__menu" role="listbox" aria-label="Languages">
            {#each languages as language}
                <button type="button" role="option" aria-selected={language.value === $locale} class:language-switcher__option--selected={language.value === $locale} class="language-switcher__option" onclick={() => choose(language.value)}>
                    {language.label}
                </button>
            {/each}
        </div>
    {/if}
</div>


