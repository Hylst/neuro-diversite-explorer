
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LegalResources = () => {
  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Droits fondamentaux</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Loi du 11 février 2005 pour l'égalité des droits et des chances</li>
            <li>Convention internationale relative aux droits des personnes handicapées (ONU)</li>
            <li>Directive européenne 2000/78/CE sur l'égalité de traitement en matière d'emploi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Textes réglementaires spécifiques</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Circulaire n°2015-016 sur le PAP (Plan d'Accompagnement Personnalisé)</li>
            <li>Décret n°2014-1485 sur les aménagements d'examens</li>
            <li>Articles L.114 et suivants du Code de l'action sociale et des familles</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Documents et formulaires</h3>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-neuro-purple" />
              <div>
                <h4 className="font-medium">Guide des droits MDPH 2025</h4>
                <p className="text-sm text-muted-foreground">Guide complet des droits et démarches</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Télécharger (PDF)
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-neuro-purple" />
              <div>
                <h4 className="font-medium">Modèles de recours</h4>
                <p className="text-sm text-muted-foreground">Exemples de lettres pour contester une décision</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Télécharger (DOC)
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Sites de référence</h3>
          <div className="space-y-3">
            <a href="https://www.service-public.fr/particuliers/vosdroits/N12230" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-neuro-purple hover:underline">
              <ExternalLink className="h-4 w-4" />
              Service Public - Droits des personnes handicapées
            </a>
            <a href="https://www.monparcourshandicap.gouv.fr/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-neuro-purple hover:underline">
              <ExternalLink className="h-4 w-4" />
              Mon Parcours Handicap
            </a>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default LegalResources;
