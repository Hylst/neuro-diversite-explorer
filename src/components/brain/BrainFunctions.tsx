
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Ear, MessageSquare, Heart, Lightbulb, Clock } from 'lucide-react';

interface FunctionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  brainAreas: string[];
  neurotransmitters: string[];
  disorders: string[];
  delay?: number;
}

const FunctionCard: React.FC<FunctionCardProps> = ({ 
  icon, 
  title, 
  description, 
  brainAreas, 
  neurotransmitters, 
  disorders,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground text-sm">{description}</p>
          
          <div>
            <h4 className="text-xs font-semibold mb-1">Régions cérébrales principales:</h4>
            <div className="flex flex-wrap gap-1">
              {brainAreas.map((area, i) => (
                <div key={i} className="bg-secondary text-xs px-2 py-1 rounded">
                  {area}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold mb-1">Neurotransmetteurs impliqués:</h4>
            <div className="flex flex-wrap gap-1">
              {neurotransmitters.map((nt, i) => (
                <div key={i} className="bg-secondary/50 text-xs px-2 py-1 rounded">
                  {nt}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold mb-1">Troubles associés:</h4>
            <ul className="list-disc pl-5 text-xs text-muted-foreground">
              {disorders.map((disorder, i) => (
                <li key={i}>{disorder}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const BrainFunctions = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Fonctions Cérébrales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Le cerveau humain est responsable d'un large éventail de fonctions, des processus cognitifs complexes comme la pensée et le langage aux fonctions automatiques comme la respiration et le maintien de l'équilibre. Cette section explore les principales fonctions cérébrales et les régions qui les prennent en charge.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FunctionCard
          icon={<Brain className="h-5 w-5 text-neuro-purple" />}
          title="Fonctions cognitives"
          description="Ensemble des processus mentaux qui permettent l'acquisition de connaissances, leur traitement et leur utilisation."
          brainAreas={["Cortex préfrontal", "Hippocampe", "Cortex pariétal", "Gyrus cingulaire"]}
          neurotransmitters={["Acétylcholine", "Glutamate", "Dopamine"]}
          disorders={[
            "Maladie d'Alzheimer et autres démences",
            "Troubles d'apprentissage",
            "Déficit d'attention",
            "Syndrome dysexécutif"
          ]}
          delay={0.1}
        />
        
        <FunctionCard
          icon={<MessageSquare className="h-5 w-5 text-blue-500" />}
          title="Langage et communication"
          description="Capacité à produire et comprendre le langage, verbal et non-verbal, essentielle à la communication humaine."
          brainAreas={["Aire de Broca", "Aire de Wernicke", "Faisceau arqué", "Gyrus angulaire"]}
          neurotransmitters={["Glutamate", "GABA", "Acétylcholine"]}
          disorders={[
            "Aphasie de Broca (expressive)",
            "Aphasie de Wernicke (réceptive)",
            "Dyslexie, dysgraphie",
            "Bégaiement"
          ]}
          delay={0.2}
        />
        
        <FunctionCard
          icon={<Lightbulb className="h-5 w-5 text-yellow-500" />}
          title="Mémoire et apprentissage"
          description="Processus d'encodage, de stockage et de récupération des informations, essentiels à l'adaptation et à l'évolution."
          brainAreas={["Hippocampe", "Amygdale", "Cortex préfrontal", "Noyaux thalamiques"]}
          neurotransmitters={["Acétylcholine", "Glutamate", "Noradrénaline"]}
          disorders={[
            "Amnésie antérograde et rétrograde",
            "Syndrome de Korsakoff",
            "Troubles de consolidation",
            "Maladie d'Alzheimer"
          ]}
          delay={0.3}
        />
        
        <FunctionCard
          icon={<Eye className="h-5 w-5 text-green-500" />}
          title="Perception sensorielle"
          description="Interprétation des stimuli sensoriels (vision, audition, toucher, goût, odorat) pour créer une représentation du monde."
          brainAreas={["Cortex visuel", "Cortex auditif", "Cortex somesthésique", "Thalamus"]}
          neurotransmitters={["Glutamate", "GABA", "Glycine"]}
          disorders={[
            "Agnosies (visuelle, auditive)",
            "Hallucinations",
            "Prosopagnosie (non-reconnaissance des visages)",
            "Synesthésie"
          ]}
          delay={0.4}
        />
        
        <FunctionCard
          icon={<Zap className="h-5 w-5 text-red-500" />}
          title="Mouvement et coordination"
          description="Contrôle des mouvements volontaires et involontaires, de la posture et de l'équilibre corporel."
          brainAreas={["Cortex moteur", "Ganglions de la base", "Cervelet", "Tronc cérébral"]}
          neurotransmitters={["Dopamine", "Acétylcholine", "GABA"]}
          disorders={[
            "Maladie de Parkinson",
            "Chorée de Huntington",
            "Ataxie cérébelleuse",
            "Dyspraxie"
          ]}
          delay={0.5}
        />
        
        <FunctionCard
          icon={<Heart className="h-5 w-5 text-pink-500" />}
          title="Émotions et motivation"
          description="Traitement affectif, réponses émotionnelles et mécanismes de récompense qui guident le comportement."
          brainAreas={["Système limbique", "Amygdale", "Hypothalamus", "Cortex cingulaire"]}
          neurotransmitters={["Sérotonine", "Dopamine", "Ocytocine", "Endorphines"]}
          disorders={[
            "Dépression",
            "Troubles anxieux",
            "Syndrome de stress post-traumatique",
            "Addictions"
          ]}
          delay={0.6}
        />
        
        <FunctionCard
          icon={<Clock className="h-5 w-5 text-orange-500" />}
          title="Fonctions autonomes"
          description="Régulation des processus physiologiques vitaux qui fonctionnent largement sans contrôle conscient."
          brainAreas={["Hypothalamus", "Tronc cérébral", "Moelle épinière", "Système nerveux autonome"]}
          neurotransmitters={["Acétylcholine", "Noradrénaline", "Adrénaline"]}
          disorders={[
            "Dysautonomie",
            "Syndrome de Shy-Drager",
            "Hypertension neurogénique",
            "Troubles du sommeil"
          ]}
          delay={0.7}
        />
        
        <FunctionCard
          icon={<Ear className="h-5 w-5 text-indigo-500" />}
          title="Conscience et attention"
          description="Capacité d'être conscient de soi et de l'environnement, et de diriger les ressources mentales vers des stimuli spécifiques."
          brainAreas={["Formation réticulée", "Thalamus", "Cortex préfrontal", "Cortex pariétal"]}
          neurotransmitters={["Glutamate", "Acétylcholine", "Sérotonine", "Noradrénaline"]}
          disorders={[
            "États altérés de conscience",
            "TDAH",
            "Négligence spatiale",
            "Troubles dissociatifs"
          ]}
          delay={0.8}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Interactions entre les fonctions cérébrales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Bien que présentées séparément, ces fonctions interagissent constamment dans des réseaux neuronaux complexes. Par exemple, la perception sensorielle alimente la mémoire, qui à son tour influence les émotions et la prise de décision.
            </p>
            
            <h3 className="text-lg font-medium mb-2">Exemples d'interactions fonctionnelles:</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>L'attention module la perception pour nous permettre de nous concentrer sur les stimuli pertinents</li>
              <li>Les émotions influencent fortement la formation et le rappel des souvenirs</li>
              <li>Le langage dépend à la fois de la mémoire, de l'attention et des fonctions exécutives</li>
              <li>L'apprentissage moteur implique la coordination entre le cortex moteur, les ganglions de la base et le cervelet</li>
              <li>La conscience intègre les informations de multiples circuits cérébraux pour créer une expérience unifiée</li>
            </ul>
            
            <Separator className="my-6" />
            
            <div className="flex items-center justify-center">
              <p className="text-center text-sm text-muted-foreground italic max-w-lg">
                "Le cerveau n'est pas une collection de modules indépendants, mais un réseau dynamique de systèmes interconnectés qui fonctionnent ensemble pour créer notre expérience mentale."
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BrainFunctions;
