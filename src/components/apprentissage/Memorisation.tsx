import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useContextualDetail } from '@/components/ui/ContextualDetailProvider';
import { glossaryTerms } from '@/data/glossaryTerms';

/**
 * Composant Memorisation - Présente les techniques de mémorisation adaptées aux personnes neurodivergentes
 * Utilise le système ContextualDetailProvider pour enrichir le contenu avec des explications contextuelles
 */
const Memorisation = () => {
  const { addDetail } = useContextualDetail();

  // Fonction pour créer une infobulle contextuelle
  const createContextualTerm = (term: string, shortDesc: string, longDesc: string) => {
    // Ajouter le détail au contexte global
    addDetail({
      term,
      shortDescription: shortDesc,
      longDescription: longDesc,
    });

    // Retourner le terme avec le style approprié
    return (
      <span className="contextual-detail-term" title={shortDesc}>
        {term}
      </span>
    );
  };

  // Fonction pour créer un terme du glossaire avec lien
  const GlossaryTerm = ({ term }: { term: string }) => {
    const glossaryItem = glossaryTerms.find(item => item.term.toLowerCase() === term.toLowerCase());
    
    if (!glossaryItem) return <span>{term}</span>;
    
    return (
      <span 
        className="font-medium text-neuro-purple cursor-help border-b border-dotted border-neuro-purple"
        title={glossaryItem.definition}
      >
        {term}
      </span>
    );
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
            <h4 className="font-semibold mb-2 text-neuro-purple">Techniques visuelles</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">{createContextualTerm("Mind mapping", "Cartographie mentale", "Technique de représentation visuelle des informations sous forme de diagramme qui montre les relations entre les concepts. Particulièrement efficace pour les penseurs visuels et les personnes avec TDAH.")}</span> : 
                Créez des cartes mentales colorées qui relient visuellement les concepts entre eux
              </li>
              <li>
                <span className="font-medium">{createContextualTerm("Palais de mémoire", "Technique mnémonique spatiale", "Méthode qui consiste à associer des informations à mémoriser à des lieux familiers dans un espace mental. Cette technique exploite la mémoire spatiale souvent forte chez les personnes neurodivergentes.")}</span> : 
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
            <h4 className="font-semibold mb-2 text-neuro-purple">Techniques multimodales</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">{createContextualTerm("Méthode des associations sensorielles", "Technique de mémorisation multisensorielle", "Technique qui consiste à associer délibérément différentes sensations (visuelles, auditives, kinesthésiques) à l'information à mémoriser, créant ainsi plusieurs chemins d'accès dans le cerveau.")}</span> : 
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
                <span className="font-medium">{createContextualTerm("Chunking sensoriel", "Regroupement d'informations avec indices sensoriels", "Technique qui consiste à regrouper les informations en petits ensembles (chunks) et à associer chaque ensemble à un indice sensoriel distinct (couleur, texture, son) pour faciliter le rappel.")}</span> : 
                Regroupez les informations en petits ensembles avec des indices sensoriels distincts
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Techniques d'association */}
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-neuro-purple">Techniques d'association</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">{createContextualTerm("Méthode des histoires", "Technique narrative de mémorisation", "Méthode qui consiste à créer une histoire ou un récit intégrant les éléments à mémoriser. Cette technique exploite la force narrative souvent présente chez les personnes neurodivergentes.")}</span> : 
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
            <h4 className="font-semibold mb-2 text-neuro-purple">Techniques liées aux intérêts spécifiques</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Méthode de l'intérêt passerelle</span> : 
                Reliez le sujet à mémoriser à l'un de vos <GlossaryTerm term="intérêts spécifiques" />
              </li>
              <li>
                <span className="font-medium">{createContextualTerm("Gamification personnalisée", "Apprentissage par le jeu adapté", "Technique qui transforme l'apprentissage en jeu en intégrant des éléments ludiques basés sur les intérêts spécifiques de la personne, exploitant ainsi la motivation intrinsèque.")}</span> : 
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

        <div className="border p-4 rounded-lg mt-6 bg-neuro-purple/5">
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