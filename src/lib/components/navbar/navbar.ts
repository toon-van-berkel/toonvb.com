export type DropdownName = 'projects' | 'research' | 'about' | 'playground';

export function toggleMenu(isOpen: boolean): boolean {
	return !isOpen;
}

export function toggleDropdown(current: string | null, name: DropdownName) {
	return current === name ? null : name;
}

export function toggleSubDropdown(current: string | null, name: string) {
	return current === name ? null : name;
}

export function closeNavbar() {
	return { menuOpen: false, openDropdown: null, openSubDropdown: null } as const;
}
