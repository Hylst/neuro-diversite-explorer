
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { CheckCheck, ChevronDown, ChevronUp, Shield } from 'lucide-react';

const ForumRules = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 rounded-lg border">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Règles de la communauté</h3>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span className="sr-only">{isOpen ? 'Réduire' : 'Développer'}</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="px-4 pb-4">
            <div className="bg-muted p-3 rounded-md mb-3">
              <p className="text-sm font-medium">Notre forum est un espace bienveillant, respectueux et constructif pour échanger autour de la neurodiversité.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <CheckCheck className="h-4 w-4 mr-1 text-primary" /> Respect et bienveillance
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Respectez les autres membres et leurs opinions</li>
                  <li>Évitez les propos discriminatoires ou offensants</li>
                  <li>Soyez bienveillant envers les parcours différents</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <CheckCheck className="h-4 w-4 mr-1 text-primary" /> Informations partagées
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Ne partagez pas d'informations médicales non vérifiées</li>
                  <li>Précisez quand vous partagez une expérience personnelle</li>
                  <li>Citez vos sources si vous partagez des données</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <CheckCheck className="h-4 w-4 mr-1 text-primary" /> Vie privée
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Respectez la vie privée des autres</li>
                  <li>Ne partagez pas d'informations personnelles sans consentement</li>
                  <li>Protégez votre propre vie privée</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <CheckCheck className="h-4 w-4 mr-1 text-primary" /> Communication
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Évitez le harcèlement et les attaques personnelles</li>
                  <li>Utilisez un langage approprié et respectueux</li>
                  <li>Gardez un ton constructif même en cas de désaccord</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-muted-foreground border-t pt-3">
              <p>Les modérateurs se réservent le droit de supprimer tout contenu ne respectant pas ces règles et de suspendre l'accès au forum si nécessaire.</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ForumRules;
