
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, BookOpen, Brain, HeartPulse, GraduationCap, Pencil, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dysorthographie = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="icon" asChild className="mr-2">
                <Link to="/troubles">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Retour</span>
                </Link>
              </Button>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                La <span className="neuro-gradient-text">Dysorthographie</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprendre le trouble spécifique de l'acquisition et de la maîtrise de l'orthographe
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dysorthographie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La dysorthographie est un trouble spécifique de l'apprentissage qui affecte l'acquisition et la maîtrise 
                  de l'orthographe. Elle se manifeste par des difficultés persistantes à orthographier correctement les mots, 
                  à appliquer les règles grammaticales et à transcrire sa pensée à l'écrit, malgré un enseignement conventionnel 
                  et une intelligence normale.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ce trouble neurodéveloppemental est souvent associé à la dyslexie (trouble de la lecture), 
                  mais peut également exister de manière isolée. La dysorthographie ne résulte pas d'un manque d'effort 
                  ou d'une exposition insuffisante à l'enseignement, mais d'une différence dans le traitement 
                  cognitif des informations liées au langage écrit.
                </p>
                <p className="text-muted-foreground">
                  Elle touche environ 3 à 5% de la population et persiste généralement tout au long de la vie, 
                  bien que des stratégies de compensation et des interventions adaptées puissent considérablement 
                  améliorer les compétences orthographiques et réduire son impact sur la scolarité et la vie quotidienne.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Les différents types de difficultés orthographiques</h2>
                <p className="text-muted-foreground mb-4">
                  La dysorthographie peut affecter différentes composantes de l'orthographe:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-red">
                    <h3 className="font-semibold mb-2 text-neuro-red">Dysorthographie phonologique</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés à transcrire les sons en lettres. L'enfant ne parvient pas à associer correctement 
                      les phonèmes (sons) aux graphèmes (lettres). Ex: "bateau" écrit "pato".
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-red">
                    <h3 className="font-semibold mb-2 text-neuro-red">Dysorthographie de surface</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés avec l'orthographe des mots irréguliers et les homophones. L'enfant écrit phonétiquement 
                      mais ne maîtrise pas les particularités orthographiques. Ex: "pharmacie" écrit "farmacie".
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-red">
                    <h3 className="font-semibold mb-2 text-neuro-red">Dysorthographie grammaticale</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés avec les règles grammaticales, les accords, la conjugaison et la syntaxe. 
                      Ex: "Les enfants joue" au lieu de "Les enfants jouent".
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-red">
                    <h3 className="font-semibold mb-2 text-neuro-red">Dysorthographie visuo-attentionnelle</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés liées à la mémorisation visuelle de la forme orthographique des mots. 
                      Inversions, omissions ou ajouts de lettres fréquents.
                    </p>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  Ces différentes formes peuvent coexister chez une même personne, avec une prédominance 
                  variable selon les individus. Le type de dysorthographie influence les approches de rééducation à privilégier.
                </p>
              </div>

              <Tabs defaultValue="symptoms">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                  <TabsTrigger value="diagnosis">Diagnostic</TabsTrigger>
                  <TabsTrigger value="treatment">Prise en charge</TabsTrigger>
                  <TabsTrigger value="daily">Vie quotidienne</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="space-y-4">
                  <h3 className="text-xl font-semibold">Signes et symptômes</h3>
                  <p className="text-muted-foreground mb-4">
                    La dysorthographie se manifeste par divers signes qui peuvent varier en intensité:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-neuro-red" />
                        <h4 className="font-medium">Erreurs phonologiques</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Confusion entre lettres/sons proches (p/b, t/d, f/v)</li>
                        <li>Omission de lettres ou syllabes ("arbe" pour "arbre")</li>
                        <li>Ajout de lettres parasites</li>
                        <li>Inversion de l'ordre des lettres ("prot" pour "port")</li>
                        <li>Difficultés avec les sons complexes (ouille, tion, etc.)</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Pencil className="h-5 w-5 text-neuro-red" />
                        <h4 className="font-medium">Erreurs lexicales</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Difficultés avec l'orthographe d'usage</li>
                        <li>Non-respect des règles contextuelles (g/gu, c/ç)</li>
                        <li>Confusion entre homophones (ver/verre/vert)</li>
                        <li>Problèmes avec les lettres muettes</li>
                        <li>Difficultés à mémoriser la forme visuelle des mots</li>
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="h-5 w-5 text-neuro-red" />
                        <h4 className="font-medium">Erreurs grammaticales</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Difficultés avec les accords sujet-verbe</li>
                        <li>Problèmes d'accords en genre et en nombre</li>
                        <li>Confusion des terminaisons verbales (é/er/ait/aient)</li>
                        <li>Non-application des règles d'accord du participe passé</li>
                        <li>Utilisation incorrecte de la ponctuation</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-neuro-red" />
                        <h4 className="font-medium">Autres manifestations</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Lenteur importante dans la production écrite</li>
                        <li>Grande variabilité dans l'orthographe d'un même mot</li>
                        <li>Décalage entre l'expression orale et écrite</li>
                        <li>Évitement des tâches d'écriture</li>
                        <li>Anxiété face aux situations d'écriture</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2">Impact sur la scolarité</h4>
                    <p className="text-sm text-muted-foreground">
                      Les difficultés orthographiques ont souvent des conséquences importantes sur la scolarité:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>Notes pénalisées dans toutes les matières nécessitant de l'écrit</li>
                      <li>Difficultés à prendre des notes</li>
                      <li>Temps d'écriture beaucoup plus long</li>
                      <li>Productions écrites simplifiées pour éviter les erreurs</li>
                      <li>Sentiment de dévalorisation et perte de motivation</li>
                      <li>Anxiété face aux dictées et productions écrites</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="diagnosis" className="space-y-4">
                  <h3 className="text-xl font-semibold">Parcours diagnostic</h3>
                  <p className="text-muted-foreground mb-4">
                    Le diagnostic de la dysorthographie est généralement réalisé par une équipe pluridisciplinaire, 
                    avec l'orthophoniste en première ligne.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Signes d'alerte</h4>
                      <p className="text-sm text-muted-foreground">
                        Il est recommandé de consulter lorsque l'enfant présente:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Des difficultés persistantes en orthographe malgré un apprentissage adapté</li>
                        <li>Un décalage important entre ses capacités orales et écrites</li>
                        <li>Des erreurs qui ne diminuent pas avec la pratique et les révisions</li>
                        <li>Une lenteur excessive à l'écrit</li>
                        <li>Un évitement marqué des activités d'écriture</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Évaluation orthophonique</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        L'orthophoniste réalise un bilan complet qui comprend:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Anamnèse détaillée (histoire du développement et des apprentissages)</li>
                        <li>Évaluation du langage oral</li>
                        <li>Évaluation de la lecture (la dyslexie est souvent associée)</li>
                        <li>Tests spécifiques d'orthographe (dictées, production écrite)</li>
                        <li>Analyse qualitative des erreurs</li>
                        <li>Évaluation des capacités métaphonologiques et visuelles</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Évaluations complémentaires</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Selon les besoins, d'autres professionnels peuvent intervenir:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Médecin</span>: pour éliminer toute cause médicale</li>
                        <li><span className="font-medium">Psychologue/Neuropsychologue</span>: évaluation cognitive et psychoaffective</li>
                        <li><span className="font-medium">Ergothérapeute</span>: en cas de difficultés graphomotrices associées</li>
                        <li><span className="font-medium">Ophtalmologiste</span>: vérification de la vision</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Critères diagnostiques</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pour qu'un diagnostic de dysorthographie soit posé, plusieurs critères doivent être réunis:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Performances en orthographe significativement inférieures au niveau attendu pour l'âge</li>
                        <li>Difficultés persistantes malgré un enseignement adéquat</li>
                        <li>Impact significatif sur la réussite scolaire ou les activités quotidiennes</li>
                        <li>Absence d'explication par un déficit sensoriel ou intellectuel</li>
                        <li>Troubles ne pouvant être attribués uniquement à un manque de pratique</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="treatment" className="space-y-4">
                  <h3 className="text-xl font-semibold">Approches thérapeutiques</h3>
                  <p className="text-muted-foreground mb-4">
                    La prise en charge de la dysorthographie combine généralement plusieurs approches, 
                    adaptées au profil spécifique de chaque personne.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Rééducation orthophonique</h4>
                      <p className="text-sm text-muted-foreground">
                        Élément central de la prise en charge, elle vise à:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Renforcer la conscience phonologique</li>
                        <li>Automatiser les correspondances phonèmes-graphèmes</li>
                        <li>Développer la mémoire visuelle des mots</li>
                        <li>Travailler les règles orthographiques et grammaticales</li>
                        <li>Utiliser des méthodes multisensorielles</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Adaptations scolaires</h4>
                      <p className="text-sm text-muted-foreground">
                        Essentielles pour préserver la motivation et l'estime de soi:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Plan d'Accompagnement Personnalisé (PAP)</li>
                        <li>Aménagements des évaluations (moins de pénalisation pour l'orthographe)</li>
                        <li>Temps supplémentaire pour les productions écrites</li>
                        <li>Réduction de la quantité de production écrite</li>
                        <li>Fourniture de supports de cours écrits</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Outils de compensation</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Logiciels de correction orthographique spécialisés</li>
                        <li>Logiciels de prédiction de mots</li>
                        <li>Dictionnaires électroniques</li>
                        <li>Dictée vocale</li>
                        <li>Cartes mentales pour organiser les idées avant la rédaction</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Stratégies pédagogiques</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Méthodes d'apprentissage multisensorielles</li>
                        <li>Enseignement explicite des règles orthographiques</li>
                        <li>Approche par familles de mots</li>
                        <li>Utilisation de moyens mnémotechniques</li>
                        <li>Apprentissage par la fréquence (liste de mots fréquents)</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Méthodes spécifiques</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Pour la dysorthographie phonologique:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Renforcement des associations sons-lettres</li>
                          <li>Segmentation syllabique</li>
                          <li>Discrimination auditive fine</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Pour la dysorthographie de surface:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Mémorisation visuelle des mots irréguliers</li>
                          <li>Création d'un lexique orthographique mental</li>
                          <li>Travail sur les homophones</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Pour la dysorthographie grammaticale:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Approche procédurale des règles</li>
                          <li>Utilisation de codes couleurs</li>
                          <li>Création d'algorithmes de vérification</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Pour tous les types:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Travail sur les stratégies de révision</li>
                          <li>Techniques de relecture ciblée</li>
                          <li>Développement de l'autocorrection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="daily" className="space-y-4">
                  <h3 className="text-xl font-semibold">Vivre avec une dysorthographie</h3>
                  <p className="text-muted-foreground mb-4">
                    La dysorthographie peut avoir un impact important sur la vie quotidienne, mais diverses 
                    stratégies permettent de la compenser efficacement.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Stratégies pour l'élève</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Utiliser systématiquement les correcteurs orthographiques</li>
                        <li>Créer un répertoire personnel des mots fréquemment utilisés</li>
                        <li>Relire en se concentrant sur un type d'erreur à la fois</li>
                        <li>Utiliser des codes couleurs pour les règles grammaticales</li>
                        <li>S'enregistrer puis réécouter pour détecter les erreurs</li>
                        <li>Privilégier l'ordinateur pour les productions longues</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Conseils pour les parents</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Dédramatiser les erreurs orthographiques</li>
                        <li>Valoriser le contenu des productions plus que la forme</li>
                        <li>Maintenir une attitude positive face aux difficultés</li>
                        <li>Fractionner les apprentissages en petites séquences</li>
                        <li>Favoriser la lecture pour enrichir le lexique orthographique</li>
                        <li>Jouer à des jeux impliquant l'orthographe de façon ludique</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">À l'adolescence et l'âge adulte</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Maîtriser les outils technologiques de compensation</li>
                        <li>Expliquer ses difficultés dans les contextes appropriés</li>
                        <li>Solliciter une relecture pour les documents importants</li>
                        <li>Choisir des formations valorisant d'autres compétences</li>
                        <li>S'informer sur les aménagements possibles en milieu professionnel</li>
                        <li>Entretenir les acquis orthographiques par la pratique régulière</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Au-delà des difficultés</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Les personnes dysorthographiques développent souvent:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Une créativité dans l'expression pour contourner les mots difficiles</li>
                        <li>D'excellentes compétences à l'oral</li>
                        <li>Des talents dans d'autres domaines (sciences, arts, sports)</li>
                        <li>Une grande persévérance face aux défis</li>
                        <li>Une sensibilité particulière aux difficultés des autres</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Témoignage</h4>
                    <blockquote className="italic text-sm text-muted-foreground border-l-4 border-neuro-red pl-4">
                      "J'ai toujours été ce qu'on appelle une 'catastrophe en orthographe'. À l'école, mes rédactions étaient 
                      couvertes de rouge malgré mes efforts. Le diagnostic de dysorthographie m'a libéré d'un poids énorme - 
                      je n'étais pas paresseux ou inattentif! Aujourd'hui, j'utilise systématiquement des logiciels de correction 
                      et j'ai développé mes propres stratégies. Je suis ingénieur informatique et mes idées sont appréciées, 
                      même si mes emails doivent toujours passer par un correcteur!"
                      <footer className="mt-2 font-medium not-italic">Thomas, 34 ans</footer>
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      Note: Ce témoignage est fictif, créé à des fins pédagogiques pour illustrer le vécu possible d'une personne dysorthographique.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Ressources et outils</h2>
                <p className="text-muted-foreground mb-4">
                  De nombreuses ressources peuvent aider les personnes dysorthographiques et leur entourage:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Applications et logiciels</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Correcteurs orthographiques spécialisés (Antidote, Cordial)</li>
                      <li>Logiciels de prédiction de mots (WordQ)</li>
                      <li>Applications d'aide à l'orthographe (Projet Voltaire)</li>
                      <li>Dictionnaires électroniques avec recherche phonétique</li>
                      <li>Logiciels de dictée vocale</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Ressources pédagogiques</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Méthodes d'apprentissage multisensorielles</li>
                      <li>Cahiers d'exercices spécifiques</li>
                      <li>Jeux orthographiques adaptés</li>
                      <li>Fiches de stratégies pour la relecture</li>
                      <li>Guides d'autoapprentissage</li>
                    </ul>
                  </Card>
                </div>
                
                <p className="text-muted-foreground mt-4">
                  Pour plus d'informations sur les outils technologiques adaptés, consultez notre page 
                  dédiée aux <a href="/ressources/applications" className="text-neuro-red hover:underline">applications recommandées</a>.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-neuro-red" />
                  <h3 className="text-xl font-bold">À retenir</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-neuro-red font-bold">•</span>
                    <span className="text-muted-foreground text-sm">La dysorthographie est un trouble durable de l'acquisition de l'orthographe</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-red font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Elle peut affecter l'orthographe phonologique, lexicale et/ou grammaticale</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-red font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Elle est souvent associée à la dyslexie mais peut exister seule</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-red font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Le diagnostic est posé par un orthophoniste après évaluation complète</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-red font-bold">•</span>
                    <span className="text-muted-foreground text-sm">La rééducation s'accompagne d'adaptations et d'outils compensatoires</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-red font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les technologies modernes offrent des solutions efficaces</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Comorbidités fréquentes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  La dysorthographie est souvent associée à d'autres troubles:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Dyslexie</span>
                      <p className="text-xs text-muted-foreground">Dans 75% des cas, les deux troubles coexistent</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Dysgraphie</span>
                      <p className="text-xs text-muted-foreground">Trouble du geste graphique souvent associé</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">TDAH</span>
                      <p className="text-xs text-muted-foreground">Les difficultés attentionnelles compliquent la révision</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Testez vos connaissances</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                  onClick={scrollToTop}
                >
                  <Link to="/auto-evaluation">
                    Faire le test sur les troubles DYS
                  </Link>
                </Button>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Explorer d'autres troubles</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dyslexie">
                      Dyslexie
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dysphasie">
                      Dysphasie
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dysgraphie">
                      Dysgraphie
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default Dysorthographie;
