
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Function to get event registration/information links
const getEventLink = (eventId: string): string => {
  const eventLinks: { [key: string]: string } = {
    'journee-mondiale-autisme': 'https://www.craif.org/craif-journee-mondiale-de-sensibilisation-lautisme-2025-le-calendrier-des-evenements-5090',
    'grand-salon-autisme': 'https://www.grand-salon-autisme.fr/',
    'congres-autisme-france': 'https://www.autisme-france.fr/',
    'congres-occitadys': 'https://www.ffdys.com/',
    'evenements-craif': 'https://www.craif.org/craif-journee-mondiale-de-sensibilisation-lautisme-2025-le-calendrier-des-evenements-5090',
    'maison-autisme-events': 'https://www.autismeetsommeil.fr/journee-mondiale-autisme/',
    'challenge-coeurs-bleus': 'https://www.craif.org/craif-journee-mondiale-de-sensibilisation-lautisme-2025-le-calendrier-des-evenements-5090',
    'projection-musicalement-autre': 'https://www.craif.org/craif-journee-mondiale-de-sensibilisation-lautisme-2025-le-calendrier-des-evenements-5090'
  };
  
  return eventLinks[eventId] || '#';
};

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  organizer: string;
}

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  const defaultEvents: Event[] = [
    {
      id: 'grand-salon-autisme',
      title: 'Grand Salon de l\'Autisme 2025',
      date: '5 & 6 Avril 2025',
      location: '100% en ligne',
      description: 'Événement 100% en ligne pour professionnels et aidants. Replay disponible jusqu\'au 31 mai 2025. Déjà 4 éditions et plus de 5000 participants.',
      type: 'Salon',
      organizer: 'Ideereka'
    },
    {
      id: 'journee-mondiale-autisme',
      title: 'Journée Mondiale de Sensibilisation à l\'Autisme',
      date: '2 Avril 2025',
      location: 'Île-de-France & France',
      description: 'Thème 2025 : "Promouvoir la neurodiversité et les ODD". Nombreux événements en Île-de-France : tables rondes, projections, marches solidaires.',
      type: 'Sensibilisation',
      organizer: 'CRAIF & Associations'
    },
    {
      id: 'challenge-coeurs-bleus',
      title: 'Challenge des Cœurs Bleus',
      date: '22 Mars - 2 Avril 2025',
      location: 'National (réseaux sociaux)',
      description: 'Challenge créatif : créer et partager des cœurs bleus avec #challengeautisme et #autismeaujourd\'hui. Kit de participation disponible.',
      type: 'Challenge',
      organizer: 'Autisme Aujourd\'hui'
    },
    {
      id: 'projection-musicalement-autre',
      title: 'Projection "Musicalement Autre"',
      date: '28 Mars 2025 - 20h30',
      location: 'Cinéma Le Calypso, Vitry-Châtillon (91)',
      description: 'Film de Nicolas Moissakis sur Jean-Pierre Dussert, autiste et virtuose du piano. Tarif : 4,60€. Réservation : 01 69 24 41 10.',
      type: 'Projection',
      organizer: 'Cinéma Le Calypso'
    },
    {
      id: 'evenements-craif',
      title: 'Table Ronde Inclusion - Mitry-Mory',
      date: '2 Avril 2025 - 15h',
      location: 'Salle Jean Vilar, Mitry-Mory (77)',
      description: 'Table ronde sur l\'inclusion des enfants porteurs de handicap avec experts, élus et acteurs associatifs. Inscription gratuite en ligne.',
      type: 'Table ronde',
      organizer: 'Tout Pour l\'Inclusion'
    },
    {
      id: 'maison-autisme-events',
      title: 'Journée Spéciale ASDAA',
      date: '2 Avril 2025 - 14h-20h',
      location: 'Lésigny (77)',
      description: 'Rencontres avec familles et professionnels, informations sur l\'autisme, expositions, animations, tombola et buffet.',
      type: 'Journée spéciale',
      organizer: 'ASDAA (Sortir Divya)'
    },
    {
      id: 'congres-autisme-france',
      title: 'Congrès Autisme France 2025',
      date: 'Avril 2025 (date à confirmer)',
      location: 'À confirmer',
      description: 'Congrès annuel sur le thème "Autisme et troubles associés". Informations détaillées à venir sur le site d\'Autisme France.',
      type: 'Congrès',
      organizer: 'Autisme France'
    },
    {
      id: 'congres-occitadys',
      title: 'Congrès FFDys - Troubles DYS',
      date: 'Mai 2025 (dates à confirmer)',
      location: 'France',
      description: 'Congrès de la Fédération Française des DYS avec webinaires et événements sur les troubles DYS. Informations sur ffdys.com.',
      type: 'Congrès',
      organizer: 'Fédération Française des DYS'
    }
  ];

  const eventsToDisplay = events.length > 0 ? events : defaultEvents;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {eventsToDisplay.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.type}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.location}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{event.organizer}</span>
              </div>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a 
                    href={getEventLink(event.id)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Plus d'informations
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default EventList;
