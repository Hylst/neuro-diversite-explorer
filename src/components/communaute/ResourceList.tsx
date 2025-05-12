
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Resource {
  id: number;
  name: string;
  type: string;
  region: string;
  description: string;
  website: string;
  rating: number;
  reviews: number;
  address?: string;
  phone?: string;
  email?: string;
}

interface ResourceListProps {
  resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Professionnel':
        return <Building className="h-5 w-5 text-neuro-blue" />;
      case 'Association':
        return <Users className="h-5 w-5 text-neuro-green" />;
      case 'Communauté':
        return <Users className="h-5 w-5 text-neuro-purple" />;
      case 'Service en ligne':
        return <Globe className="h-5 w-5 text-neuro-orange" />;
      default:
        return <Building className="h-5 w-5 text-neuro-blue" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Professionnel':
        return 'blue';
      case 'Association':
        return 'green';
      case 'Communauté':
        return 'purple';
      case 'Service en ligne':
        return 'orange';
      default:
        return 'default';
    }
  };

  const handleVisitWebsite = (website: string) => {
    window.open(website, '_blank');
  };

  return (
    <div className="space-y-4 mt-6">
      {resources.length === 0 ? (
        <div className="text-center py-12 bg-muted rounded-lg">
          <p className="text-muted-foreground">Aucune ressource ne correspond à vos critères.</p>
          <Button 
            variant="link" 
            className="mt-2"
            onClick={() => window.dispatchEvent(new CustomEvent('resetFilters'))}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-2">{resources.length} ressources trouvées</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map(resource => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-secondary">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{resource.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          className={`bg-${getBadgeVariant(resource.type)}-100 text-${getBadgeVariant(resource.type)}-800 border-${getBadgeVariant(resource.type)}-200`}
                          variant="outline"
                        >
                          {resource.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.region}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  
                  {resource.address && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{resource.address}</span>
                    </div>
                  )}
                  
                  {resource.phone && (
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{resource.phone}</span>
                    </div>
                  )}
                  
                  {resource.email && (
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${resource.email}`} className="hover:underline">{resource.email}</a>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-muted-foreground">
                        ({resource.reviews} avis)
                      </span>
                    </div>
                    
                    <Button
                      size="sm"
                      onClick={() => {
                        try {
                          handleVisitWebsite(resource.website);
                        } catch (error) {
                          toast.error("Le lien semble être invalide. Veuillez vérifier l'URL.");
                        }
                      }}
                    >
                      Visiter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResourceList;
