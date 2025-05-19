import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const SymptomsSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <ClipboardCheck className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Signes et manifestations</CardTitle>
          </div>
          <CardDescription>
            Reconnaître les symptômes de la dyscalculie
          </CardDescription>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            La dyscalculie se manifeste par diverses difficultés dans l'apprentissage et l'utilisation des mathématiques. 
            Ces signes peuvent varier en intensité et en combinaison selon les individus.
          </p>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Difficultés avec les concepts numériques de base</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Difficulté à comprendre la valeur des nombres et leur grandeur relative</li>
                <li>Problèmes pour compter de façon séquentielle, surtout à rebours</li>
                <li>Confusion entre les chiffres similaires visuellement (6 et 9, 3 et 8)</li>
                <li>Difficultés à lire et écrire les nombres à plusieurs chiffres</li>
                <li>Problèmes pour comprendre la valeur positionnelle (unités, dizaines, centaines)</li>
                <li>Difficulté à estimer des quantités approximatives</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Difficultés avec les opérations mathématiques</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Lenteur et erreurs fréquentes dans les calculs de base</li>
                <li>Difficulté à mémoriser les tables d'addition et de multiplication</li>
                <li>Problèmes pour comprendre et appliquer les procédures de calcul</li>
                <li>Confusion entre les opérations (addition vs soustraction, multiplication vs division)</li>
                <li>Difficultés à aligner correctement les chiffres lors des calculs écrits</li>
                <li>Problèmes pour comprendre les concepts de retenue et d'emprunt</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Difficultés avec le raisonnement mathématique</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Problèmes pour comprendre et résoudre des problèmes mathématiques textuels</li>
                <li>Difficultés à traduire des situations réelles en équations mathématiques</li>
                <li>Problèmes pour comprendre les concepts abstraits (fractions, algèbre)</li>
                <li>Difficultés à suivre des séquences d'étapes logiques</li>
                <li>Problèmes pour généraliser des concepts mathématiques à de nouvelles situations</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Difficultés spatio-temporelles</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Problèmes pour lire l'heure sur une horloge analogique</li>
                <li>Difficultés à estimer le temps et à gérer les horaires</li>
                <li>Problèmes d'orientation spatiale et de lecture de cartes</li>
                <li>Difficultés avec la géométrie et les représentations spatiales</li>
                <li>Problèmes pour comprendre les mesures (longueur, poids, volume)</li>
                <li>Difficultés à manipuler l'argent et à calculer la monnaie</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Manifestations selon l'âge</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Petite enfance (3-6 ans)</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficulté à apprendre à compter</li>
                  <li>Problèmes pour reconnaître les petites quantités sans compter</li>
                  <li>Difficultés à comprendre les concepts de "plus" et "moins"</li>
                  <li>Problèmes pour classer des objets par taille ou quantité</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Enfance (7-12 ans)</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés persistantes avec les opérations de base</li>
                  <li>Problèmes pour mémoriser les faits numériques</li>
                  <li>Difficultés avec les problèmes textuels</li>
                  <li>Anxiété mathématique croissante</li>
                  <li>Évitement des activités impliquant des calculs</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Adolescence et âge adulte</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés avec les mathématiques avancées</li>
                  <li>Problèmes pour gérer un budget</li>
                  <li>Difficultés à estimer des coûts ou des mesures</li>
                  <li>Anxiété lors de situations impliquant des calculs</li>
                  <li>Développement de stratégies de compensation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Impact émotionnel et comportemental</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Anxiété mathématique et peur des situations impliquant des calculs</li>
                <li>Faible estime de soi académique</li>
                <li>Évitement des cours ou activités mathématiques</li>
                <li>Frustration et découragement face aux difficultés persistantes</li>
                <li>Sentiment d'incompétence malgré des efforts soutenus</li>
                <li>Stress lors des évaluations mathématiques</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-neuro-light-green/10 p-4 rounded-lg border border-neuro-green/20">
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-neuro-green mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2 text-neuro-green">Important à savoir</h4>
                <p className="text-muted-foreground">
                  La présence de quelques-uns de ces signes ne signifie pas nécessairement qu'une personne est dyscalculique. 
                  Un diagnostic formel doit être établi par des professionnels qualifiés à travers une évaluation complète. 
                  De plus, les personnes dyscalculiques peuvent exceller dans d'autres domaines comme les arts, les langues, 
                  les sciences sociales ou même certains aspects des sciences qui ne reposent pas fortement sur les calculs.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Signes d'alerte par niveau scolaire</h3>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Maternelle et CP</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés à apprendre à compter jusqu'à 10</li>
                  <li>Problèmes pour reconnaître les petites quantités sans compter</li>
                  <li>Difficultés à comprendre que le dernier nombre prononcé représente la quantité totale</li>
                  <li>Problèmes pour comparer des quantités (plus/moins/égal)</li>
                  <li>Difficultés à associer un nombre à une quantité</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">CE1-CE2</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés persistantes avec les additions et soustractions simples</li>
                  <li>Problèmes pour comprendre la valeur positionnelle</li>
                  <li>Recours fréquent au comptage sur les doigts</li>
                  <li>Difficultés à mémoriser les faits numériques de base</li>
                  <li>Problèmes pour lire l'heure</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">CM1-CM2</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés avec les multiplications et divisions</li>
                  <li>Problèmes pour comprendre les fractions et les décimaux</li>
                  <li>Difficultés avec les problèmes à plusieurs étapes</li>
                  <li>Problèmes pour estimer des résultats</li>
                  <li>Difficultés avec les mesures et les conversions d'unités</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Collège</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés avec l'algèbre et les concepts abstraits</li>
                  <li>Problèmes pour comprendre les pourcentages et les proportions</li>
                  <li>Difficultés avec la géométrie et les représentations spatiales</li>
                  <li>Problèmes pour interpréter des graphiques et des tableaux</li>
                  <li>Anxiété mathématique marquée</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Lycée et au-delà</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Difficultés persistantes avec les mathématiques avancées</li>
                  <li>Problèmes pour gérer un budget personnel</li>
                  <li>Difficultés à estimer des coûts ou des distances</li>
                  <li>Problèmes pour comprendre des concepts statistiques</li>
                  <li>Évitement des carrières ou formations impliquant des mathématiques</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SymptomsSection;