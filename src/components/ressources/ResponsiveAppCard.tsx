import React from 'react';
import { Star, ExternalLink, DownloadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBreakpoint } from '@/hooks/use-breakpoint';

interface AppCardProps {
  title: string;
  description: string;
  rating: number;
  subtitle: string;
  content: string;
  platforms: string[];
  licenseType: string;
  lastUpdate: string;
  websiteUrl: string;
  downloadUrl?: string;
  bgColorClass: string;
}

/**
 * Carte d'application responsive optimisée pour les appareils mobiles
 * Adapte automatiquement la mise en page en fonction de la taille de l'écran
 */
export function ResponsiveAppCard({
  title,
  description,
  rating,
  subtitle,
  content,
  platforms,
  licenseType,
  lastUpdate,
  websiteUrl,
  downloadUrl,
  bgColorClass
}: AppCardProps) {
  const isMobile = useBreakpoint('sm');
  
  return (
    <div className="border rounded-lg overflow-hidden h-full flex flex-col">
      <div className={`${bgColorClass} p-4`}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          <div className="flex shrink-0 ml-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4 text-yellow-400" 
                fill={i < rating ? "currentColor" : "none"} 
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{subtitle}</p>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-sm mb-4 line-clamp-3">{content}</p>
        
        <div className="space-y-2 mb-4 mt-auto">
          <div className="flex flex-wrap items-center gap-2">
            {platforms.map((platform, index) => (
              <span 
                key={index} 
                className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full"
              >
                {platform}
              </span>
            ))}
            <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              {licenseType}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">Dernière mise à jour: {lastUpdate}</p>
        </div>
        
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-2`}>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex items-center gap-1 w-full justify-center" 
            asChild
          >
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Site web</span>
            </a>
          </Button>
          
          {downloadUrl && (
            <Button 
              size="sm" 
              className="flex items-center gap-1 w-full justify-center" 
              asChild
            >
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                <DownloadCloud className="h-3.5 w-3.5" />
                <span>Télécharger</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}