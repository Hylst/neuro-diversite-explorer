
import React, { useState } from 'react';
import EventTypeFilter from './EventTypeFilter';
import EventList from './EventList';
import EventSubmissionForm from './EventSubmissionForm';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
}

const EventsTab = () => {
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Salon International de la Neurodiversité 2025",
      date: "20-21 avril 2025",
      location: "Paris",
      type: "Conférence",
      description: "Le plus grand événement européen dédié à la neurodiversité : conférences, ateliers et networking"
    },
    {
      id: 2,
      title: "NeuroPride Festival",
      date: "15 mai 2025",
      location: "Lyon",
      type: "Sensibilisation",
      description: "Festival célébrant la neurodiversité à travers l'art, la musique et les témoignages"
    },
    {
      id: 3,
      title: "Tech & Neurodiversité Summit",
      date: "7-8 juin 2025",
      location: "Toulouse",
      type: "Conférence",
      description: "Innovations technologiques et solutions numériques pour la neurodiversité"
    },
    {
      id: 4,
      title: "Café-rencontre Neurodivers",
      date: "Chaque premier samedi",
      location: "Bordeaux",
      type: "Rencontre",
      description: "Rencontres mensuelles dans un cadre bienveillant pour échanger et créer des liens"
    },
    {
      id: 5,
      title: "Formation Neurodiversité en Entreprise",
      date: "25-26 avril 2025",
      location: "Nantes",
      type: "Formation",
      description: "Programme de formation pour les entreprises sur l'inclusion des personnes neurodivergentes"
    },
    {
      id: 6,
      title: "Hackathon NeuroTech 2025",
      date: "17-19 mai 2025",
      location: "Marseille",
      type: "Atelier",
      description: "Développement collaboratif de solutions innovantes pour la neurodiversité"
    }
  ]);

  const [selectedEventType, setSelectedEventType] = useState("tous");

  const filteredEvents = events.filter(event => 
    selectedEventType === "tous" || event.type.toLowerCase() === selectedEventType.toLowerCase()
  );

  return (
    <div className="mb-8">
      <EventTypeFilter selectedType={selectedEventType} onSelectType={setSelectedEventType} />
      <EventList events={filteredEvents} />
      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4">
          Vous organisez un événement en lien avec la neurodiversité ?
        </p>
        <EventSubmissionForm />
      </div>
    </div>
  );
};

export default EventsTab;
