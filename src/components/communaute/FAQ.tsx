
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type FAQItemType = {
  question: string;
  answer: string;
  category: string;
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const faqItems: FAQItemType[] = [
    {
      question: "Qu'est-ce que la neurodiversité?",
      answer: "La neurodiversité est un concept qui reconnaît que les différences neurologiques sont le résultat de variations naturelles dans le génome humain. Elle valorise les différentes façons de penser, d'apprendre et de percevoir le monde comme des variations normales plutôt que comme des déficits.",
      category: "général"
    },
    {
      question: "Comment obtenir un diagnostic de TDAH?",
      answer: "Pour obtenir un diagnostic de TDAH (Trouble Déficitaire de l'Attention avec ou sans Hyperactivité), il faut consulter un professionnel de la santé qualifié comme un psychiatre, neuropsychologue ou neuropédiatre. Le diagnostic implique généralement des entretiens cliniques, des questionnaires standardisés, et parfois des tests cognitifs. Il est important de choisir un spécialiste qui a l'expérience du TDAH chez les adultes si le diagnostic concerne un adulte.",
      category: "diagnostic"
    },
    {
      question: "Les troubles neurodéveloppementaux sont-ils héréditaires?",
      answer: "Oui, de nombreux troubles neurodéveloppementaux ont une composante génétique. Par exemple, le TDAH, l'autisme et la dyslexie présentent tous des taux d'héritabilité significatifs. Cela signifie qu'un enfant dont un parent est concerné aura une probabilité plus élevée de développer un trouble similaire. Cependant, l'environnement et d'autres facteurs jouent également un rôle important.",
      category: "général"
    },
    {
      question: "Quelle est la différence entre le TSA et le syndrome d'Asperger?",
      answer: "Le syndrome d'Asperger était auparavant considéré comme un diagnostic distinct mais il est maintenant inclus dans la catégorie plus large du Trouble du Spectre de l'Autisme (TSA) selon le DSM-5. Les personnes qui auraient auparavant reçu un diagnostic d'Asperger sont désormais diagnostiquées avec un TSA, généralement avec un niveau de soutien requis plus faible (niveau 1). Le terme est toutefois encore utilisé informellement.",
      category: "autisme"
    },
    {
      question: "Quels aménagements scolaires existent pour les élèves neurodivergents?",
      answer: "Les aménagements peuvent inclure: du temps supplémentaire pour les examens, l'utilisation d'outils numériques (ordinateurs, logiciels spécifiques), des supports de cours adaptés, des pauses sensorielles, des espaces de travail moins stimulants, des aides visuelles, et parfois la présence d'un accompagnant. En France, ces aménagements peuvent être formalisés dans un Plan d'Accompagnement Personnalisé (PAP) ou un Projet Personnalisé de Scolarisation (PPS).",
      category: "éducation"
    },
    {
      question: "Comment expliquer la neurodiversité à mon entourage?",
      answer: "Expliquez que la neurodiversité est simplement une façon différente de traiter l'information, pas un défaut. Utilisez des analogies simples, comme comparer le cerveau à un système d'exploitation d'ordinateur: certains fonctionnent avec Windows, d'autres avec Mac OS, mais tous sont valables et ont leurs forces et faiblesses. Partagez des ressources pédagogiques et encouragez les questions. Parlez de vos expériences personnelles et de comment votre différence neurologique affecte votre quotidien.",
      category: "relations"
    },
    {
      question: "Peut-on être diagnostiqué à l'âge adulte?",
      answer: "Oui, absolument. De nombreuses personnes reçoivent un diagnostic de trouble neurodéveloppemental (TDAH, autisme, dyslexie, etc.) à l'âge adulte. Certains troubles, comme le TDAH, étaient moins bien reconnus il y a quelques décennies, surtout chez les filles et les femmes. Un diagnostic tardif peut apporter un grand soulagement et une meilleure compréhension de soi.",
      category: "diagnostic"
    },
    {
      question: "Existe-t-il des aides financières pour les personnes neurodivergentes?",
      answer: "En France, les personnes avec un diagnostic officiel peuvent potentiellement bénéficier de: l'Allocation aux Adultes Handicapés (AAH), l'Allocation d'Éducation de l'Enfant Handicapé (AEEH), la Prestation de Compensation du Handicap (PCH), et des aides pour l'aménagement du poste de travail. Ces aides sont attribuées par la Maison Départementale des Personnes Handicapées (MDPH) après évaluation du dossier.",
      category: "aides"
    },
    {
      question: "Comment gérer la surcharge sensorielle?",
      answer: "Pour gérer la surcharge sensorielle, vous pouvez: identifier vos déclencheurs spécifiques, porter des écouteurs antibruit ou des lunettes teintées, créer une 'trousse d'urgence sensorielle' avec des objets apaisants, aménager des espaces calmes chez vous et au travail, pratiquer des techniques de respiration et de pleine conscience, et ne pas hésiter à faire des pauses lorsque vous sentez une surcharge arriver.",
      category: "quotidien"
    },
    {
      question: "Les troubles neurodéveloppementaux peuvent-ils apparaître ou disparaître avec le temps?",
      answer: "Les troubles neurodéveloppementaux sont généralement considérés comme des conditions présentes dès la naissance ou la petite enfance, bien que les symptômes puissent ne devenir apparents que plus tard. Ils ne 'disparaissent' pas véritablement, mais leurs manifestations peuvent changer avec le temps, notamment grâce au développement de stratégies d'adaptation. Certaines personnes peuvent sembler 'dépasser' leur diagnostic car elles ont appris à compenser efficacement leurs difficultés.",
      category: "général"
    },
    // Nouvelles questions ajoutées
    {
      question: "Comment reconnaître les signes du TDAH chez un enfant?",
      answer: "Les signes typiques du TDAH chez l'enfant incluent: une difficulté à maintenir son attention sur des tâches ou des jeux, une apparente non-écoute quand on lui parle directement, une tendance à perdre des objets nécessaires, une agitation constante (courir, grimper de façon excessive), une difficulté à attendre son tour, et une tendance à interrompre les autres. Il est important de noter que tous les enfants peuvent présenter ces comportements occasionnellement, mais chez l'enfant avec TDAH, ces comportements sont plus fréquents, plus intenses et interfèrent significativement avec le fonctionnement scolaire et social.",
      category: "tdah"
    },
    {
      question: "Quelles sont les adaptations possibles pour un adulte avec TDAH en milieu professionnel?",
      answer: "Les adaptations professionnelles pour les adultes avec TDAH peuvent inclure: un espace de travail minimisant les distractions, l'utilisation d'outils de gestion du temps (minuteurs, applications), des listes de contrôle détaillées, des pauses régulières pour se recentrer, des réunions courtes et structurées, la possibilité de travailler avec des écouteurs, la décomposition des grandes tâches en étapes plus petites et gérables, et la flexibilité dans les horaires de travail quand c'est possible. La communication ouverte avec les responsables sur les besoins spécifiques est également cruciale.",
      category: "tdah"
    },
    {
      question: "Quels sont les signes de la dyslexie chez l'adulte?",
      answer: "Chez l'adulte, la dyslexie peut se manifester par: une lecture lente et laborieuse, des difficultés avec l'orthographe même pour des mots courants, une tendance à éviter les activités impliquant la lecture ou l'écriture, des difficultés à prendre des notes ou à résumer des informations, une fatigue importante après avoir lu ou écrit, des difficultés avec les langues étrangères, et parfois une excellente expression orale contrastant avec des compétences écrites limitées. Beaucoup d'adultes dyslexiques ont développé des stratégies de compensation efficaces, ce qui peut parfois masquer leurs difficultés.",
      category: "dyslexie"
    },
    {
      question: "Comment soutenir un proche autiste lors d'événements sociaux?",
      answer: "Pour soutenir un proche autiste lors d'événements sociaux: préparez-le en lui fournissant des informations détaillées sur l'événement (lieu, durée, personnes présentes), identifiez un espace calme où il pourra se retirer si nécessaire, établissez un signal discret pour indiquer qu'il a besoin d'aide ou de faire une pause, respectez son besoin de distance physique et ses limites sensorielles, défendez-le si d'autres personnes ne comprennent pas ses comportements, et prévoyez une sortie anticipée si l'événement devient trop difficile. L'essentiel est d'être à l'écoute et d'adapter le soutien à ses besoins spécifiques.",
      category: "autisme"
    },
    {
      question: "Que faire quand on soupçonne la maladie d'Alzheimer chez un parent âgé?",
      answer: "Si vous soupçonnez la maladie d'Alzheimer chez un parent: encouragez-le à consulter un médecin pour une évaluation complète (généraliste puis neurologue ou gériatre), notez les symptômes observés (pertes de mémoire, changements de personnalité, difficultés avec les tâches quotidiennes), abordez le sujet avec délicatesse et respect, sans infantiliser la personne, renseignez-vous sur les ressources disponibles dans votre région (associations, groupes de soutien), commencez à planifier les soins futurs tout en impliquant votre parent dans les décisions tant qu'il le peut, et prenez également soin de votre propre santé mentale car s'occuper d'un proche atteint de démence peut être éprouvant.",
      category: "neurodégénératif"
    },
    {
      question: "Quels sont les bénéfices d'un diagnostic formel pour un adulte neurodivergent?",
      answer: "Un diagnostic formel pour un adulte neurodivergent offre plusieurs avantages: une validation et une explication des difficultés vécues parfois depuis l'enfance, l'accès à des aides et adaptations spécifiques (au travail, dans les études), l'éligibilité à certaines aides financières et services de soutien, une meilleure compréhension de soi et de ses besoins, la possibilité de rejoindre des communautés de personnes partageant des expériences similaires, et une base pour communiquer ses besoins à l'entourage. Pour beaucoup, le diagnostic est une étape libératrice qui permet de cesser de se blâmer pour des difficultés qui ont une explication neurologique.",
      category: "diagnostic"
    },
    {
      question: "Comment la dyscalculie affecte-t-elle la vie quotidienne?",
      answer: "La dyscalculie affecte la vie quotidienne de plusieurs façons: difficultés à gérer un budget et comprendre ses finances, problèmes pour estimer le temps nécessaire à une activité, difficultés à suivre des recettes de cuisine avec des mesures précises, confusion avec les directions et l'orientation spatiale, problèmes pour calculer des pourboires ou vérifier des additions, difficultés à retenir des numéros de téléphone ou des codes, et anxiété face à toute situation impliquant des calculs. Ces défis peuvent être surmonté en utilisant des outils comme les calculatrices, les applications de gestion financière, et en développant des stratégies de contournement personnalisées.",
      category: "dyscalculie"
    },
    {
      question: "Comment choisir une thérapie adaptée pour un enfant autiste?",
      answer: "Pour choisir une thérapie adaptée pour un enfant autiste: recherchez des approches fondées sur des preuves scientifiques (comme l'ABA, TEACCH, ou Denver), consultez plusieurs professionnels pour obtenir différentes perspectives, impliquez-vous dans le processus et apprenez les techniques pour les renforcer à la maison, observez comment votre enfant répond à différentes approches (toutes ne conviennent pas à tous les enfants), méfiez-vous des thérapies promettant des 'guérisons' miraculeuses, privilégiez les professionnels qui respectent l'individualité de votre enfant et ne cherchent pas à supprimer tous les comportements autistiques, et considérez la logistique (coût, disponibilité, distance) pour assurer la durabilité de l'intervention.",
      category: "autisme"
    },
    {
      question: "Quelles stratégies peuvent aider un adulte dyspraxique au quotidien?",
      answer: "Les stratégies utiles pour les adultes dyspraxiques incluent: l'organisation méticuleuse de l'espace de vie avec des repères visuels, l'utilisation d'applications de rappel et de planification, la création de routines fixes, l'utilisation de technologies d'assistance (correcteurs orthographiques, dictée vocale), la pratique régulière d'activités physiques adaptées pour améliorer la coordination, l'adaptation du poste de travail (clavier spécial, souris ergonomique), la simplification des tâches complexes en étapes plus petites, et l'acceptation qu'il faut parfois plus de temps pour accomplir certaines tâches. Il est également utile d'informer les collègues ou proches de ses difficultés spécifiques pour éviter les malentendus.",
      category: "dyspraxie"
    },
    {
      question: "Comment la méditation pleine conscience peut-elle aider les personnes neurodivergentes?",
      answer: "La méditation pleine conscience peut aider les personnes neurodivergentes en: améliorant la régulation émotionnelle et la gestion du stress, développant une meilleure conscience corporelle, renforçant la capacité d'attention et de concentration, réduisant les ruminations mentales, aidant à gérer la surcharge sensorielle, favorisant l'acceptation de soi et la réduction de l'autocritique, et améliorant la qualité du sommeil. Les pratiques doivent souvent être adaptées aux besoins spécifiques: sessions plus courtes pour les personnes avec TDAH, approches guidées spécifiques pour les personnes autistes, ou pratiques combinées avec des mouvements pour ceux qui ont du mal à rester immobiles. Commencer progressivement et avec régularité est clé pour en tirer les bénéfices.",
      category: "quotidien"
    },
    {
      question: "Quels sont les traitements actuels pour la maladie de Parkinson?",
      answer: "Les traitements actuels pour la maladie de Parkinson comprennent: des médicaments dopaminergiques (lévodopa, agonistes dopaminergiques) qui compensent le manque de dopamine, des inhibiteurs enzymatiques qui ralentissent la dégradation de la dopamine, la stimulation cérébrale profonde pour les cas avancés ne répondant plus bien aux médicaments, des thérapies complémentaires comme la kinésithérapie, l'ergothérapie et l'orthophonie pour maintenir la mobilité et les fonctions, et des approches holistiques incluant l'exercice régulier (particulièrement le tai-chi, la danse), une alimentation équilibrée et la gestion du stress. La recherche continue sur des traitements potentiellement modificateurs de la maladie, mais actuellement, les approches visent principalement à gérer les symptômes et améliorer la qualité de vie.",
      category: "neurodégénératif"
    },
    {
      question: "Comment reconnaître les signes d'épuisement (burnout) chez les personnes neurodivergentes?",
      answer: "Les signes d'épuisement chez les personnes neurodivergentes peuvent inclure: une augmentation des comportements d'autostimulation ou de réactions sensorielles, une régression dans les compétences sociales ou exécutives, un retrait social excessif, une fatigue extrême qui ne s'améliore pas avec le repos, une augmentation de l'anxiété ou des crises émotionnelles, des problèmes de sommeil ou d'alimentation, et une difficulté accrue à masquer ses traits neurodivergents ('camouflage social'). Ce burnout, parfois appelé 'burnout autistique' ou 'burnout TDAH', diffère du burnout professionnel classique car il résulte d'un effort constant pour s'adapter à un monde neurotypique. La récupération nécessite souvent une réduction significative des exigences sociales et sensorielles, ainsi qu'un retour aux intérêts spéciaux et activités ressourçantes.",
      category: "quotidien"
    },
    {
      question: "Comment les enseignants peuvent-ils mieux soutenir les élèves dyslexiques?",
      answer: "Les enseignants peuvent soutenir les élèves dyslexiques en: fournissant des supports de cours adaptés (police dyslexie-friendly, espacement accru, texte sur papier coloré), accordant plus de temps pour les examens et les devoirs, proposant des alternatives aux travaux écrits (présentations orales, projets multimédias), utilisant des technologies d'assistance (logiciels de synthèse vocale, correcteurs orthographiques), décomposant les instructions complexes en étapes simples, renforçant l'enseignement explicite de la phonologie et des règles orthographiques, valorisant les forces de l'élève dans d'autres domaines, et maintenant une communication régulière avec les parents et les professionnels de santé impliqués. L'approche multisensorielle, qui implique plusieurs sens dans l'apprentissage, est particulièrement efficace pour les élèves dyslexiques.",
      category: "éducation"
    },
    {
      question: "Quelles activités peuvent favoriser le développement cognitif des enfants neurodivergents?",
      answer: "Les activités bénéfiques pour le développement cognitif des enfants neurodivergents incluent: des jeux de motricité fine (pâte à modeler, perles), des activités sensorielles adaptées aux préférences de l'enfant, des jeux de mémoire et d'association, la musique et particulièrement l'apprentissage d'un instrument, des activités physiques structurées comme la natation ou les arts martiaux, des jeux de construction (Lego, blocs), la lecture partagée avec des supports visuels, des activités artistiques libres, des jeux de rôle pour développer les compétences sociales, et des jeux de logique et de résolution de problèmes adaptés au niveau de l'enfant. L'essentiel est de suivre les intérêts de l'enfant tout en introduisant progressivement de nouveaux défis adaptés à ses capacités.",
      category: "éducation"
    },
    {
      question: "Comment gérer l'anxiété sociale souvent associée aux troubles neurodéveloppementaux?",
      answer: "Pour gérer l'anxiété sociale associée aux troubles neurodéveloppementaux: pratiquez des techniques de respiration et de pleine conscience régulièrement, préparez-vous aux situations sociales en visualisant leur déroulement, établissez un plan d'action pour les moments difficiles (phrases préparées, stratégies de sortie), exposez-vous progressivement aux situations redoutées en commençant par les moins anxiogènes, identifiez et remettez en question les pensées négatives automatiques, pratiquez des compétences sociales dans des environnements sécurisants (groupes de soutien, thérapie), utilisez des objets apaisants discrets lors des situations stressantes, et accordez-vous des pauses de récupération après les interactions sociales exigeantes. La thérapie cognitivo-comportementale adaptée aux spécificités neurodéveloppementales est particulièrement efficace pour traiter l'anxiété sociale.",
      category: "relations"
    },
    {
      question: "Quels sont les signes précoces de la maladie d'Alzheimer?",
      answer: "Les signes précoces de la maladie d'Alzheimer peuvent inclure: des problèmes de mémoire affectant la vie quotidienne (oublier des informations récemment apprises), des difficultés à planifier ou résoudre des problèmes, des difficultés à accomplir des tâches familières à la maison ou au travail, la confusion concernant le temps ou le lieu, des problèmes avec les mots dans la parole ou l'écriture, des objets égarés et l'incapacité à retracer ses pas, un jugement altéré ou diminué, un retrait des activités sociales ou professionnelles, et des changements d'humeur ou de personnalité. Ces symptômes se développent progressivement et s'aggravent avec le temps, interférant avec les activités quotidiennes. Un diagnostic précoce permet d'accéder à des traitements qui peuvent ralentir la progression et améliorer la qualité de vie.",
      category: "neurodégénératif"
    },
    {
      question: "Comment favoriser l'indépendance d'un jeune adulte autiste?",
      answer: "Pour favoriser l'indépendance d'un jeune adulte autiste: encouragez l'apprentissage progressif des compétences de vie quotidienne (cuisine, ménage, gestion financière) adaptées à son niveau, utilisez des supports visuels, des listes de contrôle et des routines structurées, enseignez explicitement les règles sociales implicites et les attentes dans différents contextes, travaillez sur les compétences d'autodétermination et d'auto-plaidoyer, explorez les technologies d'assistance qui peuvent faciliter l'autonomie, créez des occasions de pratique dans des environnements sécurisants puis de plus en plus variés, identifiez les soutiens naturels dans la communauté (voisins, collègues bienveillants), et célébrez chaque progrès, même mineur. L'objectif devrait être une indépendance adaptée aux capacités individuelles, qui peut signifier une vie totalement autonome pour certains ou un soutien continu pour d'autres.",
      category: "autisme"
    },
    {
      question: "Quels métiers sont souvent bien adaptés aux personnes avec TDAH?",
      answer: "Les métiers souvent bien adaptés aux personnes avec TDAH incluent: les professions créatives (arts, design, publicité), les métiers d'urgence (premiers répondants, infirmiers urgentistes), les métiers dynamiques avec variété de tâches (journalisme, entrepreneuriat), les professions technologiques permettant l'hyperfocalisation (programmation, cybersécurité), l'enseignement (particulièrement dans des domaines spécialisés), les métiers de terrain et de nature, les professions sportives, et les carrières dans la vente ou le marketing qui valorisent l'enthousiasme et l'énergie. Les environnements de travail idéaux offrent de la variété, permettent une certaine autonomie dans l'organisation du travail, récompensent la créativité et la résolution de problèmes, et offrent des retours fréquents. Cependant, chaque personne avec TDAH est unique, et le métier idéal dépend des forces individuelles, des intérêts et des stratégies d'adaptation développées.",
      category: "travail"
    }
  ];
  
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'général', name: 'Général' },
    { id: 'diagnostic', name: 'Diagnostic' },
    { id: 'tdah', name: 'TDAH' },
    { id: 'autisme', name: 'Autisme' },
    { id: 'dyslexie', name: 'Dyslexie' },
    { id: 'dyspraxie', name: 'Dyspraxie' },
    { id: 'dyscalculie', name: 'Dyscalculie' },
    { id: 'éducation', name: 'Éducation' },
    { id: 'aides', name: 'Aides et démarches' },
    { id: 'relations', name: 'Relations' },
    { id: 'quotidien', name: 'Vie quotidienne' },
    { id: 'travail', name: 'Vie professionnelle' },
    { id: 'neurodégénératif', name: 'Maladies neurodégénératives' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8 relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Rechercher une question..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="mb-6 overflow-x-auto">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="inline-flex h-auto p-1 min-w-full">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-3 py-1.5 text-sm whitespace-nowrap"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {filteredFAQs.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Aucune question ne correspond à votre recherche</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
