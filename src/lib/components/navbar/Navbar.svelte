<script lang="ts">
    import { tick } from 'svelte';
	import './Navbar.scss';
	import { copy } from '$lib/i18n';
	import { locale } from '$lib/i18n';
	import { getSearchResults } from '$lib/search';
	import {
		closeNavbar,
		toggleDropdown as getDropdownState,
		toggleMenu as getMenuState,
		toggleSubDropdown as getSubDropdownState
	} from './navbar';
	let menuOpen = $state(false);
	let searchOpen = $state(false);
	let searchQuery = $state('');
	let searchInput = $state<HTMLInputElement>();
	let searchDialog = $state<HTMLElement>();
	let toggleElement = $state<HTMLButtonElement>();
	let searchReturnElement = $state<HTMLElement>();
	let selectedSearchIndex = $state(-1);
	let openDropdown = $state<string | null>(null);
	let openSubDropdown = $state<string | null>(null);

	function toggleMenu() {
		menuOpen = getMenuState(menuOpen);

		if (!menuOpen) {
			openDropdown = null;
			openSubDropdown = null;
		}
	}

	const searchResults = $derived(getSearchResults($locale, searchQuery));

	function openSearch() {
		searchReturnElement = document.activeElement instanceof HTMLElement ? document.activeElement : toggleElement;
		menuOpen = false;
		openDropdown = null;
		openSubDropdown = null;
		searchOpen = true;
		selectedSearchIndex = searchResults.length ? 0 : -1;
		void tick().then(() => searchInput?.focus());
	}

	function closeSearch() {
		searchOpen = false;
		searchQuery = '';
		selectedSearchIndex = -1;
		void tick().then(() => searchReturnElement?.focus());
	}

	function clearSearch() {
		searchQuery = '';
		selectedSearchIndex = 0;
		void tick().then(() => searchInput?.focus());
	}

	function toggleDropdown(name: string) {
		openDropdown = getDropdownState(openDropdown, name as 'projects' | 'research' | 'about' | 'playground');
		openSubDropdown = null;
	}

	function toggleSubDropdown(name: string) {
		openSubDropdown = getSubDropdownState(openSubDropdown, name);
	}

	function closeMenu() {
		const state = closeNavbar();
		menuOpen = state.menuOpen;
		searchOpen = false;
		searchQuery = '';
		openDropdown = state.openDropdown;
		openSubDropdown = state.openSubDropdown;
		void tick().then(() => toggleElement?.focus());
	}

	function handleKeydown(event: KeyboardEvent) {
		if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !event.isComposing) {
			event.preventDefault();
			if (!searchOpen) openSearch();
			else searchInput?.focus();
			return;
		}
		if (event.key === 'Escape') {
			if (searchOpen) closeSearch();
			else if (menuOpen) closeMenu();
			return;
		}
		if (!searchOpen) return;
		if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault();
			if (!searchResults.length) return;
			const direction = event.key === 'ArrowDown' ? 1 : -1;
			selectedSearchIndex = (selectedSearchIndex + direction + searchResults.length) % searchResults.length;
		}
		if (event.key === 'Enter' && selectedSearchIndex >= 0 && searchResults[selectedSearchIndex]) {
			event.preventDefault();
			window.location.href = searchResults[selectedSearchIndex].href;
			closeSearch();
		}
		if (event.key === 'Tab' && searchDialog) {
			const focusable = [...searchDialog.querySelectorAll<HTMLElement>('button, input, a[href]')].filter((element) => !element.hasAttribute('disabled'));
			if (!focusable.length) return;
			if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1)?.focus(); }
			else if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0]?.focus(); }
		}
	}

	$effect(() => {
		document.body.classList.toggle('nav-menu-open', menuOpen);
		return () => document.body.classList.remove('nav-menu-open');
	});

	$effect(() => {
		document.body.classList.toggle('nav-search-open', searchOpen);
		return () => document.body.classList.remove('nav-search-open');
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class:nav--open={menuOpen} class="nav">
	<a class="nav__brand" href="/" onclick={closeMenu}>
		<img src="/toonvb-transparent_logo.svg" alt="" />
		<span class="nav__brand-name">Toon van Berkel</span>
		<span class="nav__brand-domain">toonvb.com</span>
	</a>

	<button
		bind:this={toggleElement}
		class="nav__toggle"
		type="button"
		aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
		aria-expanded={menuOpen}
		aria-controls="primary-navigation"
		onclick={toggleMenu}
	>
		<span></span>
		<span></span>
	</button>

	<ul class="nav__links" id="primary-navigation">

		<!-- PROJECTS -->
		<li
			class="nav__item nav__item--dropdown"
			class:nav__item--open={openDropdown === 'projects'}
		>
			<div class="nav__item-header">
				<a href="/projects" onclick={closeMenu}>
					Projects
				</a>

				<button
					class="nav__dropdown-toggle"
					type="button"
					aria-label="Toggle Projects menu"
					aria-expanded={openDropdown === 'projects'}
					onclick={() => toggleDropdown('projects')}
				>
					<span></span>
				</button>
			</div>

			<ul class="nav__dropdown">
				<li>
					<a href="/projects" onclick={closeMenu}>
						{$copy.navigation.projectsMenu.all}
					</a>
				</li>

				<li class="nav__dropdown-separator" role="presentation"></li>

				<li>
					<a href="/projects?category=web" onclick={closeMenu}>
						{$copy.navigation.projectsMenu.web}
					</a>
				</li>

				<li>
					<a href="/projects?category=applications" onclick={closeMenu}>
						{$copy.navigation.projectsMenu.applications}
					</a>
				</li>

				<li>
					<a href="/projects?category=games" onclick={closeMenu}>
						{$copy.navigation.projectsMenu.games}
					</a>
				</li>

				<li>
					<a href="/projects?category=school" onclick={closeMenu}>
						{$copy.navigation.projectsMenu.school}
					</a>
				</li>
			</ul>
		</li>


		<!-- RESEARCH -->
		<li
			class="nav__item nav__item--dropdown"
			class:nav__item--open={openDropdown === 'research'}
		>
			<div class="nav__item-header">
				<a href="/research" onclick={closeMenu}>
					Research
				</a>

				<button
					class="nav__dropdown-toggle"
					type="button"
					aria-label="Toggle Research menu"
					aria-expanded={openDropdown === 'research'}
					onclick={() => toggleDropdown('research')}
				>
					<span></span>
				</button>
			</div>

			<ul class="nav__dropdown">
				<li><span aria-disabled="true">Visual design</span></li>
				<li><span aria-disabled="true">Usability</span></li>
				<li><span aria-disabled="true">Web performance</span></li>
				<li><span aria-disabled="true">Accessibility</span></li>
				<li><span aria-disabled="true">School research</span></li>
				<li>
					<a href="/research" onclick={closeMenu}>
						All research
					</a>
				</li>
			</ul>
		</li>


		<!-- ABOUT -->
		<li
			class="nav__item nav__item--dropdown"
			class:nav__item--open={openDropdown === 'about'}
		>
			<div class="nav__item-header">
				<a href="/about" onclick={closeMenu}>
					About
				</a>

				<button
					class="nav__dropdown-toggle"
					type="button"
					aria-label="Toggle About menu"
					aria-expanded={openDropdown === 'about'}
					onclick={() => toggleDropdown('about')}
				>
					<span></span>
				</button>
			</div>

			<ul class="nav__dropdown">
				<li>
					<a href="/about" onclick={closeMenu}>
						About me
					</a>
				</li>

				<li>
					<a href="/about/cv" onclick={closeMenu}>
						CV
					</a>
				</li>

				<!-- NESTED INTERESTS -->
				<li
					class="nav__item nav__item--dropdown nav__item--nested"
					class:nav__item--open={openSubDropdown === 'interests'}
				>
					<div class="nav__item-header">
						<a href="/about/interests" onclick={closeMenu}>
							Interests
						</a>

						<button
							class="nav__dropdown-toggle"
							type="button"
							aria-label="Toggle Interests menu"
							aria-expanded={openSubDropdown === 'interests'}
							onclick={() => toggleSubDropdown('interests')}
						>
							<span></span>
						</button>
					</div>

					<ul class="nav__dropdown">
						<li>
							<a href="/about/interests/games" onclick={closeMenu}>
								Games
							</a>
						</li>

						<li>
							<a href="/about/interests/music" onclick={closeMenu}>
								Music
							</a>
						</li>

						<li>
							<a href="/about/interests/anime" onclick={closeMenu}>
								Anime
							</a>
						</li>
					</ul>
				</li>

				<li>
					<a href="/about/travel" onclick={closeMenu}>
						Travel
					</a>
				</li>

				<li>
					<a href="/about/photography" onclick={closeMenu}>
						Photography
					</a>
				</li>
			</ul>
		</li>


		<!-- PLAYGROUND -->
		<li
			class="nav__item nav__item--dropdown"
			class:nav__item--open={openDropdown === 'playground'}
		>
			<div class="nav__item-header">
				<a href="/playground" onclick={closeMenu}>
					Playground
				</a>

				<button
					class="nav__dropdown-toggle"
					type="button"
					aria-label="Toggle Playground menu"
					aria-expanded={openDropdown === 'playground'}
					onclick={() => toggleDropdown('playground')}
				>
					<span></span>
				</button>
			</div>

			<ul class="nav__dropdown">
				<li>
					<a href="/playground/experiments" onclick={closeMenu}>
						Experiments
					</a>
				</li>

				<li>
					<a href="/playground/prototypes" onclick={closeMenu}>
						Prototypes
					</a>
				</li>

				<li>
					<a href="/playground/ideas" onclick={closeMenu}>
						Weird ideas
					</a>
				</li>

				<li>
					<a href="/playground/tools" onclick={closeMenu}>
						Small tools
					</a>
				</li>
			</ul>
		</li>
	</ul>

	<div class="nav__actions">
		<div class="nav__search">
			<button class="nav__search-toggle" type="button" aria-label={$copy.search.open} aria-expanded={searchOpen} onclick={openSearch}>
				<span aria-hidden="true"></span>
			</button>
		</div>
		<a class="nav__cta" href="/contact" onclick={closeMenu}>
			{$copy.navigation.contact}
		</a>
	</div>
</nav>

{#if searchOpen}
	<div class="nav__search-layer">
		<button class="nav__search-backdrop" type="button" aria-label={$copy.search.close} onclick={closeSearch}></button>
		<div bind:this={searchDialog} class="nav__search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-dialog-title" tabindex="-1">
			<div class="nav__search-heading">
				<h2 id="search-dialog-title">{$copy.search.dialogTitle}</h2>
				<button class="nav__search-close" type="button" aria-label={$copy.search.close} onclick={closeSearch}><span aria-hidden="true"></span></button>
			</div>
			<div class="nav__search-field">
				<span class="nav__search-field-icon" aria-hidden="true"></span>
				<label class="nav__visually-hidden" for="site-search">{$copy.search.dialogTitle}</label>
				<input id="site-search" bind:this={searchInput} class="nav__search-input" role="combobox" aria-autocomplete="list" aria-controls="search-results" aria-expanded="true" aria-activedescendant={selectedSearchIndex >= 0 ? `search-result-${selectedSearchIndex}` : undefined} type="search" placeholder={$copy.search.placeholder} bind:value={searchQuery} />
				{#if searchQuery}
					<button class="nav__search-clear" type="button" aria-label={$copy.search.clear} onclick={clearSearch}>×</button>
				{/if}
			</div>
			<p class="nav__visually-hidden" aria-live="polite">{searchQuery ? $copy.search.resultCount(searchResults.length) : $copy.search.suggestions}</p>
			<h3 class="nav__search-section-title">{searchQuery ? $copy.search.resultCount(searchResults.length) : $copy.search.suggestions}</h3>
			{#if searchResults.length}
				<ul id="search-results" class="nav__search-results" role="listbox">
					{#each searchResults as result, index}
						<li id={`search-result-${index}`} class:nav__search-result--active={index === selectedSearchIndex} role="option" aria-selected={index === selectedSearchIndex}>
							<a href={result.href} onclick={closeSearch}>
								<span class="nav__search-result-icon" aria-hidden="true">{result.type === 'Project' ? '↗' : result.type === 'Research' ? '◌' : '→'}</span>
								<span><strong>{result.title}</strong><small>{result.description}</small></span><em>{result.type === 'Project' ? $copy.search.project : result.type === 'Research' ? $copy.search.research : $copy.search.page}</em>
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<div class="nav__search-empty"><p>{$copy.search.noResults}</p><button type="button" onclick={clearSearch}>{$copy.search.clear}</button></div>
			{/if}
		</div>
	</div>
{/if}
