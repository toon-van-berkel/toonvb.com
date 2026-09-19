<script lang="ts">
    import './Footer.scss';
    import { url } from '$lib/utils/url';
    import { copy } from '$lib/i18n';
</script>

<footer class="footer">
    <div class="footer__inner">
        <div class="footer__brand">
            <a
                href={url('/')}
                class="footer__logo"
                aria-label="Toon van Berkel home"
            >
                <img
                    src={url('/toonvb-transparent_logo.svg')}
                    alt=""
                />

                <span>Toon van Berkel</span>
            </a>

            <p class="footer__tagline">
                {$copy.footer.tagline}
            </p>

            <p class="footer__description">
                {$copy.footer.description}
            </p>

            <p class="footer__credit">
                {$copy.footer.credit}
            </p>
        </div>

        <nav
            class="footer__navigation"
            aria-label="Footer navigation"
        >
            <div class="footer__column">
                <h2>{$copy.footer.browse}</h2>

                <ul>
                    <li>
                        <a href={url('/projects')}>
                            {$copy.navigation.projects}
                        </a>
                    </li>

                    <li>
                        <a href={url('/research')}>
                            {$copy.navigation.research}
                        </a>
                    </li>

                    <li>
                        <a href={url('/playground')}>
                            {$copy.navigation.playground}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>{$copy.footer.about}</h2>

                <ul>
                    <li>
                        <a href={url('/about')}>
                            {$copy.footer.aboutMe}
                        </a>
                    </li>

                    <li>
                        <a href={url('/about/cv')}>
                            {$copy.navigation.cv}
                        </a>
                    </li>

                    <li>
                        <a href={url('/about/interests')}>
                            {$copy.footer.interests}
                        </a>
                    </li>

                    <li>
                        <a href={url('/contact')}>
                            {$copy.footer.contact}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>{$copy.footer.elsewhere}</h2>

                <ul>
                    <li>
                        <a href="mailto:contact@toonvb.com">
                            {$copy.footer.email} ↗
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>{$copy.footer.project}</h2>

                <ul>
                    <li>
                        <a href={url('/changelog')}>
                            Changelog
                        </a>
                    </li>

                    <li>
                        <a href={url('/roadmap')}>
                            {$copy.footer.roadmap}
                        </a>
                    </li>

                    <li>
                        <a href={url('/accessibility')}>
                            {$copy.footer.accessibility}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>{$copy.footer.legal}</h2>

                <ul>
                    <li>
                        <a href={url('/privacy')}>
                            {$copy.footer.privacy}
                        </a>
                    </li>

                    <li>
                        <a href={url('/cookies')}>
                            {$copy.footer.cookies}
                        </a>
                    </li>

                    <li>
                        <a href={url('/terms')}>
                            {$copy.footer.terms}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="footer__bottom">
        <p>
            © 2023–{new Date().getFullYear()} Toon van Berkel.
            {$copy.footer.copyright}
        </p>

        <a href="#top">
            {$copy.footer.back} ↑
        </a>
    </div>
</footer>
