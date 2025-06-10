import React from 'react';
import { ArrowLeft, Brain, Users, Lightbulb, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

/**
 * Component for displaying the "Reflexion Structuree" document
 * Shows content about why neurodivergent minds struggle to structure their thoughts
 */
const ReflexionStructuree: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Handle navigation back to resources page
   */
  const handleBack = () => {
    navigate(ROUTES.RESSOURCES.INDEX);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux ressources
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                La pensée en ébullition
              </h1>
              <p className="text-gray-600 mt-1">
                Pourquoi certains esprits neurodivergents peinent à structurer leurs idées
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Author and date info */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">GS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Geoffroy Streit</p>
                <p className="text-sm text-gray-600">2021 - revu et corrigé en 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Target className="w-4 h-4" />
              <span>Document de référence</span>
            </div>
          </div>
        </div>

        {/* Article content */}
        <article className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-8 prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg leading-relaxed text-gray-700">
                De nombreuses personnes neuroatypiques, notamment celles présentant un Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDA/H), un Trouble du Spectre de l'Autisme (TSA) ou des troubles "dys" (dyslexie, dyspraxie, dysphasie), éprouvent des difficultés significatives à structurer leurs pensées et à mener leurs réflexions à leur terme. Loin d'être un signe de manque d'intelligence, ce phénomène s'explique par des fonctionnements cognitifs distincts, propres à chaque profil.
              </p>
            </div>

            {/* TDA/H Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Le TDA/H : Une pensée en arborescence et des fonctions exécutives en première ligne
                </h2>
              </div>
              
              <p className="mb-4">
                Les personnes avec un TDA/H sont souvent décrites comme ayant une "pensée en arborescence". Une idée en entraîne une multitude d'autres, créant un réseau complexe et foisonnant mais rendant difficile le suivi d'un fil de pensée linéaire. Cette particularité, bien que source de créativité, peut mener à une sensation de chaos mental et à des difficultés à hiérarchiser et finaliser les réflexions.
              </p>
              
              <p className="mb-4">
                Cette difficulté est principalement due à un déficit des fonctions exécutives, un ensemble de processus mentaux de haut niveau qui agissent comme le "chef d'orchestre" du cerveau. Celles-ci incluent :
              </p>
              
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <ul className="space-y-3 m-0">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>La planification et l'organisation :</strong> La capacité à décomposer une tâche complexe en étapes, à organiser les idées de manière logique et à anticiper les besoins futurs est souvent altérée.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>La mémoire de travail :</strong> Retenir et manipuler des informations sur une courte période est un défi. Il peut être compliqué de se souvenir du début d'une idée une fois arrivé à la fin d'une phrase.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>L'inhibition :</strong> La difficulté à filtrer les pensées non pertinentes et les distractions externes ou internes (d'autres idées qui surgissent) perturbe la concentration sur une seule ligne de raisonnement.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>L'initiation de la tâche :</strong> Le simple fait de commencer une réflexion structurée peut représenter un obstacle majeur.
                    </div>
                  </li>
                </ul>
              </div>
              
              <p>
                Ainsi, le profil TDA/H est l'un des plus sujets à la pensée désorganisée et à l'incapacité d'aller au bout d'un raisonnement complexe, non par manque de capacité, mais par une difficulté à canaliser et à gérer le flux constant d'informations et d'idées.
              </p>
            </section>

            {/* TSA Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Le TSA : Une structure de pensée singulière et un traitement de l'information différent
                </h2>
              </div>
              
              <p className="mb-4">
                Les personnes autistes présentent une structure cognitive qui leur est propre. Leurs difficultés à organiser leurs pensées ne proviennent pas nécessairement d'un "désordre", mais d'une manière différente de traiter l'information. Plusieurs facteurs peuvent l'expliquer :
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <ul className="space-y-3 m-0">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Une pensée souvent rigide ou axée sur les détails :</strong> La pensée autistique peut être caractérisée par une forte focalisation sur les détails (pensée par le détail ou "bottom-up"), ce qui peut rendre difficile la synthèse et la vision d'ensemble nécessaires à la structuration d'une réflexion globale.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Des difficultés avec la "Théorie de l'Esprit" :</strong> La capacité à comprendre et à anticiper les pensées, les intentions et les perspectives des autres peut être altérée. Cela peut se manifester dans la difficulté à structurer un discours ou une argumentation en tenant compte du point de vue de l'interlocuteur.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Un traitement de l'information littéral et un besoin de règles explicites :</strong> L'implicite et les concepts abstraits peuvent être difficiles à appréhender, ce qui complique la navigation dans des réflexions qui ne sont pas basées sur des faits concrets et des règles claires.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Une charge cognitive et sensorielle :</strong> Une hypersensibilité sensorielle et une gestion de l'anxiété peuvent mobiliser une grande partie des ressources cognitives, laissant moins d'énergie disponible pour des tâches complexes comme la structuration de la pensée.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Troubles DYS Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Les troubles "dys" : L'impact de la surcharge cognitive et des difficultés spécifiques
                </h2>
              </div>
              
              <p className="mb-4">
                Pour les personnes présentant des troubles "dys", les difficultés de structuration de la pensée sont souvent une conséquence indirecte de leurs défis spécifiques :
              </p>
              
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <ul className="space-y-4 m-0">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>La Dysphasie :</strong> Ce trouble du langage oral affecte directement la capacité à formuler des phrases et à organiser un discours. La difficulté à trouver les mots et à construire une syntaxe correcte est souvent le reflet d'une difficulté sous-jacente à structurer la pensée elle-même.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>La Dyslexie :</strong> Bien que principalement un trouble de la lecture et de l'écriture, la dyslexie peut entraîner une surcharge cognitive importante. L'effort constant requis pour décoder le langage écrit peut épuiser les ressources mentales nécessaires à l'organisation des idées. Cependant, il est à noter que les personnes dyslexiques développent souvent des forces en matière de pensée holistique, créative et visuelle.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>La Dyspraxie :</strong> Ce trouble de la planification et de la coordination des gestes peut également affecter la planification des pensées. L'automatisation des séquences, qu'elles soient motrices ou cognitives, est un défi. Organiser ses idées peut alors être perçu comme une tâche nécessitant une planification consciente et laborieuse.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Profils les plus touchés : Une question de combinaisons et d'intensité
              </h2>
              
              <p className="mb-4">
                Il est difficile de désigner une seule catégorie de neurodiversité comme étant la plus affectée. Le TDA/H est sans doute le trouble où la difficulté à structurer sa pensée est la plus centrale et la plus fréquemment décrite, en raison de l'atteinte directe des fonctions exécutives.
              </p>
              
              <p className="mb-6">
                Cependant, la réalité est souvent plus complexe, avec de fréquents chevauchements entre ces troubles. Une personne peut être à la fois TDA/H et autiste (parfois appelé "AuDHD"), ou présenter un TDA/H avec une dyslexie. Dans ces cas, les difficultés peuvent s'additionner et se manifester de manière unique et intense.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="m-0 font-medium text-gray-800">
                  <strong>En conclusion,</strong> la difficulté à structurer ses pensées et à aller au bout de ses réflexions chez les personnes neurodivergentes est un enjeu réel et souvent invisible. Elle n'est pas le fruit d'une paresse ou d'un manque de volonté, mais la conséquence directe de fonctionnements cérébraux atypiques. Comprendre ces mécanismes est essentiel pour proposer un accompagnement adapté et pour reconnaître la richesse et la diversité de ces formes de pensée.
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* Navigation footer */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux ressources
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReflexionStructuree;