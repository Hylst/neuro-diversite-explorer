
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, FileDown, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Communication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ressources">Ressources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Communication avec les professionnels</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Communication avec les professionnels</h1>
          <p className="text-muted-foreground">
            Mis à jour en avril 2025 - Guide pratique pour dialoguer efficacement avec les enseignants, médecins et autres professionnels au sujet de la neurodiversité.
          </p>
        </div>

        <Tabs defaultValue="enseignants" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="enseignants">Enseignants</TabsTrigger>
            <TabsTrigger value="medecins">Médecins et thérapeutes</TabsTrigger>
            <TabsTrigger value="employeurs">Employeurs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="enseignants">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <Users className="h-6 w-6 text-neuro-purple" />
                  <h2 className="text-2xl font-bold">Dialoguer avec les enseignants</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Préparer un dossier de présentation</h3>
                    <p className="text-muted-foreground mb-4">
                      Un dossier bien préparé facilite la compréhension et l'action de l'enseignant. Il devrait contenir:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-purple mt-0.5 flex-shrink-0" />
                        <span>Un résumé concis du diagnostic et de ses manifestations spécifiques chez votre enfant/vous-même</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-purple mt-0.5 flex-shrink-0" />
                        <span>Les stratégies qui ont fonctionné dans le passé (et celles à éviter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-purple mt-0.5 flex-shrink-0" />
                        <span>Des extraits pertinents des évaluations professionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-purple mt-0.5 flex-shrink-0" />
                        <span>Des aménagements raisonnables et spécifiques que vous demandez</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-purple mt-0.5 flex-shrink-0" />
                        <span>Coordonnées des professionnels impliqués (avec autorisation de communication)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Structurer l'entretien</h3>
                    <p className="text-muted-foreground mb-4">
                      Un entretien efficace suit généralement cette structure:
                    </p>
                    <ol className="space-y-4">
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">1. Introduction positive</p>
                        <p className="text-sm text-muted-foreground">Commencez par reconnaître le travail de l'enseignant et exprimez votre désir de collaboration pour la réussite de l'élève.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">2. Présentation factuelle</p>
                        <p className="text-sm text-muted-foreground">Exposez clairement les faits concernant le profil neurodéveloppemental sans jargon excessif.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">3. Focus sur les solutions</p>
                        <p className="text-sm text-muted-foreground">Proposez des aménagements concrets et réalisables qui ont fait leurs preuves.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">4. Établir un suivi</p>
                        <p className="text-sm text-muted-foreground">Convenez d'un système de communication régulier et d'évaluation des mesures mises en place.</p>
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Exemples de formulations efficaces</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border p-4 rounded-lg bg-neuro-light-purple/10">
                        <p className="font-medium text-neuro-purple mb-2">Au lieu de dire:</p>
                        <p className="italic">"Mon enfant est TDAH, il faudrait lui donner plus de temps pour les examens."</p>
                      </div>
                      <div className="border p-4 rounded-lg bg-neuro-light-green/10">
                        <p className="font-medium text-neuro-green mb-2">Essayez plutôt:</p>
                        <p className="italic">"Mon enfant a un TDAH qui affecte sa vitesse de traitement. Les évaluations montrent qu'il comprend parfaitement le contenu mais a besoin de 30% de temps supplémentaire pour démontrer ses connaissances. Puis-je vous montrer comment cette adaptation a considérablement amélioré ses résultats l'an dernier?"</p>
                      </div>
                      
                      <div className="border p-4 rounded-lg bg-neuro-light-purple/10">
                        <p className="font-medium text-neuro-purple mb-2">Au lieu de dire:</p>
                        <p className="italic">"Je ne comprends pas pourquoi vous ne suivez pas les recommandations du médecin pour mon enfant dyslexique."</p>
                      </div>
                      <div className="border p-4 rounded-lg bg-neuro-light-green/10">
                        <p className="font-medium text-neuro-green mb-2">Essayez plutôt:</p>
                        <p className="italic">"Je comprends les contraintes de la classe nombreuse. Parmi les recommandations du neuropsychologue, quelles sont celles qui vous semblent les plus facilement applicables dans votre contexte? Comment pourrais-je vous aider à les mettre en œuvre?"</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide complet pour enseignants</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medecins">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <MessageSquare className="h-6 w-6 text-neuro-blue" />
                  <h2 className="text-2xl font-bold">Communiquer avec les médecins et thérapeutes</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Préparation aux consultations</h3>
                    <p className="text-muted-foreground mb-4">
                      Une préparation minutieuse maximise l'efficacité des rendez-vous médicaux et thérapeutiques:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>Tenez un journal des symptômes/comportements avec dates, contextes et intensité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>Préparez une liste de questions précises, par ordre de priorité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>Rassemblez les précédents rapports médicaux et bilans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>Notez les médicaments pris (y compris suppléments et alternatives)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>Si nécessaire, demandez à être accompagné par un proche de confiance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Communication efficace pendant la consultation</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Soyez précis et concret</p>
                        <p className="text-sm text-muted-foreground">Utilisez des exemples spécifiques plutôt que des généralisations. "J'ai eu trois crises d'anxiété aiguë cette semaine, chacune durant environ 20 minutes" est plus utile que "Je me sens très anxieux dernièrement".</p>
                      </div>
                      <div className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Priorisez les informations</p>
                        <p className="text-sm text-muted-foreground">Commencez par les symptômes ou préoccupations les plus importants ou invalidants, au cas où le temps serait limité.</p>
                      </div>
                      <div className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Demandez des clarifications</p>
                        <p className="text-sm text-muted-foreground">N'hésitez pas à faire répéter ou expliquer différemment. "Pourriez-vous m'expliquer cela autrement?" ou "Puis-je vous répéter pour vérifier que j'ai bien compris?"</p>
                      </div>
                      <div className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Prenez des notes</p>
                        <p className="text-sm text-muted-foreground">Demandez la permission d'enregistrer ou prenez des notes écrites. Si c'est difficile, demandez un résumé écrit des points clés.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Questions essentielles à poser</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>"Quels sont les différents traitements/thérapies disponibles pour ma condition, et quels sont leurs avantages et inconvénients respectifs?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>"Comment puis-je mesurer l'efficacité de ce traitement/cette approche? Quels changements spécifiques devrais-je observer et dans quel délai?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>"Quelles ressources ou soutiens complémentaires recommandez-vous en dehors de vos consultations?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-neuro-blue mt-0.5 flex-shrink-0" />
                        <span>"Comment puis-je vous contacter entre les rendez-vous si j'ai des questions urgentes ou des effets secondaires?"</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide pour consultations médicales</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="employeurs">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <Users className="h-6 w-6 text-neuro-green" />
                  <h2 className="text-2xl font-bold">Dialoguer avec les employeurs</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Décider de la divulgation</h3>
                    <p className="text-muted-foreground mb-4">
                      La divulgation d'un trouble neurodéveloppemental en milieu professionnel est une décision personnelle qui mérite réflexion:
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border p-4 rounded-lg">
                        <p className="font-medium text-neuro-green mb-2">Avantages potentiels:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Accès aux aménagements légaux</li>
                          <li>• Fin du masquage épuisant</li>
                          <li>• Meilleure compréhension des collègues</li>
                          <li>• Possibilité d'aménagements préventifs</li>
                        </ul>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <p className="font-medium text-red-500 mb-2">Risques potentiels:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Stigmatisation possible</li>
                          <li>• Jugements erronés sur vos compétences</li>
                          <li>• Surprotection ou sous-utilisation</li>
                          <li>• Impact sur l'avancement professionnel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Préparation de l'entretien</h3>
                    <ol className="space-y-4">
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">1. Recherchez la politique de l'entreprise</p>
                        <p className="text-sm text-muted-foreground">Consultez les politiques de diversité et d'inclusion, ainsi que les précédents en matière d'aménagements raisonnables.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">2. Identifiez votre interlocuteur</p>
                        <p className="text-sm text-muted-foreground">Déterminez si vous devriez parler à votre supérieur direct, aux RH, ou au service de médecine du travail.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">3. Préparez un document écrit</p>
                        <p className="text-sm text-muted-foreground">Rédigez un document concis présentant: votre condition, ses impacts sur votre travail, vos forces liées à cette condition, et les aménagements spécifiques demandés.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">4. Répétez votre présentation</p>
                        <p className="text-sm text-muted-foreground">Entraînez-vous à expliquer votre situation de manière professionnelle et axée sur les solutions.</p>
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Exemples de formulations professionnelles</h3>
                    <div className="border p-4 rounded-lg mb-4">
                      <p className="font-medium mb-2">Exemple d'introduction:</p>
                      <p className="italic text-sm">
                        "J'aimerais discuter avec vous d'un aspect de ma santé qui affecte certains aspects de mon travail. J'ai un diagnostic de [trouble], qui explique certaines difficultés que vous avez peut-être remarquées concernant [aspect spécifique]. Je tiens à souligner que je reste pleinement engagé(e) dans mon rôle et mes responsabilités. En fait, cette condition est également liée à mes forces en [compétences spécifiques]."
                      </p>
                    </div>
                    
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium mb-2">Demande d'aménagements:</p>
                      <p className="italic text-sm">
                        "J'ai identifié quelques aménagements simples qui me permettraient d'optimiser ma productivité et d'exceller dans mon rôle. Par exemple, [aménagement spécifique] m'aiderait à [avantage pour l'entreprise]. Dans mes précédentes expériences, ces adaptations ont permis d'augmenter considérablement mon efficacité et la qualité de mon travail."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide pour milieu professionnel</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Techniques de communication pour tous les contextes</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Méthode SOAR</h3>
                <p className="text-sm text-muted-foreground mb-3">Une technique structurée pour des conversations difficiles:</p>
                <ul className="space-y-1 text-sm">
                  <li><span className="font-medium">S</span>ituation: Décrivez le contexte factuel</li>
                  <li><span className="font-medium">O</span>bstacle: Identifiez précisément le problème</li>
                  <li><span className="font-medium">A</span>ction: Proposez des solutions concrètes</li>
                  <li><span className="font-medium">R</span>ésultat: Expliquez les bénéfices attendus</li>
                </ul>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Communication non-violente</h3>
                <p className="text-sm text-muted-foreground mb-3">Pour exprimer vos besoins sans confrontation:</p>
                <ul className="space-y-1 text-sm">
                  <li>1. Observez les faits sans juger</li>
                  <li>2. Exprimez vos sentiments ("Je me sens...")</li>
                  <li>3. Identifiez vos besoins ("...parce que j'ai besoin de...")</li>
                  <li>4. Formulez une demande concrète et réalisable</li>
                </ul>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Technique de l'avocat</h3>
                <p className="text-sm text-muted-foreground mb-3">Pour les personnes qui préfèrent la communication écrite:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Rédigez un "mémoire" organisé en points clairs</li>
                  <li>• Incluez des références scientifiques pertinentes</li>
                  <li>• Proposez plusieurs options graduées</li>
                  <li>• Envoyez-le avant la réunion pour préparation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Ressources téléchargeables</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Lettres types pour différents contextes</h3>
                  <p className="text-sm text-muted-foreground mb-2">Modèles adaptables pour diverses situations et professionnels</p>
                  <Button variant="outline" size="sm">Télécharger (.docx)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Guide de préparation aux rendez-vous</h3>
                  <p className="text-sm text-muted-foreground mb-2">Checklist et conseils pour optimiser vos consultations</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Fiches de vulgarisation par trouble</h3>
                  <p className="text-sm text-muted-foreground mb-2">Explications simples à partager avec les professionnels</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Journal de suivi des interactions</h3>
                  <p className="text-sm text-muted-foreground mb-2">Modèle pour documenter et analyser vos communications</p>
                  <Button variant="outline" size="sm">Télécharger (.xlsx)</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>    </div>
  );
};

export default Communication;
