type RevealOptions = {
    threshold?: number;
    rootMargin?: string;
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
    node.classList.add('reveal');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
        node.classList.add('reveal--visible');
        return { destroy() { node.classList.remove('reveal', 'reveal--visible'); } };
    }

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add('reveal--visible');
        observer.disconnect();
    }, {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px 120px'
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
            node.classList.remove('reveal', 'reveal--visible');
        }
    };
}
