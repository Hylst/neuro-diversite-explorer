
import React, { useState } from 'react';
import EventTypeFilter from './EventTypeFilter';
import EventList from './EventList';
import EventSubmissionForm from './EventSubmissionForm';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  organizer: string;
}

const EventsTab = () => {
  // Real events for 2025 - using empty array to let EventList use its defaultEvents
  const [events] = useState<Event[]>([]);

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
