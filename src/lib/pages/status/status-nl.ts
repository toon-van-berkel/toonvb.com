import type { StatusPageCopy } from '$lib/types/status-page';

export const statusCopy = {
    underConstruction: {
        label: 'IN ONTWIKKELING',
        title: 'Hier wordt nog aan gebouwd.',
        description: 'Deze website krijgt steeds verder vorm. Hier staat nog geen inhoud, maar deze pagina kan in een latere update worden toegevoegd. Neem ondertussen gerust een kijkje bij wat er al is.',
        homeCta: 'Naar de homepage',
        projectsCta: 'Bekijk projecten'
    },
    notFound: {
        label: '404 — PAGINA NIET GEVONDEN',
        title: 'Hier is nog niets te vinden.',
        description: 'Deze pagina konden we niet vinden. De website groeit nog, dus sommige pagina’s kunnen later worden toegevoegd. Ga terug naar de homepage of bekijk de projecten die al online staan.',
        homeCta: 'Naar de homepage',
        projectsCta: 'Bekijk projecten'
    }
} satisfies Record<'underConstruction' | 'notFound', StatusPageCopy>;
