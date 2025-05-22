import React from 'react';

// Données pour les détails contextuels des niveaux scolaires
export const niveauxScolairesDetails = {
  elementaire: {
    term: 'École Élémentaire',
    shortDescription: 'Stratégies adaptées pour les élèves neurodivergents du CP au CM2',
    longDescription: (
      <div className="space-y-4">
        <p>
          L'école élémentaire constitue une période fondamentale pour l'acquisition des compétences de base. 
          Pour les élèves neurodivergents, des adaptations spécifiques peuvent grandement faciliter ces apprentissages.
        </p>
        
        <h3 className="text-lg font-semibold">Principes pédagogiques essentiels</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Apprentissage multisensoriel</strong> : Solliciter plusieurs sens pour renforcer la mémorisation</li>
          <li><strong>Pédagogie ludique</strong> : Utiliser le jeu comme vecteur d'apprentissage</li>
          <li><strong>Routines structurées</strong> : Établir des rituels prévisibles et rassurants</li>
          <li><strong>Valorisation des réussites</strong> : Renforcer l'estime de soi par des encouragements réguliers</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Adaptations par matière</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Lecture/Écriture</strong> : Méthodes syllabiques explicites, supports visuels, dictées à trous</li>
          <li><strong>Mathématiques</strong> : Matériel de manipulation, représentations concrètes, jeux de numération</li>
          <li><strong>Découverte du monde</strong> : Expériences sensorielles, sorties pédagogiques, projets thématiques</li>
          <li><strong>Arts et EPS</strong> : Activités d'expression libre, consignes simplifiées, décomposition des mouvements</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Aménagements pratiques</h3>
          <p className="mb-2"><strong>Espace de travail</strong> : Coin calme, affichages épurés, repères visuels</p>
          <p className="mb-2"><strong>Gestion du temps</strong> : Time-timer, pictogrammes séquentiels, pauses régulières</p>
          <p className="mb-2"><strong>Supports adaptés</strong> : Lignages spécifiques, guides de lecture, outils numériques</p>
          <p><strong>Évaluations</strong> : Formats différenciés, temps supplémentaire, consignes orales et écrites</p>
        </div>
        
        <h3 className="text-lg font-semibold">Ressources recommandées</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Méthode de lecture adaptée "Lire Couleur" (dyslexie)</li>
          <li>Matériel Montessori pour les mathématiques</li>
          <li>Applications éducatives comme "Graphogame" ou "Calcularis"</li>
          <li>Guides pratiques pour enseignants comme "100 idées pour aider les élèves dys"</li>
        </ul>
      </div>
    )
  },
  
  college: {
    term: 'Collège',
    shortDescription: 'Accompagnement des adolescents neurodivergents de la 6ème à la 3ème',
    longDescription: (
      <div className="space-y-4">
        <p>
          Le collège représente une période de transition importante avec de nouveaux défis : multiplication des enseignants, 
          complexification des contenus et développement de l'autonomie. Les élèves neurodivergents ont besoin d'un soutien spécifique.
        </p>
        
        <h3 className="text-lg font-semibold">Enjeux spécifiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Organisation</strong> : Gestion de l'emploi du temps, du matériel et des devoirs</li>
          <li><strong>Méthodes de travail</strong> : Prise de notes, révisions, préparation aux évaluations</li>
          <li><strong>Socialisation</strong> : Relations avec les pairs, travail en groupe</li>
          <li><strong>Gestion émotionnelle</strong> : Stress, anxiété, changements liés à l'adolescence</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Stratégies efficaces</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cartes mentales</strong> : Organiser visuellement les informations complexes</li>
          <li><strong>Fiches synthétiques</strong> : Résumer l'essentiel avec codes couleur et mots-clés</li>
          <li><strong>Planification</strong> : Utiliser des agendas adaptés, applications de rappel</li>
          <li><strong>Métacognition</strong> : Développer la conscience de ses propres stratégies d'apprentissage</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Adaptations par discipline</h3>
          <p className="mb-2"><strong>Français</strong> : Schémas narratifs, dictionnaires électroniques, plans de rédaction</p>
          <p className="mb-2"><strong>Mathématiques</strong> : Fiches méthodes, logiciels de géométrie, calculatrices adaptées</p>
          <p className="mb-2"><strong>Langues vivantes</strong> : Applications d'immersion, supports audio, cartes de vocabulaire</p>
          <p><strong>Histoire-Géographie</strong> : Frises chronologiques, cartes interactives, schématisation</p>
        </div>
        
        <h3 className="text-lg font-semibold">Dispositifs d'accompagnement</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>PAP</strong> (Plan d'Accompagnement Personnalisé) : Aménagements pédagogiques sans reconnaissance MDPH</li>
          <li><strong>PPS</strong> (Projet Personnalisé de Scolarisation) : Pour les élèves reconnus en situation de handicap</li>
          <li><strong>AESH</strong> (Accompagnant d'Élèves en Situation de Handicap) : Aide humaine individualisée</li>
          <li><strong>SEGPA</strong> (Section d'Enseignement Général et Professionnel Adapté) : Pour les difficultés scolaires graves</li>
        </ul>
      </div>
    )
  },
  
  lycee: {
    term: 'Lycée',
    shortDescription: 'Préparation des lycéens neurodivergents aux études supérieures et à l\'insertion professionnelle',
    longDescription: (
      <div className="space-y-4">
        <p>
          Le lycée constitue une étape cruciale de spécialisation et d'orientation. Pour les élèves neurodivergents, 
          c'est l'occasion de valoriser leurs points forts tout en préparant la transition vers les études supérieures ou la vie active.
        </p>
        
        <h3 className="text-lg font-semibold">Orientation et projet d'avenir</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Identification des talents</strong> : Reconnaître ses forces et centres d'intérêt</li>
          <li><strong>Exploration des filières</strong> : Découvrir les parcours adaptés à son profil</li>
          <li><strong>Stages d'observation</strong> : Expérimenter différents environnements professionnels</li>
          <li><strong>Mentorat</strong> : Bénéficier de l'accompagnement de professionnels neurodivergents</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Méthodes de travail avancées</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Gestion de projet</strong> : Planifier les travaux complexes et de longue durée</li>
          <li><strong>Techniques de mémorisation</strong> : Utiliser des méthodes adaptées à son profil cognitif</li>
          <li><strong>Préparation aux examens</strong> : Simuler les conditions d'évaluation, gérer le stress</li>
          <li><strong>Recherche documentaire</strong> : Sélectionner et organiser l'information pertinente</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Aménagements spécifiques</h3>
          <p className="mb-2"><strong>Épreuves du baccalauréat</strong> : Tiers-temps, secrétaire, utilisation d'ordinateur</p>
          <p className="mb-2"><strong>Grand oral</strong> : Adaptations pour la prise de parole, supports visuels</p>
          <p className="mb-2"><strong>Travaux pratiques</strong> : Consignes adaptées, binômes de soutien</p>
          <p><strong>Contrôle continu</strong> : Formats d'évaluation diversifiés, critères explicites</p>
        </div>
        
        <h3 className="text-lg font-semibold">Préparation à l'autonomie</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Compétences de vie quotidienne</strong> : Gestion du budget, démarches administratives</li>
          <li><strong>Auto-plaidoyer</strong> : Savoir expliquer ses besoins et demander des aménagements</li>
          <li><strong>Gestion du stress</strong> : Techniques de relaxation, pleine conscience</li>
          <li><strong>Compétences sociales</strong> : Communication professionnelle, travail en équipe</li>
        </ul>
      </div>
    )
  }
};