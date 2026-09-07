<script lang="ts">
    import './Footer.scss';
    import { url } from '$lib/utils/url';
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
                Developer, designer and professional project overcomplicator.
            </p>

            <p class="footer__description">
                I turn curiosity into things that actually work.
            </p>

            <p class="footer__credit">
                Designed, developed and maintained by Toon van Berkel.
            </p>
        </div>

        <nav
            class="footer__navigation"
            aria-label="Footer navigation"
        >
            <div class="footer__column">
                <h2>Browse</h2>

                <ul>
                    <li>
                        <a href={url('/projects')}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href={url('/research')}>
                            Research
                        </a>
                    </li>

                    <li>
                        <a href={url('/playground')}>
                            Playground
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>About</h2>

                <ul>
                    <li>
                        <a href={url('/about')}>
                            About me
                        </a>
                    </li>

                    <li>
                        <a href={url('/about/cv')}>
                            CV
                        </a>
                    </li>

                    <li>
                        <a href={url('/about/interests')}>
                            Interests
                        </a>
                    </li>

                    <li>
                        <a href={url('/contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>Elsewhere</h2>

                <ul>
                    <li>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                    </li>

                    <li>
                        <a href="mailto:contact@toonvb.com">
                            Email ↗
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>Project</h2>

                <ul>
                    <li>
                        <a href={url('/changelog')}>
                            Changelog
                        </a>
                    </li>

                    <li>
                        <a href={url('/roadmap')}>
                            Roadmap
                        </a>
                    </li>

                    <li>
                        <a href={url('/accessibility')}>
                            Accessibility
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__column">
                <h2>Legal</h2>

                <ul>
                    <li>
                        <a href={url('/privacy')}>
                            Privacy
                        </a>
                    </li>

                    <li>
                        <a href={url('/cookies')}>
                            Cookies
                        </a>
                    </li>

                    <li>
                        <a href={url('/terms')}>
                            Terms
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="footer__bottom">
        <p>
            © 2023–{new Date().getFullYear()} Toon van Berkel.
            Original website content is protected unless otherwise stated.
        </p>

        <a href="#top">
            Back to top ↑
        </a>
    </div>
</footer>

