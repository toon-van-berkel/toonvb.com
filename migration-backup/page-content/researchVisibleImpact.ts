const content = {
    en: {
        hero: {
            eyebrow: 'Research Through Design · 2026',
            title: 'Can visible impact motivate people to remove waste from the water?',
            lead: 'This research explores how people respond when the environmental impact of their actions becomes directly visible, and whether rewards and gamification can strengthen the motivation to remove waste from the water while diving.',
            meta: ['2026', '7 interviews']
        },

        question: {
            eyebrow: 'Research question',
            title: 'Can visible personal impact motivate people to remove waste from the water?',
            body: [
                'Removing waste from the water is easy to frame as something positive, but that does not automatically mean people will actively change their behaviour. I wanted to understand what happens when a contribution becomes concrete and visible instead of remaining an abstract environmental benefit.',
                'The research therefore focused on whether showing people how much waste they removed, what their personal contribution was and what they achieved could create additional motivation. I also explored whether a reward system could strengthen that effect, or whether points, goals and competition might introduce pressure or unintended behaviour.'
            ]
        },

        goal: {
            eyebrow: 'Research goal',
            title: 'Understanding the emotional response behind the behaviour.',
            items: [
                [
                    'Happy',
                    'Does seeing a concrete contribution to a cleaner environment create a positive and satisfying feeling?'
                ],
                [
                    'Excited',
                    'Does seeing the result, potentially combined with points and rewards, make people more enthusiastic about doing it again?'
                ],
                [
                    'In control',
                    'Does the experience feel understandable, predictable and practical enough for users to feel in control of what happens?'
                ]
            ]
        },

        prototype: {
            eyebrow: 'Prototype',
            title: 'Turning an abstract contribution into a visible result.',
            body: [
                'Participants were placed in a future scenario in which they had just completed a recreational dive and collected 7.8 kilograms of waste from the water. Instead of only discussing the concept, they were shown a four-screen prototype representing what would happen after the dive.',
                'The prototype showed the collected waste, its impact and the points earned by the user. The purpose was not to test a technically complete product, but to make the outcome tangible enough to observe how participants responded to visible impact, statistics and rewards.'
            ],
            alt: 'Prototype screens showing the result of a dive in which 7.8 kilograms of waste was collected, including personal impact and earned points.'
        },

        method: {
            eyebrow: 'Research method',
            title: 'Seven semi-structured interviews built around one prototype.',
            items: [
                [
                    'Interviews',
                    '7 participants were interviewed about their response to the concept and prototype.'
                ],
                [
                    'Interview type',
                    'Semi-structured interviews allowed the conversation to develop naturally while keeping the same core topics across participants.'
                ],
                [
                    'Measurement moments',
                    'Happy, Excited and In control were measured before the prototype, directly after seeing it and as an expectation of long-term use.'
                ],
                [
                    'Guiding questions',
                    'Seven questions covered concept understanding, motivation through points, possible rewards, risks, misuse, expected impact and improvements.'
                ]
            ]
        },

        participants: {
            eyebrow: 'Participants',
            title: 'Combining outside perspectives with practical diving experience.',
            items: [
                [
                    'Non-divers',
                    '3 participants without diving experience mainly reflected on motivation, understandability, rewards and the overall concept.'
                ],
                [
                    'Divers',
                    '4 recreational divers contributed practical feedback about using such a system in and around an actual dive.'
                ],
                [
                    'Experience range',
                    'The divers had between 4 and 29 years of experience, allowing both relatively new and highly experienced perspectives to be included.'
                ]
            ]
        },

        findings: {
            eyebrow: 'Interview findings',
            title: 'The same concept motivated different people in very different ways.',
            items: [
                {
                    title: 'Seeing personal impact created the most consistent value',
                    profile: 'Across both divers and non-divers',
                    finding: 'Participants repeatedly responded positively to seeing how much waste they had personally removed. For several participants, this felt more meaningful than the points themselves. Experienced divers in particular described the visible contribution to a cleaner underwater environment as a stronger reason to participate than receiving a reward.',
                    quote: '',
                    highlight: 'The contribution itself often mattered more than the reward attached to it.'
                },
                {
                    title: 'Gamification strongly motivated some participants',
                    profile: 'Participants who enjoy statistics, goals and competition',
                    finding: 'Some participants reacted very positively to points, badges, challenges, rankings and personal records. One of the divers described statistics and rewards as an important reason to keep using the system and wanted to compare results with friends and complete recurring challenges.',
                    quote: '',
                    highlight: 'For these users, progress and competition made the behaviour more engaging.'
                },
                {
                    title: 'The same gamification could create pressure for others',
                    profile: 'Participants less motivated by competition',
                    finding: 'Other participants had almost the opposite reaction. Scores, monthly goals and rankings could make them feel that they had not done enough or turn a relaxing activity into an obligation. Several participants wanted points to remain secondary and did not want a dive without collected waste to feel unsuccessful.',
                    quote: '',
                    highlight: 'A mechanic that motivates one person can create pressure for another.'
                },
                {
                    title: 'Experienced divers immediately focused on safety',
                    profile: 'Especially participants with extensive diving experience',
                    finding: 'Experienced divers raised questions about heavy objects, sharp materials, fishing lines, hooks, glass, buoyancy and freedom of movement. They stressed that collecting more waste must never become more important than the safety of the diver, their buddy or the conditions underwater.',
                    quote: '',
                    highlight: 'More waste is not automatically a better result when collecting it introduces additional risk.'
                },
                {
                    title: 'Participation has to remain voluntary',
                    profile: 'Recreational divers and non-divers',
                    finding: 'Several participants liked the idea of removing waste they encountered naturally, but did not want every recreational dive to become a cleanup mission. They wanted to decide for themselves when to actively collect waste and when to simply enjoy the dive.',
                    quote: '',
                    highlight: 'A sustainable action should remain an opportunity, not become an obligation.'
                },
                {
                    title: 'Technology should stay out of the way underwater',
                    profile: 'A recurring concern among experienced divers',
                    finding: 'Participants did not want to perform unnecessary digital actions while diving. Registration, weighing, analysis and most interaction should happen after the dive. Underwater, the experience should demand as little additional attention, equipment and interaction as possible.',
                    quote: '',
                    highlight: 'The safest interaction during the dive may be almost no interaction at all.'
                }
            ]
        },

        results: {
            eyebrow: 'Quantitative results',
            title: 'The prototype increased excitement, but also introduced new questions.',
            moments: ['Moment', 'Happy', 'Excited', 'In control'],
            rows: [
                ['Before prototype', '4.14', '2.71', '4.14'],
                ['After prototype', '4.00', '3.43', '4.00'],
                ['Long-term expectation', '4.14', '3.14', '4.00']
            ],
            highlight: 'Excitement increased from 2.71 to 3.43 after participants saw the prototype.',
            analysis: 'The clearest change appeared in Excited. Participants became noticeably more enthusiastic once the concept became a concrete experience. Happy and In control remained around 4.0. The prototype therefore partially supported the original expectation, but it also introduced questions about safety, practical execution, competition and the reward system. These values are descriptive averages from seven interviews and should not be interpreted as statistically significant effects.'
        },

        insights: {
            eyebrow: 'Five key insights',
            title: 'What the interviews changed about the way I looked at the problem.',
            items: [
                [
                    'Personal impact matters more than reward alone',
                    'Seeing a concrete contribution was consistently valuable. For several participants, knowing how much waste they had removed created more motivation than the points awarded for doing it.'
                ],
                [
                    'Gamification works differently for different people',
                    'Points, challenges and rankings can create meaningful motivation for some users, while the same mechanics can create pressure or a feeling of obligation for others.'
                ],
                [
                    'Safety must always come before impact',
                    'Heavy, sharp or awkward waste can affect movement and buoyancy. A system should never encourage someone to take additional risks simply to achieve a higher score.'
                ],
                [
                    'Contributing does not always mean carrying the waste',
                    'Dangerous, heavy or fixed waste should be reportable. This allows someone to contribute to its removal without having to retrieve it personally.'
                ],
                [
                    'Participation must remain voluntary',
                    'A normal recreational dive should not automatically become a cleanup dive. Users need to remain free to decide when and how they want to participate.'
                ]
            ]
        },

        implications: {
            eyebrow: 'Design implications',
            title: 'Turning research findings into concrete design decisions.',
            items: [
                [
                    'Make personal impact more prominent',
                    'Show the user what they have contributed over time, for example the amount of waste removed per dive, month, year and across their complete history.'
                ],
                [
                    'Keep gamification optional',
                    'Points, challenges and rankings may support users who enjoy them, but the experience should never punish or negatively address someone for not participating.'
                ],
                [
                    'Allow dangerous or heavy waste to be reported',
                    'Waste that cannot safely be carried should be locatable and reportable so it can be removed later without encouraging unnecessary risk.'
                ],
                [
                    'Provide clear safety guidance',
                    'The experience should help users understand what can reasonably be collected and when an object should be left alone.'
                ],
                [
                    'Minimise interaction during the dive',
                    'Most registration, weighing, analysis and feedback should happen after the dive so the technology requires as little underwater attention as possible.'
                ]
            ]
        },

        conclusion: {
            eyebrow: 'Conclusion',
            title: 'Visible impact appears to motivate more consistently than rewards alone.',
            body: [
                'Within these seven interviews, the most consistent source of value was not the reward system itself, but being able to see a concrete personal contribution. Participants liked knowing how much waste they had removed and what that meant over time.',
                'Gamification can strengthen that motivation for users who enjoy statistics, goals and competition, but it should not become the foundation of the experience. For other participants, the same mechanics introduced pressure and risked turning a voluntary activity into an obligation.',
                'The research also showed that motivation cannot be designed separately from the context in which the behaviour takes place. Safety, simplicity, freedom of choice and minimal underwater interaction are just as important as making the environmental result visible.'
            ],
            highlight: 'The goal is not to make people collect as much waste as possible. It is to help them contribute safely, voluntarily and meaningfully — and make that contribution visible.'
        }
    },

    nl: {
        hero: {
            eyebrow: 'Research Through Design · 2026',
            title: 'Kan zichtbare impact mensen motiveren om afval uit het water te halen?',
            lead: 'Dit onderzoek verkent hoe mensen reageren wanneer de impact van hun eigen gedrag direct zichtbaar wordt en of beloningen en gamification de motivatie kunnen versterken om tijdens het duiken afval uit het water te halen.',
            meta: ['2026', '7 interviews']
        },

        question: {
            eyebrow: 'Onderzoeksvraag',
            title: 'Kan zichtbare persoonlijke impact mensen motiveren om afval uit het water te halen?',
            body: [
                'Afval uit het water verwijderen is eenvoudig neer te zetten als iets positiefs, maar dat betekent niet automatisch dat mensen hun gedrag aanpassen. Ik wilde begrijpen wat er gebeurt wanneer een bijdrage concreet en zichtbaar wordt, in plaats van alleen een abstract voordeel voor het milieu te blijven.',
                'Daarom onderzocht ik of het tonen van hoeveel afval iemand heeft verwijderd, wat de persoonlijke bijdrage is en wat daarmee is bereikt extra motivatie kan opleveren. Daarnaast onderzocht ik of een beloningssysteem dat effect kan versterken, of dat punten, doelen en competitie juist druk of ongewenst gedrag kunnen veroorzaken.'
            ]
        },

        goal: {
            eyebrow: 'Onderzoeksdoel',
            title: 'De emotionele reactie achter het gedrag begrijpen.',
            items: [
                [
                    'Happy',
                    'Geeft het zien van een concrete bijdrage aan een schonere omgeving een positief en voldaan gevoel?'
                ],
                [
                    'Excited',
                    'Zorgt het resultaat, eventueel gecombineerd met punten en beloningen, voor meer enthousiasme om het gedrag opnieuw uit te voeren?'
                ],
                [
                    'In control',
                    'Voelt de ervaring begrijpelijk, voorspelbaar en praktisch genoeg om controle te houden over wat er gebeurt?'
                ]
            ]
        },

        prototype: {
            eyebrow: 'Prototype',
            title: 'Een abstracte bijdrage veranderen in een zichtbaar resultaat.',
            body: [
                'Deelnemers werden meegenomen in een toekomstscenario waarin zij zojuist een recreatieve duik hadden afgerond en daarbij 7,8 kilogram afval uit het water hadden verzameld. In plaats van alleen over het concept te praten, kregen zij een prototype met vier schermen te zien van de ervaring na de duik.',
                'Het prototype maakte zichtbaar hoeveel afval was verzameld, wat de persoonlijke impact was en hoeveel punten daarmee waren verdiend. Het doel was niet om een technisch volledig product te testen, maar om het resultaat concreet genoeg te maken om te onderzoeken hoe deelnemers reageren op zichtbare impact, statistieken en beloningen.'
            ],
            alt: 'Vier prototypeschermen met het resultaat van een duik waarbij 7,8 kilogram afval is verzameld, inclusief persoonlijke impact en verdiende punten.'
        },

        method: {
            eyebrow: 'Onderzoeksmethode',
            title: 'Zeven semigestructureerde interviews rond één prototype.',
            items: [
                [
                    'Interviews',
                    '7 deelnemers zijn geïnterviewd over hun reactie op het concept en het prototype.'
                ],
                [
                    'Interviewtype',
                    'Semigestructureerde interviews zorgden voor een natuurlijk gesprek, terwijl bij iedere deelnemer dezelfde kernthema’s aan bod kwamen.'
                ],
                [
                    'Meetmomenten',
                    'Happy, Excited en In control zijn gemeten vóór het prototype, direct na het prototype en als verwachting bij langdurig gebruik.'
                ],
                [
                    'Leidende vragen',
                    'Zeven hoofdvragen gingen over begrip van het concept, motivatie door punten, mogelijke beloningen, risico’s, misbruik, verwachte impact en verbeterpunten.'
                ]
            ]
        },

        participants: {
            eyebrow: 'Deelnemers',
            title: 'Perspectieven van buitenaf gecombineerd met praktische duikervaring.',
            items: [
                [
                    'Niet-duikers',
                    '3 deelnemers zonder duikervaring richtten zich vooral op motivatie, begrijpelijkheid, beloningen en het algemene concept.'
                ],
                [
                    'Duikers',
                    '4 recreatieve duikers leverden praktische feedback over het gebruik van zo’n systeem rondom een echte duik.'
                ],
                [
                    'Ervaringsbereik',
                    'De duikers hadden tussen de 4 en 29 jaar ervaring, waardoor zowel relatief nieuwe als zeer ervaren perspectieven zijn meegenomen.'
                ]
            ]
        },

        findings: {
            eyebrow: 'Interviewbevindingen',
            title: 'Hetzelfde concept motiveerde verschillende mensen op heel verschillende manieren.',
            items: [
                {
                    title: 'Persoonlijke impact leverde de meest consistente waarde op',
                    profile: 'Bij zowel duikers als niet-duikers',
                    finding: 'Deelnemers reageerden herhaaldelijk positief op het kunnen zien hoeveel afval zij persoonlijk hadden verwijderd. Voor meerdere deelnemers voelde dit betekenisvoller dan de punten zelf. Vooral ervaren duikers benoemden de zichtbare bijdrage aan een schonere onderwaterwereld als sterkere motivatie dan het ontvangen van een beloning.',
                    quote: '',
                    highlight: 'De bijdrage zelf bleek vaak belangrijker dan de beloning die eraan gekoppeld werd.'
                },
                {
                    title: 'Gamification motiveerde sommige deelnemers juist sterk',
                    profile: 'Deelnemers die van statistieken, doelen en competitie houden',
                    finding: 'Sommige deelnemers reageerden zeer positief op punten, badges, challenges, ranglijsten en persoonlijke records. Een van de duikers zag statistieken en beloningen juist als belangrijke reden om het systeem vaker te gebruiken en wilde resultaten met vrienden kunnen vergelijken en terugkerende challenges behalen.',
                    quote: '',
                    highlight: 'Voor deze gebruikers maakten voortgang en competitie het gedrag aantrekkelijker.'
                },
                {
                    title: 'Dezelfde gamification kon bij anderen druk veroorzaken',
                    profile: 'Deelnemers die minder door competitie gemotiveerd worden',
                    finding: 'Andere deelnemers reageerden bijna tegenovergesteld. Scores, maandelijkse doelen en ranglijsten konden het gevoel geven dat iemand niet genoeg had gedaan of van een ontspannende activiteit een verplichting maken. Meerdere deelnemers wilden dat punten ondergeschikt bleven en dat een duik zonder verzameld afval niet als mislukt voelt.',
                    quote: '',
                    highlight: 'Een mechanisme dat de ene persoon motiveert, kan bij een ander juist druk veroorzaken.'
                },
                {
                    title: 'Ervaren duikers keken direct naar veiligheid',
                    profile: 'Vooral deelnemers met veel duikervaring',
                    finding: 'Ervaren duikers stelden vragen over zware objecten, scherpe materialen, vislijnen, haken, glas, drijfvermogen en bewegingsvrijheid. Zij benadrukten dat meer afval verzamelen nooit belangrijker mag worden dan de veiligheid van de duiker, de buddy of de omstandigheden onder water.',
                    quote: '',
                    highlight: 'Meer afval is niet automatisch een beter resultaat wanneer het verzamelen ervan extra risico veroorzaakt.'
                },
                {
                    title: 'Deelname moet vrijwillig blijven',
                    profile: 'Recreatieve duikers en niet-duikers',
                    finding: 'Verschillende deelnemers vonden het positief om afval mee te nemen wanneer zij het tijdens een duik tegenkomen, maar wilden niet dat iedere recreatieve duik automatisch een opruimactie wordt. Zij willen zelf kunnen bepalen wanneer ze actief afval verzamelen en wanneer ze gewoon willen genieten van het duiken.',
                    quote: '',
                    highlight: 'Duurzaam gedrag moet een mogelijkheid blijven en geen verplichting worden.'
                },
                {
                    title: 'Technologie moet onder water zoveel mogelijk uit de weg blijven',
                    profile: 'Een terugkerend aandachtspunt bij ervaren duikers',
                    finding: 'Deelnemers wilden tijdens het duiken zo min mogelijk extra digitale handelingen uitvoeren. Registratie, wegen, analyse en het grootste deel van de interactie kunnen beter na de duik plaatsvinden. Onder water moet het systeem zo weinig mogelijk extra aandacht, apparatuur en handelingen vragen.',
                    quote: '',
                    highlight: 'De veiligste interactie tijdens de duik is mogelijk bijna geen interactie.'
                }
            ]
        },

        results: {
            eyebrow: 'Kwantitatieve resultaten',
            title: 'Het prototype verhoogde het enthousiasme, maar riep ook nieuwe vragen op.',
            moments: ['Moment', 'Happy', 'Excited', 'In control'],
            rows: [
                ['Voor prototype', '4,14', '2,71', '4,14'],
                ['Na prototype', '4,00', '3,43', '4,00'],
                ['Langere termijn', '4,14', '3,14', '4,00']
            ],
            highlight: 'Het gemiddelde enthousiasme steeg na het zien van het prototype van 2,71 naar 3,43.',
            analysis: 'De duidelijkste verandering zat in Excited. Deelnemers werden enthousiaster zodra het abstracte idee veranderde in een concrete ervaring. Happy en In control bleven gemiddeld rond de 4,0. Daarmee werd de oorspronkelijke verwachting gedeeltelijk bevestigd, maar het prototype riep tegelijkertijd nieuwe vragen op over veiligheid, praktische uitvoering, competitie en het beloningssysteem. De waarden zijn beschrijvende gemiddelden uit zeven interviews en mogen niet worden geïnterpreteerd als statistisch significante effecten.'
        },

        insights: {
            eyebrow: 'Vijf belangrijkste inzichten',
            title: 'Wat de interviews veranderden aan de manier waarop ik naar het probleem keek.',
            items: [
                [
                    'Persoonlijke impact is belangrijker dan alleen een beloning',
                    'Het zien van een concrete bijdrage werd consistent positief ontvangen. Voor meerdere deelnemers gaf weten hoeveel afval zij hadden verwijderd meer motivatie dan de punten die daarvoor werden verdiend.'
                ],
                [
                    'Gamification werkt niet voor iedereen hetzelfde',
                    'Punten, challenges en ranglijsten kunnen voor sommige gebruikers sterke motivatie opleveren, terwijl dezelfde mechanismen bij anderen druk of een gevoel van verplichting kunnen veroorzaken.'
                ],
                [
                    'Veiligheid moet altijd boven impact staan',
                    'Zwaar, scherp of onhandig afval kan invloed hebben op bewegingsvrijheid en drijfvermogen. Een systeem mag iemand nooit stimuleren om extra risico te nemen om een hogere score te behalen.'
                ],
                [
                    'Bijdragen betekent niet altijd dat je afval zelf moet meenemen',
                    'Gevaarlijk, zwaar of vastzittend afval moet gemeld kunnen worden. Zo kan iemand bijdragen aan de verwijdering ervan zonder het object zelf te hoeven meenemen.'
                ],
                [
                    'Deelname moet vrijwillig blijven',
                    'Een normale recreatieve duik moet niet automatisch een opruimduik worden. Gebruikers moeten zelf kunnen bepalen wanneer en hoe zij willen bijdragen.'
                ]
            ]
        },

        implications: {
            eyebrow: 'Ontwerpimplicaties',
            title: 'Onderzoeksinzichten vertalen naar concrete ontwerpbeslissingen.',
            items: [
                [
                    'Maak persoonlijke impact prominenter',
                    'Laat gebruikers zien wat zij over langere tijd hebben bijgedragen, bijvoorbeeld hoeveel afval per duik, maand, jaar en in totaal is verwijderd.'
                ],
                [
                    'Houd gamification optioneel',
                    'Punten, challenges en ranglijsten kunnen gebruikers ondersteunen die daar plezier uit halen, maar de ervaring mag iemand nooit straffen of negatief benaderen wanneer die niet deelneemt.'
                ],
                [
                    'Laat gevaarlijk of zwaar afval melden',
                    'Afval dat niet veilig meegenomen kan worden moet gelokaliseerd en gemeld kunnen worden, zodat het later verwijderd kan worden zonder onnodige risico’s te stimuleren.'
                ],
                [
                    'Geef duidelijke veiligheidsinformatie',
                    'De ervaring moet helpen inschatten welk afval redelijkerwijs meegenomen kan worden en wanneer een object beter kan blijven liggen.'
                ],
                [
                    'Beperk interactie tijdens de duik',
                    'Registratie, wegen, analyse en feedback kunnen grotendeels na de duik plaatsvinden, zodat de technologie onder water zo weinig mogelijk extra aandacht vraagt.'
                ]
            ]
        },

        conclusion: {
            eyebrow: 'Conclusie',
            title: 'Zichtbare impact lijkt consistenter te motiveren dan alleen een beloning.',
            body: [
                'Binnen deze zeven interviews bleek niet het beloningssysteem zelf, maar het zichtbaar maken van een concrete persoonlijke bijdrage het meest consistente waardevolle element. Deelnemers vonden het prettig om te kunnen zien hoeveel afval zij hadden verwijderd en wat hun bijdrage over langere tijd betekende.',
                'Gamification kan die motivatie versterken bij gebruikers die plezier halen uit statistieken, doelen en competitie, maar mag niet de basis van de ervaring worden. Voor andere deelnemers veroorzaakten dezelfde mechanismen juist druk en dreigde een vrijwillige activiteit als een verplichting te gaan voelen.',
                'Het onderzoek liet daarnaast zien dat motivatie niet los ontworpen kan worden van de context waarin het gedrag plaatsvindt. Veiligheid, eenvoud, keuzevrijheid en zo min mogelijk interactie onder water zijn minstens zo belangrijk als het zichtbaar maken van het milieuresultaat.'
            ],
            highlight: 'Het doel is niet om mensen zoveel mogelijk afval te laten verzamelen. Het doel is om hen veilig, vrijwillig en betekenisvol te laten bijdragen — en die bijdrage zichtbaar te maken.'
        }
    }
} as const;

export const researchVisibleImpact = content;