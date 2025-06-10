import React from 'react';
import { ArrowLeft, Brain, Heart, Lightbulb, Target, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VieChaosOrganise: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
        <Card className="mb-8 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
              <Brain className="h-8 w-8 text-purple-600" />
              Ma vie en mode chaos organisé
            </CardTitle>
            <p className="text-center text-lg text-muted-foreground mt-2">
              Confessions d'un cerveau Dys/TDA/H
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Par Geoffroy S. - 2005 et des brouettes revu et corrigé en 2024
            </p>
          </CardHeader>
        </Card>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Chers amis aux cerveaux câblés différemment,
            </p>
            <p>
              Si vous lisez cette lettre, c'est peut-être que comme moi, vous avez parfois l'impression que votre esprit est un bureau où une tornade est passée – des papiers partout, des dossiers ouverts sans jamais être terminés, et une secrétaire qui a démissionné sans préavis.
            </p>
            <p>
              Bienvenue dans mon monde, celui d'un cerveau TDA/H avec quelques troubles dys pour pimenter le tout !
            </p>
            <p>
              J'ai longtemps hésité avant d'écrire ce témoignage. Non pas par honte – j'ai dépassé ce stade – mais plutôt parce que je n'arrivais pas à me décider sur COMMENT l'écrire. Ironie du sort pour quelqu'un qui a du mal à prendre des décisions, n'est-ce pas ? Et puis j'ai réalisé : pourquoi ne pas écrire exactement comme je pense ? Un peu chaotique, parfois drôle, souvent sincère, et toujours authentique.
            </p>
            <p>
              Alors voilà, je me lance dans cette aventure littéraire, avec l'espoir que mes expériences et les astuces que j'ai glanées au fil des années pourront peut-être vous aider à naviguer dans ce monde qui n'a pas été conçu pour nos cerveaux extraordinaires.
            </p>
          </CardContent>
        </Card>

        {/* Mon quotidien avec un cerveau en ébullition permanente */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Mon quotidien avec un cerveau en ébullition permanente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Le tourbillon des pensées</h3>
              <p className="mb-3">
                Je me réveille. Première pensée : "Je dois acheter du pain." Deuxième pensée : "Tiens, le pain me fait penser à cette boulangerie en Italie..." Troisième pensée : "L'Italie ! Il faut que je réserve mes vacances." Quatrième pensée : "Mais avant, je dois finir ce rapport pour le travail." Cinquième pensée : "Au fait, où ai-je mis mes clés hier soir ?"
              </p>
              <p className="mb-3">
                Tout ça en l'espace de... disons... 30 secondes ? Et encore, c'est un jour calme.
              </p>
              <p>
                Mon esprit est comme un navigateur internet avec 74 onglets ouverts en permanence, dont 3 qui jouent de la musique, mais je ne sais pas lesquels. Je commence une tâche, puis une idée surgit et me voilà parti sur une autre piste. Trois heures plus tard, je me retrouve à lire des articles sur l'élevage des alpagas au Pérou alors que je devais simplement envoyer un mail à mon patron.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">La mémoire qui fait des siennes</h3>
              <p className="mb-3">
                "Tu te souviens de ce qu'on a dit hier ?" me demande-t-on souvent. Non. Non, je ne m'en souviens pas.
              </p>
              <p className="mb-3">
                Par contre, je peux réciter par cœur les paroles d'une chanson que j'ai entendue une fois en 2008 dans un supermarché. Ma mémoire est sélective, capricieuse, et apparemment dotée d'un sens de l'humour douteux.
              </p>
              <p>
                Je pose mes lunettes quelque part et, cinq minutes plus tard, c'est comme si elles avaient été téléportées dans une dimension parallèle. Je cherche mon téléphone... en utilisant la lampe de mon téléphone pour éclairer sous le canapé. Oui, ça m'est déjà arrivé plus d'une fois.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">L'hypersensibilité aux stimuli</h3>
              <p className="mb-3">
                Le bruit du réfrigérateur, le tic-tac de l'horloge, l'étiquette de mon t-shirt qui gratte, la lumière trop vive, l'odeur du parfum de ma collègue... Tout est amplifié. TOUT.
              </p>
              <p>
                Travailler dans un open space ? Un véritable enfer. J'entends les conversations des autres, le bruit des claviers, le vrombissement de la climatisation, et mon cerveau traite toutes ces informations comme si elles avaient la même importance que la tâche sur laquelle je devrais me concentrer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Le concept du temps qui m'échappe</h3>
              <p className="mb-3">
                Pour moi, il n'existe que deux temporalités : "maintenant" et "pas maintenant".
              </p>
              <p className="mb-3">
                Si je suis absorbé par une activité qui m'intéresse, je peux rester concentré pendant des heures sans même remarquer que la nuit est tombée. C'est ce qu'on appelle l'hyperfocus, ce superpouvoir étrange qui ne se manifeste malheureusement que pour les choses qui me passionnent, rarement pour celles que je devrais faire.
              </p>
              <p>
                À l'inverse, cinq minutes passées à faire une tâche ennuyeuse me semblent durer une éternité. "Je vais juste ranger rapidement" peut se transformer en trois heures de réorganisation complète de ma bibliothèque, classée par couleur, puis par taille, puis... oups, j'ai oublié de manger.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">L'impulsivité et les montagnes russes émotionnelles</h3>
              <p className="mb-3">
                "Réfléchis avant d'agir." Plus facile à dire qu'à faire quand ton cerveau fonctionne plus vite que ta capacité à analyser les conséquences. J'achète des choses dont je n'ai pas besoin, je dis des choses que je regrette, je prends des décisions sur un coup de tête.
              </p>
              <p>
                Et les émotions ! Oh, les émotions... Elles sont intenses, elles sont brutes, elles sont... TOUT LE TEMPS LÀ. La joie devient de l'euphorie, la déception devient un drame existentiel, et la frustration peut me transformer en cocotte-minute prête à exploser.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Les stratégies qui m'ont sauvé */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Les stratégies qui m'ont sauvé (ou presque)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground mb-4">
              Au fil des années, j'ai développé un arsenal de techniques pour apprivoiser mon cerveau fantasque. Certaines fonctionnent bien, d'autres sont encore en phase d'expérimentation, mais toutes m'aident à avancer.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">1. Mon système de vie externalisé</h3>
              <p className="mb-3">
                J'ai appris que je ne pouvais pas faire confiance à ma mémoire, alors j'ai externalisé pratiquement tout ce que je peux :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Des listes. Partout. Pour tout. Courses, tâches, idées, projets... Si ce n'est pas écrit, ça n'existe pas.</li>
                <li>Un agenda détaillé avec des rappels programmés 1 heure, puis 30 minutes avant chaque rendez-vous (parce qu'un seul rappel ne suffit pas).</li>
                <li>Des routines strictes pour les tâches quotidiennes. Mes clés ont une place dédiée, mon portefeuille aussi, et malheur à moi si je les pose ailleurs.</li>
                <li>Des applications de gestion de tâches qui me permettent de tout noter dès que l'idée me vient. Mon téléphone est devenu une extension de mon cerveau.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">2. L'organisation de mon environnement</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Un espace de travail minimaliste. Moins il y a d'objets visibles, moins mon attention est détournée. (Bon, en théorie du moins, la pratique est plus... compliquée.)</li>
                <li>Des écouteurs à réduction de bruit, mon investissement le plus précieux pour me couper des distractions sonores.</li>
                <li>Des codes couleurs pour mes dossiers, mes cahiers, mes vêtements même. Le visuel m'aide à retrouver les choses plus facilement.</li>
                <li>Des limites de temps pour chaque tâche, avec une alarme qui sonne pour me rappeler de passer à autre chose (sinon je pourrais rester bloqué sur un détail pendant des heures).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">3. La gestion de mon énergie mentale</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La technique Pomodoro : 25 minutes de travail, 5 minutes de pause. Simple, efficace, et adaptable à mon niveau d'énergie du jour.</li>
                <li>Des pauses régulières pour laisser mon cerveau vagabonder légitimement, sans culpabilité. J'ai appris que lutter contre sa nature est épuisant.</li>
                <li>Un journal de bord pour décharger toutes ces pensées qui tournent en boucle. Écrire, c'est comme faire un Ctrl+S de mon disque dur mental, ça libère de l'espace.</li>
                <li>L'activité physique quotidienne, même minime. Rien de tel qu'une bonne course à pied pour calmer le chaos neuronal.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">4. L'acceptation de mon fonctionnement différent</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>J'exploite mes périodes d'hyperfocus au lieu de les combattre. Quand je sens que je suis dans "la zone", j'en profite à fond.</li>
                <li>J'ai appris à dire non aux situations que je sais être des déclencheurs de stress ou de surcharge sensorielle.</li>
                <li>Je communique ouvertement avec mon entourage sur mes difficultés. "Ce n'est pas que je m'en fiche, c'est que mon cerveau fonctionne différemment."</li>
                <li>Je célèbre mes petites victoires, parce que ce qui paraît simple pour d'autres peut être un véritable défi pour moi.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">5. Les outils technologiques qui me sauvent la vie</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Des rappels vocaux plutôt qu'écrits, car ma mémoire auditive est meilleure.</li>
                <li>Des cartes mentales pour organiser mes idées quand elles partent dans tous les sens.</li>
                <li>Des applications de méditation guidée pour m'aider à me recentrer quand tout devient trop.</li>
                <li>Des enregistrements audio pour les informations importantes, car je retiens mieux ce que j'entends que ce que je lis.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Ce que j'aimerais que vous sachiez */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              Ce que j'aimerais que vous sachiez
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Si vous êtes comme moi, j'aimerais vous dire ceci : vous n'êtes pas "cassé", vous êtes juste différent. Votre cerveau est une Ferrari dans un monde de Fiat – plus puissant, mais consommant plus de carburant et nécessitant un entretien spécifique.
            </p>
            <p>
              Si vous aimez quelqu'un comme moi, sachez que :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Si j'oublie votre anniversaire, ce n'est pas par manque d'amour.</li>
              <li>Si je vous coupe la parole, ce n'est pas par impolitesse, c'est parce que j'ai peur d'oublier mon idée si je ne la dis pas immédiatement.</li>
              <li>Si je semble distrait pendant que vous me parlez, je vous assure que je vous écoute, même si mes yeux suivent ce chat qui passe par la fenêtre.</li>
              <li>Si mon humeur change rapidement, ce n'est pas de votre faute, c'est juste mon cerveau qui surréagit à tout.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              En conclusion : Célébrons nos superpouvoirsss !
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nos cerveaux atypiques ont aussi leurs avantages ! Nous sommes souvent créatifs, intuitifs, capables de faire des connexions que d'autres ne voient pas. Nous pouvons être passionnés, enthousiastes, empathiques.
            </p>
            <p>
              J'ai appris à voir mon TDA/H et mes troubles dys non pas comme des handicaps, mais comme une façon différente d'être au monde. Oui, c'est parfois épuisant. Oui, il y a des jours où j'aimerais pouvoir éteindre mon cerveau, ne serait-ce que pour cinq minutes de calme. Mais c'est aussi ce qui fait de moi... moi.
            </p>
            <p>
              Alors à tous mes compagnons aux cerveaux tourbillonnants, je lève mon mug de café (la troisième tasse de la matinée, évidemment) et je vous dis : nous sommes extraordinaires, dans tous les sens du terme. Continuons à trouver nos propres chemins dans ce monde qui n'a pas été pensé pour nous, et peut-être qu'en cours de route, nous pourrons lui apprendre une chose ou deux sur la beauté du chaos.
            </p>
            <p className="text-center font-medium text-lg mt-6">
              Avec toute mon empathie désorganisée,<br />
              Un cerveau atypique qui fait de son mieux
            </p>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Geoffroy S. - 2005 et des brouettes revu et corrigé en 2024
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VieChaosOrganise;