import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedCollapsibleSection from '../../components/ui/OptimizedCollapsibleSection';
import OptimizedTooltip from '../../components/ui/OptimizedTooltip';
import { ArrowLeft, Brain, Lightbulb, Target, Zap, Users, BookOpen, Smartphone, Gamepad2, Map, Mic, PenTool, Eye, Clock, Star, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * NavigationLabyrintheIdees Component
 * 
 * Displays the "Guide Pratique : Naviguer dans le Labyrinthe des Idées" article
 * as an in-app page with modern design and interactive elements.
 * 
 * Features:
 * - Structured content with clear sections
 * - Visual icons and animations
 * - Professional typography and spacing
 * - Responsive design
 * - Author information and development note
 */
const NavigationLabyrintheIdees: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const handleBackClick = useCallback(() => {
    navigate('/ressources');
  }, [navigate]);

  const toggleSection = useCallback((id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-neuro-purple hover:text-neuro-blue transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Retour aux ressources
          </button>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-neuro-purple to-neuro-blue rounded-xl">
                <Map className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  Guide Pratique : Naviguer dans le Labyrinthe des Idées
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  Pour les esprits foisonnants qui peinent à structurer leurs pensées et à retenir l'essentiel
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Geoffroy Streit
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                2021 - revu et corrigé en 2025
              </span>
            </div>
          </div>
        </motion.div>

        {/* Development Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
            <div className="flex items-start gap-3">
              <Sparkles className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Développement en cours</h3>
                <p className="text-indigo-800 leading-relaxed">
                  L'auteur développe actuellement une suite d'applications gratuites et faciles d'accès 
                  pour répondre concrètement à ces problématiques. Ces outils numériques viendront 
                  compléter les stratégies présentées dans ce guide pour offrir un accompagnement 
                  pratique aux personnes neurodivergentes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Préambule enrichi */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neuro-purple mb-4">
                🧠 Préambule : Quand Votre Cerveau Joue à Cache-Cache avec Vos Idées
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bienvenue dans l'univers fascinant (et parfois frustrant) de la pensée neurodivergente ! 
                Ici, nous allons démystifier pourquoi votre cerveau semble parfois avoir sa propre logique... 🎭
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">L'Analogie du Jongleur Distrait 🤹‍♂️</h3>
                  <p className="text-blue-800 text-lg">
                    Imaginez un jongleur talentueux qui doit jongler avec 5 balles tout en construisant une tour de Jenga. 
                    Sauf que parfois, il regarde passer un papillon et... POUF ! Tout s'écroule !
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-3">Dans votre cerveau, ça donne :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-blue-800"><strong>Les balles =</strong> Vos idées brillantes</p>
                    <p className="text-blue-800"><strong>La tour de Jenga =</strong> Votre raisonnement structuré</p>
                    <p className="text-blue-800"><strong>Le papillon =</strong> Cette notification, ce bruit, cette pensée parasite</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700 italic">
                      "Alors, où j'en étais déjà ? Ah oui, je parlais de... euh... 🤔"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900">Quand Tout Roule 🚗💨</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-800 font-semibold mb-1">🎯 Focus Laser</p>
                    <p className="text-green-700 text-sm">Vos idées s'enchaînent comme des dominos parfaitement alignés</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-800 font-semibold mb-1">🔗 Connexions Magiques</p>
                    <p className="text-green-700 text-sm">Votre cerveau fait des liens que même Einstein envierait</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-800 font-semibold mb-1">🏗️ Architecture Mentale</p>
                    <p className="text-green-700 text-sm">Vos raisonnements se construisent comme des cathédrales</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 p-2 rounded-full mr-3">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900">Quand Ça Déraille 🚂💥</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                    <p className="text-red-800 font-semibold mb-1">🌪️ Tornade Mentale</p>
                    <p className="text-red-700 text-sm">"Qu'est-ce que je disais déjà ? Ah oui... non, en fait..."</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                    <p className="text-red-800 font-semibold mb-1">🧩 Puzzle Impossible</p>
                    <p className="text-red-700 text-sm">Les pièces de votre réflexion jouent à cache-cache</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                    <p className="text-red-800 font-semibold mb-1">☁️ Brouillard Cérébral</p>
                    <p className="text-red-700 text-sm">Sensation d'avoir la tête dans du coton... épais</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-yellow-300">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900 mb-3">🎯 Mission de ce Guide</h3>
                  <p className="text-yellow-800 text-lg mb-4">
                    Transformer votre cerveau "rebelle" en allié de choc ! Nous allons vous donner les clés pour :
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-1">🔧 Réparer</p>
                      <p className="text-yellow-700 text-sm">Les fuites de votre mémoire de travail</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-1">🏗️ Construire</p>
                      <p className="text-yellow-700 text-sm">Des structures de pensée solides</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-1">🚀 Optimiser</p>
                      <p className="text-yellow-700 text-sm">Votre potentiel créatif unique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partie 1 enrichie */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neuro-purple mb-4">
                🏗️ Partie 1 : La Fondation - Externaliser sa Pensée pour Libérer sa Mémoire
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                L'objectif est de sortir les idées de votre tête le plus vite et le plus fidèlement possible, 
                sans filtre ni jugement. Pensez "déménagement mental" ! 📦➡️🧠
              </p>
            </div>

            <div className="space-y-8">
              {/* Brain Dumping enrichi */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">1. La "Vidange Cérébrale" (Brain Dumping) 🧠💨</h3>
                    <p className="text-green-800 text-lg">
                      C'est la technique la plus fondamentale. L'idée est de créer un réceptacle externe pour vos pensées. 
                      Imaginez que vous videz un tiroir en bazar... mais en version cerveau ! 🗂️
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-6 border-2 border-green-300">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Principe de Base :
                  </h4>
                  <p className="text-green-700 leading-relaxed">
                    Sur une feuille de papier, un tableau blanc ou un document numérique (Notion, OneNote, etc.), 
                    écrivez absolument TOUT ce qui vous passe par la tête concernant votre sujet de réflexion. 
                    Même "j'ai soif" ou "tiens, un oiseau" ! 🐦
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">🌪️</span>
                      <h5 className="font-bold text-green-900">En Vrac Total</h5>
                    </div>
                    <p className="text-sm text-green-700 leading-relaxed">
                      Ne vous souciez ni de l'ordre, ni de la grammaire, ni de la pertinence. 
                      C'est le moment d'être un rebelle de l'organisation ! 😈
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">🚫</span>
                      <h5 className="font-bold text-green-900">Sans Jugement</h5>
                    </div>
                    <p className="text-sm text-green-700 leading-relaxed">
                      L'objectif n'est pas de produire un texte parfait, mais de vider votre charge mentale. 
                      Votre critique intérieur peut aller boire un café ! ☕
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">✨</span>
                      <h5 className="font-bold text-green-900">Le Résultat Magique</h5>
                    </div>
                    <p className="text-sm text-green-700 leading-relaxed">
                      Votre cerveau n'a plus à lutter pour tout retenir, il peut enfin passer à l'organisation. 
                      Libération garantie ! 🕊️
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
                  <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎬</span>
                    Exemple Pratique : "Mission Vacances" (version brute)
                  </h4>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <p className="text-yellow-800 italic mb-2 font-semibold">"Sujet : Organiser mes vacances"</p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-yellow-700 text-sm leading-relaxed">
                        Réserver hôtel - vérifier passeport - acheter crème solaire SPF combien déjà ? - 
                        prévenir voisins - arrêter journal - réserver restaurant le bon ou l'autre ? - 
                        faire valises mais lesquelles - check-in en ligne 24h avant noter ça où - 
                        télécharger cartes offline - batterie externe - chargeur - adaptateur - 
                        prendre RDV vétérinaire pour le chat - vider frigo - payer factures avant départ - 
                        ah et l'assurance voyage ? - prévenir banque - retirer espèces - 
                        vérifier météo - lunettes de soleil où elles sont ? - 
                        livre pour l'avion - playlist - écouteurs...
                      </p>
                    </div>
                    <p className="text-yellow-600 text-xs mt-2 italic">
                      ↑ Voilà ! Tout est sorti, même le chaos. Maintenant on peut respirer et organiser ! 😮‍💨
                    </p>
                  </div>
                </div>
              </div>

              {/* Dictée Vocale enrichie */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-2">2. La Dictée Vocale : Quand Votre Bouche Va Plus Vite Que Vos Doigts 🗣️💨</h3>
                    <p className="text-purple-800 text-lg">
                      Pour beaucoup, la pensée est plus rapide et instinctive que la vitesse de frappe ou d'écriture. 
                      C'est comme avoir un robinet à idées... mais qui coule plus vite que votre capacité à remplir le seau ! 🚰💭
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-6 border-2 border-purple-300">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎙️</span>
                    Principe de la "Radio Cerveau" :
                  </h4>
                  <p className="text-purple-700 leading-relaxed">
                    Utiliser la fonction dictaphone de votre téléphone ou un logiciel de transcription pour parler 
                    de votre idée, comme si vous l'expliquiez à votre meilleur ami... ou à votre chat ! 🐱 
                    L'important c'est de PARLER, pas d'être éloquent.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-purple-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">🎬</span>
                      <h5 className="font-bold text-purple-900">La Méthode "Action !"</h5>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-700">
                          <strong>1. Appuyez sur REC</strong> 🔴<br/>
                          Ouvrez une note vocale ou un enregistreur
                        </p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-700">
                          <strong>2. Parlez naturellement</strong> 💬<br/>
                          "Alors, mon projet c'est...", "Le problème que j'ai c'est..."
                        </p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-700">
                          <strong>3. Posez-vous des questions</strong> ❓<br/>
                          "Mais au fait, pourquoi je veux faire ça ?"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border-l-4 border-purple-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">🦸‍♀️</span>
                      <h5 className="font-bold text-purple-900">Super-Pouvoir Débloqué</h5>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                      <p className="text-purple-800 font-semibold mb-2">L'Avantage Magique :</p>
                      <p className="text-purple-700 text-sm leading-relaxed">
                        Même si au bout de la phrase vous avez oublié le début (classique !), 
                        l'enregistrement, lui, sera complet. C'est comme avoir une mémoire externe 
                        qui ne bugge jamais ! 🧠💾
                      </p>
                    </div>
                    
                    <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        <strong>💡 Astuce Pro :</strong> Utilisez la transcription automatique de votre téléphone. 
                        Même avec des erreurs, ça vous donne une base écrite à corriger !
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-300">
                  <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎭</span>
                    Exemple : "Monologue Intérieur" vs "Radio Cerveau"
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                        <span className="text-lg">😵‍💫</span>
                        Dans ma tête (le chaos)
                      </h5>
                      <p className="text-red-700 text-sm italic">
                        "Projet... euh... présentation... slides... non attends... public... combien... 
                        ah oui budget... mais d'abord... qu'est-ce que je disais déjà ?"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <span className="text-lg">🎙️</span>
                        En mode vocal (la clarté)
                      </h5>
                      <p className="text-green-700 text-sm">
                        "Bon alors, je dois faire une présentation pour vendre mon projet. 
                        Le public c'est des investisseurs, donc il faut que je parle budget et rentabilité..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partie 2 */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neuro-purple mb-6 flex items-center gap-2">
              <Eye className="h-6 w-6" />
              Partie 2 : L'Atelier d'Organisation - Structurer le Chaos
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              Une fois vos idées externalisées, il faut les organiser. C'est là que la magie opère.
            </p>

            <div className="space-y-8">
              {/* Laboratoire Visuel enrichi */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-2">3. Le Laboratoire Visuel et Itératif : Votre Cerveau en Mode "Artiste Fou" 🎨🔬</h3>
                    <p className="text-orange-800 text-lg">
                      Certains cerveaux neurodivergents sont des machines visuelles ! Si votre tête fonctionne 
                      comme un film plutôt qu'un livre, cette section est votre terrain de jeu ! 🎬✨
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-6 border-2 border-orange-300">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🧩</span>
                    Principe du "Puzzle Mental Géant" :
                  </h4>
                  <p className="text-orange-700 leading-relaxed">
                    Imaginez que vos idées soient des pièces de puzzle colorées qui flottent dans l'espace. 
                    Au lieu de les garder dans votre tête (où elles se cognent et tombent), 
                    vous les posez sur une table géante pour voir le tableau d'ensemble ! 🧩🌈
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-orange-400">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-2">🛠️</span>
                      <h5 className="font-bold text-orange-900">La Boîte à Outils du Génie Visuel</h5>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h6 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                          <span className="text-lg">🗺️</span>
                          Mind Maps (Cartes Mentales)
                        </h6>
                        <p className="text-orange-700 text-sm mb-2">Comme un arbre de Noël pour vos idées !</p>
                        <div className="text-xs text-orange-600">
                          <strong>Outils :</strong> XMind, MindMeister, ou même du papier + crayons
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h6 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                          <span className="text-lg">📋</span>
                          Tableaux Kanban
                        </h6>
                        <p className="text-orange-700 text-sm mb-2">"À faire", "En cours", "Fini" - Simple et efficace !</p>
                        <div className="text-xs text-orange-600">
                          <strong>Outils :</strong> Trello, Notion, ou des colonnes sur papier
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h6 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                          <span className="text-lg">🎨</span>
                          Schémas & Dessins
                        </h6>
                        <p className="text-orange-700 text-sm mb-2">Même vos gribouillis ont du génie !</p>
                        <div className="text-xs text-orange-600">
                          <strong>Outils :</strong> Draw.io, Excalidraw, ou le dos d'une enveloppe
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h6 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                          <span className="text-lg">🌈</span>
                          Post-its Colorés
                        </h6>
                        <p className="text-orange-700 text-sm mb-2">L'arme secrète de tout cerveau créatif !</p>
                        <div className="text-xs text-orange-600">
                          <strong>Astuce :</strong> Une couleur = un type d'idée
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border-l-4 border-orange-400">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-2">🚀</span>
                      <h5 className="font-bold text-orange-900">Les Super-Pouvoirs Visuels</h5>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex items-center mb-1">
                          <span className="text-lg mr-2">👁️</span>
                          <h6 className="font-semibold text-green-900">Vision Satellite</h6>
                        </div>
                        <p className="text-green-700 text-sm">Voir TOUT d'un coup, comme Google Earth pour vos idées</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex items-center mb-1">
                          <span className="text-lg mr-2">🔄</span>
                          <h6 className="font-semibold text-blue-900">Réorganisation Express</h6>
                        </div>
                        <p className="text-blue-700 text-sm">Glisser-déposer vos idées comme des fichiers sur un bureau</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <div className="flex items-center mb-1">
                          <span className="text-lg mr-2">💡</span>
                          <h6 className="font-semibold text-purple-900">Boost Créatif</h6>
                        </div>
                        <p className="text-purple-700 text-sm">Les couleurs et formes stimulent votre imagination</p>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex items-center mb-1">
                          <span className="text-lg mr-2">🧠</span>
                          <h6 className="font-semibold text-yellow-900">Mémoire Renforcée</h6>
                        </div>
                        <p className="text-yellow-700 text-sm">Votre cerveau retient mieux ce qu'il "voit"</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-2 border-pink-300">
                  <h4 className="font-bold text-pink-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🎭</span>
                    Exemple Pratique : "Mission Vacances" en Mode Visuel
                  </h4>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                        AVANT le départ
                      </h5>
                      <div className="space-y-2">
                        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">✈️ Réserver vol</div>
                        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">🏨 Réserver hôtel</div>
                        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">📄 Vérifier passeport</div>
                        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">💳 Prévenir banque</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                        PRÉPARATIFS
                      </h5>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-2 rounded text-xs text-green-800">🎒 Faire valises</div>
                        <div className="bg-green-50 p-2 rounded text-xs text-green-800">☀️ Acheter crème solaire</div>
                        <div className="bg-green-50 p-2 rounded text-xs text-green-800">📱 Télécharger apps</div>
                        <div className="bg-green-50 p-2 rounded text-xs text-green-800">🔋 Préparer chargeurs</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                      <h5 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                        <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                        MAISON
                      </h5>
                      <div className="space-y-2">
                        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800">🐱 RDV vétérinaire</div>
                        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800">🏠 Prévenir voisins</div>
                        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800">📰 Arrêter journal</div>
                        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800">🌱 Système arrosage</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-white p-4 rounded-lg border border-pink-200">
                    <p className="text-pink-800 text-sm">
                      <strong>🎯 Résultat :</strong> D'un coup d'œil, vous voyez où vous en êtes ! 
                      Plus de "j'ai oublié quelque chose" qui vous réveille à 3h du matin ! 😴✨
                    </p>
                  </div>
                </div>
              </div>

              {/* Chaîne de Pensée */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  4. La "Chaîne de Pensée" : Votre GPS Mental 🧭
                </h3>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-orange-800 mb-3">
                    <strong>🔗 L'Analogie du Détective :</strong> Imaginez que votre cerveau soit un détective qui suit des indices. 
                    Chaque question est un indice qui mène au suivant, créant une chaîne logique jusqu'à la résolution du mystère !
                  </p>
                  <p className="text-orange-700 text-sm italic">
                    💡 Parfait pour les cerveaux qui ont tendance à "sauter du coq à l'âne" - cette technique vous garde sur les rails !
                  </p>
                </div>

                <OptimizedCollapsibleSection 
                  id="chainOfThought"
                  title="🎯 La Méthode du Détective en Action"
                  icon={Target}
                  defaultExpanded={false}
                >
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-4">
                      <h5 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                        🕵️ Mission : Organiser un Événement
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border-l-4 border-orange-400">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">🔍</div>
                          <div>
                            <p className="text-orange-800 font-medium">Indice de départ :</p>
                            <p className="text-orange-700">"Je dois organiser un événement."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border-l-4 border-orange-400">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">❓</div>
                          <div>
                            <p className="text-orange-800 font-medium">Question-indice :</p>
                            <p className="text-orange-700">"Quel est le BUT de cet événement ?"</p>
                            <p className="text-orange-600 text-sm">→ Découverte : "Célébrer le lancement du produit X"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border-l-4 border-orange-400">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">👥</div>
                          <div>
                            <p className="text-orange-800 font-medium">Nouvel indice :</p>
                            <p className="text-orange-700">"QUI devons-nous inviter ?"</p>
                            <p className="text-orange-600 text-sm">→ Découverte : "Clients, partenaires, presse"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border-l-4 border-green-400">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">🎉</div>
                          <div>
                            <p className="text-green-800 font-medium">Mystère résolu !</p>
                            <p className="text-green-700">"Événement de lancement produit X pour 50 invités VIP"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h5 className="font-semibold text-orange-900 mb-3">🧰 Votre Trousse de Détective Mental :</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3">
                          <h6 className="font-medium text-orange-800 mb-2">🔍 Questions Magiques :</h6>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• "Pourquoi ?" (le but)</li>
                            <li>• "Qui ?" (les acteurs)</li>
                            <li>• "Quand ?" (le timing)</li>
                            <li>• "Comment ?" (la méthode)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h6 className="font-medium text-orange-800 mb-2">⚡ Super-Pouvoirs :</h6>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Évite les oublis importants</li>
                            <li>• Structure automatiquement</li>
                            <li>• Révèle les liens cachés</li>
                            <li>• Garde le focus</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OptimizedCollapsibleSection>
                
                <OptimizedTooltip id="pro-tip" content="Astuce : Commencez toujours par 'Pourquoi ?' - c'est la question qui débloque tout le reste !">
                  <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-300 cursor-help">
                    <p className="text-orange-800 text-sm font-medium flex items-center gap-2">
                      💡 Conseil de Pro : La question magique qui débloque tout !
                      <span className="text-xs">(survolez pour découvrir)</span>
                    </p>
                  </div>
                </OptimizedTooltip>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partie 3 */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neuro-purple mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              Partie 3 : Consolider les Acquis - Techniques de Mémorisation Active
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              Même avec des notes, il faut parfois garder des éléments clés en tête.
            </p>

            <div className="space-y-8">
              {/* Palais Mental */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  5. Le Palais Mental : Une Technique Puissante mais Exigeante
                </h3>
                <p className="text-indigo-800 mb-4">
                  Associer des informations à mémoriser à des lieux ou des objets dans un endroit que vous connaissez parfaitement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Adapté pour
                    </h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Listes d'éléments structurés</li>
                      <li>• Étapes d'un discours</li>
                      <li>• Points clés d'une présentation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      Moins adapté pour
                    </h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Phase créative et chaotique</li>
                      <li>• Outil de stockage, pas de création</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Aides Rapides */}
              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-6 border border-teal-200">
                <h3 className="text-xl font-semibold text-teal-900 mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  6. Aides à la Mémorisation Rapides
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-teal-900 mb-2">Images Mentales</h5>
                    <p className="text-sm text-teal-700">
                      Associez un concept abstrait à une image absurde, drôle ou émotionnellement forte.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-teal-900 mb-2">Analogies</h5>
                    <p className="text-sm text-teal-700">
                      Reliez une nouvelle idée à quelque chose que vous connaissez déjà très bien.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-teal-900 mb-2">Acronymes</h5>
                    <p className="text-sm text-teal-700">
                      Créez un mot avec la première lettre de chaque élément d'une liste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partie 4 */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neuro-purple mb-6 flex items-center gap-2">
              <Smartphone className="h-6 w-6" />
              Partie 4 : L'Allié Moderne - Utiliser l'Intelligence Artificielle et la Technologie
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              L'IA peut agir comme un co-pilote pour votre pensée.
            </p>

            <div className="space-y-8">
              {/* IA Assistant */}
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 border border-violet-200">
                <h3 className="text-xl font-semibold text-violet-900 mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  L'IA : Votre Assistant Personnel Ultra-Intelligent 🤖✨
                </h3>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-violet-800 mb-3">
                    <strong>🎭 L'Analogie du Majordome Magique :</strong> Imaginez avoir un majordome qui ne dort jamais, 
                    comprend instantanément vos pensées en vrac et les transforme en plans parfaitement organisés !
                  </p>
                  <p className="text-violet-700 text-sm italic">
                    💫 L'IA ne juge pas votre chaos mental - elle l'adore et le transforme en chef-d'œuvre !
                  </p>
                </div>

                <OptimizedCollapsibleSection 
                  id="aiMagicCollapsible"
                  icon={Zap} // Placeholder icon, consider changing to a more relevant one
                  title="🎪 Le Spectacle de Transformation Magique"
                >
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-4">
                      <h5 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
                        🎩 Formules Magiques pour votre Majordome IA :
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border-l-4 border-violet-400">
                          <h6 className="font-medium text-violet-800 mb-2">🔮 Sorts de Clarification :</h6>
                          <ul className="text-sm text-violet-700 space-y-1">
                            <li>• "Résume ce chaos en 5 points clés"</li>
                            <li>• "Trouve la logique cachée dans ce texte"</li>
                            <li>• "Transforme ce brouillon en plan détaillé"</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                          <h6 className="font-medium text-purple-800 mb-2">⚡ Sorts d'Organisation :</h6>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• "Regroupe ces idées par thèmes"</li>
                            <li>• "Propose une suite logique"</li>
                            <li>• "Crée un plan d'action étape par étape"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-violet-50 rounded-lg p-4">
                      <h5 className="font-semibold text-violet-900 mb-3">🎯 Exemple de Transformation Magique :</h5>
                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                          <h6 className="font-medium text-red-800 mb-2">😵 Avant (Chaos Total) :</h6>
                          <p className="text-sm text-red-700 italic">
                            "Faut que je fasse le rapport mais j'ai oublié les chiffres de Marie et puis il y a la réunion demain 
                            ah et aussi appeler le client pour le truc urgent..."
                          </p>
                        </div>
                        <div className="text-center">
                          <span className="text-2xl">✨🪄✨</span>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                          <h6 className="font-medium text-green-800 mb-2">🎉 Après (Ordre Parfait) :</h6>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>1. Contacter Marie pour les chiffres</li>
                            <li>2. Appeler le client urgent</li>
                            <li>3. Rédiger le rapport avec les données</li>
                            <li>4. Préparer la présentation pour demain</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OptimizedCollapsibleSection>
              </div>

              {/* Outils Technologiques */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Votre Équipe de Super-Héros Technologiques 🦸‍♂️📱
                </h3>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-cyan-800 mb-3">
                    <strong>🦸 L'Analogie des Avengers du Temps :</strong> Chaque app est un super-héros avec un pouvoir unique. 
                    Ensemble, ils forment votre équipe personnelle pour vaincre le chaos et sauver votre productivité !
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptimizedTooltip id="todoist-tip" content="Todoist et Motion sont comme Iron Man - ils analysent tout et créent des plans parfaits!">
                    <div className="bg-white rounded-lg p-4 border border-cyan-200 hover:border-cyan-400 transition-colors cursor-help">
                      <h5 className="font-semibold text-cyan-900 mb-2 flex items-center gap-2">
                        🤖 Iron Man des To-Do Lists
                      </h5>
                      <p className="text-sm text-cyan-700">
                        <strong>Todoist/Motion :</strong> Analysent vos tâches, prédisent le temps nécessaire et 
                        organisent votre journée comme un génie milliardaire !
                      </p>
                    </div>
                  </OptimizedTooltip>
                  
                  <OptimizedTooltip id="tiimo-tip" content="Tiimo est comme Captain America - fiable, visuel et spécialement entraîné pour les cerveaux neuroatypiques!">
                    <div className="bg-white rounded-lg p-4 border border-cyan-200 hover:border-cyan-400 transition-colors cursor-help">
                      <h5 className="font-semibold text-cyan-900 mb-2 flex items-center gap-2">
                        🛡️ Captain America des Rappels
                      </h5>
                      <p className="text-sm text-cyan-700">
                        <strong>Tiimo :</strong> Conçu spécialement pour les cerveaux neuroatypiques, 
                        avec des rappels visuels et une interface super intuitive !
                      </p>
                    </div>
                  </OptimizedTooltip>
                </div>
                
                <div className="mt-4 bg-cyan-50 rounded-lg p-4">
                  <h5 className="font-semibold text-cyan-900 mb-3">🎮 Votre Arsenal de Super-Pouvoirs :</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <h6 className="font-medium text-cyan-800 mb-1">Vitesse</h6>
                      <p className="text-xs text-cyan-700">Planification instantanée</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h6 className="font-medium text-cyan-800 mb-1">Précision</h6>
                      <p className="text-xs text-cyan-700">Rappels au bon moment</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl mb-2">🧠</div>
                      <h6 className="font-medium text-cyan-800 mb-1">Intelligence</h6>
                      <p className="text-xs text-cyan-700">Adaptation à votre style</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section Enfants */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neuro-purple mb-6 flex items-center gap-2">
              <Gamepad2 className="h-6 w-6" />
              🎮 L'École des Petits Génies : Transformer l'Apprentissage en Aventure !
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 border border-purple-200">
              <p className="text-purple-800 mb-3">
                <strong>🎪 L'Analogie du Parc d'Attractions Mental :</strong> Chaque technique d'apprentissage 
                est comme un manège différent dans le parc d'attractions de ton cerveau ! 
                Certains enfants adorent les montagnes russes (chaos créatif), d'autres préfèrent 
                le carrousel (structure répétitive). L'important, c'est de trouver TON manège préféré !
              </p>
              <p className="text-purple-700 text-sm italic">
                🌟 Rappel magique : Il n'y a pas de "mauvaise" façon d'apprendre, juste des façons différentes !
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptimizedTooltip id="treasure-tip" content="Parfait pour les petits collectionneurs et les esprits créatifs qui aiment toucher et manipuler!">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200 hover:border-pink-400 transition-colors cursor-help">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    🎁 La Boîte à Trésors d'Idées
                  </h3>
                  <div className="space-y-3">
                    <p className="text-pink-800 text-sm">
                      <strong>🏴‍☠️ Mission de Pirate :</strong> Transforme ta chambre en île au trésor ! 
                      Chaque idée pour ton exposé devient un trésor à cacher dans ta boîte magique.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-medium text-pink-900 mb-2">🗂️ Ton Arsenal de Pirate :</h5>
                      <ul className="text-xs text-pink-700 space-y-1">
                        <li>• 🎨 Dessins colorés (cartes au trésor)</li>
                        <li>• 🧱 LEGOs (idées à construire)</li>
                        <li>• 📝 Post-it magiques (sorts d'idées)</li>
                        <li>• 🪙 Objets mystérieux (inspirations secrètes)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </OptimizedTooltip>
              
              <OptimizedTooltip id="star-tip" content="Idéal pour les artistes en herbe et les cerveaux qui pensent en couleurs et en images!">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200 hover:border-yellow-400 transition-colors cursor-help">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    ⭐ L'Étoile Magique des Idées
                  </h3>
                  <div className="space-y-3">
                    <p className="text-yellow-800 text-sm">
                      <strong>🌟 Mission d'Astronome :</strong> Ton sujet principal est une étoile brillante 
                      au centre de l'univers. Chaque idée devient une planète qui gravite autour !
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-medium text-yellow-900 mb-2">🎨 Ta Palette d'Astronome :</h5>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">🔴 Idées importantes</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">🔵 Exemples</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">🟢 Questions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </OptimizedTooltip>
              
              <OptimizedTooltip id="chef-tip" content="Parfait pour les petits chefs qui aiment suivre des étapes claires et savourer le résultat!">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 hover:border-green-400 transition-colors cursor-help">
                  <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    👨‍🍳 La Recette du Petit Chef Génial
                  </h3>
                  <div className="space-y-3">
                    <p className="text-green-800 text-sm">
                      <strong>🍳 Mission de Grand Chef :</strong> Chaque devoir est un plat délicieux à préparer ! 
                      Suis ta recette magique étape par étape pour créer un chef-d'œuvre.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-medium text-green-900 mb-2">📋 Exemple de Recette Magique :</h5>
                      <ol className="text-xs text-green-700 space-y-1">
                        <li>1. 🥄 Mélange : Lis la consigne 3 fois</li>
                        <li>2. 🌶️ Épice : Souligne les mots importants</li>
                        <li>3. 🥘 Mijote : Réfléchis 5 minutes</li>
                        <li>4. 🍽️ Dresse : Écris ton chef-d'œuvre !</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </OptimizedTooltip>
              
              <OptimizedTooltip id="adventure-tip" content="Idéal pour les aventuriers et les explorateurs qui adorent les histoires et les quêtes!">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200 hover:border-purple-400 transition-colors cursor-help">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    🗺️ La Chasse au Trésor de la Mémoire
                  </h3>
                  <div className="space-y-3">
                    <p className="text-purple-800 text-sm">
                      <strong>🏴‍☠️ Mission d'Explorateur :</strong> Ta chambre devient une île mystérieuse ! 
                      Cache chaque élément de ta leçon dans un endroit spécial et crée ton parcours d'aventurier.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-medium text-purple-900 mb-2">🗺️ Exemple de Carte au Trésor :</h5>
                      <ul className="text-xs text-purple-700 space-y-1">
                        <li>• ☀️ Le Soleil → Sur ta lampe de bureau</li>
                        <li>• 🔴 Mars → Sous ton tapis rouge</li>
                        <li>• 🌙 La Lune → Sur ton oreiller</li>
                        <li>• ⭐ Les étoiles → Sur ton plafond</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </OptimizedTooltip>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                🎯 Le Secret des Super-Héros de l'Apprentissage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🎮</div>
                  <h5 className="font-medium text-blue-800 mb-2">Joue avec tes idées</h5>
                  <p className="text-xs text-blue-700">L'apprentissage, c'est comme un jeu vidéo !</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🌈</div>
                  <h5 className="font-medium text-blue-800 mb-2">Utilise toutes les couleurs</h5>
                  <p className="text-xs text-blue-700">Ton cerveau adore les arc-en-ciel !</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h5 className="font-medium text-blue-800 mb-2">Célèbre tes victoires</h5>
                  <p className="text-xs text-blue-700">Chaque petit progrès est un trésor !</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Author Info */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neuro-purple rounded-full">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Geoffroy Streit</h3>
              <p className="text-gray-600">2021 - revu et corrigé en 2025</p>
              <p className="text-sm text-gray-500 mt-1">
                Expert en neurodiversité et stratégies d'apprentissage adaptées
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NavigationLabyrintheIdees;