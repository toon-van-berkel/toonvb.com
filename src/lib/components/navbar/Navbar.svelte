<script lang="ts">
	import './Navbar.scss';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { copy } from '$lib/i18n';
	import {
		closeNavbar,
		toggleDropdown as getDropdownState,
		toggleMenu as getMenuState,
		toggleSubDropdown as getSubDropdownState
	} from './navbar';
	let menuOpen = $state(false);
	let openDropdown = $state<string | null>(null);
	let openSubDropdown = $state<string | null>(null);

	function toggleMenu() {
		menuOpen = getMenuState(menuOpen);

		if (!menuOpen) {
			openDropdown = null;
			openSubDropdown = null;
		}
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
		openDropdown = state.openDropdown;
		openSubDropdown = state.openSubDropdown;
	}
</script>

<nav class:nav--open={menuOpen} class="nav">
	<a class="nav__brand" href="/" onclick={closeMenu}>
		<img src="/toonvb-transparent_logo.svg" alt="" />
		<span>Toon van Berkel</span>
	</a>

	<button
		class="nav__toggle"
		type="button"
		aria-label={menuOpen ? $copy.common.close : $copy.common.open}
		aria-expanded={menuOpen}
		onclick={toggleMenu}
	>
		<span></span>
		<span></span>
	</button>

	<ul class="nav__links">

		<!-- PROJECTS -->
		<li
			class="nav__item nav__item--dropdown"
			class:nav__item--open={openDropdown === 'projects'}
		>
			<div class="nav__item-header">
				<a href="/projects" onclick={closeMenu}>
					{$copy.navigation.projects}
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
					<a href="/projects/web" onclick={closeMenu}>
						{$copy.navigation.web}
					</a>
				</li>

				<li>
					<a href="/projects/applications" onclick={closeMenu}>
						{$copy.navigation.applications}
					</a>
				</li>

				<li>
					<a href="/projects/games" onclick={closeMenu}>
						{$copy.navigation.games}
					</a>
				</li>

				<li>
					<a href="/projects/dnd-portal" onclick={closeMenu}>
						{$copy.navigation.dnd}
					</a>
				</li>

				<li>
					<a href="/projects/school" onclick={closeMenu}>
						{$copy.navigation.school}
					</a>
				</li>

				<li>
					<a href="/projects" onclick={closeMenu}>
						{$copy.navigation.allProjects}
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
					{$copy.navigation.research}
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
				<li>
					<a href="/research/visual-design" onclick={closeMenu}>
						{$copy.navigation.visual}
					</a>
				</li>

				<li>
					<a href="/research/usability" onclick={closeMenu}>
						{$copy.navigation.usability}
					</a>
				</li>

				<li>
					<a href="/research/web-performance" onclick={closeMenu}>
						{$copy.navigation.performance}
					</a>
				</li>

				<li>
					<a href="/research/accessibility" onclick={closeMenu}>
						{$copy.navigation.accessibility}
					</a>
				</li>

				<li>
					<a href="/research/school" onclick={closeMenu}>
						{$copy.navigation.schoolResearch}
					</a>
				</li>

				<li>
					<a href="/research" onclick={closeMenu}>
						{$copy.navigation.allResearch}
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
					{$copy.navigation.about}
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
						{$copy.navigation.aboutMe}
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
							{$copy.navigation.interests}
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
								{$copy.navigation.games}
							</a>
						</li>

						<li>
							<a href="/about/interests/music" onclick={closeMenu}>
								{$copy.navigation.music}
							</a>
						</li>

						<li>
							<a href="/about/interests/anime" onclick={closeMenu}>
								{$copy.navigation.anime}
							</a>
						</li>
					</ul>
				</li>

				<li>
					<a href="/about/travel" onclick={closeMenu}>
						{$copy.navigation.travel}
					</a>
				</li>

				<li>
					<a href="/about/photography" onclick={closeMenu}>
						{$copy.navigation.photography}
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
					{$copy.navigation.playground}
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
						{$copy.navigation.experiments}
					</a>
				</li>

				<li>
					<a href="/playground/prototypes" onclick={closeMenu}>
						{$copy.navigation.prototypes}
					</a>
				</li>

				<li>
					<a href="/playground/ideas" onclick={closeMenu}>
						{$copy.navigation.ideas}
					</a>
				</li>

				<li>
					<a href="/playground/tools" onclick={closeMenu}>
						{$copy.navigation.tools}
					</a>
				</li>
			</ul>
		</li>
	</ul>

	<div class="nav__actions">
		<LanguageSwitcher />
		<a class="nav__cta" href="/contact" onclick={closeMenu}>
			{$copy.navigation.contact}
		</a>
	</div>
</nav>
