import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Brain, Heart, Shield } from 'lucide-react';

/**
 * Component for PTSD and Acute Stress Disorders section
 * Provides detailed information about trauma-related disorders in children and adolescents
 */
const PTSDSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-neuro-red" />
            Troubles de Stress Post-Traumatique et Aigu
          </CardTitle>
          <CardDescription>
            Réactions intenses et dysfonctionnelles après un événement traumatisant accablant
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Definition */}
          <div>
            <h4 className="font-medium mb-3">Définition :</h4>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-800 mb-2">
                Les troubles de stress sont des réactions pour surmonter les souvenirs récurrents et intrusifs 
                d'un événement traumatique accablant ainsi que des émotions réprimées et une tension et une vigilance accrues.
              </p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• <strong>État de stress aigu :</strong> débute immédiatement après l'événement, dure 3 jours à 1 mois</li>
                <li>• <strong>TSPT :</strong> peut faire suite à un état aigu ou se développer jusqu'à 6 mois après l'événement</li>
                <li>• <strong>Prévalence :</strong> affecte près de 9% des personnes à un moment donné, y compris l'enfance</li>
              </ul>
            </div>
          </div>

          {/* Traumatic Events */}
          <div>
            <h4 className="font-medium mb-3">Événements traumatiques déclencheurs :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h5 className="font-medium text-orange-900 mb-2">Chez les jeunes enfants :</h5>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Violence domestique (cause la plus courante)</li>
                  <li>• Abus physiques ou sexuels</li>
                  <li>• Accidents graves</li>
                  <li>• Catastrophes naturelles</li>
                  <li>• Décès traumatique d'un proche</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Chez les adolescents :</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Fusillades à l'école</li>
                  <li>• Accidents de voiture</li>
                  <li>• Agressions sexuelles</li>
                  <li>• Attaques d'animaux</li>
                  <li>• Exposition médiatique à des traumatismes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Symptoms Categories */}
          <div>
            <h4 className="font-medium mb-3">Catégories de symptômes :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-900 text-sm mb-1">1. Symptômes d'intrusion</h5>
                  <ul className="text-xs text-purple-800 space-y-1">
                    <li>• Flashbacks (revivre l'événement)</li>
                    <li>• Cauchemars récurrents</li>
                    <li>• Souvenirs involontaires et intrusifs</li>
                    <li>• Détresse intense aux rappels</li>
                    <li>• Jeu répétitif de l'événement (jeunes enfants)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-900 text-sm mb-1">2. Évitement</h5>
                  <ul className="text-xs text-green-800 space-y-1">
                    <li>• Évitement des pensées/sentiments liés au trauma</li>
                    <li>• Évitement des lieux, personnes, activités</li>
                    <li>• Tentatives d'oublier l'événement</li>
                    <li>• Refus de parler du traumatisme</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <h5 className="font-medium text-yellow-900 text-sm mb-1">3. Altérations cognitives et émotionnelles</h5>
                  <ul className="text-xs text-yellow-800 space-y-1">
                    <li>• Amnésie dissociative (oubli de parties importantes)</li>
                    <li>• Sentiments de culpabilité ou de responsabilité</li>
                    <li>• Détachement émotionnel</li>
                    <li>• Désintérêt pour les activités habituelles</li>
                    <li>• Peur de mourir jeune</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <h5 className="font-medium text-red-900 text-sm mb-1">4. Hypervigilance et réactivité</h5>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• État de qui-vive permanent</li>
                    <li>• Réactions de sursaut exagérées</li>
                    <li>• Troubles du sommeil</li>
                    <li>• Difficultés de concentration</li>
                    <li>• Irritabilité et colères</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Age-specific manifestations */}
          <div>
            <h4 className="font-medium mb-3">Manifestations selon l'âge :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Jeunes enfants (3-6 ans)</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Jeu répétitif reproduisant le traumatisme</li>
                  <li>• Régression développementale</li>
                  <li>• Peurs nouvelles ou accrues</li>
                  <li>• Troubles du sommeil et cauchemars</li>
                  <li>• Comportements d'attachement excessif</li>
                  <li>• Symptômes somatiques (maux de ventre, maux de tête)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Enfants d'âge scolaire (7-11 ans)</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Flashbacks et souvenirs intrusifs</li>
                  <li>• Évitement des rappels du traumatisme</li>
                  <li>• Difficultés scolaires et de concentration</li>
                  <li>• Retrait social</li>
                  <li>• Pensées répétitives sur l'événement</li>
                  <li>• Culpabilité du survivant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div>
            <h4 className="font-medium mb-3">Facteurs de risque :</h4>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• <strong>Gravité de l'événement traumatique</strong></li>
                <li>• <strong>Blessures physiques</strong> pendant l'événement</li>
                <li>• <strong>Tempérament de l'enfant</strong> (sensibilité, anxiété préexistante)</li>
                <li>• <strong>Statut socioéconomique</strong> défavorisé</li>
                <li>• <strong>Adversité antérieure</strong> (abus, négligence)</li>
                <li>• <strong>Dysfonctionnement familial</strong></li>
                <li>• <strong>Antécédents familiaux</strong> de troubles mentaux</li>
                <li>• <strong>Absence de soutien</strong> familial et social</li>
              </ul>
            </div>
          </div>

          {/* Treatment */}
          <div>
            <h4 className="font-medium mb-3">Traitement :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Thérapie axée sur le traumatisme</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Thérapie cognitivo-comportementale (TCC)</li>
                  <li>• Thérapie d'exposition graduelle</li>
                  <li>• EMDR (Eye Movement Desensitization and Reprocessing)</li>
                  <li>• Thérapie de jeu pour les jeunes enfants</li>
                  <li>• Thérapie familiale</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Approches complémentaires</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Stabilisation et sécurité d'abord</li>
                  <li>• Psychoéducation pour l'enfant et la famille</li>
                  <li>• Techniques de relaxation et de gestion du stress</li>
                  <li>• Médicaments (ISRS) si nécessaire</li>
                  <li>• Soutien scolaire et accommodations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-red-100 border border-red-300 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-red-900 mb-1">Urgence médicale</h5>
                <p className="text-sm text-red-800">
                  Tout enfant présentant des symptômes de TSPT, particulièrement avec des pensées suicidaires 
                  ou des comportements d'automutilation, nécessite une évaluation immédiate par un professionnel 
                  de la santé mentale spécialisé en traumatologie pédiatrique.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PTSDSection;