import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { BookOpen, Users, FileText } from 'lucide-react';

// Données pour les détails contextuels de l'Équipe Gagnante
export const equipeGagnanteDetails = {
  parents: {
    term: 'Parents',
    shortDescription: 'Le rôle essentiel des parents comme coachs bienveillants des enfants neurodivergents',
    longDescription: (
      <div className="space-y-4">
        <p>
          Les parents d'enfants neurodivergents jouent un rôle fondamental dans leur développement et leur réussite scolaire,
          en trouvant l'équilibre délicat entre soutien et encouragement de l'autonomie.
        </p>
        
        <h3 className="text-lg font-semibold">Postures essentielles</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Acceptation inconditionnelle</strong> : Aimer et valoriser l'enfant pour ce qu'il est, pas pour ce qu'il fait</li>
          <li><strong>Patience et persévérance</strong> : Comprendre que les progrès peuvent être non-linéaires et parfois lents</li>
          <li><strong>Flexibilité</strong> : Adapter constamment les approches en fonction des besoins changeants</li>
          <li><strong>Auto-compassion</strong> : Reconnaître que personne n'est parfait, y compris les parents</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Stratégies pratiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Routines structurées</strong> : Créer un cadre prévisible qui sécurise et facilite l'organisation</li>
          <li><strong>Communication adaptée</strong> : Utiliser des supports visuels, des instructions claires et séquentielles</li>
          <li><strong>Gestion émotionnelle</strong> : Aider l'enfant à identifier et exprimer ses émotions de façon constructive</li>
          <li><strong>Collaboration avec les professionnels</strong> : Travailler en équipe avec enseignants et thérapeutes</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Prendre soin de soi</h3>
          <p className="mb-2"><strong>Réseaux de soutien</strong> : S'entourer d'autres parents qui comprennent votre réalité</p>
          <p className="mb-2"><strong>Moments de répit</strong> : Prévoir des pauses régulières pour recharger vos batteries</p>
          <p className="mb-2"><strong>Célébrer les victoires</strong> : Reconnaître et savourer chaque progrès, même minime</p>
          <p><strong>Limites saines</strong> : Apprendre à dire non et à déléguer quand c'est nécessaire</p>
        </div>
      </div>
    )
  },
  
  enfantsAdos: {
    term: 'Enfants et Adolescents',
    shortDescription: 'Comment les jeunes neurodivergents peuvent devenir acteurs de leur propre réussite',
    longDescription: (
      <div className="space-y-4">
        <p>
          Les enfants et adolescents neurodivergents possèdent des forces uniques et des défis particuliers.
          Développer leur autonomie et leur confiance en soi est essentiel pour leur épanouissement.
        </p>
        
        <h3 className="text-lg font-semibold">Développement de l'autodétermination</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Conscience de soi</strong> : Comprendre ses forces, défis et besoins spécifiques</li>
          <li><strong>Auto-plaidoyer</strong> : Apprendre à exprimer ses besoins et à demander de l'aide</li>
          <li><strong>Fixation d'objectifs</strong> : Définir des buts personnels réalistes et significatifs</li>
          <li><strong>Prise de décision</strong> : Développer la capacité à faire des choix éclairés</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Compétences pratiques</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Organisation personnalisée</strong> : Trouver ses propres systèmes d'organisation qui fonctionnent</li>
          <li><strong>Gestion du temps</strong> : Utiliser des outils visuels, des minuteurs et des rappels</li>
          <li><strong>Techniques d'étude adaptées</strong> : Exploiter ses forces cognitives pour apprendre efficacement</li>
          <li><strong>Régulation émotionnelle</strong> : Reconnaître et gérer ses émotions fortes</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Développement de la résilience</h3>
          <p className="mb-2"><strong>Acceptation de la différence</strong> : Comprendre que la neurodivergence est une différence, pas un défaut</p>
          <p className="mb-2"><strong>Gestion des échecs</strong> : Voir les erreurs comme des opportunités d'apprentissage</p>
          <p className="mb-2"><strong>Identification des forces</strong> : Reconnaître et développer ses talents uniques</p>
          <p><strong>Communauté de pairs</strong> : Se connecter avec d'autres jeunes neurodivergents</p>
        </div>
      </div>
    )
  },
  
  ecole: {
    term: 'Relation avec l\'École',
    shortDescription: 'Construire une collaboration efficace entre la famille et l\'équipe éducative',
    longDescription: (
      <div className="space-y-4">
        <p>
          Une relation constructive entre la famille et l'école est fondamentale pour la réussite des élèves neurodivergents.
          Cette collaboration permet de créer un environnement d'apprentissage cohérent et adapté.
        </p>
        
        <h3 className="text-lg font-semibold">Principes de collaboration</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Communication régulière</strong> : Maintenir un dialogue ouvert et constructif avec l'équipe éducative</li>
          <li><strong>Approche positive</strong> : Aborder les discussions en se concentrant sur les solutions, pas les problèmes</li>
          <li><strong>Respect mutuel</strong> : Reconnaître l'expertise de chacun (parents et professionnels)</li>
          <li><strong>Documentation</strong> : Garder une trace écrite des discussions, décisions et progrès</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Dispositifs et aménagements</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>PAP (Plan d'Accompagnement Personnalisé)</strong> : Pour les troubles des apprentissages sans reconnaissance MDPH</li>
          <li><strong>PPS (Projet Personnalisé de Scolarisation)</strong> : Pour les élèves reconnus en situation de handicap</li>
          <li><strong>PPRE (Programme Personnalisé de Réussite Éducative)</strong> : Pour les difficultés scolaires ponctuelles</li>
          <li><strong>Aménagements pédagogiques</strong> : Adaptations des supports, du temps, des évaluations</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Résolution des difficultés</h3>
          <p className="mb-2"><strong>Identification précoce</strong> : Repérer rapidement les signes de difficulté ou de mal-être</p>
          <p className="mb-2"><strong>Réunions d'équipe</strong> : Organiser des rencontres régulières avec tous les intervenants</p>
          <p className="mb-2"><strong>Médiation</strong> : Faire appel à un tiers en cas de communication difficile</p>
          <p><strong>Réévaluation régulière</strong> : Ajuster les stratégies en fonction de l'évolution des besoins</p>
        </div>
      </div>
    )
  },
  
  equipeGagnante: {
    term: 'L\'Équipe Gagnante',
    shortDescription: 'La synergie entre parents, enfants et école pour une réussite collective',
    longDescription: (
      <div className="space-y-4">
        <p>
          L'Équipe Gagnante représente l'alliance stratégique entre les parents, l'enfant et l'école, où chacun joue un rôle
          complémentaire et essentiel pour créer un environnement propice à l'épanouissement de l'enfant neurodivergent.
        </p>
        
        <h3 className="text-lg font-semibold">Fondements de l'équipe</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Objectif commun</strong> : Se concentrer sur le bien-être et la réussite de l'enfant</li>
          <li><strong>Rôles complémentaires</strong> : Reconnaître et valoriser la contribution unique de chaque membre</li>
          <li><strong>Cohérence éducative</strong> : Maintenir une approche cohérente entre la maison et l'école</li>
          <li><strong>Adaptabilité</strong> : Évoluer ensemble face aux changements et aux nouveaux défis</li>
        </ul>
        
        <h3 className="text-lg font-semibold">Pratiques collaboratives</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Réunions tripartites</strong> : Inclure l'enfant dans les discussions sur son parcours</li>
          <li><strong>Partage d'informations</strong> : Communiquer les stratégies efficaces entre la maison et l'école</li>
          <li><strong>Célébration collective</strong> : Reconnaître ensemble les progrès et les réussites</li>
          <li><strong>Résolution collaborative</strong> : Aborder les défis comme une équipe, sans blâme</li>
        </ul>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-md font-semibold">Ressources clés</h3>
          <div className="space-y-2">
            <Link to={ROUTES.RESSOURCES.STRATEGIES_APPRENTISSAGE} className="flex items-center text-neuro-blue hover:underline">
              <BookOpen className="h-4 w-4 mr-2" />
              Guide pratique : Stratégies d'apprentissage
            </Link>
            <Link to={ROUTES.COMMUNAUTE} className="flex items-center text-neuro-blue hover:underline">
              <Users className="h-4 w-4 mr-2" />
              Groupe d'entraide entre jeunes
            </Link>
            <Link to={ROUTES.RESSOURCES.APPLICATIONS} className="flex items-center text-neuro-blue hover:underline">
              <FileText className="h-4 w-4 mr-2" />
              Applications d'organisation et d'aide à l'apprentissage
            </Link>
            <Link to={ROUTES.RESSOURCES.KITS} className="flex items-center text-neuro-blue hover:underline">
              <FileText className="h-4 w-4 mr-2" />
              Modèle de cahier de liaison adapté aux besoins spécifiques
            </Link>
            <Link to={ROUTES.RESSOURCES.GUIDE_ADMINISTRATIF} className="flex items-center text-neuro-blue hover:underline">
              <FileText className="h-4 w-4 mr-2" />
              Guide des dispositifs d'accompagnement scolaire (PAP, PPS, PPRE)
            </Link>
            <Link to={ROUTES.RESSOURCES.APPLICATIONS} className="flex items-center text-neuro-blue hover:underline">
              <FileText className="h-4 w-4 mr-2" />
              Applications de suivi collaboratif des progrès
            </Link>
          </div>
          <h3 className="text-md font-semibold mt-4">Facteurs de réussite</h3>
          <p className="mb-2"><strong>Confiance mutuelle</strong> : Bâtir une relation de confiance entre tous les membres</p>
          <p className="mb-2"><strong>Communication transparente</strong> : Partager ouvertement les préoccupations et les succès</p>
          <p className="mb-2"><strong>Attentes réalistes</strong> : Fixer des objectifs ambitieux mais atteignables</p>
          <p><strong>Bienveillance collective</strong> : Cultiver un environnement de soutien et d'encouragement</p>
        </div>
      </div>
    )
  }
};