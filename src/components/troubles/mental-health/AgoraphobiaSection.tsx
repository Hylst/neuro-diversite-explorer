import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertTriangle, Heart } from 'lucide-react';

/**
 * Component for Agoraphobia section
 * Provides detailed information about agoraphobia in children and adolescents
 */
const AgoraphobiaSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-blue">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5 text-neuro-blue" />
            Agoraphobie chez l'enfant et l'adolescent
          </CardTitle>
          <CardDescription>
            Peur intense des espaces ouverts ou des situations où l'évasion pourrait être difficile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Definition */}
          <div>
            <h4 className="font-medium mb-3">Définition :</h4>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 mb-2">
                L'agoraphobie est caractérisée par une peur intense et persistante des espaces ouverts, 
                des foules, ou des situations où l'évasion pourrait être difficile ou embarrassante, 
                ou où l'aide pourrait ne pas être disponible en cas d'attaque de panique.
              </p>
              <p className="text-sm text-blue-800">
                Chez les enfants et adolescents, cette peur peut se manifester différemment que chez les adultes, 
                souvent liée à la séparation des figures d'attachement.
              </p>
            </div>
          </div>

          {/* Situations feared */}
          <div>
            <h4 className="font-medium mb-3">Situations redoutées typiques :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h5 className="font-medium text-yellow-900 mb-2">Espaces publics :</h5>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Centres commerciaux</li>
                  <li>• Supermarchés</li>
                  <li>• Cinémas, théâtres</li>
                  <li>• Restaurants</li>
                  <li>• Parcs et espaces ouverts</li>
                  <li>• Stades et événements sportifs</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h5 className="font-medium text-orange-900 mb-2">Transports et déplacements :</h5>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Transports en commun (bus, métro, train)</li>
                  <li>• Voitures (en tant que passager)</li>
                  <li>• Avions</li>
                  <li>• Ponts et tunnels</li>
                  <li>• Ascenseurs</li>
                  <li>• Files d'attente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age-specific manifestations */}
          <div>
            <h4 className="font-medium mb-3">Manifestations selon l'âge :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Enfants (6-12 ans)</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Refus de sortir de la maison sans les parents</li>
                  <li>• Crises de panique dans les lieux publics</li>
                  <li>• Besoin constant de connaître les sorties</li>
                  <li>• Évitement des activités scolaires (sorties, sport)</li>
                  <li>• Plaintes somatiques (maux de ventre, nausées)</li>
                  <li>• Comportements d'accrochage aux parents</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h5 className="font-medium text-purple-900 mb-2">Adolescents (13+ ans)</h5>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Évitement des activités sociales</li>
                  <li>• Refus de prendre les transports en commun</li>
                  <li>• Limitation des sorties avec les amis</li>
                  <li>• Anticipation anxieuse des situations redoutées</li>
                  <li>• Développement de stratégies d'évitement</li>
                  <li>• Impact sur l'autonomie et l'indépendance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Physical symptoms */}
          <div>
            <h4 className="font-medium mb-3">Symptômes physiques associés :</h4>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-red-900 text-sm mb-1">Cardiovasculaires :</h5>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• Palpitations</li>
                    <li>• Tachycardie</li>
                    <li>• Douleurs thoraciques</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900 text-sm mb-1">Respiratoires :</h5>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• Essoufflement</li>
                    <li>• Sensation d'étouffement</li>
                    <li>• Hyperventilation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900 text-sm mb-1">Autres :</h5>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• Tremblements</li>
                    <li>• Sueurs</li>
                    <li>• Nausées</li>
                    <li>• Vertiges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Relationship with panic disorder */}
          <div>
            <h4 className="font-medium mb-3">Relation avec le trouble panique :</h4>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-800 mb-2">
                L'agoraphobie peut se développer :
              </p>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• <strong>Avec trouble panique :</strong> peur des attaques de panique dans certains lieux</li>
                <li>• <strong>Sans trouble panique :</strong> peur des situations elles-mêmes</li>
                <li>• <strong>Cercle vicieux :</strong> évitement → renforcement de la peur → plus d'évitement</li>
                <li>• <strong>Anticipation :</strong> anxiété avant même d'être confronté à la situation</li>
              </ul>
            </div>
          </div>

          {/* Impact on daily life */}
          <div>
            <h4 className="font-medium mb-3">Impact sur la vie quotidienne :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Scolaire :</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Absentéisme scolaire</li>
                  <li>• Évitement des activités extrascolaires</li>
                  <li>• Refus des sorties pédagogiques</li>
                  <li>• Difficultés dans les espaces communs (cantine, cour)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Social et familial :</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Isolement social progressif</li>
                  <li>• Dépendance excessive aux parents</li>
                  <li>• Limitation des activités familiales</li>
                  <li>• Retard dans le développement de l'autonomie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk factors */}
          <div>
            <h4 className="font-medium mb-3">Facteurs de risque :</h4>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• <strong>Tempérament anxieux</strong> ou inhibé</li>
                <li>• <strong>Antécédents familiaux</strong> de troubles anxieux</li>
                <li>• <strong>Expériences traumatisantes</strong> dans des espaces publics</li>
                <li>• <strong>Surprotection parentale</strong></li>
                <li>• <strong>Trouble d'anxiété de séparation</strong> préexistant</li>
                <li>• <strong>Sensibilité à l'anxiété</strong> (peur des sensations corporelles)</li>
              </ul>
            </div>
          </div>

          {/* Treatment */}
          <div>
            <h4 className="font-medium mb-3">Traitement :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Thérapie comportementale :</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>Exposition graduelle :</strong> confrontation progressive aux situations redoutées</li>
                  <li>• <strong>Désensibilisation systématique :</strong> relaxation + exposition imaginaire</li>
                  <li>• <strong>TCC :</strong> restructuration des pensées catastrophiques</li>
                  <li>• <strong>Techniques de relaxation :</strong> respiration, mindfulness</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Approche familiale :</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Psychoéducation :</strong> comprendre l'agoraphobie</li>
                  <li>• <strong>Éviter le renforcement :</strong> ne pas faciliter l'évitement</li>
                  <li>• <strong>Encouragement graduel :</strong> soutenir les progrès</li>
                  <li>• <strong>Modélisation :</strong> montrer l'exemple de comportements adaptatifs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Medication */}
          <div>
            <h4 className="font-medium mb-3">Traitement médicamenteux :</h4>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• <strong>ISRS :</strong> sertraline, fluoxétine (si symptômes sévères)</li>
                <li>• <strong>Surveillance étroite :</strong> risque d'idées suicidaires chez les jeunes</li>
                <li>• <strong>Éviter les benzodiazépines :</strong> risque de dépendance</li>
                <li>• <strong>Durée :</strong> traitement prolongé souvent nécessaire</li>
              </ul>
            </div>
          </div>

          {/* Prognosis */}
          <div>
            <h4 className="font-medium mb-3">Pronostic :</h4>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <ul className="text-sm text-green-800 space-y-1">
                <li>• <strong>Intervention précoce :</strong> améliore significativement le pronostic</li>
                <li>• <strong>Thérapie d'exposition :</strong> efficacité démontrée chez 70-80% des patients</li>
                <li>• <strong>Rechutes possibles :</strong> en période de stress</li>
                <li>• <strong>Évolution chronique :</strong> si non traitée, peut persister à l'âge adulte</li>
              </ul>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-red-100 border border-red-300 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-red-900 mb-1">Attention</h5>
                <p className="text-sm text-red-800">
                  L'agoraphobie non traitée peut conduire à un isolement social sévère et compromettre 
                  le développement normal de l'autonomie chez l'enfant et l'adolescent. Une prise en charge 
                  précoce est essentielle.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgoraphobiaSection;