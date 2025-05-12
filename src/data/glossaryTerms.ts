export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Neurodiversité",
    definition: "Concept selon lequel les différences neurologiques doivent être reconnues et respectées comme toute autre variation humaine. Ce terme englobe les variations neurologiques comme l'autisme, le TDAH, la dyslexie, etc.",
    category: "concepts"
  },
  {
    term: "Neurotypique",
    definition: "Désigne une personne dont le développement neurologique et le fonctionnement cognitif correspondent aux normes dominantes de la société. C'est un terme souvent utilisé par contraste avec 'neurodivergent'.",
    category: "concepts"
  },
  {
    term: "Neurodivergent",
    definition: "Désigne une personne dont le fonctionnement cognitif ou neurologique diffère des normes dominantes. Cela peut inclure les personnes autistes, avec TDAH, dyslexiques, etc.",
    category: "concepts"
  },
  {
    term: "Neuroatypique",
    definition: "Terme similaire à 'neurodivergent', désignant une personne dont le fonctionnement cognitif ou neurologique diffère de ce qui est considéré comme 'typique'.",
    category: "concepts"
  },
  {
    term: "Trouble du spectre de l'autisme (TSA)",
    definition: "Condition neurodéveloppementale caractérisée par des différences dans la communication sociale, des intérêts restreints et répétitifs, et une sensibilité sensorielle particulière.",
    category: "troubles"
  },
  {
    term: "Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)",
    definition: "Condition neurodéveloppementale caractérisée par des difficultés d'attention, d'impulsivité et potentiellement d'hyperactivité, qui ont un impact significatif sur le fonctionnement quotidien.",
    category: "troubles"
  },
  {
    term: "Dyslexie",
    definition: "Trouble spécifique de l'apprentissage qui affecte principalement la lecture, caractérisé par des difficultés à reconnaître les mots avec précision et fluidité, ainsi qu'à décoder et orthographier correctement.",
    category: "troubles"
  },
  {
    term: "Dysgraphie",
    definition: "Trouble spécifique de l'apprentissage qui affecte l'écriture manuscrite, rendant l'acte d'écrire physiquement difficile et entraînant souvent une écriture illisible, lente ou incohérente.",
    category: "troubles"
  },
  {
    term: "Dysorthographie",
    definition: "Trouble spécifique de l'apprentissage caractérisé par des difficultés persistantes dans l'acquisition des règles orthographiques, grammaticales et syntaxiques, malgré un enseignement adéquat.",
    category: "troubles"
  },
  {
    term: "Dysphasie",
    definition: "Trouble spécifique du développement du langage oral, affectant l'expression et/ou la compréhension du langage, sans que cela soit dû à un déficit sensoriel, intellectuel ou neurologique évident.",
    category: "troubles"
  },
  {
    term: "Dyspraxie",
    definition: "Trouble qui affecte la planification et la coordination des mouvements nécessaires pour réaliser une action nouvelle ou complexe. Aussi appelé trouble de l'acquisition de la coordination (TAC).",
    category: "troubles"
  },
  {
    term: "Dyscalculie",
    definition: "Trouble spécifique de l'apprentissage qui affecte la capacité à comprendre, mémoriser et manipuler les nombres et les concepts mathématiques.",
    category: "troubles"
  },
  {
    term: "Comorbidité",
    definition: "Présence simultanée de deux ou plusieurs conditions chez une même personne. Par exemple, une personne peut présenter à la fois un TDAH et une dyslexie.",
    category: "termes-medicaux"
  },
  {
    term: "Fonctions exécutives",
    definition: "Ensemble de processus cognitifs qui nous permettent de planifier, d'organiser, de démarrer et de terminer des tâches, de gérer notre temps, de réguler nos émotions, etc.",
    category: "termes-medicaux"
  },
  {
    term: "Hypersensibilité sensorielle",
    definition: "Sensibilité accrue à un ou plusieurs stimuli sensoriels (sons, lumières, textures, odeurs, etc.), souvent observée chez les personnes neurodivergentes, notamment autistes.",
    category: "termes-medicaux"
  },
  {
    term: "Hyposensibilité sensorielle",
    definition: "Sensibilité réduite à un ou plusieurs stimuli sensoriels, nécessitant une stimulation plus intense pour être perçue.",
    category: "termes-medicaux"
  },
  {
    term: "Stimming",
    definition: "Comportements répétitifs et auto-stimulants comme se balancer, agiter les mains, tapoter, etc., souvent utilisés par les personnes autistes pour réguler leur état émotionnel ou sensoriel.",
    category: "termes-medicaux"
  },
  {
    term: "Masking (ou camouflage)",
    definition: "Processus par lequel une personne neurodivergente, notamment autiste, dissimule consciemment ou inconsciemment ses traits naturels pour paraître plus 'typique' socialement.",
    category: "termes-medicaux"
  },
  {
    term: "Alexithymie",
    definition: "Difficulté à identifier et décrire ses propres émotions, souvent présente chez certaines personnes neurodivergentes.",
    category: "termes-medicaux"
  },
  {
    term: "Intérêts spécifiques",
    definition: "Centres d'intérêt particulièrement intenses et focalisés, caractéristiques notamment des personnes autistes, qui peuvent développer une expertise considérable dans ces domaines.",
    category: "termes-medicaux"
  },
  {
    term: "Plan d'accompagnement personnalisé (PAP)",
    definition: "Document qui définit les aménagements et adaptations pédagogiques nécessaires pour un élève présentant des troubles d'apprentissage, sans nécessiter la reconnaissance d'un handicap.",
    category: "administratif"
  },
  {
    term: "Projet personnalisé de scolarisation (PPS)",
    definition: "Document élaboré par la MDPH qui définit les modalités de déroulement de la scolarité et les actions pédagogiques, psychologiques, éducatives, sociales, médicales et paramédicales pour un élève en situation de handicap.",
    category: "administratif"
  },
  {
    term: "Maison départementale des personnes handicapées (MDPH)",
    definition: "Organisme français qui accompagne les personnes handicapées et leurs proches dans leurs démarches, évalue leurs besoins et attribue des droits.",
    category: "administratif"
  },
  {
    term: "Allocation d'éducation de l'enfant handicapé (AEEH)",
    definition: "Prestation financière destinée à compenser les frais d'éducation et de soins apportés à un enfant en situation de handicap.",
    category: "administratif"
  },
  {
    term: "Allocation aux adultes handicapés (AAH)",
    definition: "Aide financière qui garantit un revenu minimum aux personnes en situation de handicap pour faire face aux dépenses de la vie courante.",
    category: "administratif"
  },
  {
    term: "Reconnaissance de la qualité de travailleur handicapé (RQTH)",
    definition: "Statut qui permet à une personne en situation de handicap d'accéder à des mesures spécifiques pour favoriser son insertion professionnelle ou son maintien dans l'emploi.",
    category: "administratif"
  },
  {
    term: "Double empathie",
    definition: "Théorie suggérant que les difficultés de communication entre personnes autistes et non-autistes sont mutuelles et bidirectionnelles, et non uniquement dues à un déficit d'empathie chez les personnes autistes.",
    category: "concepts"
  },
  {
    term: "Neurodroit",
    definition: "Mouvement militant qui considère la neurodiversité comme une question de droits humains et d'acceptation des différences neurologiques, plutôt que comme un problème médical à 'corriger'.",
    category: "concepts"
  },
  {
    term: "Syndrome d'Asperger",
    definition: "Forme de trouble du spectre autistique caractérisée par des compétences linguistiques et cognitives préservées, mais des difficultés dans les interactions sociales et la communication non verbale.",
    category: "troubles"
  },
  {
    term: "Hyperacousie",
    definition: "Sensibilité excessive aux sons, même à des niveaux sonores modérés, courante chez les personnes neurodivergentes. Peut causer de l'inconfort ou de la douleur.",
    category: "termes-medicaux"
  },
  {
    term: "Prosopagnosie",
    definition: "Difficulté ou incapacité à reconnaître les visages, même familiers. Fréquente chez les personnes autistes.",
    category: "termes-medicaux"
  },
  {
    term: "Surcharge sensorielle",
    definition: "État de dépassement des capacités de traitement sensoriel, pouvant entraîner de l'anxiété, de la confusion ou un shutdown.",
    category: "termes-medicaux"
  },
  {
    term: "Shutdown",
    definition: "État de fermeture temporaire où la personne perd partiellement ou totalement sa capacité à communiquer et interagir, souvent suite à une surcharge sensorielle ou émotionnelle.",
    category: "termes-medicaux"
  },
  {
    term: "Meltdown",
    definition: "Réaction intense de surcharge émotionnelle et sensorielle pouvant se manifester par des comportements explosifs ou un repli sur soi.",
    category: "termes-medicaux"
  },
  {
    term: "Synesthésie",
    definition: "Phénomène neurologique où la stimulation d'un sens active automatiquement un autre sens, comme voir des couleurs en entendant des sons.",
    category: "termes-medicaux"
  },
  {
    term: "Echolalie",
    definition: "Répétition involontaire de mots ou phrases entendus, immédiatement ou après un délai. Peut être une stratégie de communication ou d'apprentissage.",
    category: "termes-medicaux"
  },
  {
    term: "Scripts sociaux",
    definition: "Phrases ou comportements appris et répétés pour naviguer dans des situations sociales spécifiques.",
    category: "concepts"
  },
  {
    term: "Monotropisme",
    definition: "Tendance à concentrer l'attention sur un seul centre d'intérêt à la fois, caractéristique commune dans l'autisme.",
    category: "concepts"
  },
  {
    term: "Regulation sensorielle",
    definition: "Processus permettant de gérer et d'équilibrer les informations sensorielles reçues de l'environnement.",
    category: "concepts"
  },
  {
    term: "Diète sensorielle",
    definition: "Programme personnalisé d'activités sensorielles visant à réguler le système nerveux et améliorer le traitement sensoriel.",
    category: "termes-medicaux"
  },
  {
    term: "Troubles du traitement auditif",
    definition: "Difficulté à traiter et interpréter les informations sonores, malgré une audition normale.",
    category: "troubles"
  },
  {
    term: "Hyperlexie",
    definition: "Capacité précoce à lire au-delà du niveau attendu pour l'âge, parfois associée à des difficultés de compréhension.",
    category: "termes-medicaux"
  },
  {
    term: "Dyschromatopsie",
    definition: "Trouble de la perception des couleurs, pouvant affecter la vie quotidienne et l'apprentissage.",
    category: "troubles"
  },
  {
    term: "Auto-stimulation",
    definition: "Comportements répétitifs qui aident à la régulation sensorielle et émotionnelle, souvent appelés 'stimming'.",
    category: "termes-medicaux"
  },
  {
    term: "Centre de ressources autisme (CRA)",
    definition: "Structure régionale d'évaluation et d'orientation pour les personnes autistes et leurs familles.",
    category: "administratif"
  },
  {
    term: "Équipe de suivi de la scolarisation (ESS)",
    definition: "Réunion régulière des acteurs impliqués dans la scolarisation d'un élève en situation de handicap pour évaluer et ajuster son parcours.",
    category: "administratif"
  },
  {
    term: "Auxiliaire de vie scolaire (AVS)",
    definition: "Professionnel accompagnant les élèves en situation de handicap dans leur scolarité, désormais appelé AESH.",
    category: "administratif"
  },
  {
    term: "Accompagnant des élèves en situation de handicap (AESH)",
    definition: "Nouveau terme pour AVS, professionnel formé pour accompagner les élèves ayant des besoins éducatifs particuliers.",
    category: "administratif"
  },
  {
    term: "Unité localisée pour l'inclusion scolaire (ULIS)",
    definition: "Dispositif permettant la scolarisation d'élèves en situation de handicap dans l'enseignement ordinaire.",
    category: "administratif"
  },
  {
    term: "Service d'éducation spéciale et de soins à domicile (SESSAD)",
    definition: "Structure mobile apportant un soutien spécialisé aux enfants et adolescents dans leurs différents lieux de vie.",
    category: "administratif"
  },
  {
    term: "Coordination motrice",
    definition: "Capacité à effectuer des mouvements précis et organisés, souvent affectée dans la dyspraxie.",
    category: "termes-medicaux"
  },
  {
    term: "Hypermobilité articulaire",
    definition: "Souplesse excessive des articulations, fréquemment associée à certains troubles neurodéveloppementaux.",
    category: "termes-medicaux"
  },
  {
    term: "Théorie de l'esprit",
    definition: "Capacité à comprendre que les autres ont des pensées, croyances et émotions différentes des siennes, parfois altérée dans l'autisme.",
    category: "concepts"
  },
  {
    term: "Syndrome dysexécutif",
    definition: "Ensemble de difficultés affectant les fonctions exécutives comme la planification, l'organisation et la flexibilité mentale.",
    category: "troubles"
  },
  {
    term: "Cohérence centrale",
    definition: "Capacité à intégrer les informations en un tout cohérent, souvent différente chez les personnes neurodivergentes.",
    category: "concepts"
  },
  {
    term: "Pensée en arborescence",
    definition: "Mode de pensée non linéaire où les idées se ramifient en associations multiples, courant chez les personnes neurodivergentes.",
    category: "concepts"
  },
  {
    term: "Hyposensibilité sensorielle",
    definition: "Réaction réduite aux stimuli sensoriels, nécessitant parfois une stimulation plus intense pour être perçue.",
    category: "termes-medicaux"
  },
  {
    term: "Commission des droits et de l'autonomie des personnes handicapées (CDAPH)",
    definition: "Instance décisionnaire de la MDPH qui statue sur les droits et prestations pour les personnes en situation de handicap.",
    category: "administratif"
  },
  {
    term: "Projet d'accueil individualisé (PAI)",
    definition: "Document permettant l'accueil en collectivité d'un enfant ayant des besoins de santé particuliers.",
    category: "administratif"
  }
];
