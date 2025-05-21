/**
 * Données des termes du glossaire pour l'application
 * Contient les définitions détaillées des concepts clés mentionnés dans le contenu
 */

export interface GlossaryTermData {
  id: string;
  term: string;
  definition: string;
  title?: string;
}

const glossaryTerms: Record<string, GlossaryTermData> = {
  neurodivergent: {
    id: 'neurodivergent',
    term: 'Neurodivergent',
    title: 'Neurodivergence',
    definition: `<p>La neurodivergence fait référence aux variations naturelles du cerveau humain qui entraînent des différences dans la façon dont une personne pense, apprend, traite l'information et interagit avec le monde.</p>
      <p>Les personnes neurodivergentes peuvent présenter des profils cognitifs uniques qui incluent des forces particulières comme la pensée visuelle, la créativité, l'hyperfocalisation, et la capacité à repérer des patterns complexes.</p>
      <p>Parmi les formes de neurodivergence, on trouve notamment l'autisme, le TDAH, la dyslexie, la dyscalculie, la dyspraxie, et le syndrome de Tourette.</p>`
  },
  hyperfocalisation: {
    id: 'hyperfocalisation',
    term: 'Hyperfocalisation',
    definition: `<p>L'hyperfocalisation est la capacité à se concentrer intensément sur un sujet ou une activité d'intérêt pendant de longues périodes.</p>
      <p>Cette caractéristique, souvent présente chez les personnes neurodivergentes (notamment celles avec TDAH ou autisme), peut être un véritable atout lorsqu'elle est canalisée vers des apprentissages ou des projets significatifs.</p>
      <p>Pendant l'état d'hyperfocalisation, la personne peut démontrer une concentration, une productivité et une créativité exceptionnelles, tout en perdant parfois la notion du temps ou la conscience de son environnement.</p>`
  },
  penseeAssociative: {
    id: 'penseeAssociative',
    term: 'Pensée associative',
    definition: `<p>La pensée associative (ou non-linéaire) est un mode de réflexion où les idées sont connectées par associations plutôt que par séquences logiques traditionnelles.</p>
      <p>Cette façon de penser, fréquente chez les personnes neurodivergentes, permet de faire des liens créatifs entre des concepts apparemment sans rapport, favorisant l'innovation et la résolution de problèmes complexes.</p>
      <p>Contrairement à la pensée linéaire qui suit un chemin A→B→C, la pensée associative peut sauter de A→M→F→B, créant des connexions uniques et inattendues.</p>`
  },
  penseeVisuelle: {
    id: 'penseeVisuelle',
    term: 'Pensée visuelle',
    definition: `<p>La pensée visuelle est la capacité à traiter et manipuler l'information sous forme d'images mentales plutôt que de mots ou de concepts abstraits.</p>
      <p>Les penseurs visuels "voient" littéralement leurs pensées sous forme d'images, de diagrammes ou de scènes, ce qui leur confère souvent des aptitudes exceptionnelles en matière de créativité, de conception spatiale et de résolution de problèmes complexes.</p>
      <p>Cette caractéristique est particulièrement présente chez de nombreuses personnes neurodivergentes, notamment celles avec autisme ou dyslexie.</p>`
  },
  apprentissageVisuel: {
    id: 'apprentissageVisuel',
    term: 'Apprentissage visuel',
    definition: `<p>L'apprentissage visuel est un style d'apprentissage où l'information est mieux comprise et mémorisée lorsqu'elle est présentée sous forme visuelle (images, graphiques, vidéos, etc.).</p>
      <p>Les apprenants visuels bénéficient particulièrement des cartes mentales, des schémas, des codes couleurs et des démonstrations visuelles pour intégrer de nouvelles connaissances.</p>
      <p>Ce style d'apprentissage est particulièrement répandu chez les personnes neurodivergentes, qui peuvent avoir une capacité exceptionnelle à traiter et mémoriser l'information visuelle.</p>`
  },
  apprentissageAuditif: {
    id: 'apprentissageAuditif',
    term: 'Apprentissage auditif',
    definition: `<p>L'apprentissage auditif est un style d'apprentissage où l'information est mieux comprise et mémorisée lorsqu'elle est présentée sous forme sonore ou verbale.</p>
      <p>Les apprenants auditifs bénéficient particulièrement des discussions, des explications orales, des podcasts et de la répétition à voix haute pour intégrer de nouvelles connaissances.</p>
      <p>Bien que moins fréquent chez les personnes neurodivergentes que l'apprentissage visuel ou kinesthésique, certaines personnes neurodivergentes peuvent avoir des capacités auditives exceptionnelles, notamment une mémoire auditive précise.</p>`
  },
  apprentissageKinesthesique: {
    id: 'apprentissageKinesthesique',
    term: 'Apprentissage kinesthésique',
    definition: `<p>L'apprentissage kinesthésique est un style d'apprentissage où l'information est mieux comprise et mémorisée à travers le mouvement, le toucher et l'expérimentation pratique.</p>
      <p>Les apprenants kinesthésiques ont besoin de "faire" pour comprendre, et bénéficient particulièrement des manipulations d'objets, des jeux de rôle, des simulations et des expériences concrètes.</p>
      <p>Ce style d'apprentissage est très répandu chez les personnes neurodivergentes, qui peuvent avoir un besoin naturel de mouvement et d'engagement physique pour maintenir leur attention et faciliter leur compréhension.</p>
      <h4>Exemples pratiques :</h4>
      <ul>
        <li>Utilisation de pâte à modeler pour comprendre des concepts abstraits</li>
        <li>Apprentissage de la géométrie avec des blocs manipulables</li>
        <li>Mémorisation en marchant ou en bougeant</li>
      </ul>
      <p><a href="https://www.verywellmind.com/kinesthetic-learning-style-2795369" target="_blank" rel="noopener noreferrer">En savoir plus sur l'apprentissage kinesthésique</a></p>
      <img src="/images/kinesthetic-learning.svg" alt="Illustration d'apprentissage kinesthésique" style="max-width: 100%; height: auto;" />`
  },
  cartesMentales: {
    id: 'cartesMentales',
    term: 'Cartes mentales',
    title: 'Cartes mentales (Mind Mapping)',
    definition: `<p>Les cartes mentales sont des diagrammes visuels qui organisent l'information de façon hiérarchique et radiale autour d'un concept central.</p>
      <p>Cette technique d'organisation visuelle est particulièrement efficace pour les personnes neurodivergentes car elle permet de :</p>
      <ul>
        <li>Visualiser les connexions entre différentes idées</li>
        <li>Structurer l'information de manière non-linéaire</li>
        <li>Combiner texte, images et couleurs pour faciliter la mémorisation</li>
        <li>Représenter visuellement des concepts abstraits</li>
      </ul>
      <h4>Applications pratiques :</h4>
      <p>Les cartes mentales peuvent être utilisées pour la prise de notes, la planification de projets, la révision d'examens, le brainstorming créatif ou la résolution de problèmes complexes.</p>
      <p><a href="https://www.mindmeister.com/fr/blog/cartes-mentales-education/" target="_blank" rel="noopener noreferrer">Découvrir des exemples de cartes mentales éducatives</a></p>
      <img src="/images/mind-map-example.svg" alt="Exemple de carte mentale" style="max-width: 100%; height: auto;" />`
  },
  theremin: {
    id: 'theremin',
    term: 'Thérémine',
    title: 'Le Thérémine : Un instrument unique',
    definition: `<p>Le thérémine est un instrument de musique électronique unique qui se joue sans contact physique. Le musicien contrôle la hauteur et le volume en déplaçant ses mains dans l'air autour de deux antennes.</p>
      <p>Dans le contexte de la neurodiversité, le thérémine est souvent utilisé comme métaphore pour illustrer comment certains cerveaux fonctionnent différemment mais produisent des résultats tout aussi valables :</p>
      <ul>
        <li>Approche non conventionnelle mais efficace</li>
        <li>Sensibilité aux subtilités invisibles</li>
        <li>Capacité à créer quelque chose de beau à partir d'une interaction unique avec l'environnement</li>
      </ul>
      <h4>Connexion avec la neurodiversité :</h4>
      <p>Tout comme le thérémine produit de la musique d'une façon qui peut sembler étrange mais qui est parfaitement valide, les personnes neurodivergentes peuvent résoudre des problèmes ou créer des œuvres d'une manière qui diffère des approches conventionnelles mais qui est tout aussi légitime et souvent innovante.</p>
      <p><a href="https://www.youtube.com/watch?v=K6KbEnGnymk" target="_blank" rel="noopener noreferrer">Voir une démonstration de thérémine</a></p>
      <img src="/images/theremin.svg" alt="Illustration d'un thérémine" style="max-width: 100%; height: auto;" />`
  },
  autorégulation: {
    id: 'autorégulation',
    term: 'Autorégulation',
    definition: `<p>L'autorégulation désigne la capacité à gérer ses émotions, son attention et son comportement en fonction des exigences de la situation.</p>
      <p>Pour les personnes neurodivergentes, les comportements d'autorégulation (comme le balancement, la manipulation d'objets, ou les mouvements répétitifs) sont souvent des stratégies essentielles pour gérer les stimuli sensoriels, maintenir l'attention ou réduire l'anxiété.</p>
      <p>Un environnement d'apprentissage adapté devrait tolérer et même encourager ces comportements d'autorégulation, qui sont souvent nécessaires au bien-être et à la concentration.</p>`
  }
};

export default glossaryTerms;