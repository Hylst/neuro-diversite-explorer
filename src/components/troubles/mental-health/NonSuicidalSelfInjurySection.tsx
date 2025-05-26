import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Heart, Shield, Phone } from 'lucide-react';

/**
 * Component for Non-suicidal Self-Injury section
 * Provides detailed information about self-harm behaviors in children and adolescents
 */
const NonSuicidalSelfInjurySection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-neuro-red" />
            Automutilation non suicidaire chez l'enfant et l'adolescent
          </CardTitle>
          <CardDescription>
            Comportements d'automutilation intentionnelle sans intention de causer la mort
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Definition */}
          <div>
            <h4 className="font-medium mb-3">Définition :</h4>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-800 mb-2">
                L'automutilation non suicidaire fait référence à l'automutilation intentionnelle 
                non destinée à causer le décès. Ces comportements se produisent principalement 
                chez les adolescents et peuvent comprendre diverses formes d'auto-blessures.
              </p>
              <p className="text-sm text-red-800">
                <strong>Important :</strong> Bien que l'intention ne soit pas suicidaire, 
                ces comportements indiquent une grande détresse et nécessitent une attention médicale.
              </p>
            </div>
          </div>

          {/* Types of self-injury */}
          <div>
            <h4 className="font-medium mb-3">Types d'automutilation :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h5 className="font-medium text-orange-900 mb-2">Méthodes courantes :</h5>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• <strong>Coupures :</strong> avec lames, ciseaux, objets tranchants</li>
                  <li>• <strong>Égratignures :</strong> superficielles avec ongles ou objets</li>
                  <li>• <strong>Brûlures :</strong> cigarettes, fers à friser, allumettes</li>
                  <li>• <strong>Coups :</strong> se frapper contre des murs ou objets</li>
                  <li>• <strong>Frottements :</strong> avec gomme, sel, jusqu'à blessure</li>
                  <li>• <strong>Piqûres :</strong> avec aiguilles, épingles</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h5 className="font-medium text-yellow-900 mb-2">Zones du corps ciblées :</h5>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• <strong>Avant-bras :</strong> zone la plus fréquente</li>
                  <li>• <strong>Poignets :</strong> facilement accessibles</li>
                  <li>• <strong>Cuisses :</strong> zones cachées</li>
                  <li>• <strong>Abdomen :</strong> moins visible</li>
                  <li>• <strong>Chevilles :</strong> discrètes</li>
                  <li>• <strong>Visage :</strong> plus rare, plus préoccupant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Motivations */}
          <div>
            <h4 className="font-medium mb-3">Motivations et fonctions :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Fonctions émotionnelles :</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Régulation émotionnelle :</strong> soulager la tension psychologique</li>
                  <li>• <strong>Autopunition :</strong> sentiment de mériter la douleur</li>
                  <li>• <strong>Contrôle :</strong> reprendre le contrôle sur son corps</li>
                  <li>• <strong>Sensation :</strong> se sentir "vivant" ou réel</li>
                  <li>• <strong>Distraction :</strong> détourner l'attention de la douleur émotionnelle</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Fonctions sociales :</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>Attention :</strong> attirer l'attention des parents/proches</li>
                  <li>• <strong>Communication :</strong> exprimer une détresse indicible</li>
                  <li>• <strong>Appartenance :</strong> s'identifier à un groupe de pairs</li>
                  <li>• <strong>Manipulation :</strong> influencer le comportement d'autrui</li>
                  <li>• <strong>Expression de colère :</strong> manifester sa frustration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk factors */}
          <div>
            <h4 className="font-medium mb-3">Facteurs de risque :</h4>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-900 mb-2">Facteurs individuels :</h5>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Troubles de l'humeur (dépression, bipolarité)</li>
                    <li>• Troubles anxieux</li>
                    <li>• Faible estime de soi</li>
                    <li>• Troubles du comportement alimentaire</li>
                    <li>• TSPT ou traumatismes</li>
                    <li>• Troubles de la personnalité émergents</li>
                    <li>• Usage de substances</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-900 mb-2">Facteurs environnementaux :</h5>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Abus physiques, sexuels ou émotionnels</li>
                    <li>• Négligence parentale</li>
                    <li>• Conflits familiaux chroniques</li>
                    <li>• Harcèlement scolaire</li>
                    <li>• Pression académique excessive</li>
                    <li>• Exposition médiatique à l'automutilation</li>
                    <li>• Contagion sociale ("effet de mode")</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Warning signs */}
          <div>
            <h4 className="font-medium mb-3">Signes d'alerte :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h5 className="font-medium text-orange-900 mb-2">Signes physiques :</h5>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Coupures, égratignures, brûlures inexpliquées</li>
                  <li>• Cicatrices en lignes parallèles</li>
                  <li>• Port constant de manches longues/pantalons</li>
                  <li>• Objets tranchants cachés dans la chambre</li>
                  <li>• Blessures "accidentelles" fréquentes</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h5 className="font-medium text-red-900 mb-2">Signes comportementaux :</h5>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Isolement social soudain</li>
                  <li>• Évitement des activités physiques</li>
                  <li>• Changements d'humeur extrêmes</li>
                  <li>• Baisse des performances scolaires</li>
                  <li>• Expressions de désespoir ou d'inutilité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contagion phenomenon */}
          <div>
            <h4 className="font-medium mb-3">Phénomène de contagion :</h4>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800 mb-2">
                <strong>"Effet de mode" dans les établissements scolaires :</strong>
              </p>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• L'automutilation peut devenir soudain à la mode dans un lycée</li>
                <li>• Nombreux adolescents adoptent ce comportement par imitation</li>
                <li>• Phénomène généralement temporaire, s'estompe avec le temps</li>
                <li>• Nécessite intervention préventive de l'établissement</li>
                <li>• Importance de ne pas dramatiser tout en prenant au sérieux</li>
              </ul>
            </div>
          </div>

          {/* Suicide risk assessment */}
          <div>
            <h4 className="font-medium mb-3">Évaluation du risque suicidaire :</h4>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-red-900 mb-2">Risque faible :</h5>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Automutilation occasionnelle</li>
                    <li>• Méthode unique</li>
                    <li>• Bon soutien social</li>
                    <li>• Pas de pensées suicidaires</li>
                    <li>• Fonctionnement global préservé</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900 mb-2">Risque élevé :</h5>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Automutilation fréquente</li>
                    <li>• Méthodes multiples</li>
                    <li>• Isolement social</li>
                    <li>• Pensées suicidaires exprimées</li>
                    <li>• Troubles mentaux sévères</li>
                    <li>• Sentiment que la vie n'a pas de sens</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment approach */}
          <div>
            <h4 className="font-medium mb-3">Approche thérapeutique :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Thérapie individuelle :</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>TCC :</strong> identifier les déclencheurs et alternatives</li>
                  <li>• <strong>Thérapie dialectique comportementale (TDC) :</strong> régulation émotionnelle</li>
                  <li>• <strong>Pleine conscience :</strong> conscience des émotions</li>
                  <li>• <strong>Techniques de distraction :</strong> alternatives à l'automutilation</li>
                  <li>• <strong>Gestion du stress :</strong> stratégies d'adaptation saines</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Thérapie de groupe :</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Soutien par les pairs :</strong> partage d'expériences</li>
                  <li>• <strong>Apprentissage social :</strong> observer des stratégies adaptatives</li>
                  <li>• <strong>Réduction de l'isolement :</strong> sentiment d'appartenance</li>
                  <li>• <strong>Responsabilisation mutuelle :</strong> encouragement au changement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative strategies */}
          <div>
            <h4 className="font-medium mb-3">Stratégies alternatives à l'automutilation :</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-1">Sensations physiques :</h5>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Tenir des glaçons</li>
                  <li>• Dessiner sur la peau au marqueur rouge</li>
                  <li>• Élastique au poignet</li>
                  <li>• Exercice physique intense</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 text-sm mb-1">Expression émotionnelle :</h5>
                <ul className="text-xs text-green-800 space-y-1">
                  <li>• Écriture dans un journal</li>
                  <li>• Dessin ou peinture</li>
                  <li>• Musique (écoute/création)</li>
                  <li>• Crier dans un oreiller</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <h5 className="font-medium text-purple-900 text-sm mb-1">Connexion sociale :</h5>
                <ul className="text-xs text-purple-800 space-y-1">
                  <li>• Appeler un ami de confiance</li>
                  <li>• Parler à un adulte bienveillant</li>
                  <li>• Participer à des activités de groupe</li>
                  <li>• Bénévolat ou aide aux autres</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Family involvement */}
          <div>
            <h4 className="font-medium mb-3">Implication familiale :</h4>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• <strong>Psychoéducation :</strong> comprendre l'automutilation sans jugement</li>
                <li>• <strong>Communication ouverte :</strong> créer un environnement de confiance</li>
                <li>• <strong>Éviter la surveillance excessive :</strong> équilibre entre sécurité et autonomie</li>
                <li>• <strong>Renforcement positif :</strong> valoriser les stratégies d'adaptation saines</li>
                <li>• <strong>Thérapie familiale :</strong> améliorer la dynamique relationnelle</li>
                <li>• <strong>Gestion de crise :</strong> plan d'action en cas d'urgence</li>
              </ul>
            </div>
          </div>

          {/* Emergency resources */}
          <div className="bg-red-100 border border-red-300 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Phone className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-red-900 mb-2">Ressources d'urgence</h5>
                <div className="space-y-2">
                  <p className="text-sm text-red-800">
                    <strong>Suicide Écoute :</strong> 01 45 39 40 00 (24h/24, 7j/7)
                  </p>
                  <p className="text-sm text-red-800">
                    <strong>SOS Amitié :</strong> 09 72 39 40 50 (24h/24, 7j/7)
                  </p>
                  <p className="text-sm text-red-800">
                    <strong>Fil Santé Jeunes :</strong> 0800 235 236 (9h-23h, gratuit et anonyme)
                  </p>
                  <p className="text-sm text-red-800">
                    <strong>En urgence :</strong> 15 (SAMU) ou se rendre aux urgences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional evaluation */}
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-yellow-900 mb-1">Évaluation professionnelle obligatoire</h5>
                <p className="text-sm text-yellow-800">
                  Tous les adolescents qui se blessent délibérément doivent être évalués par un professionnel 
                  de la santé mentale expérimenté dans le traitement des problèmes de santé mentale chez les adolescents. 
                  L'objectif est de déterminer le risque suicidaire et d'identifier la détresse sous-jacente.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NonSuicidalSelfInjurySection;