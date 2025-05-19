import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Brain, MessageCircle, BrainCircuit, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PresentationSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Comprendre la dyscalculie</CardTitle>
          </div>
          <CardDescription>
            Un trouble d'apprentissage spécifique aux mathématiques
          </CardDescription>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Voici une sélection de ressources pour mieux comprendre la dyscalculie, accompagner les personnes concernées
            et trouver des outils adaptés pour faciliter l'apprentissage des mathématiques.
          </p>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Livres et ouvrages</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Pour les professionnels et parents</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>"La dyscalculie" - Marie-Pascale Noël</li>
                  <li>"100 idées pour aider les élèves dyscalculiques" - Isabelle Causse-Mergui</li>
                  <li>"Troubles des apprentissages mathématiques" - Anne Lafay et al.</li>
                  <li>"Les troubles du calcul et les dyscalculies chez l'enfant" - Léonard et Dehaene</li>
                  <li>"Neuropsychologie des troubles des apprentissages" - Michèle Mazeau</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Pour les enfants et adolescents</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>"J'ai attrapé la dyscalculie" - Annick Combier</li>
                  <li>"Le tiroir coincé" - Anne-Marie Gaignard</li>
                  <li>"DYS sur dix" - Delphine Pessin</li>
                  <li>"Les maths et moi" - Collection jeunesse</li>
                  <li>"Mathématiques sans dégâts" - Série éducative adaptée</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Applications et logiciels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Applications mobiles</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>NumberShark - Jeux mathématiques adaptés</li>
                  <li>DybusterCalcuLite - Entraînement au calcul</li>
                  <li>Math Brain Booster - Exercices progressifs</li>
                  <li>Dyscalculie Coach - Accompagnement personnalisé</li>
                  <li>MathTalk - Approche verbale des mathématiques</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Logiciels éducatifs</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Calcularis - Programme d'entraînement adaptatif</li>
                  <li>GeoGebra - Visualisation géométrique</li>
                  <li>The Number Race - Développement du sens numérique</li>
                  <li>Cabri - Géométrie interactive</li>
                  <li>Matheros - Approche ludique des mathématiques</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Outils d'aide</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Calculatrices parlantes</li>
                  <li>Logiciels de conversion d'unités</li>
                  <li>Tables de multiplication interactives</li>
                  <li>Logiciels de géométrie assistée</li>
                  <li>Outils de visualisation mathématique</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Sites web et ressources en ligne</h3>
            <div className="space-y-3">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Sites d'information</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>INSERM - Dossier sur la dyscalculie</li>
                  <li>Fédération Française des DYS (FFDys)</li>
                  <li>APEDA-France - Association pour les troubles d'apprentissage</li>
                  <li>Dyscalculie-info.com - Ressources spécialisées</li>
                  <li>HAPPYneuron - Informations et exercices</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Ressources pédagogiques</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Eduscol - Ressources pour enseignants</li>
                  <li>CNDP - Outils pédagogiques adaptés</li>
                  <li>Mathenpoche - Exercices progressifs</li>
                  <li>Dys-positif - Fiches et méthodes</li>
                  <li>Cartablefantastique - Outils numériques adaptés</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Associations et soutien</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Associations nationales</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Association Nationale des Associations de Parents d'Enfants Dys (ANAPEDYS)</li>
                  <li>Fédération Française des DYS (FFDys)</li>
                  <li>Association Avenir Dysphasie (AAD)</li>
                  <li>Dyspraxie France Dys (DFD)</li>
                  <li>Association pour la Recherche sur les Troubles d'Apprentissage (ARTA)</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Groupes de soutien</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Groupes Facebook dédiés aux troubles dys</li>
                  <li>Forums en ligne pour parents et adultes dyscalculiques</li>
                  <li>Réseaux d'entraide locaux (renseignez-vous auprès de votre mairie)</li>
                  <li>Associations régionales (variables selon les territoires)</li>
                  <li>Groupes de parole dans certains centres médico-psychologiques</li>
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
                  N'hésitez pas à combiner différentes approches et ressources. Chaque personne dyscalculique a des besoins spécifiques
                  et ce qui fonctionne pour l'une peut ne pas être adapté pour une autre. L'important est de trouver les outils et méthodes
                  qui correspondent le mieux au profil d'apprentissage de la personne concernée.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="bg-neuro-light-green/10 p-5 rounded-lg border border-neuro-green/20 mb-4">
              <div className="flex items-start">
                <Brain className="h-6 w-6 text-neuro-green mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  La dyscalculie est un trouble spécifique des apprentissages qui affecte l'acquisition des compétences mathématiques 
                  chez des personnes dont l'intelligence générale est dans la norme. Elle se caractérise par des difficultés persistantes 
                  à comprendre, manipuler et utiliser les nombres et les concepts mathématiques, malgré un enseignement approprié.
                </p>
              </div>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary p-4 rounded-lg text-center">
                <Calculator className="h-10 w-10 text-neuro-green mx-auto mb-2" />
                <h4 className="font-medium mb-1">Difficultés numériques</h4>
                <p className="text-sm text-muted-foreground">Problèmes avec les concepts et opérations mathématiques de base</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <BrainCircuit className="h-10 w-10 text-neuro-green mx-auto mb-2" />
                <h4 className="font-medium mb-1">Origine neurologique</h4>
                <p className="text-sm text-muted-foreground">Différences dans le fonctionnement des zones cérébrales liées aux nombres</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <MessageCircle className="h-10 w-10 text-neuro-green mx-auto mb-2" />
                <h4 className="font-medium mb-1">Impact quotidien</h4>
                <p className="text-sm text-muted-foreground">Conséquences sur la scolarité, la vie professionnelle et personnelle</p>
              </div>
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Prévalence</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <p className="text-muted-foreground">
                La dyscalculie toucherait entre 3% et 7% de la population scolaire, avec une répartition équilibrée entre filles et garçons, 
                contrairement à d'autres troubles d'apprentissage comme la dyslexie. Ce trouble persiste généralement à l'âge adulte, 
                bien que des stratégies compensatoires puissent être développées.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Origines neurobiologiques</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Bases cérébrales</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Différences dans le fonctionnement du sillon intrapariétal</li>
                  <li>Particularités dans les connexions entre régions cérébrales</li>
                  <li>Implique surtout le lobe pariétal (traitement numérique)</li>
                  <li>Possibles anomalies dans les circuits frontaux</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Facteurs contributifs</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Prédisposition génétique</li>
                  <li>Hérédité souvent observée dans les familles</li>
                  <li>Facteurs périnataux possibles</li>
                  <li>Interactions complexes gènes-environnement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Mécanismes cognitifs impliqués</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Sens du nombre</h4>
                <p className="text-muted-foreground">
                  Capacité innée à percevoir, approximer et comparer des quantités. La dyscalculie peut impliquer un déficit 
                  de ce "sens numérique" fondamental, parfois appelé "module numérique approximatif".
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Subitisation</h4>
                <p className="text-muted-foreground">
                  Capacité à reconnaître instantanément de petites quantités (1 à 4 objets) sans compter. Souvent altérée 
                  chez les personnes dyscalculiques, ce qui complique l'élaboration de représentations numériques stables.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Mémoire de travail</h4>
                <p className="text-muted-foreground">
                  Système permettant de maintenir et manipuler temporairement des informations. Essentielle pour les calculs 
                  mentaux et la résolution de problèmes, elle est souvent impliquée dans les difficultés mathématiques.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Représentation spatiale des nombres</h4>
                <p className="text-muted-foreground">
                  Capacité à organiser les nombres sur une "ligne numérique mentale". Cette représentation spatiale est 
                  souvent moins précise chez les personnes dyscalculiques.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Différents profils de dyscalculie</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Dyscalculie du développement</h4>
                <p className="text-muted-foreground">
                  Forme primaire présente dès les premières acquisitions numériques, d'origine neurobiologique.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Dyscalculie procédurale</h4>
                <p className="text-muted-foreground">
                  Difficultés avec les procédures de calcul et les algorithmes mathématiques.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Dyscalculie sémantique</h4>
                <p className="text-muted-foreground">
                  Difficultés à comprendre les concepts et relations mathématiques.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Dyscalculie visuo-spatiale</h4>
                <p className="text-muted-foreground">
                  Problèmes liés à l'organisation spatiale des nombres et des calculs.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Comorbidités fréquentes</h3>
            <p className="text-muted-foreground mb-3">
              La dyscalculie se présente souvent en association avec d'autres troubles :
            </p>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Dyslexie (30-40% des cas)</li>
                <li>Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)</li>
                <li>Dyspraxie (trouble de la coordination)</li>
                <li>Troubles anxieux, particulièrement l'anxiété mathématique</li>
                <li>Troubles du langage oral</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Ces co-occurrences compliquent souvent le diagnostic et nécessitent une prise en charge globale et coordonnée.
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Témoignages */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Témoignages et expériences vécues</CardTitle>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PresentationSection;