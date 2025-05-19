import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, ClipboardCheck, MessageCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const InterventionsSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Interventions et accompagnement</CardTitle>
          </div>
          <CardDescription>
            Approches et méthodes pour soutenir les personnes dyscalculiques
          </CardDescription>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Voici une sélection de ressources pour mieux comprendre la dyscalculie, accompagner les personnes concernées
            et trouver des outils adaptés pour faciliter l'apprentissage des mathématiques.
          </p>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Approches rééducatives</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Rééducation orthophonique</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Renforcement du sens du nombre</li>
                  <li>Travail sur la ligne numérique mentale</li>
                  <li>Automatisation des faits numériques</li>
                  <li>Développement des stratégies de calcul</li>
                  <li>Amélioration de la compréhension des problèmes</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Approche neuropsychologique</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Renforcement des fonctions exécutives</li>
                  <li>Amélioration de la mémoire de travail</li>
                  <li>Développement des capacités visuo-spatiales</li>
                  <li>Travail sur l'attention et la concentration</li>
                  <li>Stratégies métacognitives</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Méthodes pédagogiques adaptées</h3>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Approche multisensorielle</h4>
                <p className="text-muted-foreground">
                  Utilisation simultanée de plusieurs canaux sensoriels (visuel, auditif, tactile, kinesthésique) pour renforcer
                  l'apprentissage des concepts mathématiques. Par exemple, manipuler des objets tout en comptant à voix haute.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Enseignement explicite</h4>
                <p className="text-muted-foreground">
                  Décomposition des concepts et procédures en étapes claires et séquentielles, avec démonstration explicite
                  de chaque étape et vérification régulière de la compréhension.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Apprentissage sans erreur</h4>
                <p className="text-muted-foreground">
                  Progression très graduelle permettant de minimiser les erreurs, avec un soutien important au début
                  qui s'estompe progressivement à mesure que l'élève gagne en compétence.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Approche par la résolution de problèmes concrets</h4>
                <p className="text-muted-foreground">
                  Utilisation de situations réelles et significatives pour l'élève afin de donner du sens aux concepts
                  mathématiques abstraits et de favoriser leur application pratique.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Outils et supports spécifiques</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Matériel concret</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Jetons, cubes et autres manipulatifs</li>
                  <li>Bouliers et abaques</li>
                  <li>Réglettes Cuisenaire</li>
                  <li>Matériel Montessori pour les mathématiques</li>
                  <li>Tableaux de numération</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Supports visuels</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Droites numériques</li>
                  <li>Tableaux de conversion d'unités</li>
                  <li>Cartes de référence pour les procédures</li>
                  <li>Représentations visuelles des fractions</li>
                  <li>Schémas et diagrammes pour les problèmes</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Outils numériques</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Logiciels d'entraînement adaptatifs</li>
                  <li>Applications de visualisation mathématique</li>
                  <li>Calculatrices adaptées</li>
                  <li>Logiciels de géométrie dynamique</li>
                  <li>Jeux mathématiques numériques</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Aides organisationnelles</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Fiches de procédures étape par étape</li>
                  <li>Organisateurs graphiques</li>
                  <li>Codes couleur pour les opérations</li>
                  <li>Modèles de résolution de problèmes</li>
                  <li>Plannings et emplois du temps visuels</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Aménagements scolaires</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Temps supplémentaire pour les évaluations</li>
                <li>Utilisation autorisée de la calculatrice</li>
                <li>Réduction du nombre d'exercices</li>
                <li>Adaptation des supports (taille des caractères, espacement)</li>
                <li>Évaluations orales plutôt qu'écrites</li>
                <li>Mise à disposition de tables de multiplication et formules</li>
                <li>Tiers-temps pour les examens</li>
                <li>Assistance humaine pour la lecture des énoncés</li>
                <li>Utilisation d'un ordinateur avec logiciels adaptés</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Dispositifs d'accompagnement en France</h3>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Dispositifs scolaires</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>PAP (Plan d'Accompagnement Personnalisé)</strong> : Aménagements pédagogiques sans reconnaissance de handicap</li>
                  <li><strong>PPS (Projet Personnalisé de Scolarisation)</strong> : Pour les élèves reconnus en situation de handicap par la MDPH</li>
                  <li><strong>PPRE (Programme Personnalisé de Réussite Éducative)</strong> : Pour les élèves en difficulté scolaire</li>
                  <li><strong>RASED (Réseau d'Aides Spécialisées aux Élèves en Difficulté)</strong> : Interventions spécialisées à l'école primaire</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Professionnels et structures</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Orthophonistes</strong> : Rééducation des troubles logico-mathématiques</li>
                  <li><strong>Neuropsychologues</strong> : Évaluation et remédiation cognitive</li>
                  <li><strong>Ergothérapeutes</strong> : Adaptation des outils et de l'environnement</li>
                  <li><strong>SESSAD (Service d'Éducation Spéciale et de Soins à Domicile)</strong> : Accompagnement médico-social</li>
                  <li><strong>CMPP (Centre Médico-Psycho-Pédagogique)</strong> : Diagnostic et prise en charge pluridisciplinaire</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Stratégies pour les adultes dyscalculiques</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Vie quotidienne</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Utilisation d'applications de gestion budgétaire</li>
                  <li>Paiement par carte plutôt qu'en espèces</li>
                  <li>Utilisation de minuteurs et alarmes pour la gestion du temps</li>
                  <li>Applications GPS pour l'orientation</li>
                  <li>Listes de contrôle pour les tâches séquentielles</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Vie professionnelle</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Utilisation de tableurs avec formules préprogrammées</li>
                  <li>Vérification systématique des calculs</li>
                  <li>Délégation des tâches numériques complexes si possible</li>
                  <li>Utilisation d'outils de planification visuelle</li>
                  <li>Communication ouverte sur ses besoins spécifiques</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-neuro-light-green/10 p-4 rounded-lg border border-neuro-green/20">
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-neuro-green mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2 text-neuro-green">Conseil pratique</h4>
                <p className="text-muted-foreground">
                  L'accompagnement d'une personne dyscalculique doit être global et ne pas se limiter aux aspects mathématiques.
                  Il est essentiel de soutenir également l'estime de soi, de valoriser les autres compétences et de développer
                  des stratégies de compensation efficaces. La collaboration entre les différents intervenants (famille, école,
                  professionnels de santé) est cruciale pour assurer la cohérence des approches.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Adaptations scolaires et professionnelles */}
      <Card className="mt-8">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <ClipboardCheck className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Adaptations scolaires et professionnelles</CardTitle>
          </div>
          <CardDescription>
            Aménagements et stratégies pour réussir malgré la dyscalculie
          </CardDescription>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Des aménagements appropriés peuvent faire une différence significative dans la réussite scolaire et professionnelle
            des personnes dyscalculiques. Voici les principales adaptations recommandées.
          </p>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Aménagements scolaires formels</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Plan d'Accompagnement Personnalisé (PAP)</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Temps supplémentaire pour les évaluations</li>
                  <li>Réduction du nombre d'exercices</li>
                  <li>Adaptation des supports pédagogiques</li>
                  <li>Utilisation autorisée d'outils d'aide</li>
                  <li>Évaluations adaptées aux difficultés</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Projet Personnalisé de Scolarisation (PPS)</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Accompagnement par un AESH si nécessaire</li>
                  <li>Matériel pédagogique adapté</li>
                  <li>Aménagements des examens</li>
                  <li>Dispense de certains enseignements si nécessaire</li>
                  <li>Orientation adaptée aux besoins spécifiques</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Adaptations pédagogiques en classe</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Placement préférentiel dans la classe (près de l'enseignant)</li>
                <li>Consignes claires et concises, données une à la fois</li>
                <li>Vérification régulière de la compréhension</li>
                <li>Utilisation de supports visuels et manipulatifs</li>
                <li>Décomposition des tâches complexes en étapes simples</li>
                <li>Autorisation d'utiliser des aides-mémoire (tables, formules)</li>
                <li>Valorisation des progrès et des efforts</li>
                <li>Adaptation du format des évaluations (QCM, oral)</li>
                <li>Tutorat par les pairs ou soutien individualisé</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Aménagements pour les examens</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Tiers-temps supplémentaire</li>
                <li>Utilisation d'une calculatrice même lorsqu'elle est normalement interdite</li>
                <li>Mise à disposition de formules mathématiques</li>
                <li>Secrétaire pour la lecture des énoncés et/ou la rédaction</li>
                <li>Utilisation d'un ordinateur avec logiciels adaptés</li>
                <li>Adaptation des sujets (police plus grande, espacement)</li>
                <li>Possibilité de passer certaines épreuves à l'oral</li>
                <li>Évaluation adaptée des compétences mathématiques</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Adaptations dans l'enseignement supérieur</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Services d'accompagnement des étudiants en situation de handicap</li>
                <li>Aménagements des modalités d'examen</li>
                <li>Prise de notes par un autre étudiant</li>
                <li>Tutorat spécifique</li>
                <li>Accès aux supports de cours à l'avance</li>
                <li>Utilisation d'outils technologiques adaptés</li>
                <li>Orientation vers des filières adaptées aux points forts</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Adaptations en milieu professionnel</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Aménagements formels</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Reconnaissance de la qualité de travailleur handicapé (RQTH)</li>
                  <li>Aménagement du poste de travail</li>
                  <li>Adaptation des horaires si nécessaire</li>
                  <li>Formation spécifique aux outils compensatoires</li>
                  <li>Accompagnement par un service d'insertion professionnelle</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Stratégies personnelles</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Utilisation d'outils numériques adaptés</li>
                  <li>Vérification systématique des calculs</li>
                  <li>Organisation visuelle des informations</li>
                  <li>Délégation des tâches problématiques si possible</li>
                  <li>Communication claire sur ses besoins spécifiques</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Témoignages d'adaptations réussies</h3>
            <div className="space-y-4">
              <div className="bg-secondary p-5 rounded-lg relative">
                <div className="absolute -top-3 -left-3 bg-neuro-light-green text-white p-2 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <h4 className="font-medium mb-2 pl-4">Enseignante de primaire</h4>
                <p className="text-muted-foreground">
                  "Dans ma classe, j'ai un élève dyscalculique. J'ai mis en place un système de codes couleur pour les opérations,
                  des fiches de procédures illustrées et j'utilise beaucoup de matériel manipulatif. J'ai aussi installé une droite
                  numérique au mur et des tableaux de conversion d'unités. Ces adaptations profitent d'ailleurs à tous les élèves !"
                </p>
              </div>
              
              <div className="bg-secondary p-5 rounded-lg relative">
                <div className="absolute -top-3 -left-3 bg-neuro-light-green text-white p-2 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <h4 className="font-medium mb-2 pl-4">Parent d'adolescent</h4>
                <p className="text-muted-foreground">
                  "Mon fils a obtenu un PAP qui lui permet d'utiliser une calculatrice et des fiches de formules pendant les contrôles.
                  Son professeur de mathématiques lui fournit aussi les cours avec les étapes de résolution détaillées. Ces aménagements
                  ont considérablement réduit son anxiété et amélioré ses résultats."
                </p>
              </div>
              
              <div className="bg-secondary p-5 rounded-lg relative">
                <div className="absolute -top-3 -left-3 bg-neuro-light-green text-white p-2 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <h4 className="font-medium mb-2 pl-4">Adulte en entreprise</h4>
                <p className="text-muted-foreground">
                  "Dans mon travail, j'ai créé des modèles Excel avec toutes les formules dont j'ai besoin. J'utilise aussi des applications
                  pour gérer mon temps et mon agenda. J'ai parlé de ma dyscalculie à mon responsable, qui m'a permis de déléguer les tâches
                  impliquant des calculs complexes tout en valorisant mes compétences en communication et en gestion de projet."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neuro-light-green/10 p-4 rounded-lg border border-neuro-green/20">
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-neuro-green mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2 text-neuro-green">À retenir</h4>
                <p className="text-muted-foreground">
                  Les adaptations doivent être personnalisées en fonction des besoins spécifiques de chaque personne dyscalculique.
                  L'objectif n'est pas de supprimer les exigences mathématiques, mais de permettre à la personne de contourner
                  ses difficultés pour démontrer ses véritables compétences et développer son potentiel dans tous les domaines.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterventionsSection;