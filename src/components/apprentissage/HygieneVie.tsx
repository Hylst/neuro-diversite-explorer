import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Lightbulb, Heart } from 'lucide-react';

const HygieneVie = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex md:gap-8 px-4">
      {/* Main content column */}
      <div className="md:w-4/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="neuro-gradient-text">Module 6:</span> Hygiène de vie
          </h2>
          
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Optimiser le bien-être pour favoriser l'apprentissage chez les personnes neurodivergentes
          </p>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Hygiène de vie et Apprentissage</h3>
              <p className="mb-4">
                Une bonne hygiène de vie est fondamentale pour optimiser les capacités d'apprentissage, particulièrement pour les cerveaux neurodivergents. 
                Un corps et un esprit sains créent un terrain fertile pour l'acquisition de nouvelles connaissances et compétences.
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-blue">Sommeil Réparateur</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Routine régulière :</strong> Se coucher et se lever à heures fixes, même le week-end.</li>
                    <li><strong>Environnement propice :</strong> Chambre sombre, calme et fraîche. Éviter les écrans avant le coucher.</li>
                    <li><strong>Gestion de l'hyperactivité mentale :</strong> Techniques de relaxation, méditation ou lecture apaisante avant de dormir.</li>
                    <li><strong>Siestes courtes :</strong> Si besoin, des siestes de 20-30 minutes peuvent aider, mais éviter les longues siestes tardives.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-green">Alimentation Équilibrée</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Repas réguliers :</strong> Éviter de sauter des repas pour maintenir un niveau d'énergie stable.</li>
                    <li><strong>Nutriments essentiels :</strong> Privilégier les fruits, légumes, protéines maigres et grains entiers.</li>
                    <li><strong>Hydratation :</strong> Boire suffisamment d'eau tout au long de la journée.</li>
                    <li><strong>Sensibilités alimentaires :</strong> Être attentif aux éventuelles sensibilités (gluten, produits laitiers, additifs) qui peuvent impacter la concentration.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-3 text-orange-800 flex items-center">
                    🎯 Influence du sucre sur la concentration
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Pic glycémique suivi d'un crash :</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Un petit déjeuner riche en sucres rapides (viennoiseries, céréales sucrées, jus de fruits industriels...) provoque une élévation rapide de la glycémie, suivie d'une chute brutale.
                      </p>
                      <p className="text-sm font-medium text-red-600">👉 Résultat : baisse de concentration, fatigue, irritabilité.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Impact sur la neurotransmission :</h5>
                      <p className="text-sm text-gray-700">
                        Une consommation excessive de sucre perturbe la production de <strong>dopamine</strong> et <strong>sérotonine</strong>, ce qui peut nuire à la régulation de l'humeur et de l'attention.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Chez les personnes avec TDA/H :</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• L'hypersensibilité aux variations glycémiques peut accentuer l'agitation ou les difficultés attentionnelles</li>
                        <li>• Le sucre rapide peut agir comme un excitant, rendant les symptômes plus instables</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-3 text-blue-800 flex items-center">
                    🩺 Influence du sucre sur la santé globale
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-blue-700">Risques accrus :</span>
                      <span className="text-sm text-gray-700 ml-2">diabète de type 2, surpoids, maladies cardiovasculaires.</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-700">Inflammation chronique :</span>
                      <span className="text-sm text-gray-700 ml-2">favorisée par une alimentation riche en sucres raffinés, et potentiellement délétère pour la santé cérébrale à long terme.</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-700">Microbiote intestinal :</span>
                      <span className="text-sm text-gray-700 ml-2">déséquilibré par un excès de sucre, ce qui influence négativement l'humeur et la cognition.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-3 text-green-800 flex items-center">
                    🥣 Petit déjeuner recommandé (concentration et santé)
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Idéalement :</strong> Un petit déjeuner à index glycémique bas, riche en protéines, bonnes graisses, et fibres.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-200">
                          <th className="text-left py-2 text-green-700">Aliments recommandés</th>
                          <th className="text-left py-2 text-green-700">Pourquoi ?</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b border-green-100">
                          <td className="py-2 font-medium">Œufs (cuits doucement)</td>
                          <td className="py-2 text-gray-700">Protéines + choline (bon pour le cerveau)</td>
                        </tr>
                        <tr className="border-b border-green-100">
                          <td className="py-2 font-medium">Pain complet / flocons d'avoine</td>
                          <td className="py-2 text-gray-700">Fibres, glucides complexes = énergie durable</td>
                        </tr>
                        <tr className="border-b border-green-100">
                          <td className="py-2 font-medium">Fruits entiers (baies, pomme)</td>
                          <td className="py-2 text-gray-700">Antioxydants, fibres, vitamines</td>
                        </tr>
                        <tr className="border-b border-green-100">
                          <td className="py-2 font-medium">Noix / amandes / graines de chia</td>
                          <td className="py-2 text-gray-700">Oméga-3, magnésium, bons lipides</td>
                        </tr>
                        <tr className="border-b border-green-100">
                          <td className="py-2 font-medium">Yaourt nature / fromage blanc</td>
                          <td className="py-2 text-gray-700">Protéines + équilibre glycémique</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Thé vert ou infusion + eau</td>
                          <td className="py-2 text-gray-700">Hydratation et antioxydants</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
                    <h5 className="font-medium text-red-700 mb-2">À éviter :</h5>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Pâtisseries industrielles</li>
                      <li>• Céréales sucrées</li>
                      <li>• Jus de fruits (privilégier les fruits entiers)</li>
                      <li>• Pain blanc + confiture</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-3 text-purple-800 flex items-center">
                    🧠 Alimentation et habitudes pour mémoire & concentration
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">🍴 Aliments favorables à la cognition :</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li><strong>Poissons gras</strong> (sardine, maquereau, saumon) : riches en oméga-3</li>
                        <li><strong>Légumes verts à feuilles</strong> : épinards, kale (riches en folates et antioxydants)</li>
                        <li><strong>Baies</strong> : riches en flavonoïdes (protègent le cerveau)</li>
                        <li><strong>Curcuma</strong> (avec poivre noir) : anti-inflammatoire</li>
                        <li><strong>Chocolat noir (&gt;70%)</strong> : en quantité modérée, stimulant cognitif</li>
                        <li><strong>Eau</strong> : même une légère déshydratation nuit aux fonctions exécutives</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">🕒 Habitudes utiles :</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Éviter les longues périodes sans manger : risque d'hypoglycémie = baisse de l'attention</li>
                        <li>• Grignotages sains : une poignée de noix, un fruit entier</li>
                        <li>• Petites pauses régulières pour oxygéner le cerveau</li>
                        <li>• Exercice physique régulier : booste la mémoire et réduit le stress</li>
                        <li>• Sommeil de qualité : crucial pour consolider la mémoire</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-indigo-50 rounded border border-indigo-200">
                      <h5 className="font-medium text-indigo-700 mb-2">🎯 Et pour les personnes TDA/H ?</h5>
                      <ul className="text-sm text-indigo-600 space-y-1">
                        <li>• Protéines à chaque repas, y compris au petit déjeuner</li>
                        <li>• Éviter le sucre raffiné (surtout le matin et en collation)</li>
                        <li>• Limiter la caféine, qui peut aggraver la nervosité</li>
                        <li>• Maintenir une régularité des repas pour limiter les fluctuations d'énergie</li>
                        <li>• Compléments parfois utiles (sous suivi médical) : oméga-3, magnésium, zinc</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-orange">Exercice Physique Régulier</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Activité plaisante :</strong> Choisir une activité que l'on aime pour favoriser la régularité (marche, vélo, danse, yoga).</li>
                    <li><strong>Bénéfices multiples :</strong> Améliore la concentration, réduit le stress et favorise un meilleur sommeil.</li>
                    <li><strong>Adapté aux besoins :</strong> Pour certains, des activités intenses sont bénéfiques, pour d'autres, des mouvements plus doux sont préférables.</li>
                    <li><strong>Intégration au quotidien :</strong> Marcher pour de courts trajets, prendre les escaliers.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-red">Gestion du Stress et Bien-être Mental</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Techniques de relaxation :</strong> Respiration profonde, pleine conscience, méditation.</li>
                    <li><strong>Temps pour soi :</strong> Activités relaxantes et plaisantes (hobbies, nature, musique).</li>
                    <li><strong>Expression émotionnelle :</strong> Parler de ses ressentis, tenir un journal.</li>
                    <li><strong>Limiter la surcharge sensorielle :</strong> Prévoir des moments de calme et des environnements apaisants.</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-neuro-purple pl-4 mt-8">
                <p className="italic">
                  <Lightbulb className="h-4 w-4 inline mr-2" />
                  N'oubliez pas : chaque personne est unique. Expérimentez pour découvrir ce qui fonctionne le mieux pour vous ou pour la personne que vous accompagnez. 
                  Ces recommandations sont des pistes générales à adapter individuellement.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sidebar column */}
      <aside className="md:w-1/5 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="sticky top-24"> {/* Adjust top-X based on actual navbar height */}
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-neuro-purple">Encarts Clés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Astuce Rapide</h4>
                  <p className="text-sm text-muted-foreground">Intégrez 30 minutes d'activité physique quotidienne pour améliorer significativement vos capacités cognitives.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Le Saviez-vous ?</h4>
                  <p className="text-sm text-muted-foreground">Le manque de sommeil peut amplifier les difficultés sensorielles et attentionnelles chez les personnes neurodivergentes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ressources Utiles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><a href="https://www.reseau-morphee.fr/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Réseau Morphée - Troubles du sommeil</a></li>
                    <li><a href="https://www.mangerbouger.fr/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Manger Bouger - Programme national nutrition santé</a></li>
                    <li><a href="https://www.mindfulnessfrance.net/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Association pour le développement de la mindfulness</a></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </div>
  );
};

export default HygieneVie;