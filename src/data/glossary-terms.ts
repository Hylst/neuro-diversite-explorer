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
      <p>Ce style d'apprentissage est très répandu chez les personnes neurodivergentes, qui peuvent avoir un besoin naturel de mouvement et d'engagement physique pour maintenir leur attention et faciliter leur compréhension.</p>`
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