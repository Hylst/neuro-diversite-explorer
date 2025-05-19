import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ResourcesSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <Book className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Ressources</CardTitle>
          </div>
          <CardDescription>
            Outils et supports pour les personnes dyscalculiques et leur entourage
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
          
          <div>
            <h3 className="text-lg font-medium mb-3">Formations et certifications</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Diplôme Universitaire (DU) Troubles des Apprentissages - Proposé par plusieurs universités</li>
                <li>Formations continues pour enseignants sur les troubles dys - Proposées par les académies</li>
                <li>Certifications en pédagogie adaptée - Organismes spécialisés</li>
                <li>MOOC sur les troubles des apprentissages - Plateformes en ligne</li>
                <li>Formations pour parents - Associations spécialisées</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Matériel pédagogique spécialisé</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Matériel concret</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Réglettes Cuisenaire</li>
                  <li>Matériel Montessori pour les mathématiques</li>
                  <li>Abaques et bouliers</li>
                  <li>Jetons et manipulatifs</li>
                  <li>Jeux mathématiques adaptés</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Supports visuels</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Tableaux de numération</li>
                  <li>Droites numériques</li>
                  <li>Affiches de procédures</li>
                  <li>Cartes mentales mathématiques</li>
                  <li>Fiches mémo illustrées</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Ressources pour les enseignants</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Guides pédagogiques sur la dyscalculie</li>
                <li>Fiches d'activités adaptées par niveau</li>
                <li>Outils d'évaluation diagnostique</li>
                <li>Exemples de PAP et PPS</li>
                <li>Communautés d'enseignants spécialisés</li>
                <li>Vidéos de formation sur les adaptations pédagogiques</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Ressources financières et administratives</h3>
            <div className="bg-secondary p-4 rounded-lg">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Allocation d'Éducation de l'Enfant Handicapé (AEEH) - Sous conditions</li>
                <li>Prestation de Compensation du Handicap (PCH) - Pour l'achat de matériel spécialisé</li>
                <li>Aides des caisses d'allocations familiales</li>
                <li>Fonds sociaux des établissements scolaires</li>
                <li>Aides des collectivités territoriales</li>
                <li>Déductions fiscales pour frais liés au handicap</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesSection;