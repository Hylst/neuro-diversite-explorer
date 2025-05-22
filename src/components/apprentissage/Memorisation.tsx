import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, Lightbulb, Sparkles } from 'lucide-react';
import GlossaryTerm from '@/components/ui/glossary-term';

/**
 * Composant Memorisation - Présente les techniques de mémorisation adaptées aux personnes neurodivergentes
 * Intègre des infobulles et boîtes de dialogue pour les termes techniques
 */
const Memorisation = () => {
  // Données spécifiques au glossaire de mémorisation
  const memoGlossary = {
    mindMapping: {
      term: 'Mind mapping',
      title: 'Cartographie mentale',
      definition: `<p>Le mind mapping (ou cartographie mentale) est une technique de représentation visuelle des informations sous forme de diagramme qui montre les relations entre les concepts.</p>
        <p>Cette méthode est particulièrement efficace pour les personnes neurodivergentes car elle :</p>
        <ul>
          <li>Exploite les forces de la pensée visuelle et associative</li>
          <li>Permet d'organiser l'information de manière non-linéaire</li>
          <li>Facilite la mémorisation grâce à l'utilisation de couleurs, d'images et de connexions</li>
          <li>Aide à voir "l'image globale" tout en conservant les détails</li>
        </ul>
        <p>Pour les personnes avec TDAH, les cartes mentales peuvent aider à maintenir l'attention en rendant l'information visuellement stimulante.</p>`
    },
    palaisMémoire: {
      term: 'Palais de mémoire',
      title: 'Technique du palais de mémoire',
      definition: `<p>Le palais de mémoire (ou méthode des loci) est une technique mnémonique puissante qui consiste à associer des informations à mémoriser à des lieux familiers dans un espace mental.</p>
        <p>Cette technique exploite la mémoire spatiale souvent forte chez les personnes neurodivergentes :</p>
        <ul>
          <li>Créez un lieu mental familier (votre maison, un trajet connu, etc.)</li>
          <li>Placez mentalement les éléments à mémoriser à différents endroits de ce lieu</li>
          <li>Pour vous rappeler, "parcourez" mentalement ce lieu et récupérez les informations</li>
        </ul>
        <p>Cette méthode est particulièrement efficace pour les personnes ayant une forte imagination visuelle et spatiale, comme c'est souvent le cas chez les personnes autistes ou dyslexiques.</p>`
    },
    associationsSensorielles: {
      term: 'Associations sensorielles',
      title: 'Méthode des associations sensorielles',
      definition: `<p>La méthode des associations sensorielles est une technique de mémorisation qui consiste à associer délibérément différentes sensations (visuelles, auditives, tactiles, olfactives) à l'information à mémoriser.</p>
        <p>Cette approche est particulièrement adaptée aux personnes neurodivergentes qui ont souvent :</p>
        <ul>
          <li>Une sensibilité sensorielle accrue</li>
          <li>Un traitement sensoriel atypique qui peut devenir un atout pour la mémorisation</li>
          <li>Une capacité à créer des associations riches et détaillées</li>
        </ul>
        <p>Exemple : Pour mémoriser une formule mathématique, associez-la à une couleur vive, un mouvement spécifique et peut-être même une odeur particulière.</p>`
    },
    chunkingSensoriel: {
      term: 'Chunking sensoriel',
      title: 'Technique du chunking sensoriel',
      definition: `<p>Le chunking sensoriel combine deux techniques puissantes : le regroupement d'informations (chunking) et l'encodage sensoriel.</p>
        <p>Cette méthode consiste à :</p>
        <ul>
          <li>Diviser l'information en petits groupes gérables (chunks)</li>
          <li>Associer à chaque groupe un indice sensoriel distinct (couleur, texture, son, etc.)</li>
          <li>Utiliser ces indices sensoriels comme "déclencheurs" pour récupérer l'information</li>
        </ul>
        <p>Cette technique est particulièrement utile pour les personnes neurodivergentes qui peuvent être submergées par de grandes quantités d'informations mais qui excellent dans le traitement des détails sensoriels.</p>`
    },
    méthodeHistoires: {
      term: 'Méthode des histoires',
      title: 'Technique narrative de mémorisation',
      definition: `<p>La méthode des histoires consiste à créer un récit intégrant tous les éléments à mémoriser dans une séquence narrative.</p>
        <p>Cette technique exploite plusieurs forces souvent présentes chez les personnes neurodivergentes :</p>
        <ul>
          <li>La pensée créative et imaginative</li>
          <li>La capacité à créer des scénarios détaillés</li>
          <li>L'aptitude à faire des connexions inhabituelles entre les concepts</li>
        </ul>
        <p>Plus l'histoire est vivante, émotionnelle ou absurde, plus elle sera mémorable. Cette technique transforme des informations abstraites ou déconnectées en un tout cohérent et significatif.</p>`
    },
    gamificationPersonnalisée: {
      term: 'Gamification personnalisée',
      title: 'Apprentissage par le jeu adapté',
      definition: `<p>La gamification personnalisée transforme l'apprentissage en expérience ludique en intégrant des éléments de jeu basés sur les intérêts spécifiques de la personne.</p>
        <p>Cette approche est particulièrement efficace pour les personnes neurodivergentes car elle :</p>
        <ul>
          <li>Exploite la motivation intrinsèque liée aux intérêts spécifiques</li>
          <li>Rend l'apprentissage plus engageant et moins anxiogène</li>
          <li>Crée un état de "flow" favorable à la mémorisation</li>
          <li>Transforme une tâche potentiellement difficile en activité plaisante</li>
        </ul>
        <p>Exemple : Si vous êtes passionné par l'espace, transformez votre apprentissage en "mission spatiale" avec des niveaux à franchir et des "découvertes" à faire.</p>`
    },
    intérêtsSpécifiques: {
      term: 'Intérêts spécifiques',
      title: 'Intérêts spécifiques et neurodivergence',
      definition: `<p>Les intérêts spécifiques (parfois appelés intérêts restreints ou intérêts spéciaux) sont des sujets ou activités pour lesquels une personne neurodivergente développe une passion intense, un niveau d'expertise approfondi et une motivation intrinsèque exceptionnelle.</p>
        <p>Caractéristiques des intérêts spécifiques :</p>
        <ul>
          <li>Intensité et profondeur d'engagement inhabituelles</li>
          <li>Acquisition rapide et détaillée de connaissances dans le domaine</li>
          <li>Source importante de bien-être et d'autorégulation</li>
          <li>Potentiel de développement de compétences exceptionnelles</li>
        </ul>
        <p>Utiliser ces intérêts comme "portes d'entrée" vers d'autres apprentissages est une stratégie particulièrement efficace pour les personnes neurodivergentes.</p>`
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Techniques de mémorisation adaptées</h3>
        
        <p className="mb-4">
          La mémorisation peut être un défi particulier pour les personnes neurodivergentes. 
          Voici des techniques spécifiquement adaptées pour tirer parti des forces uniques du cerveau neurodivergent.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Techniques visuelles */}
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
              <Brain className="h-4 w-4" /> Techniques visuelles
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">
                  <GlossaryTerm {...memoGlossary.mindMapping}>Mind mapping</GlossaryTerm>
                </span> : 
                Créez des cartes mentales colorées qui relient visuellement les concepts entre eux
              </li>
              <li>
                <span className="font-medium">
                  <GlossaryTerm {...memoGlossary.palaisMémoire}>Palais de mémoire</GlossaryTerm>
                </span> : 
                Associez des informations à des lieux familiers dans un espace mental
              </li>
              <li>
                <span className="font-medium">Sketchnoting</span> : 
                Prenez des notes visuelles combinant texte, dessins et structures pour renforcer la mémorisation
              </li>
              <li>
                <span className="font-medium">Tableaux de visualisation</span> : 
                Créez des affiches ou tableaux numériques avec des images représentant les concepts clés
              </li>
            </ul>
          </div>
          
          {/* Techniques multimodales */}
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Techniques multimodales
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">
                  <GlossaryTerm {...memoGlossary.associationsSensorielles}>Méthode des associations sensorielles</GlossaryTerm>
                </span> : 
                Associez des sensations (couleurs, sons, mouvements) aux informations
              </li>
              <li>
                <span className="font-medium">Apprentissage en mouvement</span> : 
                Marchez ou bougez en récitant les informations à mémoriser
              </li>
              <li>
                <span className="font-medium">Enregistrements audio</span> : 
                Enregistrez-vous expliquant le concept puis réécoutez pendant d'autres activités
              </li>
              <li>
                <span className="font-medium">
                  <GlossaryTerm {...memoGlossary.chunkingSensoriel}>Chunking sensoriel</GlossaryTerm>
                </span> : 
                Regroupez les informations en petits ensembles avec des indices sensoriels distincts
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Techniques d'association */}
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Techniques d'association
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">
                  <GlossaryTerm {...memoGlossary.méthodeHistoires}>Méthode des histoires</GlossaryTerm>
                </span> : 
                Créez une histoire intégrant tous les éléments à mémoriser
              </li>
              <li>
                <span className="font-medium">Technique des acronymes personnalisés</span> : 
                Créez des acronymes qui ont une signification personnelle pour vous
              </li>
              <li>
                <span className="font-medium">Associations absurdes</span> : 
                Plus l'association est étrange ou humoristique, plus elle sera mémorable
              </li>
              <li>
                <span className="font-medium">Chaînage conceptuel</span> : 
                Reliez chaque nouveau concept à quelque chose que vous connaissez déjà bien
              </li>
            </ul>
          </div>
          
          {/* Techniques adaptées aux intérêts spécifiques */}
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
              <Lightbulb className="h-4 w-4" /> Techniques liées aux intérêts spécifiques
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Méthode de l'intérêt passerelle</span> : 
                Reliez le sujet à mémoriser à l'un de vos <GlossaryTerm {...memoGlossary.intérêtsSpécifiques}>intérêts spécifiques</GlossaryTerm>
              </li>
              <li>
                <span className="font-medium">
                  <GlossaryTerm {...memoGlossary.gamificationPersonnalisée}>Gamification personnalisée</GlossaryTerm>
                </span> : 
                Transformez l'apprentissage en jeu basé sur vos centres d'intérêt
              </li>
              <li>
                <span className="font-medium">Collections thématiques</span> : 
                Organisez les informations comme une collection d'objets ou de faits à collectionner
              </li>
              <li>
                <span className="font-medium">Enseignement simulé</span> : 
                Prétendez enseigner le sujet à quelqu'un d'autre ou à un objet inanimé
              </li>
            </ul>
          </div>
        </div>

        <div className="border p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-neuro-purple" />
            Astuce spéciale : Exploiter la mémoire émotionnelle
          </h4>
          <p>
            Le cerveau neurodivergent mémorise souvent mieux ce qui est lié à une émotion forte. Essayez de :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Associer un sentiment de surprise, de joie ou d'émerveillement aux informations importantes</li>
            <li>Utiliser l'humour et l'absurde pour rendre les concepts mémorables</li>
            <li>Créer des moments d'apprentissage "événements" qui sortent de l'ordinaire</li>
          </ul>
        </div>

        <div className="bg-neuro-purple/5 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">Conseil important pour les personnes neurodivergentes</h4>
          <p>
            La clé est d'expérimenter différentes techniques et de les personnaliser. 
            Ce qui fonctionne pour une personne neurodivergente peut ne pas fonctionner pour une autre. 
            Faites confiance à votre intuition sur ce qui vous semble naturel et efficace pour votre cerveau unique.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Memorisation;