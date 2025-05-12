
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Info, Eye, FileClock, FileLock2, UserRound, FileWarning, Phone } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : 1 avril 2025
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Introduction</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  La protection de vos données personnelles est une priorité pour NeuroDiversité Explorer. 
                  Cette politique de confidentialité a pour but de vous informer de manière claire et transparente 
                  sur la façon dont nous collectons, utilisons et protégeons vos informations personnelles 
                  lorsque vous utilisez notre site web et nos services.
                </p>
                <p>
                  En utilisant notre site, vous acceptez les pratiques décrites dans cette politique. 
                  Nous vous invitons à la lire attentivement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Données collectées</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Nous collectons les types d'informations suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Informations d'identification :</span> Nom, prénom, adresse email 
                    lorsque vous créez un compte ou nous contactez.
                  </li>
                  <li>
                    <span className="font-medium">Informations de navigation :</span> Adresse IP, type de navigateur, 
                    pages visitées, temps passé sur le site, via des cookies et technologies similaires.
                  </li>
                  <li>
                    <span className="font-medium">Données d'évaluation :</span> Réponses fournies lors des auto-évaluations 
                    (aucune donnée médicale sensible n'est collectée sans votre consentement explicite).
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Utilisation des données</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vous fournir les informations et ressources demandées</li>
                  <li>Personnaliser votre expérience sur notre site</li>
                  <li>Améliorer continuellement notre site et nos services</li>
                  <li>Vous contacter en réponse à vos demandes</li>
                  <li>Vous envoyer des newsletters si vous y avez consenti</li>
                </ul>
                <p className="mt-4">
                  Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers, 
                  sauf si cela est nécessaire pour fournir un service demandé ou si nous y sommes légalement obligés.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileClock className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Cookies et technologies similaires</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Notre site utilise des cookies et technologies similaires pour améliorer votre expérience, 
                  analyser l'utilisation du site et personnaliser le contenu. Vous pouvez configurer votre 
                  navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient 
                  alors ne pas fonctionner correctement.
                </p>
                <p>
                  Types de cookies utilisés :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cookies essentiels (nécessaires au fonctionnement du site)</li>
                  <li>Cookies analytiques (pour comprendre comment les utilisateurs naviguent sur le site)</li>
                  <li>Cookies de fonctionnalité (pour mémoriser vos préférences)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileLock2 className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Sécurité des données</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations 
                  personnelles contre tout accès, altération, divulgation ou destruction non autorisés. 
                  Ces mesures incluent le chiffrement des données, l'accès restreint aux informations personnelles, 
                  et des examens réguliers de nos pratiques de collecte, stockage et traitement.
                </p>
                <p>
                  Malgré nos efforts, aucune méthode de transmission sur Internet ou de stockage électronique 
                  n'est totalement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <UserRound className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Vos droits</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée dans la section "Contact".
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileWarning className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Modifications de la politique de confidentialité</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Toute modification sera publiée sur cette page avec la date de mise à jour. 
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé 
                  de la façon dont nous protégeons vos informations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Contact</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                  veuillez nous contacter à l'adresse suivante :
                </p>
                <p className="mt-4">
                  <strong>Geoffroy Streit</strong><br />
                  Strasbourg<br />
                  Email : <a href="mailto:geoffroy.streit@gmail.com" className="text-neuro-purple hover:underline">
                    geoffroy.streit@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>    </div>
  );
};

export default PolitiqueConfidentialite;
