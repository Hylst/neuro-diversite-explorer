import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Star, Rainbow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NeurodiversiteEnfant: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/ressources')}
            className="mb-4 hover:bg-white/50 dark:hover:bg-gray-800/50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux ressources
          </Button>
          
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-700">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
                <Rainbow className="h-8 w-8" />
                La neurodiversité expliquée à un enfant de 8 ans
                <Rainbow className="h-8 w-8" />
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Par Geoffroy Streit - Mars 2023</p>
            </CardHeader>
          </Card>
        </div>

        {/* Contenu principal */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Bonjour petit homme !</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">Tu sais quoi ?</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Aujourd'hui, on va partir pour une aventure extraordinaire.</p>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  On va parler de quelque chose de très spécial qui s'appelle la <strong className="text-purple-600 dark:text-purple-400">neurodiversité</strong>. 
                  C'est un mot un peu long, mais je te promets que tu vas tout comprendre. Et surtout, tu vas découvrir que 
                  chacun de nous est comme une étoile brillante, avec sa propre lumière <Star className="inline h-5 w-5 text-yellow-500" />.
                </p>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <Rainbow className="h-6 w-6" />
                    Des cerveaux comme des arcs-en-ciel
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Imagine un grand ciel rempli d'arcs-en-ciel. Chaque couleur, chaque forme est différente.
                    Et pourtant, ensemble, ça fait quelque chose de <strong>MAGNIFIQUE</strong>.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                    La neurodiversité, c'est un peu pareil : chaque cerveau fonctionne d'une manière unique.
                    Certains sont très rapides 🏃‍♂️, d'autres sont très calmes 🧘. Il y en a qui adorent les chiffres 🔢, 
                    et d'autres qui préfèrent dessiner ou chanter 🎨🎵. Il n'y a pas une seule bonne façon d'être, il y en a plein !
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4">Petit tour dans le monde des cerveaux</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🧩</span>
                      <div>
                        <strong className="text-blue-600 dark:text-blue-400">L'autisme :</strong> 
                        <span className="text-gray-700 dark:text-gray-300"> certaines personnes aiment les choses calmes, les routines, et ne veulent pas toujours parler. C'est comme si leur cerveau avait un super radar pour les détails !</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <strong className="text-purple-600 dark:text-purple-400">Le TDAH :</strong> 
                        <span className="text-gray-700 dark:text-gray-300"> certains enfants bougent beaucoup, parlent fort, ont 1 000 idées à la seconde. Leur cerveau, c'est une fusée pleine d'énergie !</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">📚</span>
                      <div>
                        <strong className="text-orange-600 dark:text-orange-400">La dyslexie :</strong> 
                        <span className="text-gray-700 dark:text-gray-300"> lire ou écrire peut être difficile, mais ces personnes ont souvent une grande imagination et voient le monde en images comme dans un film !</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🤹</span>
                      <div>
                        <strong className="text-pink-600 dark:text-pink-400">La dyspraxie :</strong> 
                        <span className="text-gray-700 dark:text-gray-300"> des gestes peuvent être compliqués, comme boutonner une chemise, mais ces enfants ont parfois des idées incroyables pour résoudre des problèmes !</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-500" />
                    Et toi dans tout ça ?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Peut-être que tu apprends vite. Ou peut-être que tu as besoin d'un peu plus de temps.
                    Peut-être que tu aimes parler fort, ou au contraire rester dans ton coin. Tout ça, c'est toi.
                    Et tu es parfait comme tu es <Heart className="inline h-5 w-5 text-red-500" />.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                    Parfois, tu verras un camarade qui ne comprend pas les blagues, ou qui aime jouer seul.
                    Ce n'est pas qu'il ne veut pas d'amis, c'est juste qu'il est différent. Comme une autre couleur dans ton arc-en-ciel.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Comment être un super copain ? 🦸‍♀️🦸‍♂️</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-red-500 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Écoute avec ton cœur :</strong> même si tu ne comprends pas tout, écoute avec gentillesse.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⏰</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Sois patient :</strong> certains amis ont juste besoin d'un peu plus de temps.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🎮</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Propose de jouer :</strong> même s'ils disent non, ça leur fait plaisir qu'on pense à eux.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">❓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Pose des questions :</strong> avec douceur, tu peux leur demander ce qu'ils aiment ou ce qu'ils n'aiment pas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🎉</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Célèbre les différences :</strong> c'est comme dans une fête, plus il y a de styles, plus c'est joyeux !</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 p-6 rounded-lg border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold text-pink-700 dark:text-pink-300 mb-3">Un monde plus beau grâce à la neurodiversité</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Imagine un jardin avec toutes les fleurs pareilles… un peu triste, non ? Maintenant, imagine ce jardin 
                    rempli de fleurs rouges, bleues, jaunes, grandes, petites, avec des pétales en cœur 🌺. 
                    C'est la même chose avec les humains.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                    La neurodiversité rend le monde plus coloré, plus joyeux, plus fort. Chacun apporte quelque chose. 
                    Toi aussi, tu es une de ces belles fleurs.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">À retenir</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">Être différent, ce n'est pas être bizarre. C'est être unique.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">Les différences nous rendent plus forts, plus créatifs et plus humains.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">Sois curieux, sois gentil, sois toi. Et invite les autres à être eux-mêmes aussi.</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Merci d'avoir lu cette aventure. Tu es maintenant un explorateur de la neurodiversité !
                  </p>
                  <div className="flex justify-center items-center gap-2 mt-4">
                    <Rainbow className="h-6 w-6 text-blue-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NeurodiversiteEnfant;