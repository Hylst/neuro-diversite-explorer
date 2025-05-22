import React from 'react';

// Données pour les détails contextuels des matières
export const matieresDetails = {
  mathematiques: {
    term: 'Mathématiques',
    shortDescription: 'Approches adaptées pour l\'apprentissage des mathématiques chez les personnes neurodivergentes',
    longDescription: (
      <div className="space-y-4">
        <p>
          Les mathématiques peuvent représenter un défi ou au contraire une force pour les personnes neurodivergentes, selon leur profil cognitif.
        </p>
        
        <h3 className="text-lg font-semibold">Concepts clés</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Représentation visuelle</strong> : Utiliser des schémas, graphiques et modèles 3D pour rendre les concepts abstraits plus concrets</li>
          <li><strong>Manipulation</strong> : Favoriser l'apprentissage par la manipulation d'objets (jetons, réglettes, formes géométriques)</li>
          <li><strong>Décomposition</strong> : Décomposer les problèmes complexes en étapes plus simples et explicites</li>
          <li><strong>Contextualisation</strong> : Relier les concepts mathématiques à des situations concrètes et significatives</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Techniques spécifiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Méthode CRA</strong> (Concret-Représentation-Abstrait) : Progression graduelle du concret vers l'abstrait</li>
          <li><strong>Cartes mentales</strong> : Organiser visuellement les concepts et leurs relations</li>
          <li><strong>Approche multisensorielle</strong> : Combiner visuel, auditif et kinesthésique pour renforcer la compréhension</li>
          <li><strong>Technologie assistive</strong> : Utiliser des calculatrices, logiciels de géométrie dynamique et applications adaptées</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Adaptations par profil</h3>
          <p className="mb-2"><strong>TDAH</strong> : Exercices courts, alternance des activités, utilisation de minuteurs</p>
          <p className="mb-2"><strong>TSA</strong> : Instructions claires et précises, prévisibilité, approche systématique</p>
          <p className="mb-2"><strong>Dyslexie/Dyscalculie</strong> : Supports visuels renforcés, temps supplémentaire, décomposition des étapes</p>
          <p><strong>HPI</strong> : Défis stimulants, exploration des concepts avancés, liens interdisciplinaires</p>
        </div>
      </div>
    )
  },
  
  langues: {
    term: 'Langues',
    shortDescription: 'Stratégies pour faciliter l\'apprentissage des langues chez les apprenants neurodivergents',
    longDescription: (
      <div className="space-y-4">
        <p>
          L'apprentissage des langues (maternelle ou étrangères) peut présenter des défis particuliers pour les personnes neurodivergentes,
          notamment en ce qui concerne la lecture, l'écriture et la communication orale.
        </p>
        
        <h3 className="text-lg font-semibold">Approches efficaces</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Méthode phonologique</strong> : Travailler explicitement sur les sons et leur correspondance avec les lettres</li>
          <li><strong>Approche structurée</strong> : Enseigner systématiquement les règles grammaticales et les exceptions</li>
          <li><strong>Immersion contextuelle</strong> : Apprendre le vocabulaire dans des contextes significatifs plutôt qu'isolément</li>
          <li><strong>Supports visuels</strong> : Utiliser des images, des cartes mentales et des codes couleur</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Outils et techniques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Lecture multisensorielle</strong> : Combiner la lecture visuelle avec l'écoute (livres audio)</li>
          <li><strong>Technologies d'assistance</strong> : Correcteurs orthographiques, logiciels de prédiction de mots, synthèse vocale</li>
          <li><strong>Jeux linguistiques</strong> : Utiliser des jeux pour renforcer le vocabulaire et la grammaire</li>
          <li><strong>Méthodes mnémotechniques</strong> : Créer des associations visuelles ou des histoires pour mémoriser</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Adaptations spécifiques</h3>
          <p className="mb-2"><strong>Dyslexie</strong> : Polices adaptées (OpenDyslexic), textes aérés, lecture guidée</p>
          <p className="mb-2"><strong>TDAH</strong> : Textes courts, pauses fréquentes, activités interactives</p>
          <p className="mb-2"><strong>TSA</strong> : Vocabulaire explicite, clarification des expressions idiomatiques et du langage figuré</p>
          <p><strong>Dyspraxie</strong> : Alternatives à l'écriture manuscrite, utilisation du clavier, dictée vocale</p>
        </div>
      </div>
    )
  },
  
  sciences: {
    term: 'Sciences',
    shortDescription: 'Méthodes d\'enseignement des sciences adaptées aux apprenants neurodivergents',
    longDescription: (
      <div className="space-y-4">
        <p>
          Les sciences peuvent être particulièrement engageantes pour les apprenants neurodivergents grâce à leur nature expérimentale
          et à la possibilité d'explorer des intérêts spécifiques en profondeur.
        </p>
        
        <h3 className="text-lg font-semibold">Principes pédagogiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Apprentissage par l'expérience</strong> : Favoriser les expériences pratiques et l'observation directe</li>
          <li><strong>Démarche d'investigation</strong> : Encourager le questionnement, l'hypothèse et la vérification</li>
          <li><strong>Visualisation</strong> : Utiliser des modèles, simulations et animations pour illustrer les concepts</li>
          <li><strong>Connexions interdisciplinaires</strong> : Relier les concepts scientifiques à d'autres domaines d'intérêt</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Stratégies d'enseignement</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Protocoles explicites</strong> : Fournir des instructions claires et séquentielles pour les expériences</li>
          <li><strong>Supports visuels</strong> : Utiliser des schémas, diagrammes et modèles 3D</li>
          <li><strong>Technologies numériques</strong> : Exploiter les simulations, laboratoires virtuels et applications interactives</li>
          <li><strong>Projets personnalisés</strong> : Permettre l'exploration approfondie de sujets d'intérêt spécifiques</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Points forts à exploiter</h3>
          <p className="mb-2"><strong>Pensée systématique</strong> : Capacité à comprendre les systèmes complexes et leurs interactions</p>
          <p className="mb-2"><strong>Attention aux détails</strong> : Observation minutieuse et précise des phénomènes</p>
          <p className="mb-2"><strong>Pensée non-conventionnelle</strong> : Approches créatives et perspectives uniques pour résoudre des problèmes</p>
          <p><strong>Hyperfocus</strong> : Capacité à se concentrer intensément sur des sujets d'intérêt</p>
        </div>
      </div>
    )
  },
  
  artsCreativite: {
    term: 'Arts & Créativité',
    shortDescription: 'Exploiter les talents créatifs souvent présents chez les personnes neurodivergentes',
    longDescription: (
      <div className="space-y-4">
        <p>
          Les arts et la créativité offrent des moyens d'expression particulièrement adaptés aux personnes neurodivergentes,
          leur permettant de développer leurs talents uniques et de communiquer différemment.
        </p>
        
        <h3 className="text-lg font-semibold">Domaines artistiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Arts visuels</strong> : Dessin, peinture, sculpture, photographie, arts numériques</li>
          <li><strong>Arts du spectacle</strong> : Musique, danse, théâtre, expression corporelle</li>
          <li><strong>Arts littéraires</strong> : Écriture créative, poésie, narration</li>
          <li><strong>Design et artisanat</strong> : Création d'objets, design, architecture, modélisme</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Bénéfices spécifiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Expression non-verbale</strong> : Communiquer des émotions et des idées sans passer par le langage</li>
          <li><strong>Développement sensoriel</strong> : Explorer et intégrer différentes expériences sensorielles</li>
          <li><strong>Confiance en soi</strong> : Valoriser des compétences uniques et développer l'estime de soi</li>
          <li><strong>Régulation émotionnelle</strong> : Utiliser l'art comme exutoire et moyen de gestion du stress</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Approches pédagogiques</h3>
          <p className="mb-2"><strong>Structure flexible</strong> : Équilibrer directives claires et liberté créative</p>
          <p className="mb-2"><strong>Valorisation des différences</strong> : Célébrer les perspectives uniques et les styles non conventionnels</p>
          <p className="mb-2"><strong>Adaptations sensorielles</strong> : Tenir compte des sensibilités (matériaux, sons, lumières)</p>
          <p><strong>Projets personnalisés</strong> : Permettre l'exploration approfondie d'intérêts spécifiques</p>
        </div>
      </div>
    )
  },
  
  methodesApprentissage: {
    term: 'Méthodes d\'apprentissage actif',
    shortDescription: 'Techniques pour transformer l\'apprentissage passif en processus actif et engageant',
    longDescription: (
      <div className="space-y-4">
        <p>
          L'apprentissage actif implique de s'engager consciemment dans le processus d'apprentissage plutôt que
          de recevoir passivement l'information. Ces méthodes sont particulièrement bénéfiques pour les apprenants neurodivergents.
        </p>
        
        <h3 className="text-lg font-semibold">Techniques efficaces</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Technique de Feynman</strong> : Expliquer un concept avec ses propres mots simples pour vérifier sa compréhension</li>
          <li><strong>Questionnement actif</strong> : Se poser des questions sur le contenu pendant la lecture ou l'écoute</li>
          <li><strong>Pratique espacée</strong> : Réviser à intervalles réguliers plutôt qu'en une seule session intensive</li>
          <li><strong>Récupération active</strong> : S'efforcer de se rappeler l'information sans consulter ses notes</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Applications pratiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Relecture active</strong> : Annoter, surligner, poser des questions dans les marges</li>
          <li><strong>Enseignement par les pairs</strong> : Expliquer à quelqu'un d'autre pour renforcer sa propre compréhension</li>
          <li><strong>Création de contenu</strong> : Transformer l'information en cartes mentales, schémas ou présentations</li>
          <li><strong>Analyse des erreurs</strong> : Examiner ses erreurs pour comprendre les misconceptions</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Adaptations neurodivergentes</h3>
          <p className="mb-2"><strong>TDAH</strong> : Sessions courtes, variation des activités, retours immédiats</p>
          <p className="mb-2"><strong>TSA</strong> : Structure claire, objectifs explicites, progression prévisible</p>
          <p className="mb-2"><strong>Dyslexie</strong> : Supports multimodaux, combinaison audio-visuelle, temps supplémentaire</p>
          <p><strong>HPI</strong> : Questions de niveau supérieur, connexions interdisciplinaires, défis stimulants</p>
        </div>
      </div>
    )
  },
  
  organisation: {
    term: 'Organisation et présentation',
    shortDescription: 'Stratégies pour structurer son travail et améliorer la clarté de présentation',
    longDescription: (
      <div className="space-y-4">
        <p>
          L'organisation et la présentation du travail sont des compétences essentielles qui peuvent présenter
          des défis particuliers pour les apprenants neurodivergents, mais qui peuvent être développées avec des stratégies adaptées.
        </p>
        
        <h3 className="text-lg font-semibold">Principes d'organisation</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Systèmes visuels</strong> : Utiliser des codes couleur, des symboles et des repères visuels</li>
          <li><strong>Structure explicite</strong> : Créer des modèles et des gabarits pour différents types de travaux</li>
          <li><strong>Décomposition</strong> : Diviser les tâches complexes en étapes plus petites et gérables</li>
          <li><strong>Routines</strong> : Établir des procédures cohérentes pour la prise de notes et l'organisation</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Outils pratiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Supports numériques</strong> : Applications de prise de notes, organisateurs graphiques, calendriers</li>
          <li><strong>Matériel adapté</strong> : Cahiers avec repères visuels, intercalaires de couleur, post-it</li>
          <li><strong>Aides visuelles</strong> : Listes de vérification, diagrammes de flux, cartes mentales</li>
          <li><strong>Technologies d'assistance</strong> : Logiciels de dictée, correcteurs, outils de mise en forme automatique</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Adaptations spécifiques</h3>
          <p className="mb-2"><strong>TDAH</strong> : Rappels visuels, minuteurs, environnement de travail structuré</p>
          <p className="mb-2"><strong>Dyspraxie</strong> : Alternatives à l'écriture manuscrite, modèles préformatés, outils numériques</p>
          <p className="mb-2"><strong>TSA</strong> : Instructions explicites, routines prévisibles, organisation visuelle</p>
          <p><strong>Dysgraphie</strong> : Logiciels de traitement de texte, dictée vocale, temps supplémentaire</p>
        </div>
      </div>
    )
  }
};