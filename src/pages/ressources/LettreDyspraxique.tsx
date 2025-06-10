import React from 'react';
import { ArrowLeft, Brain, Heart, Lightbulb, Target, Users, Zap, BookOpen, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LettreDyspraxique: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header avec bouton retour */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/ressources')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux ressources
          </Button>
        </div>

        {/* Titre principal */}
        <Card className="mb-8 border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
              <Cog className="h-8 w-8 text-green-600" />
              Lettre d'un dyspraxique aux autres dyspraxiques
            </CardTitle>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Par Geoffroy Streit - Mars 2003
            </p>
          </CardHeader>
        </Card>

        {/* Introduction */}
        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <p>
              Chers compagnons de maladresse,
            </p>
            <p>
              Si vous lisez ces lignes, c'est que comme moi, vous faites partie de cette confrérie secrète des "casseurs involontaires de vaisselle" et des "rois des lacets défaits". Oui, cette lettre est écrite par un des vôtres, celui qui, à 26 ans, continue de renverser son chocolat le matin avec une régularité astronomique que même la NASA envierait pour ses lancements de fusées.
            </p>
            <p>
              J'ai mis trois jours à écrire cette lettre – non pas par manque d'inspiration, mais parce que mon clavier semble parfois posséder une volonté propre sous mes doigts. Et avouons-le, j'ai renversé deux tasses de thé sur mes premières versions manuscrites.
            </p>
            <p>
              Bienvenue dans le monde fascinant de la dyspraxie, ce trouble qui fait de chaque journée une aventure imprévisible ! Je vous écris aujourd'hui non pas pour nous lamenter sur nos difficultés (quoique, parfois, ça fait du bien), mais pour partager une multitude d'astuces qui m'ont aidé à dompter ce cerveau rebelle qui semble avoir son propre plan quand il s'agit de coordonner mes mouvements.
            </p>
          </CardContent>
        </Card>

        {/* Première partie : Comprendre ce qui se passe dans notre tête */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-500" />
              Première partie : Comprendre ce qui se passe dans notre tête
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Avant tout, sachez que notre cerveau n'est pas défectueux, il est juste câblé différemment. La dyspraxie affecte la façon dont notre cerveau planifie et exécute les mouvements. C'est comme si notre GPS interne avait un léger bug : il connaît la destination mais prend parfois des détours inattendus pour y arriver.
            </p>
            <p>
              Scientifiquement parlant, notre cerveau peine à automatiser certains gestes que les autres apprennent sans effort. Cette automatisation, qui permet aux neurotypiques de faire leurs lacets sans y penser, requiert chez nous un effort conscient constant. Les neuroscientifiques appellent cela un déficit dans la "mémoire procédurale" - cette mémoire qui stocke les séquences de mouvements.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Ce qui se passe exactement dans notre cerveau :</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Un fonctionnement atypique du cervelet, cette structure à l'arrière du cerveau responsable de la coordination fine et de l'apprentissage moteur</li>
                <li>Des difficultés dans la voie dorsale visuelle (le "comment" du traitement visuel) qui relie l'information visuelle aux actions motrices</li>
                <li>Une intégration sensori-motrice qui fonctionne différemment - notre cerveau peine à transformer efficacement les informations sensorielles en commandes motrices précises</li>
                <li>Une synchronisation temporelle imparfaite entre intention et action - nous savons ce que nous voulons faire, mais le timing de l'exécution est déréglé</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-red-600">Quand les émotions s'en mêlent, c'est encore pire oO</h4>
              <p className="mb-3">
                Le stress et l'anxiété réduisent les ressources cognitives disponibles pour contrôler nos mouvements. C'est pourquoi sous pression, notre coordination peut se détériorer dramatiquement. En situation de stress, l'amygdale cérébrale (notre centre d'alarme émotionnelle) prend le dessus sur le cortex préfrontal (notre centre de contrôle rationnel), réduisant encore notre capacité d'exécution motrice. C'est comme essayer de jongler tout en résolvant une équation différentielle - trop d'informations à traiter simultanément ^^
              </p>
              <p>
                Les recherches en imagerie cérébrale montrent que nous utilisons souvent plus de zones cérébrales pour accomplir une tâche motrice simple qu'une personne neurotypique. C'est épuisant, car cela consomme davantage d'énergie cognitive, mais c'est aussi la preuve que notre cerveau travaille dur pour compenser!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Deuxième partie : Mes stratégies qui marchent */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Deuxième partie : Mes stratégies qui marchent (la plupart du temps)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">1. La répétition consciente transformée en automatisme</h3>
              <p className="mb-3">
                J'ai découvert que pratiquer encore et encore un même geste, mais de façon CONSCIENTE, finit par créer ce fameux "schéma neuronal facilité".
              </p>
              <p className="mb-3">
                Oui, c'est bien le terme scientifique ! On parle de "potentialisation à long terme" des connexions synaptiques. En termes humains : à force de répéter, on crée des autoroutes dans notre cerveau là où il n'y avait que des chemins de terre.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Par exemple, pour apprendre à verser de l'eau sans en mettre partout :</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>J'ai pratiqué le geste lentement, en me concentrant sur chaque étape</li>
                  <li>J'ai verbalisé les actions: "Je saisis la bouteille, je la penche DOUCEMENT, j'observe le niveau..."</li>
                  <li>J'ai progressivement accéléré tout en maintenant ma concentration</li>
                  <li>J'ai filmé mes tentatives pour analyser où je pouvais m'améliorer (révélation: je relâchais ma concentration trop tôt !)</li>
                </ul>
              </div>
              <p className="mt-3">
                La règle des 10 000 heures pour maîtriser une compétence? Pour nous, c'est peut-être 15 000 ou 20 000, mais l'automatisation finit par arriver. Et quand ça devient automatique, quelle victoire !!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">2. L'imagerie mentale guidée (notre superpouvoir secret)</h3>
              <p className="mb-3">
                Notre cerveau ne fait pas toujours la différence entre ce qu'on imagine vivement et ce qu'on vit réellement. J'utilise cette faiblesse à mon avantage !
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Avant d'exécuter un mouvement compliqué, je :</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Me visualise en train de réussir parfaitement le geste en "vue à la première personne"</li>
                  <li>M'inspire de références fortes (je pense à Spider-Man quand il faut être précis, pas de blague!)</li>
                  <li>Associe des émotions positives à cette visualisation</li>
                  <li>Ajoute des détails sensoriels (comment ça se sent, le son que ça fait quand je réussis)</li>
                  <li>Imagine le mouvement au ralenti puis à vitesse normale</li>
                  <li>Crée un "film mental" complet, avec une préparation, l'action principale et une célébration finale</li>
                </ul>
              </div>
              <p className="mt-3">
                Cela marche particulièrement bien pour les gestes sportifs ou ceux qui demandent de la précision. Les profs de rééducation appellent ça "l'entraînement idéomoteur" - notre cerveau trace littéralement des chemins neuronaux même quand on s'imagine simplement faire le mouvement.
              </p>
              <p>
                Des études avec IRM fonctionnelle montrent que s'imaginer faire un mouvement active presque les mêmes zones cérébrales que de le faire réellement. C'est comme si on s'entraînait sans bouger - parfait pour nous!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">3. Décomposer pour mieux régner (la technique du LEGO)</h3>
              <p className="mb-3">
                J'ai appris à décomposer chaque action complexe en micro-étapes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Pour écrire: je ne pense pas à "écrire", mais à "tenir le stylo correctement" PUIS "appuyer avec la bonne pression" PUIS "tracer la lettre"</li>
                <li>Pour cuisiner: j'ai des check-lists mentales pour chaque recette, avec des points d'arrêt pour vérifier ma progression</li>
                <li>Pour conduire: j'ai séquencé le démarrage en 8 micro-actions que je vérifie mentalement</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Pour les tâches très complexes, j'utilise :</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Des diagrammes de flux dessinés sur papier pour visualiser la séquence</li>
                  <li>Des bulles ou post-it colorés pour chaque étape, que je déplace physiquement pour suivre ma progression</li>
                  <li>Des applications de séquençage (j'adore "Routinery" qui me guide étape par étape)</li>
                  <li>Des enregistrements audio que je me suis fait pour me guider vocalement</li>
                </ul>
              </div>
              <p className="mt-3">
                Cette méthode de "chunking" (ou découpage cognitif) allège la charge mentale et permet à notre cerveau dyspraxique de ne pas se sentir submergé.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">4. Les exercices de coordination croisée (gym cérébrale quotidienne)</h3>
              <p className="mb-3">
                Ce sont mes préférés =D
              </p>
              <p className="mb-3">
                Les mouvements qui impliquent de coordonner les deux côtés du corps renforcent le corps calleux (la structure qui relie nos deux hémisphères cérébraux). Quelques exemples:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Niveau débutant:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Toucher son genou gauche avec sa main droite, puis inversement, en accélérant progressivement</li>
                    <li>Dessiner un cercle avec la main gauche et un carré avec la droite simultanément</li>
                    <li>Faire le "geste des essuie-glaces" en croisant les bras devant soi puis en les écartant</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Niveau intermédiaire:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Jongler avec des foulards (plus lents que des balles!)</li>
                    <li>Faire des "jumping jacks" en variant la position des bras</li>
                    <li>Danser en suivant des chorégraphies simples puis de plus en plus complexes</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Niveau avancé:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Pratiquer le "patting" (taper des rythmes différents avec chaque main)</li>
                    <li>Apprentissage d'un instrument de musique comme le piano ou la batterie (patience… répétition… volonté… dur pour moi)</li>
                    <li>Faire du "cup song" (cette chanson avec des gobelets qu'on déplace en rythme ! Un challenge rythmé)</li>
                    <li>Pratiquer le jonglage à 3 balles (chaud !!! Echec pour ma part =D)</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-3">
                C'est horriblement frustrant au début (j'ai failli jeter mon tapis de gym par la fenêtre), mais les progrès sont réels et se transfèrent aux gestes quotidiens!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">5. L'aménagement de l'environnement (adapter plutôt que s'acharner)</h3>
              <p className="mb-3">
                Plutôt que de m'acharner uniquement à m'adapter au monde, j'adapte aussi le monde à moi:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Pour la cuisine:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Des ustensiles de cuisine avec prise ergonomique</li>
                    <li>Des planches à découper antidérapantes</li>
                    <li>Des bols à bec verseur pour éviter les catastrophes</li>
                    <li>Des minuteurs visuels pour ne pas oublier les casseroles sur le feu</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">Pour l'habillement:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Des vêtements sans boutons quand c'est possible (vive les fermetures éclair ^^)</li>
                    <li>Des lacets élastiques ou magnétiques</li>
                    <li>Des chaussures à scratch pour les jours difficiles</li>
                    <li>Un organisateur de garde-robe par types de vêtements et couleurs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-orange-600">Pour le bureau:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Un clavier ergonomique avec des touches bien espacées</li>
                    <li>Une souris verticale qui limite les mouvements du poignet</li>
                    <li>Des gabarits pour écrire droit sur une feuille non lignée</li>
                    <li>Un enregistreur vocal pour les moments où écrire devient trop pénible</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-teal-600">Pour l'organisation:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Des applications de rappel pour structurer mes journées</li>
                    <li>Des codes couleurs pour m'aider à organiser mon espace</li>
                    <li>Des pochettes transparentes étiquetées pour chaque type de document</li>
                    <li>Des séparateurs visuels dans chaque tiroir et placard</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troisième partie : Accepter et même célébrer notre différence */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Troisième partie : Accepter et même célébrer notre différence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-purple-600">Les dons cachés de la dyspraxie</h3>
              <p className="mb-4">
                Voici ce que j'ai compris après 47 ans de vie dyspraxique (à l'heure de la relecture, amélioration et actualisation de mon texte écrit à 26 ans) : notre cerveau n'est pas "cassé", il est différent. Et cette différence apporte aussi des forces uniques:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Nos superpuissances cognitives:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Une créativité hors norme (on trouve toujours des solutions alternatives!)</li>
                    <li>Une pensée non-linéaire qui fait des connexions inattendues</li>
                    <li>Une perception différente de l'espace qui révèle des patterns invisibles aux autres</li>
                    <li>Une résilience mentale forgée par des années de défis quotidiens</li>
                    <li>Une excellente mémoire verbale et conceptuelle</li>
                    <li>Une capacité d'abstraction supérieure</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Nos forces émotionnelles et sociales:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Une empathie développée envers ceux qui galèrent</li>
                    <li>Une sensibilité aigüe aux détails que d'autres manquent</li>
                    <li>Une patience infinie (on la pratique chaque jour !)</li>
                    <li>Une persévérance à toute épreuve</li>
                    <li>Un sens de l'humour aiguisé</li>
                    <li>Une authenticité naturelle</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Nos avantages professionnels:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Une capacité d'analyse détaillée</li>
                    <li>Un talent pour créer des procédures claires</li>
                    <li>Une vigilance constante qui permet d'anticiper des problèmes</li>
                    <li>Un œil pour détecter les incohérences dans un système</li>
                    <li>Une aptitude à expliquer clairement des processus complexes</li>
                    <li>Une excellente capacité d'adaptation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-purple-600">Le parcours d'acceptation (pas toujours facile mais tellement libérateur)</h3>
              <p className="mb-4">
                J'ai arrêté d'essayer d'être "normal" - concept flou s'il en est - pour me concentrer sur l'amélioration progressive de mes capacités. Certains jours sont meilleurs que d'autres, et c'est parfaitement acceptable.
              </p>
              
              <div className="bg-gradient-to-r from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Mon parcours vers l'acceptation a suivi ces étapes:</h4>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Le déni ("Je suis juste maladroit, ça passera")</li>
                  <li>La colère ("Pourquoi est-ce que tout doit être si difficile pour moi?")</li>
                  <li>La négociation ("Si je m'entraîne 2 heures par jour, je deviendrai comme les autres")</li>
                  <li>La tristesse ("Je serai toujours limité par ma dyspraxie")</li>
                  <li>L'acceptation ("Ma dyspraxie fait partie de moi, mais ne me définit pas")</li>
                  <li>La célébration ("Ma dyspraxie m'a donné des perspectives uniques et des forces particulières")</li>
                </ol>
              </div>
              
              <p className="mt-3">
                Ce n'est pas un processus linéaire - je navigue encore entre ces étapes selon les jours et les défis.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Message final */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Message final
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              La neuroplasticité est notre meilleure amie: notre cerveau continue de s'adapter tout au long de notre vie. Les progrès sont possibles à tout âge, j'en suis la preuve vivante!
            </p>
            <p>
              Ce qui m'a le plus aidé ? Rencontrer d'autres dyspraxiques ! Savoir que je n'étais pas seul a transformé ma vie. Nous sommes plus forts ensemble, capables de partager des astuces que seuls des dyspraxiques pouvaient inventer, de rire ensemble de situations que seuls nous pouvons comprendre.
            </p>
            <p>
              J'ai développé des façons efficaces d'expliquer ma dyspraxie: je compare mon cerveau à un "GPS qui recalcule souvent", j'utilise l'analogie du "système d'exploitation différent" qui fonctionne bien mais autrement.
            </p>
            <p className="text-center font-medium text-lg mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              Ce qui compte n'est pas notre niveau actuel mais notre progression. Je célèbre chaque micro-progrès plutôt que de me focaliser sur l'écart restant. Je me répète "pas encore" plutôt que "je n'y arrive pas".
            </p>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Geoffroy Streit - Mars 2003
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LettreDyspraxique;