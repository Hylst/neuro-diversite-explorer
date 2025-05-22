import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, Lightbulb, Sparkles } from 'lucide-react';
import GlossaryTerm from '@/components/ui/glossary-term';
import { motion } from 'framer-motion';

// Import des données du glossaire
import memoGlossary from '@/data/memorisation-glossary';

// Import du composant de section de techniques
import TechniqueSection from './memorisation/TechniqueSection';

// Import du composant d'astuce de mémorisation
import MemoryTip from './memorisation/MemoryTip';

/**
 * Composant Memorisation - Présente les techniques de mémorisation adaptées aux personnes neurodivergentes
 * Version modulaire et factorisée avec animations et données externalisées
 */
const Memorisation = () => {
  // Définition des sections de techniques
  const techniqueSections = [
    {
      title: 'Techniques visuelles',
      icon: Brain,
      techniques: [
        {
          name: 'Mind mapping',
          description: 'Créez des cartes mentales colorées qui relient visuellement les concepts entre eux',
          glossaryTerm: <GlossaryTerm {...memoGlossary.mindMapping}>Mind mapping</GlossaryTerm>
        },
        {
          name: 'Palais de mémoire',
          description: 'Associez des informations à des lieux familiers dans un espace mental',
          glossaryTerm: <GlossaryTerm {...memoGlossary.palaisMémoire}>Palais de mémoire</GlossaryTerm>
        },
        {
          name: 'Sketchnoting',
          description: 'Prenez des notes visuelles combinant texte, dessins et structures pour renforcer la mémorisation'
        },
        {
          name: 'Tableaux de visualisation',
          description: 'Créez des affiches ou tableaux numériques avec des images représentant les concepts clés'
        }
      ],
      delay: 0.1
    },
    {
      title: 'Techniques multimodales',
      icon: Sparkles,
      techniques: [
        {
          name: 'Méthode des associations sensorielles',
          description: 'Associez des sensations (couleurs, sons, mouvements) aux informations',
          glossaryTerm: <GlossaryTerm {...memoGlossary.associationsSensorielles}>Méthode des associations sensorielles</GlossaryTerm>
        },
        {
          name: 'Apprentissage en mouvement',
          description: 'Marchez ou bougez en récitant les informations à mémoriser'
        },
        {
          name: 'Enregistrements audio',
          description: 'Enregistrez-vous expliquant le concept puis réécoutez pendant d\'autres activités'
        },
        {
          name: 'Chunking sensoriel',
          description: 'Regroupez les informations en petits ensembles avec des indices sensoriels distincts',
          glossaryTerm: <GlossaryTerm {...memoGlossary.chunkingSensoriel}>Chunking sensoriel</GlossaryTerm>
        }
      ],
      delay: 0.2
    },
    {
      title: 'Techniques d\'association',
      icon: BookOpen,
      techniques: [
        {
          name: 'Méthode des histoires',
          description: 'Créez une histoire intégrant tous les éléments à mémoriser',
          glossaryTerm: <GlossaryTerm {...memoGlossary.méthodeHistoires}>Méthode des histoires</GlossaryTerm>
        },
        {
          name: 'Technique des acronymes personnalisés',
          description: 'Créez des acronymes qui ont une signification personnelle pour vous'
        },
        {
          name: 'Associations absurdes',
          description: 'Plus l\'association est étrange ou humoristique, plus elle sera mémorable'
        },
        {
          name: 'Chaînage conceptuel',
          description: 'Reliez chaque nouveau concept à quelque chose que vous connaissez déjà bien'
        }
      ],
      delay: 0.3
    },
    {
      title: 'Techniques liées aux intérêts spécifiques',
      icon: Lightbulb,
      techniques: [
        {
          name: 'Méthode de l\'intérêt passerelle',
          description: 'Reliez le sujet à mémoriser à l\'un de vos intérêts spécifiques',
          glossaryTerm: <>Méthode de l\'intérêt passerelle <GlossaryTerm {...memoGlossary.intérêtsSpécifiques}>(intérêts spécifiques)</GlossaryTerm></>
        },
        {
          name: 'Gamification personnalisée',
          description: 'Transformez l\'apprentissage en jeu basé sur vos centres d\'intérêt',
          glossaryTerm: <GlossaryTerm {...memoGlossary.gamificationPersonnalisée}>Gamification personnalisée</GlossaryTerm>
        },
        {
          name: 'Collections thématiques',
          description: 'Organisez les informations comme une collection d\'objets ou de faits à collectionner'
        },
        {
          name: 'Enseignement simulé',
          description: 'Prétendez enseigner le sujet à quelqu\'un d\'autre ou à un objet inanimé'
        }
      ],
      delay: 0.4
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="pt-6">
          <motion.h3 
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Techniques de mémorisation adaptées
          </motion.h3>
          
          <motion.p 
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            La mémorisation peut être un défi particulier pour les personnes neurodivergentes. 
            Voici des techniques spécifiquement adaptées pour tirer parti des forces uniques du cerveau neurodivergent.
          </motion.p>
          
          {/* Première rangée de sections */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {techniqueSections.slice(0, 2).map((section, index) => (
              <TechniqueSection 
                key={index}
                title={section.title}
                icon={section.icon}
                techniques={section.techniques}
                delay={section.delay}
              />
            ))}
          </div>

          {/* Deuxième rangée de sections */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {techniqueSections.slice(2, 4).map((section, index) => (
              <TechniqueSection 
                key={index}
                title={section.title}
                icon={section.icon}
                techniques={section.techniques}
                delay={section.delay}
              />
            ))}
          </div>

          {/* Section d'astuce spéciale */}
          <MemoryTip 
            title="Astuce spéciale : Exploiter la mémoire émotionnelle"
            description="Le cerveau neurodivergent mémorise souvent mieux ce qui est lié à une émotion forte. Essayez de :"
            tips={[
              "Associer un sentiment de surprise, de joie ou d\'émerveillement aux informations importantes",
              "Utiliser l\'humour et l\'absurde pour rendre les concepts mémorables",
              "Créer des moments d\'apprentissage \"événements\" qui sortent de l\'ordinaire"
            ]}
            bgColor="border"
            delay={0.5}
            icon={<Sparkles className="h-4 w-4 text-neuro-purple" />}
          />

          {/* Section de conseil */}
          <MemoryTip 
            title="Conseil important pour les personnes neurodivergentes"
            description="La clé est d'expérimenter différentes techniques et de les personnaliser. Ce qui fonctionne pour une personne neurodivergente peut ne pas fonctionner pour une autre. Faites confiance à votre intuition sur ce qui vous semble naturel et efficace pour votre cerveau unique."
            tips={[]}
            bgColor="bg-neuro-purple/5"
            delay={0.6}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Memorisation;