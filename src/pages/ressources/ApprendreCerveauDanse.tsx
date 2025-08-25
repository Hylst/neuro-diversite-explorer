import React from 'react';
import { ArrowLeft, BookOpen, Brain, Lightbulb, Target, Zap, Rocket, Star, Trophy, Heart, Eye, Key, Mountain, Glasses, Dumbbell, Wrench, List, TrendingUp, Compass, Bird, Users, Clock, Volume2, Mic, PenTool, RotateCcw, Repeat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

/**
 * ApprendreCerveauDanse component - Displays the "Apprendre quand ton cerveau préfère danser" guide
 * A practical guide for dynamic minds who prefer movement over traditional sitting methods
 */
const ApprendreCerveauDanse: React.FC = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                <BookOpen className="h-8 w-8 text-green-600" />
                📚 Apprendre quand ton cerveau préfère danser plutôt que rester assis
              </CardTitle>
              <p className="text-center text-lg text-muted-foreground mt-2">
                Guide pratique pour les esprits dynamiques, curieux… et un peu rétifs aux méthodes scolaires classiques
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Par Geoffroy Streit - 2025
              </p>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-green-500" />
                🚀 Introduction : ton cerveau n'est pas cassé, il est… original !
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Beaucoup de méthodes d'étude partent du principe qu'apprendre, c'est :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>s'asseoir bien droit,</li>
                <li>lire en silence,</li>
                <li>surligner trois tonnes de couleurs fluos,</li>
                <li>et relire jusqu'à ce que ton cerveau supplie qu'on l'éteigne.</li>
              </ul>
              <p className="font-medium">
                Sauf que… ça ne marche pas pour tout le monde.
              </p>
              <p>
                Si tu es dyslexique, que tu as des particularités neurologiques, ou simplement que ton cerveau aime <strong>bouger et parler</strong>, alors tu as peut-être déjà remarqué :
              </p>
              <p className="text-lg font-medium text-green-700 dark:text-green-300">
                👉 tu retiens mieux quand tu expliques à voix haute, en marchant, comme si tu faisais cours à un public imaginaire.
              </p>
              <p>
                Bonne nouvelle : ce n'est pas bizarre, c'est une <strong>super méthode</strong> (les chercheurs l'appellent parfois la <em>méthode Feynman</em>). On va la transformer en une routine concrète, fun et efficace.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* L'art d'apprendre en bougeant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-500" />
                🕺 L'art d'apprendre en bougeant et en parlant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Étape 1 */}
              <div className="border-l-4 border-l-blue-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  1. Lecture rapide (10 min)
                </h4>
                <p className="mb-2">
                  Ne cherche pas à tout comprendre. Feuillette ton cours comme si tu lisais un menu au restaurant :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Tu repères les gros plats (les grandes notions),</li>
                  <li>Tu ignores les petits ingrédients (les détails pour plus tard),</li>
                  <li>Et tu coches mentalement ce qui a l'air indigeste.</li>
                </ul>
              </div>

              {/* Étape 2 */}
              <div className="border-l-4 border-l-green-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-green-500" />
                  2. Explication à voix haute (20 min)
                </h4>
                <p className="mb-2">
                  Maintenant, ferme ton cahier et <strong>parle</strong>.
                </p>
                <p className="mb-2">
                  Imagine que tu expliques à un pote, à ta grand-mère, ou même à ton chat (ils sont très polis, ils ne corrigent jamais).
                </p>
                <p className="mb-2">
                  Marche en rond, lève les bras, mime les concepts si tu veux.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Exemple :</p>
                  <p className="italic">
                    « La cellule, c'est une petite ville. Les mitochondries ? Ce sont les centrales électriques. Sans elles, blackout total. »
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-3">
                  <p className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <strong>💡 Astuce :</strong> enregistre-toi. Même si ta voix t'énerve, ça peut devenir ton meilleur prof de demain.
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="border-l-4 border-l-purple-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <PenTool className="h-4 w-4 text-purple-500" />
                  3. Schéma express (10 min)
                </h4>
                <p className="mb-2">
                  Après avoir parlé, fais un <strong>mini-dessin</strong>.
                </p>
                <p className="mb-2">
                  Pas besoin d'être Picasso : des ronds, des flèches, deux mots-clés.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg space-y-2">
                  <p><strong>Exemple pour l'histoire :</strong> Révolution française → colère du peuple → chute du roi</p>
                  <p><strong>Exemple pour les sciences :</strong> Soleil → Terre tourne → saisons</p>
                </div>
                <p className="mt-2 text-purple-700 dark:text-purple-300">
                  Ton cerveau adore quand tu résumes en image.
                </p>
              </div>

              {/* Étape 4 */}
              <div className="border-l-4 border-l-orange-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 text-orange-500" />
                  4. Rappel actif (10 min)
                </h4>
                <p className="mb-2">
                  Range ton cours, regarde ton schéma, et tente de redire <strong>à haute voix</strong> tout ce que tu peux.
                </p>
                <p className="mb-2">
                  Si tu oublies : pas grave, va vérifier et recommence.
                </p>
                <p className="text-orange-700 dark:text-orange-300">
                  Ce n'est pas un échec, c'est exactement ce qui muscle ta mémoire.
                </p>
              </div>

              {/* Étape 5 */}
              <div className="border-l-4 border-l-red-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-red-500" />
                  5. Résumé éclair (5 min)
                </h4>
                <p className="mb-2">
                  Avant de finir, résume la séance en <strong>2 ou 3 phrases max</strong>.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg space-y-2">
                  <p><strong>Exemple :</strong></p>
                  <p className="italic">« Aujourd'hui j'ai compris que les mitochondries, c'est EDF dans la cellule. »</p>
                  <p className="italic">« J'ai appris que la Révolution française, c'est un peuple qui en a eu marre de payer pour le gâteau du roi. »</p>
                </div>
                <p className="mt-2">
                  Écris-le ou enregistre-le → c'est ta petite capsule de mémoire.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* La magie de l'espacement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Repeat className="h-5 w-5 text-indigo-500" />
                🔄 La magie de l'espacement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ton cerveau adore… oublier. Mais il adore encore plus quand tu lui fais un petit rappel surprise.
              </p>
              <p>
                Alors tu rejoues la scène à :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-indigo-600">J+1</p>
                  <p className="text-sm">(le lendemain)</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-indigo-600">J+3</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-indigo-600">J+7</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-indigo-600">J+14</p>
                </div>
              </div>
              <p>
                Chaque fois, tu reprends ton schéma ou ton enregistrement et tu réexplique <strong>sans regarder</strong>, comme si tu improvisais une mini-conférence.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bonus : transformer en spectacle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                🎭 Bonus : transformer ton cours en spectacle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Si tu veux aller encore plus loin, amuse-toi à :
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <p><strong>Inventer une métaphore</strong></p>
                    <p className="text-sm text-muted-foreground">(les neutrons = des gardes du corps qui empêchent le noyau d'exploser).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mic className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <p><strong>Donner des voix aux concepts</strong></p>
                    <p className="text-sm text-muted-foreground">(« Bonjour, je suis le roi Soleil, et sans moi, pas de photosynthèse ! »).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p><strong>Associer un geste à chaque idée</strong></p>
                    <p className="text-sm text-muted-foreground">(cause = tu pousses avec la main, conséquence = tu pointes du doigt).</p>
                  </div>
                </div>
              </div>
              <p className="text-lg font-medium text-yellow-700 dark:text-yellow-300">
                Ton cours devient une petite pièce de théâtre → et ton cerveau adore les histoires.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-green-600" />
                🎁 Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-medium">
                Si tu retiens une chose : apprendre n'est pas forcément <strong>rester assis à lire en silence</strong>.
              </p>
              <p>
                Tu peux :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center text-sm">marcher</div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center text-sm">parler</div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center text-sm">mimer</div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center text-sm">enregistrer</div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center text-sm">dessiner</div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center text-sm">répéter dans le temps</div>
              </div>
              <p>
                Ton cerveau a ses préférences : au lieu de le forcer à manger de la salade sans sauce, offre-lui un buffet qui lui plaît.
              </p>
              <p className="text-xl font-semibold text-green-800 dark:text-green-300">
                👉 Résultat : tu comprends mieux, tu retiens plus longtemps… et en plus, tu t'amuses un peu.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Note de l'auteur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Card className="mb-6 bg-gray-50 dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-600" />
                Note de l'auteur
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ce guide s'adresse particulièrement aux personnes neurodivergentes (dyslexie, TDAH, TSA, troubles dys) 
                qui ont souvent des difficultés avec les méthodes d'apprentissage traditionnelles. La méthode Feynman, 
                combinée au mouvement et à l'expression orale, peut considérablement améliorer la rétention et la compréhension.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Pour plus de ressources sur la neurodiversité et l'apprentissage, consultez{' '}
                <a href="https://neuro-diversite.vercel.app" className="text-green-600 hover:text-green-800 underline" target="_blank" rel="noopener noreferrer">
                  https://neuro-diversite.vercel.app
                </a>
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['#Apprentissage', '#Neurodiversité', '#MéthodeFeynman', '#Mouvement', '#TDAH', '#Dyslexie', '#Mémorisation', '#Créativité', '#Éducation', '#Stratégies'].map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm dark:bg-green-900/30 dark:text-green-300">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ApprendreCerveauDanse;