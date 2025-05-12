import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, Scale, Gavel, Copyright, Phone, BookOpen, Shield } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : 1 avril 2025
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Éditeur du site</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>NeuroDiversité Explorer</strong><br />
                  Site personnel édité par Geoffroy Streit<br />
                  Résidant à Strasbourg, France<br />
                  Email : <a href="mailto:geoffroy.streit@gmail.com" className="text-neuro-purple hover:underline">
                    geoffroy.streit@gmail.com
                  </a>
                </p>
                <p>
                  Directeur de la publication : Geoffroy Streit
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Hébergement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Ce site est hébergé par :<br />
                  <strong>LWS</strong><br />
                  neuro.divers.hylst.fr
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Copyright className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Propriété intellectuelle</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, structure, base de données, etc.) 
                  est la propriété exclusive de Geoffroy Streit ou de ses partenaires et est protégé par les lois françaises 
                  et internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie 
                  des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable 
                  écrite.
                </p>
                <p>
                  Toutefois, les informations et ressources liées à la neurodiversité sont partagées dans un esprit de 
                  sensibilisation et d'éducation. La reproduction d'extraits à des fins non commerciales est autorisée, 
                  sous réserve de mentionner clairement la source (NeuroDiversité Explorer) avec un lien vers notre site.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Protection des données personnelles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général 
                  sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement 
                  et de portabilité de vos données, ainsi que d'un droit d'opposition et de limitation du traitement.
                </p>
                <p className="mt-4">
                  Pour plus d'informations sur la façon dont nous collectons, utilisons et protégeons vos données personnelles, 
                  veuillez consulter notre <a href="/politique-confidentialite" className="text-neuro-purple hover:underline">Politique de confidentialité</a>.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Limitation de responsabilité</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les informations contenues sur ce site sont fournies à titre informatif uniquement. Bien que nous nous efforcions 
                  de fournir des informations exactes et à jour, NeuroDiversité Explorer ne garantit pas l'exactitude, l'exhaustivité, 
                  l'actualité ou la fiabilité de tout contenu disponible sur ce site.
                </p>
                <p>
                  <strong>Avis important :</strong> Les informations présentées sur ce site ne constituent en aucun cas un avis médical 
                  ou psychologique professionnel. Elles ne peuvent en aucun cas remplacer une consultation avec un professionnel de santé 
                  qualifié. Nous vous encourageons vivement à consulter des professionnels de santé pour tout diagnostic ou traitement.
                </p>
                <p>
                  NeuroDiversité Explorer décline toute responsabilité quant aux dommages directs ou indirects pouvant résulter de 
                  l'accès, de l'utilisation ou de l'interprétation des informations disponibles sur ce site.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-neuro-purple" />
                  <CardTitle className="text-xl">Liens hypertextes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Ce site peut contenir des liens vers d'autres sites internet ou ressources. Ces liens sont fournis à titre informatif 
                  et pour votre commodité. NeuroDiversité Explorer n'a pas de contrôle sur le contenu de ces sites et n'assume aucune 
                  responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou leurs conditions d'utilisation.
                </p>
                <p>
                  La présence de liens vers ces sites ne constitue pas une approbation ou une validation de leur contenu.
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
                  Pour toute question concernant ces mentions légales, veuillez nous contacter à l'adresse suivante :
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

export default MentionsLegales;
