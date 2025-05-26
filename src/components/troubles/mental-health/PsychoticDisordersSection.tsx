import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Eye, Ear } from 'lucide-react';

/**
 * Component for Psychotic Disorders section with detailed information
 * about schizophrenia in children and adolescents
 */
const PsychoticDisordersSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-purple">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-neuro-purple" />
            Troubles Psychotiques
          </CardTitle>
          <CardDescription>
            Troubles caractérisés par des altérations de la perception de la réalité
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-neuro-red" />
            Schizophrénie
          </CardTitle>
          <CardDescription>
            Trouble psychotique chronique affectant la pensée, la perception et le comportement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Épidémiologie et âge de début :</h4>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
                <li><strong>Rareté chez l'enfant :</strong> Très rare avant l'adolescence</li>
                <li><strong>Âge typique de début :</strong> Entre le milieu de l'adolescence et la trentaine</li>
                <li><strong>Pic d'incidence :</strong> Fin de l'adolescence et début de l'âge adulte</li>
                <li><strong>Prévalence :</strong> Environ 1% de la population générale</li>
                <li><strong>Différences de genre :</strong> Début légèrement plus précoce chez les hommes</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Symptômes positifs :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h5 className="font-medium text-red-900 text-sm mb-2 flex items-center gap-1">
                  <Ear className="h-4 w-4" />
                  Hallucinations
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-red-800 text-xs">
                  <li><strong>Auditives :</strong> Voix commentant les actions, donnant des ordres</li>
                  <li><strong>Visuelles :</strong> Moins fréquentes, voir des personnes/objets</li>
                  <li><strong>Tactiles :</strong> Sensations sur la peau</li>
                  <li><strong>Olfactives/gustatives :</strong> Odeurs ou goûts étranges</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h5 className="font-medium text-orange-900 text-sm mb-2 flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  Délires
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-orange-800 text-xs">
                  <li><strong>Persécution :</strong> Sentiment d'être suivi, espionné</li>
                  <li><strong>Grandeur :</strong> Croyances de pouvoirs spéciaux</li>
                  <li><strong>Référence :</strong> Tout se rapporte à soi</li>
                  <li><strong>Contrôle :</strong> Pensées/actions contrôlées de l'extérieur</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Symptômes négatifs :</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 text-sm mb-1">Déficits émotionnels :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xs">
                    <li>Émoussement affectif</li>
                    <li>Anhédonie (perte de plaisir)</li>
                    <li>Retrait émotionnel</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 text-sm mb-1">Déficits comportementaux :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xs">
                    <li>Alogie (pauvreté du discours)</li>
                    <li>Avolition (manque de motivation)</li>
                    <li>Retrait social</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Désorganisation :</h4>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-yellow-900 text-sm mb-1">Pensée désorganisée :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-800 text-xs">
                    <li>Discours incohérent</li>
                    <li>Associations lâches</li>
                    <li>Néologismes</li>
                    <li>Tangentialité</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-900 text-sm mb-1">Comportement désorganisé :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-800 text-xs">
                    <li>Agitation imprévisible</li>
                    <li>Comportements bizarres</li>
                    <li>Catatonie</li>
                    <li>Négligence de l'hygiène</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Facteurs de risque :</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-1">Génétiques</h5>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Antécédents familiaux</li>
                  <li>• Hérédité polygénique</li>
                  <li>• Mutations rares</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 text-sm mb-1">Développementaux</h5>
                <ul className="text-xs text-green-800 space-y-1">
                  <li>• Complications périnatales</li>
                  <li>• Infections prénatales</li>
                  <li>• Malnutrition maternelle</li>
                </ul>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <h5 className="font-medium text-red-900 text-sm mb-1">Environnementaux</h5>
                <ul className="text-xs text-red-800 space-y-1">
                  <li>• Usage de cannabis</li>
                  <li>• Stress psychosocial</li>
                  <li>• Traumatismes</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Cannabis et risque psychotique :</h4>
            <div className="bg-red-100 p-4 rounded-lg border border-red-300">
              <p className="text-sm text-red-900 mb-2">
                <strong>⚠️ Attention particulière :</strong> L'usage de cannabis, particulièrement 
                précoce et fréquent, augmente significativement le risque de développer une schizophrénie.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-red-800 text-xs">
                <li><strong>Risque multiplié par 2-3</strong> chez les usagers réguliers</li>
                <li><strong>Risque plus élevé</strong> avec un usage avant 15 ans</li>
                <li><strong>THC à forte concentration</strong> particulièrement dangereux</li>
                <li><strong>Vulnérabilité génétique</strong> peut amplifier le risque</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Signes prodromiques (précurseurs) :</h4>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-800 mb-2">
                Période précédant l'apparition des symptômes psychotiques francs :
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="list-disc pl-5 space-y-1 text-orange-700 text-xs">
                  <li>Retrait social progressif</li>
                  <li>Baisse des performances scolaires</li>
                  <li>Changements de personnalité</li>
                  <li>Négligence de l'hygiène</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1 text-orange-700 text-xs">
                  <li>Idées bizarres ou suspicieuses</li>
                  <li>Perceptions inhabituelles</li>
                  <li>Difficultés de concentration</li>
                  <li>Troubles du sommeil</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Diagnostic différentiel :</h4>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <ul className="list-disc pl-5 space-y-1 text-yellow-800 text-sm">
                <li><strong>Trouble bipolaire avec caractéristiques psychotiques</strong></li>
                <li><strong>Dépression majeure avec caractéristiques psychotiques</strong></li>
                <li><strong>Trouble psychotique induit par une substance</strong></li>
                <li><strong>Trouble psychotique dû à une affection médicale</strong></li>
                <li><strong>Trouble schizophréniforme</strong> (durée 1-6 mois)</li>
                <li><strong>Trouble délirant</strong> (délires sans autres symptômes)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Traitement :</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-1">Antipsychotiques</h5>
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-blue-800 mb-1"><strong>Atypiques (première ligne) :</strong></p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Rispéridone, olanzapine</li>
                      <li>• Aripiprazole, quétiapine</li>
                      <li>• Moins d'effets secondaires</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-blue-800 mb-1"><strong>Surveillance :</strong></p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Poids, métabolisme</li>
                      <li>• Mouvements anormaux</li>
                      <li>• Fonction cardiaque</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 text-sm mb-1">Réhabilitation psychosociale</h5>
                <div className="grid md:grid-cols-2 gap-2">
                  <ul className="text-xs text-green-800 space-y-1">
                    <li>• Entraînement aux compétences sociales</li>
                    <li>• Réhabilitation cognitive</li>
                    <li>• Thérapie cognitivo-comportementale</li>
                  </ul>
                  <ul className="text-xs text-green-800 space-y-1">
                    <li>• Soutien scolaire adapté</li>
                    <li>• Préparation professionnelle</li>
                    <li>• Activités de groupe</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <h5 className="font-medium text-purple-900 text-sm mb-1">Soutien familial</h5>
                <ul className="text-xs text-purple-800 space-y-1">
                  <li>• Psychoéducation des familles</li>
                  <li>• Groupes de soutien</li>
                  <li>• Gestion du stress familial</li>
                  <li>• Communication thérapeutique</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Pronostic et évolution :</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 text-sm mb-1">Facteurs de bon pronostic :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xs">
                    <li>Début aigu</li>
                    <li>Bon fonctionnement prémorbide</li>
                    <li>Symptômes positifs prédominants</li>
                    <li>Soutien familial solide</li>
                    <li>Adhésion au traitement</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 text-sm mb-1">Facteurs de mauvais pronostic :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xs">
                    <li>Début insidieux</li>
                    <li>Symptômes négatifs prédominants</li>
                    <li>Début très précoce</li>
                    <li>Usage de substances</li>
                    <li>Isolement social</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PsychoticDisordersSection;