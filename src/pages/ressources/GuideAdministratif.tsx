
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, FileDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { toast } from 'sonner';

const GuideAdministratif = () => {
  // Fonction pour gérer les téléchargements de documents non disponibles
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.info("Ce document sera disponible prochainement.", {
      description: "Nous travaillons actuellement sur la mise à disposition de ces ressources.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ressources">Ressources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Guide des démarches administratives</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Guide des démarches administratives</h1>
          <p className="text-muted-foreground">
            Mis à jour en avril 2025 - Ce guide pratique vous aide à naviguer à travers les procédures administratives pour obtenir des aménagements scolaires et professionnels adaptés aux personnes neurodivergentes.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold mb-4">Reconnaissances administratives</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">MDPH (Maison Départementale des Personnes Handicapées)</h3>
                    <p className="text-sm text-muted-foreground">La MDPH est le point central pour toutes les démarches liées au handicap. Elle évalue les besoins et attribue des droits comme la RQTH, l'AAH, et les orientations scolaires ou professionnelles adaptées.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">RQTH (Reconnaissance de la Qualité de Travailleur Handicapé)</h3>
                    <p className="text-sm text-muted-foreground">Permet d'accéder à des mesures d'aide à l'emploi et à des aménagements de poste de travail. La nouvelle procédure simplifiée de 2025 facilite son renouvellement.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">AAH (Allocation aux Adultes Handicapés)</h3>
                    <p className="text-sm text-muted-foreground">Garantit un revenu minimum aux personnes en situation de handicap. Depuis 2024, elle n'est plus conditionnée aux revenus du conjoint.</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Aménagements scolaires</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">PAP (Plan d'Accompagnement Personnalisé)</h3>
                    <p className="text-sm text-muted-foreground">Pour les troubles d'apprentissage sans MDPH. Il est mis en place par l'établissement sur demande des parents avec un certificat médical.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">PPS (Projet Personnalisé de Scolarisation)</h3>
                    <p className="text-sm text-muted-foreground">Pour les situations nécessitant des adaptations importantes. Il est élaboré par la MDPH et peut inclure des aides humaines, techniques ou des orientations spécifiques.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">AESH (Accompagnant d'Élèves en Situation de Handicap)</h3>
                    <p className="text-sm text-muted-foreground">Assistant qui aide l'élève dans sa scolarité quotidienne. Les nouvelles directives de 2025 améliorent leur formation sur les troubles neurodéveloppementaux.</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Procédures pour les aménagements professionnels</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Consultation médicale et diagnostic</h3>
                <p className="text-sm text-muted-foreground">Consultez un spécialiste (neuropsychologue, psychiatre, etc.) pour obtenir un diagnostic ou une attestation de vos troubles neurodéveloppementaux.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">2. Demande de RQTH</h3>
                <p className="text-sm text-muted-foreground">Téléchargez et complétez le formulaire MDPH (cerfa n°15692*01) avec le certificat médical (cerfa n°15695*01) et envoyez votre dossier à la MDPH de votre département.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">3. Médecine du travail</h3>
                <p className="text-sm text-muted-foreground">Prenez rendez-vous avec la médecine du travail pour discuter des aménagements nécessaires. Depuis 2025, les médecins du travail ont une formation spécifique sur les troubles neurodéveloppementaux.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">4. Communication avec l'employeur</h3>
                <p className="text-sm text-muted-foreground">Informez votre employeur de votre RQTH (pas obligatoire de révéler la nature du trouble). Le service RH et le médecin du travail peuvent vous aider à mettre en place les aménagements.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">5. Demande d'aides financières</h3>
                <p className="text-sm text-muted-foreground">L'AGEFIPH (secteur privé) ou le FIPHFP (secteur public) peuvent financer les aménagements de poste, les formations spécifiques, etc.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Documents utiles et formulaires</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Modèle de lettre pour demande de PAP</h3>
                  <p className="text-sm text-muted-foreground mb-2">Lettre-type à adapter et adresser au directeur d'établissement</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Ce document sera disponible prochainement.", {
                        description: "Nous travaillons actuellement sur la mise à disposition de ces ressources.",
                        duration: 5000,
                      });
                    }}
                  >
                    Télécharger (.docx)
                  </Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Formulaire MDPH 2025</h3>
                  <p className="text-sm text-muted-foreground mb-2">Version simplifiée du Cerfa n°15692*01</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a 
                      href="https://www.service-public.fr/particuliers/vosdroits/R19993" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Télécharger (.pdf)
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Guide RQTH étape par étape</h3>
                  <p className="text-sm text-muted-foreground mb-2">Explications détaillées avec exemples</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Ce document sera disponible prochainement.", {
                        description: "Nous travaillons actuellement sur la mise à disposition de ces ressources.",
                        duration: 5000,
                      });
                    }}
                  >
                    Télécharger (.pdf)
                  </Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Checklist des aménagements professionnels</h3>
                  <p className="text-sm text-muted-foreground mb-2">Adaptée par type de trouble neurodéveloppemental</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Ce document sera disponible prochainement.", {
                        description: "Nous travaillons actuellement sur la mise à disposition de ces ressources.",
                        duration: 5000,
                      });
                    }}
                  >
                    Télécharger (.pdf)
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Liens et ressources externes</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <a href="https://www.monparcourshandicap.gouv.fr/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-lg flex items-start gap-3 hover:bg-muted/50 transition-colors">
                <ExternalLink className="h-5 w-5 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Mon Parcours Handicap</h3>
                  <p className="text-sm text-muted-foreground">Plateforme officielle d'information, d'orientation et de services pour les personnes en situation de handicap</p>
                </div>
              </a>
              
              <a href="https://handicap.gouv.fr/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-lg flex items-start gap-3 hover:bg-muted/50 transition-colors">
                <ExternalLink className="h-5 w-5 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Secrétariat d'État chargé des Personnes handicapées</h3>
                  <p className="text-sm text-muted-foreground">Informations officielles sur les politiques et droits</p>
                </div>
              </a>
              
              <a href="https://www.agefiph.fr/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-lg flex items-start gap-3 hover:bg-muted/50 transition-colors">
                <ExternalLink className="h-5 w-5 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">AGEFIPH</h3>
                  <p className="text-sm text-muted-foreground">Association de Gestion du Fonds pour l'Insertion Professionnelle des Personnes Handicapées</p>
                </div>
              </a>
              
              <a href="https://www.service-public.fr/particuliers/vosdroits/N12230" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-lg flex items-start gap-3 hover:bg-muted/50 transition-colors">
                <ExternalLink className="h-5 w-5 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Service-Public.fr</h3>
                  <p className="text-sm text-muted-foreground">Informations officielles sur les droits des personnes en situation de handicap</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>    </div>
  );
};

export default GuideAdministratif;
